import React from 'react';

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[85%] px-4 py-3 font-mono text-[0.78rem] leading-[1.6] ${
        isUser 
          ? 'bg-white text-black' 
          : 'bg-[#111] text-white border border-[#1e1e1e]'
      }`}>
        {message.content}
      </div>
    </div>
  );
}
