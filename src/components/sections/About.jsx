import React from 'react';
import { motion } from 'framer-motion';
import portfolio from '../../data/portfolio';

export default function About() {
  const containerParams = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto border-t border-border">
      <motion.h2 {...containerParams} className="font-heading font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-[-0.03em] mb-16 flex gap-4 items-baseline">
        <span className="font-mono text-base font-bold text-[#34d399] mr-3">01 /</span>
        ABOUT ME
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Column: Bio & Education */}
        <motion.div {...containerParams} transition={{ delay: 0.15 }}>
          <p className="font-sans text-[0.95rem] text-gray-200 leading-[1.95] mb-12">
            I'm a 2nd-year B.E. CSE (<span className="text-white font-semibold">AI/ML</span>) student at Sri Eshwar College of Engineering,
            building production-grade AI systems. I've shipped serverless voice AI, computer vision pipelines, and full-stack <span className="text-white font-semibold">React</span>/<span className="text-white font-semibold">AWS</span> applications — including a filed <span className="text-white font-semibold">patent</span> for an optical microplastic analyzer. I care about systems that actually work at scale, not just demos that look good.
          </p>

          <div className="flex flex-col">
            {portfolio.education.map((edu, idx) => (
              <div key={idx} className="border-b border-border/40 py-5 flex flex-col gap-1 first:border-t">
                <span className="font-mono text-[0.72rem] text-[#34d399] font-semibold tracking-wide uppercase">{edu.year}</span>
                <span className="font-heading font-bold text-[1.05rem] text-white">{edu.degree}</span>
                <span className="font-sans text-[0.85rem] text-gray-300">{edu.institution} • <span className="text-[#34d399] font-semibold">{edu.grade}</span></span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {portfolio.certifications.map((cert, idx) => (
              <span key={idx} className="border border-border/80 bg-[#09150e]/40 backdrop-blur-sm rounded-full px-4 py-1.5 font-sans text-[0.78rem] text-gray-200 hover:border-[#34d399] hover:text-[#34d399] transition-all duration-200 cursor-default">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Achievements */}
        <motion.div {...containerParams} transition={{ delay: 0.25 }}>
          <div className="font-mono text-xs tracking-[0.2em] uppercase text-[#34d399] mb-6">Achievements</div>
          <div className="flex flex-col">
            {portfolio.achievements.map((ach, idx) => (
              <div key={idx} className="flex gap-6 py-6 border-b border-border/40 group first:border-t hover:border-[#34d399]/20 transition-colors">
                <div className="font-heading font-extrabold text-[1.5rem] text-[#34d399]/30 group-hover:text-[#34d399] transition-colors leading-none">
                  0{idx + 1}
                </div>
                <div className="font-sans text-[0.88rem] text-gray-200 group-hover:text-white transition-colors leading-[1.7]">
                  {ach}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
