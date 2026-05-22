import { useState, useCallback } from 'react';
import portfolio from '../../data/portfolio.js';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

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
      const apiMessages = [
        { role: 'system', content: systemPrompt },
        ...messages.slice(-4).map(m => ({ role: m.role, content: m.content })),
        { role: 'user', content: trimmed }
      ];

      const res = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: apiMessages,
          temperature: 0.4,
          max_tokens: 300
        })
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        setError(`API error: ${errData.error?.message || res.statusText}`);
        setMessages(prev => prev.slice(0, -1));
        setInput(trimmed);
        return;
      }

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content?.trim();

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
