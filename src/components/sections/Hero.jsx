import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import portfolio from '../../data/portfolio';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="home" className="min-h-screen pt-24 px-6 md:px-12 max-w-[1100px] mx-auto flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Column */}
        <motion.div 
          className="col-span-1 lg:col-span-7 flex flex-col items-start gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted border border-border px-3 py-1 inline-flex items-center">
            [ AVAILABLE FOR INTERNSHIPS <span className="inline-block w-[6px] h-[10px] bg-muted ml-2 animate-blink" /> ]
          </motion.div>
          
          <motion.h1 variants={item} className="font-syne font-extrabold text-[clamp(3.5rem,7vw,6rem)] leading-none tracking-[-0.04em]">
            Rohith K
          </motion.h1>

          <motion.p variants={item} className="font-mono text-[0.85rem] text-muted tracking-[0.05em]">
            {portfolio.tagline}
          </motion.p>
          
          <motion.p variants={item} className="font-mono text-[0.78rem] text-muted leading-[1.9]">
            Building production AI systems from Coimbatore, India.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mt-2">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="border border-[#f0f0f0] bg-[#f0f0f0] text-[#0a0a0a] px-7 py-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] flex items-center gap-2 hover:bg-transparent hover:text-white transition-all group"
            >
              View Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href={portfolio.resumeUrl} 
              download 
              className="border border-border bg-transparent text-[#f0f0f0] px-7 py-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] flex items-center gap-2 hover:border-[#333] transition-colors"
            >
              Download CV
              <Download size={14} />
            </a>
          </motion.div>

          <motion.div variants={item} className="flex gap-5 mt-4 text-muted">
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href={`mailto:${portfolio.email}`} className="hover:text-white transition-colors"><Mail size={20} /></a>
          </motion.div>
        </motion.div>

        {/* Right Column - Decorative */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="col-span-1 lg:col-span-5 hidden lg:flex justify-center relative h-[400px]"
        >
          <div className="w-[320px] h-full border-2 border-border relative flex items-center justify-center">
            <span className="font-syne font-extrabold text-[#1a1a1a] text-[8rem] select-none">01</span>
            
            <div className="absolute -top-4 -left-8 border border-border bg-[#0a0a0a] p-4">
              <div className="font-syne font-bold text-[1.6rem] leading-none">3</div>
              <div className="font-mono text-[0.62rem] text-muted uppercase mt-1">Projects</div>
            </div>

            <div className="absolute -bottom-4 -right-8 border border-border bg-[#0a0a0a] p-4 text-right">
              <div className="font-syne font-bold text-[1.6rem] leading-none">1</div>
              <div className="font-mono text-[0.62rem] text-muted uppercase mt-1">Patent</div>
            </div>

            <div className="absolute top-1/4 -right-12 border border-border bg-[#0a0a0a] p-4 text-right">
              <div className="font-syne font-bold text-[1.6rem] leading-none">300+</div>
              <div className="font-mono text-[0.62rem] text-muted uppercase mt-1">DSA</div>
            </div>

            <div className="absolute bottom-1/4 -left-12 border border-border bg-[#0a0a0a] p-4">
              <div className="font-syne font-bold text-[1.6rem] leading-none">2</div>
              <div className="font-mono text-[0.62rem] text-muted uppercase mt-1">Hackathon Wins</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
