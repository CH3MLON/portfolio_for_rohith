import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import portfolio from '../../../data/portfolio';

export default function Projects() {
  const containerParams = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto border-t border-border">
      <motion.h2 {...containerParams} className="font-syne font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-[-0.03em] mb-16 flex gap-6 items-baseline">
        <span className="font-mono text-[0.62rem] tracking-[0.2em] text-muted uppercase">03</span>
        PROJECTS
      </motion.h2>

      <div className="flex flex-col">
        {portfolio.projects.map((project, idx) => (
          <motion.div 
            key={project.name}
            {...containerParams}
            transition={{ delay: 0.15 + (idx * 0.1) }}
            className="group relative border border-border p-8 md:p-10 mb-[-1px] hover:border-[#333] transition-colors bg-[#0a0a0a]"
          >
            {/* Animated top line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)] z-10" />

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              {/* Left Side: Number, Name, Tags */}
              <div className="flex-1">
                <div className="flex items-center gap-6 mb-4">
                  <span className="font-syne font-extrabold text-[1.8rem] text-[#1a1a1a]">0{idx + 1}</span>
                  <div className="flex flex-col">
                    <h3 className="font-syne font-extrabold text-[1.2rem] text-white">{project.name}</h3>
                    <span className="font-mono text-[0.72rem] text-muted">{project.subtitle}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 ml-[3.3rem]">
                  {project.stack.map(tech => (
                    <span key={tech} className="border border-border px-3 py-1 font-mono text-[0.65rem] text-muted hover:bg-[#f0f0f0] hover:text-[#0a0a0a] hover:border-[#f0f0f0] transition-colors duration-150">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Date, Link, Desc */}
              <div className="flex-1 md:text-right mt-4 md:mt-0 flex flex-col md:items-end">
                <div className="flex items-center gap-4 mb-4 justify-between w-full md:w-auto md:justify-end">
                  <span className="font-mono text-[0.65rem] text-muted">{project.date}</span>
                  <a href={project.link} className="text-muted group-hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <p className="font-mono text-[0.78rem] text-muted leading-[1.85] text-left md:text-right">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
