import React from 'react';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B0B10] text-white antialiased">
      <Hero />
      <Logos />
      <Features />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
    </div>
  );
}

export default App;
