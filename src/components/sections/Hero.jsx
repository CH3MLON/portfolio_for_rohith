import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#040d06]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/pics/thumb-1920-1382231_optimized.webp" 
          alt="Greenery Backdrop" 
          className="w-full h-full object-cover opacity-[0.28] filter blur-[1px]"
        />
        {/* Gradients to blend image edges seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040d06]/60 via-transparent to-[#040d06]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d06] via-transparent to-[#040d06]" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto w-full px-6 md:px-12 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column */}
          <motion.div 
            className="col-span-1 lg:col-span-7 flex flex-col items-start gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#34d399] border border-[#122c1b] bg-[#09150e]/60 backdrop-blur-sm px-4 py-1.5 rounded-full inline-flex items-center">
              AVAILABLE FOR INTERNSHIPS <span className="inline-block w-[6px] h-[10px] bg-[#34d399] ml-2 animate-blink" />
            </motion.div>
            
            <motion.h1 variants={item} className="font-heading font-extrabold text-[clamp(3.5rem,7vw,6.2rem)] leading-none tracking-[-0.04em] bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#a7f3d0] pb-1">
              Rohith K
            </motion.h1>

            <motion.p variants={item} className="font-sans text-[1rem] text-[#c3d6cb] tracking-normal font-semibold">
              {portfolio.tagline}
            </motion.p>
            
            <motion.p variants={item} className="font-sans text-[0.85rem] text-gray-200 leading-[1.8] max-w-[500px]">
              Building production-grade AI systems and full-stack solutions from Coimbatore, India.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mt-2">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="border border-[#34d399] bg-[#34d399] text-[#040d06] font-bold px-7 py-3 font-sans text-[0.75rem] uppercase tracking-[0.15em] flex items-center gap-2 hover:bg-transparent hover:text-[#34d399] transition-all duration-300 rounded-lg group shadow-[0_0_15px_rgba(52,211,153,0.15)] hover:shadow-[0_0_25px_rgba(52,211,153,0.35)]"
              >
                View Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href={portfolio.resumeUrl} 
                download 
                className="border border-white/20 bg-white/5 text-white font-semibold px-7 py-3 font-sans text-[0.75rem] uppercase tracking-[0.15em] flex items-center gap-2 hover:border-[#34d399] hover:text-[#34d399] hover:bg-[#34d399]/5 transition-all duration-300 rounded-lg backdrop-blur-sm"
              >
                Download CV
                <Download size={14} />
              </a>
            </motion.div>

            <motion.div variants={item} className="flex gap-5 mt-4 text-gray-300">
              <a href={portfolio.github} target="_blank" rel="noreferrer" className="hover:text-[#34d399] transition-colors"><FaGithub size={20} /></a>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#34d399] transition-colors"><FaLinkedin size={20} /></a>
              <a href={`mailto:${portfolio.email}`} className="hover:text-[#34d399] transition-colors"><Mail size={20} /></a>
            </motion.div>
          </motion.div>

          {/* Right Column - Picture */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="col-span-1 lg:col-span-5 hidden lg:flex justify-center relative h-[400px] items-center"
          >
            <div className="relative w-[310px] h-[390px] border border-white/10 p-3 bg-[#09150e]/60 backdrop-blur-md rounded-2xl rotate-2 hover:rotate-0 transition-all duration-500 group/img shadow-2xl">
              {/* Corner glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#34d399] to-[#059669] opacity-0 group-hover/img:opacity-25 rounded-2xl blur-lg transition-all duration-500" />
              <img 
                src="/pics/portfolio_pic.jpeg" 
                alt="Rohith K" 
                className="relative w-full h-full object-cover rounded-xl grayscale group-hover/img:grayscale-0 transition-all duration-500 shadow-lg"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
