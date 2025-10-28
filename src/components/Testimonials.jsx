import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'They rebuilt our site around a single goal: more demo requests. Conversions more than doubled within 30 days.',
    name: 'Maya L.',
    role: 'Head of Growth, Bluewave Finance',
  },
  {
    quote:
      'The messaging and structure are spot on. Our intake calls feel pre‑qualified, and leads are up 3x.',
    name: 'Andrew P.',
    role: 'Founder, NorthPeak Legal',
  },
  {
    quote:
      'Performance, design, and clarity. We finally have a site that sells our value—and loads in under a second.',
    name: 'Priya R.',
    role: 'Marketing Lead, Acme Health',
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full bg-[#0B0B10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What clients say</h2>
          <p className="mt-3 text-white/70">Proof that conversion‑first design works.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-3 flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/80">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/60">{t.name} · {t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
