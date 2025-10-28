import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B0B10] text-white antialiased">
      <Hero />
      <Features />
      <Process />
      <CTA />
    </div>
  );
}

export default App;
