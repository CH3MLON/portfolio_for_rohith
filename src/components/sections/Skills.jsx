import React from 'react';
import { motion } from 'framer-motion';
import portfolio from '../../../data/portfolio';

export default function Skills() {
  const containerParams = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto border-t border-border">
      <motion.h2 {...containerParams} className="font-syne font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-[-0.03em] mb-16 flex gap-6 items-baseline">
        <span className="font-mono text-[0.62rem] tracking-[0.2em] text-muted uppercase">02</span>
        SKILLS
      </motion.h2>

      <motion.div {...containerParams} transition={{ delay: 0.15 }} className="bg-[#1e1e1e] gap-[1px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border">
        {Object.entries(portfolio.skills).map(([category, skills]) => (
          <div key={category} className="bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-colors flex flex-col h-full">
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted mb-6">
              {category}
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {skills.map(skill => (
                <span 
                  key={skill}
                  className="border border-border px-3 py-1 font-mono text-[0.65rem] text-muted hover:bg-[#f0f0f0] hover:text-[#0a0a0a] hover:border-[#f0f0f0] transition-colors duration-150 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
