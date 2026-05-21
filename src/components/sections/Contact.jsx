import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import portfolio from '../../../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const containerParams = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto border-t border-border">
      <motion.h2 {...containerParams} className="font-syne font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-[-0.03em] mb-16 flex gap-6 items-baseline">
        <span className="font-mono text-[0.62rem] tracking-[0.2em] text-muted uppercase">04</span>
        CONTACT
      </motion.h2>

      <motion.div {...containerParams} transition={{ delay: 0.15 }} className="flex flex-col">
        <div className="font-syne font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.04em] leading-none mb-10">
          <div>LET'S WORK</div>
          <div>TOGETHER<span className="text-[#4a4a4a]">.</span></div>
        </div>

        <a href={`mailto:${portfolio.email}`} className="font-mono text-[1rem] hover:underline underline-offset-4 flex items-center gap-3 mb-16 w-fit text-white">
          <Mail size={20} />
          {portfolio.email}
        </a>

        <form onSubmit={handleSubmit} className="w-full max-w-[560px] flex flex-col gap-6 mb-24">
          <div className="flex flex-col">
            <label className="font-mono text-[0.65rem] uppercase text-muted mb-[0.4rem]">Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-[#111] border border-border text-[#f0f0f0] font-mono text-[0.82rem] p-[0.85rem_1rem] focus:outline-none focus:border-[#f0f0f0]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-mono text-[0.65rem] uppercase text-muted mb-[0.4rem]">Email</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-[#111] border border-border text-[#f0f0f0] font-mono text-[0.82rem] p-[0.85rem_1rem] focus:outline-none focus:border-[#f0f0f0]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-mono text-[0.65rem] uppercase text-muted mb-[0.4rem]">Message</label>
            <textarea 
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="bg-[#111] border border-border text-[#f0f0f0] font-mono text-[0.82rem] p-[0.85rem_1rem] focus:outline-none focus:border-[#f0f0f0] resize-y"
            />
          </div>
          <button type="submit" className="bg-white text-black border border-white font-mono text-[0.72rem] uppercase tracking-[0.12em] py-4 hover:bg-transparent hover:text-white transition-colors">
            Send Message
          </button>
        </form>

        <div className="border-t border-border pt-8 flex justify-between items-center">
          <div className="font-mono text-[0.65rem] text-muted">© 2026 Rohith K</div>
          <div className="flex gap-4 text-muted">
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={18} /></a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href={`mailto:${portfolio.email}`} className="hover:text-white transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
