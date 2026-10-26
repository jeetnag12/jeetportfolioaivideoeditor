import React, { useState, useEffect } from 'react';
import { Film, Grid, X, Copy, Check, ArrowUpRight, Mail } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live timecode updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard Escape listener and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const menuLinks = [
    { num: '[01]', name: 'HOME', href: '#hero' },
    { num: '[02]', name: 'WORKS', href: '#works' },
    { num: '[03]', name: 'ABOUT', href: '#about' },
    { num: '[04]', name: 'PROCESS', href: '#process' },
    { num: '[05]', name: 'EXPERIENCE', href: '#experience' },
    { num: '[06]', name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Top Floating Pill Bar */}
      <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-2.5 bg-black/85 backdrop-blur-md border border-white/15 rounded-full shadow-2xl transition-all duration-300 hover:border-white/30">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-white text-xs sm:text-sm font-mono font-bold tracking-wider hover:text-red-500 transition-colors"
          >
            <div className="w-5 h-5 rounded bg-red-600/20 border border-red-500/50 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
              <Film className="w-3 h-3" />
            </div>
            <span className="font-display font-extrabold tracking-tight text-sm sm:text-base">
              {PERSONAL_INFO.brand}
            </span>
          </a>

          {/* Sequence Status / REC Indicator */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[11px] text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-zinc-200">REC</span>
            <span className="text-zinc-500">|</span>
            <span>{currentTime || '00:00:00'}</span>
          </div>

          {/* Menu Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            id="menu-trigger"
            aria-label="Open Navigation Menu"
            className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-200 hover:text-white transition-colors group pl-2"
          >
            <span className="tracking-wider uppercase font-medium">Menu</span>
            <div className="w-6 h-6 rounded flex items-center justify-center bg-white/10 group-hover:bg-red-600 group-hover:text-white transition-all">
              <Grid className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </header>

      {/* Full-Screen / Modal Navigation Overlay (Recreating Sequence Reference sec_120) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 shadow-2xl rounded-sm overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Red Header Bar */}
            <div className="bg-red-600 text-white px-5 py-3.5 flex items-center justify-between border-b border-red-700">
              <div className="flex items-center gap-2 font-display font-black tracking-tight text-base sm:text-lg">
                <Film className="w-4 h-4" />
                <span>{PERSONAL_INFO.brand}</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                id="close-menu"
                className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-80 transition-opacity"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Grid of Navigation Links (2x3 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80 border-b border-zinc-800">
              {menuLinks.slice(0, 3).map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group relative p-6 transition-all flex flex-col justify-between min-h-[95px] ${
                      isActive
                        ? 'bg-red-950/40 border-b-2 border-red-600'
                        : 'bg-zinc-950 hover:bg-zinc-900/80'
                    }`}
                  >
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-red-400 transition-colors">
                      {link.num}
                    </span>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-display font-bold text-base tracking-wide text-zinc-200 group-hover:text-white">
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-red-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80 border-b border-zinc-800">
              {menuLinks.slice(3, 6).map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group relative p-6 transition-all flex flex-col justify-between min-h-[95px] ${
                      isActive
                        ? 'bg-red-950/40 border-b-2 border-red-600'
                        : 'bg-zinc-950 hover:bg-zinc-900/80'
                    }`}
                  >
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-red-400 transition-colors">
                      {link.num}
                    </span>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-display font-bold text-base tracking-wide text-zinc-200 group-hover:text-white">
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-red-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Sub-strip: Quick Stats */}
            <div className="px-6 py-3.5 bg-zinc-900/40 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>[07]</span>
              <span className="uppercase tracking-widest text-[11px] text-zinc-300">
                AI PRODUCTION • MOTION DESIGN • CINEMATOGRAPHY
              </span>
            </div>

            {/* Email Card & Contact Information */}
            <div className="p-6 sm:p-8 bg-zinc-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-1">
                  DIRECT COLLABORATION
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-display font-extrabold text-lg sm:text-xl text-white hover:text-red-500 transition-colors uppercase tracking-tight"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-700/50"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <div className="font-mono text-xs text-zinc-400 mt-1">
                  {PERSONAL_INFO.location} · {PERSONAL_INFO.availability}
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm text-center transition-colors"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Icons Strip */}
            <div className="grid grid-cols-5 divide-x divide-zinc-800 bg-zinc-900/60">
              <a
                href={PERSONAL_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="py-3 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:bg-zinc-800/80 transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="py-3 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:bg-zinc-800/80 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="py-3 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:bg-zinc-800/80 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="py-3 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800/80 transition-all"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                title="Email"
                className="py-3 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
