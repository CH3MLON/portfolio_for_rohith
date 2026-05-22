import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import portfolio from '../../data/portfolio';

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
      <motion.h2 {...containerParams} className="font-heading font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-[-0.03em] mb-16 flex gap-4 items-baseline">
        <span className="font-mono text-base font-bold text-[#34d399] mr-3">04 /</span>
        CONTACT
      </motion.h2>

      <motion.div {...containerParams} transition={{ delay: 0.15 }} className="flex flex-col">
        <div className="font-heading font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.04em] leading-none mb-10 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-[#34d399]/40 pb-1">
          <div>LET'S WORK</div>
          <div>TOGETHER<span className="text-[#34d399] font-bold">.</span></div>
        </div>

        <a href={`mailto:${portfolio.email}`} className="font-sans font-semibold text-[1rem] hover:text-[#34d399] transition-colors flex items-center gap-3 mb-16 w-fit text-white">
          <Mail size={20} className="text-[#34d399]" />
          {portfolio.email}
        </a>

        <form onSubmit={handleSubmit} className="w-full max-w-[560px] flex flex-col gap-6 mb-24">
          <div className="flex flex-col">
            <label className="font-mono text-[0.72rem] tracking-wider uppercase text-[#34d399] mb-[0.4rem]">Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-surface/50 border border-border/80 text-[#f0f9f4] font-sans text-[0.85rem] p-[0.85rem_1rem] rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all backdrop-blur-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-mono text-[0.72rem] tracking-wider uppercase text-[#34d399] mb-[0.4rem]">Email</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-surface/50 border border-border/80 text-[#f0f9f4] font-sans text-[0.85rem] p-[0.85rem_1rem] rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all backdrop-blur-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-mono text-[0.72rem] tracking-wider uppercase text-[#34d399] mb-[0.4rem]">Message</label>
            <textarea 
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="bg-surface/50 border border-border/80 text-[#f0f9f4] font-sans text-[0.85rem] p-[0.85rem_1rem] rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all backdrop-blur-sm resize-y"
            />
          </div>
          <button type="submit" className="bg-[#34d399] text-[#040d06] border border-[#34d399] font-bold font-sans text-[0.75rem] uppercase tracking-[0.15em] py-4 rounded-lg hover:bg-transparent hover:text-[#34d399] transition-all duration-300 shadow-[0_0_15px_rgba(52,211,153,0.12)] hover:shadow-[0_0_25px_rgba(52,211,153,0.3)]">
            Send Message
          </button>
        </form>

        <div className="border-t border-border/40 pt-8 flex justify-between items-center">
          <div className="font-mono text-[0.72rem] text-gray-400 uppercase tracking-wider">© 2026 Rohith K</div>
          <div className="flex gap-4 text-gray-300">
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="hover:text-[#34d399] transition-colors"><FaGithub size={18} /></a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#34d399] transition-colors"><FaLinkedin size={18} /></a>
            <a href={`mailto:${portfolio.email}`} className="hover:text-[#34d399] transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
