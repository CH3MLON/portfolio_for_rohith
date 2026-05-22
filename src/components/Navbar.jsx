import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const observers = links.map(link => {
      const id = link.toLowerCase();
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(element);
      return { id, observer, element };
    });

    return () => {
      observers.forEach(obs => {
        if (obs && obs.element) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-bg/75 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-heading font-extrabold text-[1.2rem] tracking-tight cursor-pointer" onClick={() => handleScroll('home')}>
          RK<span className="text-primary font-bold">.</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <button
                key={link}
                onClick={() => handleScroll(id)}
                className={`relative font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] hover:text-white transition-colors ${isActive ? 'text-[#34d399]' : 'text-gray-300'}`}
              >
                {link}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white hover:text-primary transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-bg/95 backdrop-blur-lg border-b border-border p-8 flex flex-col gap-6 shadow-2xl">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <button
                key={link}
                onClick={() => handleScroll(id)}
                className={`text-left font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${isActive ? 'text-[#34d399]' : 'text-gray-300'}`}
              >
                {link}
              </button>
            );
          })}
        </div>
      )}
    </motion.nav>
  );
}
