import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ChatWindow from './ChatWindow';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[80px] right-6 z-50 origin-bottom-right"
          >
            <ChatWindow onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.8 
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-[52px] h-[52px] bg-[#111] border border-[#333] flex items-center justify-center hover:bg-[#1a1a1a] transition-colors"
      >
        <MessageCircle size={20} className="text-[#f0f0f0]" />
        
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        )}
      </motion.button>
    </>
  );
}
