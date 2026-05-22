import React from 'react';

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[85%] px-4 py-3 font-sans text-[0.82rem] leading-[1.6] rounded-xl ${
        isUser 
          ? 'bg-[#34d399] text-[#040d06] font-semibold rounded-br-sm' 
          : 'bg-[#09150e] text-gray-200 border border-[#122c1b] rounded-bl-sm'
      }`}>
        {message.content}
      </div>
    </div>
  );
}
