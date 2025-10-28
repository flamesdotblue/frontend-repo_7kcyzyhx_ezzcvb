import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const qa = [
  {
    q: 'How fast can you launch?',
    a: 'A focused landing page can ship in 10–14 days. Our 5‑day Design Sprint is available for urgent timelines.',
  },
  {
    q: 'Do you handle copywriting?',
    a: 'Yes. We shape messaging and headlines with a conversion lens and collaborate with your subject‑matter experts.',
  },
  {
    q: 'What stack do you use?',
    a: 'Modern, performance‑first stacks aligned to your needs—always accessible, SEO‑ready, and easy to maintain.',
  },
  {
    q: 'Can you help after launch?',
    a: 'We offer ongoing CRO, analytics reviews, and iteration sprints to keep improving results.',
  },
];

// Plain JS props (no TypeScript types in .jsx files)
const Item = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/10 bg-white/5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="font-medium text-white">{q}</span>
        <ChevronDown className={`h-5 w-5 text-white/60 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden px-4 pb-4 text-sm text-white/70"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="relative w-full bg-[#0B0B10] py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-white/70">Everything you need to know before we get started.</p>
        </motion.div>

        <div className="mt-8 space-y-3">
          {qa.map((item) => (
            <Item key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
