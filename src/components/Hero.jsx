import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0B0B10] text-white">
      {/* Top navigation */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-wide">ZenSite Labs</span>
        </motion.div>
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="hidden items-center gap-8 md:flex text-sm text-white/70"
        >
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </motion.div>
        <motion.a
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          href="#cta"
          className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
        >
          Get a high‑converting site
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </motion.a>
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlays for depth; ensure they don't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.12),transparent_60%)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-24 pt-20 md:grid-cols-2 md:pb-36 md:pt-28">
        <div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Conversion‑first Web Design
          </motion.div>
          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Websites engineered to convert more visitors into customers
          </motion.h1>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            We craft lightning‑fast, mobile‑perfect, and SEO‑ready websites for service‑based brands. Designed with user psychology and rigorous A/B testing principles.
          </motion.p>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row"
          >
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:opacity-95"
            >
              Book a free strategy call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Explore our approach
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease }}
            className="mt-8 grid grid-cols-2 gap-6 text-white/70 sm:grid-cols-3"
          >
            <div>
              <p className="text-3xl font-semibold text-white">3x</p>
              <p className="text-xs">Avg. lead uplift</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white"><span className="align-baseline">90+</span>%</p>
              <p className="text-xs">Core Web Vitals</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">14d</p>
              <p className="text-xs">Typical delivery</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="flex items-end justify-end"
        >
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:max-w-lg">
            <p className="text-sm font-medium text-white">What you get</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Conversion‑focused UX with clear CTA hierarchy
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                High‑performance build with SEO best practices
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Analytics, heatmaps, and CRO insights
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Pixel‑perfect mobile responsiveness
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
