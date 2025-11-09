import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="w-full bg-black py-8 text-center text-white/60">
        <p className="text-sm">© {new Date().getFullYear()} Presentify AI — Structurally sound, narratively coherent.</p>
      </footer>
    </div>
  );
}

export default App;
