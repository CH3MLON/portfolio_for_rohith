import React from 'react';
import { motion } from 'framer-motion';
import portfolio from '../../data/portfolio';

export default function Skills() {
  const containerParams = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto border-t border-border">
      <motion.h2 {...containerParams} className="font-heading font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-[-0.03em] mb-16 flex gap-4 items-baseline">
        <span className="font-mono text-base font-bold text-[#34d399] mr-3">02 /</span>
        SKILLS
      </motion.h2>

      <motion.div {...containerParams} transition={{ delay: 0.15 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(portfolio.skills).map(([category, skills]) => (
          <div key={category} className="glass-card p-8 rounded-2xl flex flex-col h-full bg-[#09150e]/40 border border-[#122c1b]/60">
            <div className="font-mono text-[0.78rem] font-bold uppercase tracking-[0.2em] text-[#34d399] mb-6">
              {category}
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {skills.map(skill => (
                <span 
                  key={skill}
                  className="border border-[#122c1b]/80 bg-[#09150e]/40 rounded-lg px-3 py-1.5 font-sans text-[0.78rem] text-gray-200 hover:text-[#34d399] hover:border-[#34d399]/50 hover:bg-[#34d399]/5 transition-all duration-200 cursor-default"
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
