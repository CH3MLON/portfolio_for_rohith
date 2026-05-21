import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ChatBot from './components/chatbot/ChatBot';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-mono text-[#f0f0f0] selection:bg-[#f0f0f0] selection:text-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ChatBot />
    </div>
  );
}

export default App;
