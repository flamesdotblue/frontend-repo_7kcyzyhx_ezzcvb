import React from 'react';
import { motion } from 'framer-motion';

const brands = ['Acme Health', 'NorthPeak Legal', 'Bluewave Finance', 'UrbanBuild', 'BrightLearn', 'CloudMotion'];

const Logos = () => {
  return (
    <section className="relative w-full bg-[#0B0B10] py-10 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-xs uppercase tracking-widest text-white/50">Trusted by growth‑minded teams</p>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">
                {b}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
