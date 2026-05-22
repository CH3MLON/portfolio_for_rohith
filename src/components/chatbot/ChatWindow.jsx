import React, { useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { useChatBot } from './useChatBot';

export default function ChatWindow({ onClose }) {
  const { messages, input, setInput, loading, error, sendMessage } = useChatBot();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-[80px] right-6 w-[360px] h-[480px] bg-[#040d06] border border-[#122c1b] rounded-2xl flex flex-col z-50 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="h-14 border-b border-[#122c1b] flex items-center justify-between px-4 bg-[#09150e]">
        <div className="font-mono text-[0.68rem] uppercase text-[#34d399] tracking-[0.1em]">Ask about Rohith</div>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        {loading && (
          <div className="flex w-full mb-4 justify-start">
            <div className="bg-[#09150e] border border-[#122c1b] rounded-lg px-4 py-3 flex gap-1">
              <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce3 [animation-delay:-0.32s]" />
              <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce3 [animation-delay:-0.16s]" />
              <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce3" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-[#122c1b] bg-[#09150e] flex flex-col gap-2">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            rows={1}
            className="flex-1 bg-transparent text-white font-mono text-[0.82rem] p-2 focus:outline-none resize-none overflow-hidden min-h-[40px] max-h-[120px]"
          />
          <button 
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="p-2 text-[#34d399] disabled:text-gray-600 transition-colors hover:bg-[#122c1b] rounded-lg"
          >
            <Send size={18} />
          </button>
        </div>
        {error && (
          <div className="font-mono text-[0.62rem] text-red-400">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
