import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0F] py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold">Flames IT Studio</p>
          <p className="mt-1 text-sm text-white/60">High-converting websites for modern businesses.</p>
          <p className="mt-2 text-xs text-white/40">© {year} Flames IT Studio. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Start a project <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a href="#" aria-label="GitHub" className="rounded-md border border-white/10 p-2 text-white/70 transition hover:bg-white/10">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="rounded-md border border-white/10 p-2 text-white/70 transition hover:bg-white/10">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
