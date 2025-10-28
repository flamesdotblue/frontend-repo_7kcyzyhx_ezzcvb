import React from 'react';
import { Shield, Gauge, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Gauge,
    title: 'Speed that ranks',
    desc: 'Clean code, optimized assets, and modern frameworks that score A+ on Core Web Vitals.',
  },
  {
    icon: Shield,
    title: 'Built to scale',
    desc: 'Enterprise-grade practices: accessibility, security, and maintainable architectures.',
  },
  {
    icon: Star,
    title: 'Conversion by design',
    desc: 'Messaging, layout, and micro-interactions engineered to move visitors to action.',
  },
];

const card = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-[#0B0B10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything a high‑converting site needs</h2>
          <p className="mt-3 text-white/70">
            We blend brand clarity with performance and persuasive UX so your site becomes a revenue channel—not a brochure.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              variants={card}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500/20 via-blue-500/20 to-cyan-400/20 ring-1 ring-inset ring-white/10">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6"
          >
            <p className="text-sm text-white/70">Playbook</p>
            <h4 className="mt-2 text-xl font-semibold">Proven sections that sell</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Hero with sharp value proposition</li>
              <li>Social proof and credibility boosts</li>
              <li>Problem → Solution narrative</li>
              <li>Differentiators and outcomes</li>
              <li>Crystal‑clear call‑to‑action</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-bl from-white/[0.06] to-white/[0.03] p-6"
          >
            <p className="text-sm text-white/70">Tech stack</p>
            <h4 className="mt-2 text-xl font-semibold">Modern, reliable, measurable</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Analytics + heatmaps wired from day one</li>
              <li>SEO fundamentals with structured data</li>
              <li>Accessibility and semantic HTML</li>
              <li>Automated performance checks</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
