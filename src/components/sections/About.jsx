import React from 'react';
import { motion } from 'framer-motion';
import portfolio from '../../../data/portfolio';

export default function About() {
  const containerParams = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto border-t border-border">
      <motion.h2 {...containerParams} className="font-syne font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-[-0.03em] mb-16 flex gap-6 items-baseline">
        <span className="font-mono text-[0.62rem] tracking-[0.2em] text-muted uppercase">01</span>
        ABOUT ME
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Column: Bio & Education */}
        <motion.div {...containerParams} transition={{ delay: 0.15 }}>
          <p className="font-mono text-[0.82rem] text-muted leading-[1.95] mb-12">
            I'm a 2nd-year B.E. CSE (<span className="text-[#f0f0f0]">AI/ML</span>) student at Sri Eshwar College of Engineering,
            building production-grade AI systems. I've shipped serverless voice AI, computer vision pipelines, and full-stack <span className="text-[#f0f0f0]">React</span>/<span className="text-[#f0f0f0]">AWS</span> applications — including a filed <span className="text-[#f0f0f0]">patent</span> for an optical microplastic analyzer. I care about systems that actually work at scale, not just demos that look good.
          </p>

          <div className="flex flex-col">
            {portfolio.education.map((edu, idx) => (
              <div key={idx} className="border-t border-border py-5 flex flex-col gap-1">
                <span className="font-mono text-[0.62rem] text-muted uppercase">{edu.year}</span>
                <span className="font-syne font-bold text-[0.95rem] text-white">{edu.degree}</span>
                <span className="font-mono text-[0.72rem] text-muted">{edu.institution} • {edu.grade}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {portfolio.certifications.map((cert, idx) => (
              <span key={idx} className="border border-border rounded-full px-3 py-1 font-mono text-[0.62rem] text-muted hover:border-white hover:text-white transition-colors cursor-default">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Achievements */}
        <motion.div {...containerParams} transition={{ delay: 0.25 }}>
          <div className="font-mono text-[0.62rem] uppercase text-muted mb-6">Achievements</div>
          <div className="flex flex-col">
            {portfolio.achievements.map((ach, idx) => (
              <div key={idx} className="flex gap-6 py-6 border-b border-border group first:border-t">
                <div className="font-syne font-extrabold text-[1.2rem] text-[#1e1e1e] group-hover:text-[#333] transition-colors leading-none">
                  0{idx + 1}
                </div>
                <div className="font-mono text-[0.78rem] text-white leading-[1.8]">
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
