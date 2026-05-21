import { useState, useCallback } from 'react';
import portfolio from '../../data/portfolio.js';

const HF_API_URL = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3';

function buildSystemPrompt(data) {
  return `You are Rohith K's personal AI assistant embedded in his portfolio website.
Answer ONLY questions about Rohith. Be concise, professional, and factual.
Never make up information not listed below. If asked something outside this data, say:
"I can only answer questions about Rohith. Try asking about his skills, projects, or experience."

--- ROHITH'S DATA ---
Name: ${data.name}
Location: ${data.location}
Email: ${data.email}
Current: ${data.education[0].degree} at ${data.education[0].institution}, ${data.education[0].grade}
About: ${data.about}
Skills: ${Object.entries(data.skills).map(([cat, skills]) => `${cat}: ${skills.join(', ')}`).join(' | ')}
Projects: ${data.projects.map(p => `${p.name} (${p.date}): ${p.description}`).join(' | ')}
Experience: ${data.experience.map(e => `${e.title} at ${e.company} — ${e.summary}`).join(' | ')}
Achievements: ${data.achievements.join(' | ')}
Certifications: ${data.certifications.join(' | ')}
Coding: LeetCode ${data.coding.leetcode}, Skillrack ${data.coding.skillrack}
--- END DATA ---`;
}

function buildPrompt(systemPrompt, history, userMessage) {
  let prompt = `<s>[INST] ${systemPrompt}\n\nConversation so far:\n`;
  history.slice(-4).forEach(msg => {
    prompt += msg.role === 'user' ? `User: ${msg.content}\n` : `Assistant: ${msg.content}\n`;
  });
  prompt += `\nUser: ${userMessage} [/INST]`;
  return prompt;
}

export function useChatBot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Rohith's AI assistant. Ask me anything about his skills, projects, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const systemPrompt = buildSystemPrompt(portfolio);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg = { role: 'user', content: trimmed };
    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const prompt = buildPrompt(systemPrompt, messages, trimmed);
      const res = await fetch(HF_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 300,
            temperature: 0.4,
            return_full_text: false,
            stop: ["User:", "[INST]"]
          }
        })
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        if (res.status === 503) {
          setError('Model is loading, please try again in 20 seconds.');
        } else {
          setError(`API error: ${errData.error || res.statusText}`);
        }
        setMessages(prev => prev.slice(0, -1));
        setInput(trimmed);
        return;
      }

      const data = await res.json();
      const reply = Array.isArray(data)
        ? data[0]?.generated_text?.trim()
        : data?.generated_text?.trim();

      if (!reply) throw new Error('Empty response from model');

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setMessages(prev => prev.slice(0, -1));
      setInput(trimmed);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages, systemPrompt]);

  return { messages, input, setInput, loading, error, sendMessage };
}
