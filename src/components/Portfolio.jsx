import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Bluewave Finance',
    result: '120% more demo requests',
    img: 'https://images.unsplash.com/photo-1551281044-8af0d3af8b61?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Acme Health',
    result: '2.4x lead conversion',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'NorthPeak Legal',
    result: '68% lower CPL',
    img: 'https://images.unsplash.com/photo-1523246191815-3c546c7d20b9?q=80&w=1600&auto=format&fit=crop',
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="relative w-full bg-[#0B0B10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Recent results</h2>
          <p className="mt-3 text-white/70">A few examples of service brands we helped convert more visitors into bookings.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-sm text-white/70">{p.result}</p>
                </div>
                <span className="text-xs text-white/60">Case study →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
