import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="relative w-full bg-[#0B0B10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to turn your site into a growth engine?
            </h2>
            <p className="mt-3 text-white/70">
              Book a free strategy call. We’ll map quick wins, uncover bottlenecks, and give you a clear path to a high‑converting website.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Actionable insights in 30 minutes</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> No obligation, no fluff</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Clear next steps and timeline</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-xs text-white/60">Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-[#0F1117] px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/40"
                />
              </div>
              <div>
                <label className="text-xs text-white/60">Email</label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-[#0F1117] px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/40"
                />
              </div>
              <div>
                <label className="text-xs text-white/60">Website or project URL</label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-[#0F1117] px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/40"
                />
              </div>
              <button
                type="button"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:opacity-95"
              >
                Book my free call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="text-xs text-white/50">We’ll respond within one business day.</p>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} ZenSite Labs. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default CTA;
