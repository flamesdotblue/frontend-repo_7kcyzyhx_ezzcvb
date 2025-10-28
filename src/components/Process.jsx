import React from 'react';

const steps = [
  {
    label: '01',
    title: 'Discovery & Strategy',
    desc: 'We align on your offer, ideal customer, and the actions that matter most. Clear KPIs set from the start.',
  },
  {
    label: '02',
    title: 'Wireframes & Messaging',
    desc: 'Low‑fidelity flows to nail the narrative and conversion paths. Headlines and CTAs shaped for clarity.',
  },
  {
    label: '03',
    title: 'Design & Build',
    desc: 'Polished UI built on a performance‑first stack. Animations and micro‑interactions that guide attention.',
  },
  {
    label: '04',
    title: 'Launch & Optimize',
    desc: 'Ship, measure, iterate. Heatmaps, session replays, and experiments to keep improving results.',
  },
];

const Process = () => {
  return (
    <section id="process" className="relative w-full bg-[#0B0B10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A streamlined, outcomes‑first process</h2>
          <p className="mt-3 text-white/70">From kickoff to launch in as little as two weeks.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.label} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">{s.label}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cyan-400/10 to-transparent" />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/10 via-indigo-400/10 to-transparent p-6 text-center">
          <p className="text-white/80">
            Need it faster? Ask about our 5‑day Design Sprint where we ideate, prototype, and test a high‑impact landing page in one week.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
