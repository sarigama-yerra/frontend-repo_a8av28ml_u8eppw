import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-black/20 p-10 backdrop-blur">
          <h3 className="text-2xl font-semibold sm:text-3xl">Bring substance back to your slides</h3>
          <p className="mt-2 max-w-2xl text-white/90">Start turning research into compelling, validated narratives that render themselves.</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:bg-white/90">
              Request early access
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="text-sm font-medium text-white/90 hover:text-white">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
