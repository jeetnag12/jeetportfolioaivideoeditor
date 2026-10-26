import React, { useState, useEffect } from 'react';
import { Play, Clapperboard, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel }) => {
  const [liveTime, setLiveTime] = useState('');

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setLiveTime(
        d.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-8 md:px-12 bg-black overflow-hidden editorial-grid"
    >
      {/* Background Ambient Video / Cinematic Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero/hero_cinematic.jpg"
          className="w-full h-full object-cover opacity-25 filter grayscale contrast-125 scale-105"
        >
          <source src="/hero/hero_ambient.mp4" type="video/mp4" />
        </video>
        {/* Cinematic gradient vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        <div className="absolute inset-0 scanline-overlay opacity-30" />
      </div>

      {/* Hero Top Meta Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 sm:pt-8 border-b border-white/10 pb-4">
        <button
          onClick={onOpenShowreel}
          className="flex items-center gap-2 px-3.5 py-1.5 bg-red-950/40 border border-red-600/40 hover:border-red-500 rounded-sm text-red-400 hover:text-white transition-all group font-mono text-xs uppercase tracking-wider"
        >
          <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
          </div>
          <span>PLAY SHOWREEL 2026</span>
        </button>

        <div className="flex items-center gap-6 font-mono text-xs text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>GEN AI &amp; MOTION</span>
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="hidden sm:inline">BANGALORE, IN</span>
        </div>
      </div>

      {/* Main Massive Editorial Typography (Matching Reference sec_132) */}
      <div className="relative z-10 my-auto py-12 sm:py-16">
        <div className="font-mono text-xs sm:text-sm text-red-500 tracking-widest uppercase mb-4 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-red-600 inline-block" />
          <span>{PERSONAL_INFO.name} — PORTFOLIO</span>
        </div>

        <h1 className="font-display font-black text-[clamp(2.5rem,7.5vw,6.5rem)] leading-[0.92] tracking-tighter text-white uppercase max-w-5xl">
          <span className="block text-zinc-100">AI VIDEO</span>
          <span className="block text-zinc-100">CREATOR &amp;</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-zinc-100 to-white">
            STORYTELLER.
          </span>
        </h1>
      </div>

      {/* Bottom Information Split: Credibility Left, CTAs Right */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-white/10 pt-8">
        {/* Left Column: Quick Credibility */}
        <div className="md:col-span-5 space-y-3">
          <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            VERIFIED PRODUCTION RECORD
          </div>
          <div className="flex items-center gap-6">
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-white">
                {PERSONAL_INFO.deliveredCount}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Videos Delivered
              </div>
            </div>
            <div className="w-[1px] h-8 bg-zinc-800" />
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-white">
                {PERSONAL_INFO.experienceYears}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Years In Craft
              </div>
            </div>
            <div className="w-[1px] h-8 bg-zinc-800" />
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-red-500">
                {PERSONAL_INFO.engagementRate}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Avg Engagement Lift
              </div>
            </div>
          </div>
          <p className="font-mono text-xs text-zinc-400 leading-relaxed max-w-md pt-1">
            Associate Video Editor at GRX10 Solutions Bangalore. Specialising in Veo 3, Runway Gen-3, Kling AI, and cinematic editing.
          </p>
        </div>

        {/* Right Column: Narrative Copy and Action Buttons */}
        <div className="md:col-span-7 flex flex-col md:items-end justify-between space-y-6">
          <p className="font-mono text-xs sm:text-sm text-zinc-300 uppercase tracking-wide leading-relaxed md:text-right max-w-lg">
            EVERY FRAME HAS A PURPOSE. EVERY CUT HAS A RHYTHM. I COMBINE GENERATIVE AI AND CINEMATIC CRAFT TO BUILD STORIES AUDIENCES HIT REPLAY ON.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#works"
              className="flex items-center gap-2.5 px-6 sm:px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase tracking-wider font-bold rounded-sm shadow-lg shadow-red-900/30 transition-all hover:scale-[1.02] bracket-box"
            >
              <Clapperboard className="w-4 h-4" />
              <span>EXPLORE SELECTED WORK</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm border border-zinc-700 transition-colors"
            >
              <span>LET'S TALK</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sequence Sticky Bottom Technical Rail (Matching Reference sec_112) */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2 border-t border-white/10 pt-4 mt-8 font-mono text-[11px] text-zinc-400 uppercase tracking-widest">
        <div>[BANGALORE BASED]</div>
        <div className="text-right md:text-left">[AI VIDEO &amp; MOTION]</div>
        <div className="hidden md:block">[VEO 3 · RUNWAY · KLING]</div>
        <div className="text-right flex items-center justify-end gap-1.5 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>{liveTime || '04:09:30 PM'}</span>
        </div>
      </div>
    </section>
  );
};
