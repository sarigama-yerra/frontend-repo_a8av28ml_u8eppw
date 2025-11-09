import React from 'react';
import { CheckCircle2, Workflow, ShieldCheck, Video, FileText, Presentation } from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'Multi-Agent Workflow',
    desc: 'Specialized agents handle research, prompt generation, validation, and rendering—end-to-end.'
  },
  {
    icon: ShieldCheck,
    title: 'Self-Healing Validation',
    desc: 'Outputs are checked against Pydantic rules like "One Atomic Idea per Slide" and auto-corrected.'
  },
  {
    icon: Video,
    title: 'Synchronized Video',
    desc: 'ElevenLabs narration aligned with slides and FFmpeg rendering for crisp, shareable videos.'
  },
  {
    icon: FileText,
    title: 'PDF + PPTX Evaluation',
    desc: 'Export polished PDFs and audit existing decks against a taxonomy of design flaws.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-black to-[#0B0B0F] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Capabilities that prioritize content integrity</h2>
          <p className="mt-3 max-w-3xl text-white/70">From research to final assets, every step is optimized to keep your story factual, focused, and audience-aware.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Built for teams who care about substance, not just polish.
        </div>
      </div>
    </section>
  );
};

export default Features;
