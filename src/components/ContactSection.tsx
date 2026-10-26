import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUp } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-black text-white pt-24 pb-12 overflow-hidden editorial-grid">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto relative z-10">
        {/* Contact Header Block */}
        <div className="pb-16 border-b border-white/10">
          <div className="font-mono text-xs uppercase tracking-widest text-red-500 mb-3 flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-red-600 inline-block" />
            <span>[07] — GET IN TOUCH</span>
          </div>

          <h2 className="font-display font-black text-[clamp(2.5rem,7vw,6.2rem)] uppercase tracking-tighter leading-[0.92] text-white max-w-5xl">
            LET'S MAKE <br />
            SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-zinc-100 to-white">
              UNFORGETTABLE.
            </span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-zinc-400 mt-6 max-w-lg leading-relaxed">
            Available for selected freelance projects, AI video production, commercial brand films, and motion design collaborations.
          </p>

          {/* Direct Email Action Card */}
          <div className="mt-10 p-6 sm:p-8 bg-zinc-950 border border-white/15 rounded-sm max-w-2xl bracket-box hover:border-red-600/60 transition-colors">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2">
              PRIMARY COMMUNICATION CHANNEL
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-display font-black text-2xl sm:text-3xl text-white hover:text-red-500 transition-colors uppercase tracking-tight"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-xs uppercase transition-colors border border-white/10"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>
            <div className="font-mono text-xs text-zinc-400 mt-3 flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{PERSONAL_INFO.availability}</span>
              </span>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Socials Grid (Matching Reference sec_105) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-white/10 items-start">
          {/* Left Nav Destinations */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4 font-mono text-xs">
            <div className="space-y-2.5">
              <span className="text-zinc-600 uppercase text-[10px] tracking-widest block mb-1">
                SECTIONS
              </span>
              <a href="#hero" className="block text-zinc-400 hover:text-white transition-colors">
                HOME
              </a>
              <a href="#works" className="block text-zinc-400 hover:text-white transition-colors">
                SELECTED WORKS
              </a>
              <a href="#about" className="block text-zinc-400 hover:text-white transition-colors">
                PHILOSOPHY &amp; ABOUT
              </a>
            </div>
            <div className="space-y-2.5">
              <span className="text-zinc-600 uppercase text-[10px] tracking-widest block mb-1">
                DETAILS
              </span>
              <a href="#process" className="block text-zinc-400 hover:text-white transition-colors">
                PROCESS &amp; SPECS
              </a>
              <a href="#experience" className="block text-zinc-400 hover:text-white transition-colors">
                EXPERIENCE
              </a>
              <a href="#contact" className="block text-zinc-400 hover:text-white transition-colors">
                CONTACT
              </a>
            </div>
          </div>

          {/* Right Socials & Back to Top */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="w-10 h-10 rounded bg-zinc-950 border border-white/10 hover:border-red-600 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-10 h-10 rounded bg-zinc-950 border border-white/10 hover:border-red-600 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-10 h-10 rounded bg-zinc-950 border border-white/10 hover:border-red-600 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-10 h-10 rounded bg-zinc-950 border border-white/10 hover:border-emerald-500 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                title="Direct Email"
                className="w-10 h-10 rounded bg-zinc-950 border border-white/10 hover:border-red-600 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-red-500 transition-colors group"
            >
              <span>BACK TO TOP</span>
              <div className="w-6 h-6 rounded bg-zinc-900 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-all">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Giant Monolithic Brand Wordmark (Sequence Signature Reference sec_105) */}
        <div className="pt-12 text-center select-none overflow-hidden">
          <div className="font-display font-black text-[13vw] leading-none tracking-tighter text-zinc-900 hover:text-zinc-800 transition-colors uppercase whitespace-nowrap">
            JEET.NAG ®
          </div>
          <div className="font-mono text-xs text-zinc-600 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
            <span>© 2026 JEET NAG · ALL RIGHTS RESERVED</span>
            <span>AI VIDEO CREATOR · VIDEO EDITOR · BANGALORE</span>
            <span>DESIGN LANGUAGE INSPIRED BY SEQUENCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
