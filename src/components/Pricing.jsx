import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Launch',
    price: '$2,900',
    desc: 'Best for new service businesses that need a high‑impact landing page fast.',
    features: [
      '1 page high‑converting site',
      'Messaging + wireframes',
      'Conversion‑focused UI',
      'Performance + SEO basics',
      'Analytics setup',
      '2 rounds of revisions',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$6,900',
    desc: 'For teams ready to scale lead gen with a small site and CRO foundations.',
    features: [
      'Up to 5 pages',
      'CRO research + strategy',
      'A/B test starter kit',
      'Schema + technical SEO',
      'Analytics + heatmaps',
      '3 rounds of revisions',
    ],
    highlight: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-[#0B0B10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple pricing, clear outcomes</h2>
          <p className="mt-3 text-white/70">Choose the plan that matches your goals today. Upgrade anytime.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl border ${t.highlight ? 'border-cyan-400/40 bg-cyan-400/10' : 'border-white/10 bg-white/5'} p-6`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-cyan-400/20 px-3 py-1 text-xs text-cyan-200 ring-1 ring-cyan-300/30">
                  Most popular
                </span>
              )}
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{t.name}</h3>
                  <p className="mt-1 text-sm text-white/70">{t.desc}</p>
                </div>
                <div className="text-3xl font-semibold">{t.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-5 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition ${t.highlight ? 'bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Get started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
