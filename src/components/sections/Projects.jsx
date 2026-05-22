import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import portfolio from '../../data/portfolio';

export default function Projects() {
  const containerParams = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto border-t border-border">
      <motion.h2 {...containerParams} className="font-heading font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-[-0.03em] mb-16 flex gap-4 items-baseline">
        <span className="font-mono text-base font-bold text-[#34d399] mr-3">03 /</span>
        PROJECTS
      </motion.h2>

      <div className="flex flex-col gap-6">
        {portfolio.projects.map((project, idx) => (
          <motion.div 
            key={project.name}
            {...containerParams}
            transition={{ delay: 0.15 + (idx * 0.1) }}
            className="group relative glass-card p-8 md:p-10 rounded-2xl overflow-hidden bg-[#09150e]/40 border border-[#122c1b]/60"
          >
            {/* Animated top line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#34d399] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)] z-10" />

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-between">
              {/* Left Side: Number, Name, Tags */}
              <div className="flex-1">
                <div className="flex items-center gap-6 mb-4">
                  <span className="font-heading font-extrabold text-[1.8rem] text-[#34d399]/20 group-hover:text-[#34d399]/40 transition-colors">0{idx + 1}</span>
                  <div className="flex flex-col">
                    <h3 className="font-heading font-extrabold text-[1.25rem] text-white group-hover:text-[#34d399] transition-colors">{project.name}</h3>
                    <span className="font-sans text-[0.85rem] font-semibold text-[#34d399]">{project.subtitle}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:ml-[3.3rem]">
                  {project.stack.map(tech => (
                    <span key={tech} className="border border-[#122c1b]/80 bg-[#09150e]/40 rounded-md px-3 py-1 font-mono text-[0.72rem] text-gray-200 hover:border-[#34d399] hover:text-[#34d399] transition-colors duration-150">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Date, Link, Desc */}
              <div className="flex-1 md:text-right mt-4 md:mt-0 flex flex-col md:items-end">
                <div className="flex items-center gap-4 mb-4 justify-between w-full md:w-auto md:justify-end">
                  <span className="font-mono text-[0.75rem] text-gray-300 font-semibold">{project.date}</span>
                  <a href={project.link} className="text-gray-300 group-hover:text-[#34d399] transition-colors p-1.5 hover:bg-[#09150e]/80 rounded-lg">
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <p className="font-sans text-[0.88rem] text-gray-200 leading-[1.8] text-left md:text-right max-w-[500px]">
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
