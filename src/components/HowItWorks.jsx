import React from 'react';
import { ListOrdered, Search, Bot, FileCheck2, Wand2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Deep Research Intake',
    desc: 'Ingest extensive materials, rank sources, and select the single most valuable resource.'
  },
  {
    icon: Wand2,
    title: 'Auto-Prompt Crafting',
    desc: 'Generate a tailored prompt that aligns with audience, tone, and structural goals.'
  },
  {
    icon: FileCheck2,
    title: 'Self-Healing Validation',
    desc: 'Apply Pydantic rules to verify each slide; auto-correct and re-verify until valid.'
  },
  {
    icon: Bot,
    title: 'Render & Deliver',
    desc: 'Produce synchronized video with narration, plus PDF export and deck evaluation.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-3 max-w-3xl text-gray-600">A transparent, enforceable pipeline designed for accuracy and coherence.</p>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white shadow-md">{idx + 1}</div>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
