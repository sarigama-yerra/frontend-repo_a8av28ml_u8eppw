import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient aura overlay (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.28),rgba(56,189,248,0.18)_45%,rgba(251,146,60,0.16)_70%,transparent_85%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-32 pb-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-violet-300" />
          <span className="text-sm text-white/80">AI voice agent aura • Futuristic • Minimal</span>
        </div>

        <h1 className="text-balance bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
          Presentify AI
        </h1>
        <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
          An agent-based platform that automates research, prompt-crafting, validation, and rendering to deliver
          structurally sound, narratively coherent presentations—complete with synchronized video, PDF, and
          Evaluation-as-a-Service.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-md bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            <Rocket className="h-4 w-4" />
            See how it works
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Explore capabilities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
