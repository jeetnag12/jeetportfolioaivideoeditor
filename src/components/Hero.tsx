import React, { useState, useEffect, useRef } from 'react';
import { Play, Clapperboard, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { gsap, EASES } from '../motion/motionSystem';

interface HeroProps {
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel }) => {
  const [liveTime, setLiveTime] = useState('04:09:30 PM');
  const heroRef = useRef<HTMLElement>(null);

  // Live timecode updater
  useEffect(() => {
    const update = () => {
      const d = new Date();
      setLiveTime(
        d.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  // GSAP Orchestrated Cinematic Hero Entrance
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: EASES.cinematic },
        delay: 0.1,
      });

      // 1. Ambient video gentle scale & fade in
      tl.from('.hero-bg-video', {
        scale: 1.2,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out',
        clearProps: 'scale',
      }, 0);

      // 2. Top meta bar slides down
      tl.from('.hero-top-bar', {
        y: -25,
        opacity: 0,
        duration: 0.8,
        clearProps: 'transform,opacity',
      }, 0.1);

      // 3. Eyebrow badge reveals with slide-in
      tl.from('.hero-eyebrow', {
        x: -25,
        opacity: 0,
        duration: 0.7,
        clearProps: 'transform,opacity',
      }, 0.25);

      // 4. Hero headline: line-by-line masked reveal (Videofolio signature)
      tl.from('.hero-title-line', {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: EASES.cinematicSmooth,
        clearProps: 'transform,opacity',
      }, 0.35);

      // 5. Verified stats & record metrics stagger in
      tl.from('.hero-stat-col', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        clearProps: 'transform,opacity',
      }, 0.75);

      tl.from('.hero-stat-item', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        clearProps: 'transform,opacity',
      }, 0.85);

      // 6. Right column (Narrative copy and CTA buttons)
      tl.from('.hero-cta-col', {
        y: 30,
        opacity: 0,
        duration: 0.85,
        clearProps: 'transform,opacity',
      }, 0.8);

      tl.from('.hero-cta-btn', {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        clearProps: 'transform,opacity',
      }, 0.95);

      // 7. Bottom technical rail reveals
      tl.from('.hero-bottom-rail', {
        y: 20,
        opacity: 0,
        duration: 0.75,
        clearProps: 'transform,opacity',
      }, 1.0);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
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
          className="hero-bg-video w-full h-full object-cover filter grayscale contrast-125 scale-105 opacity-25"
        >
          <source src="/hero/hero_ambient.mp4" type="video/mp4" />
        </video>
        {/* Cinematic gradient vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        <div className="absolute inset-0 scanline-overlay opacity-30" />
      </div>

      {/* Hero Top Meta Bar */}
      <div className="hero-top-bar relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 sm:pt-8 border-b border-white/10 pb-4">
        <button
          onClick={onOpenShowreel}
          className="flex items-center gap-2.5 px-4 py-2 bg-red-950/40 border border-red-600/50 hover:border-red-400 rounded-sm text-red-400 hover:text-white transition-all duration-300 group font-mono text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(220,38,38,0.35)] cursor-pointer"
        >
          <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white group-hover:scale-115 transition-transform duration-300 shadow-[0_0_10px_rgba(220,38,38,0.8)]">
            <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
          </div>
          <span className="font-semibold tracking-widest">PLAY SHOWREEL 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping ml-1" />
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
        <div className="hero-eyebrow font-mono text-xs sm:text-sm text-red-500 tracking-widest uppercase mb-4 flex items-center gap-2">
          <span className="w-6 h-[1.5px] bg-red-600 inline-block" />
          <span>{PERSONAL_INFO.name} — PORTFOLIO</span>
        </div>

        <h1 className="font-display font-black text-[clamp(2.5rem,7.5vw,6.5rem)] leading-[0.92] tracking-tighter text-white uppercase max-w-5xl">
          <span className="block overflow-hidden py-0.5">
            <span className="hero-title-line block text-zinc-100 will-change-transform">
              AI VIDEO
            </span>
          </span>
          <span className="block overflow-hidden py-0.5">
            <span className="hero-title-line block text-zinc-100 will-change-transform">
              CREATOR &amp;
            </span>
          </span>
          <span className="block overflow-hidden py-0.5">
            <span className="hero-title-line block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-zinc-100 to-white will-change-transform">
              STORYTELLER.
            </span>
          </span>
        </h1>
      </div>

      {/* Bottom Information Split: Credibility Left, CTAs Right */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-white/10 pt-8">
        {/* Left Column: Quick Credibility */}
        <div className="hero-stat-col md:col-span-5 space-y-3">
          <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            VERIFIED PRODUCTION RECORD
          </div>
          <div className="flex items-center gap-6">
            <div className="hero-stat-item">
              <div className="font-display font-black text-2xl sm:text-3xl text-white">
                {PERSONAL_INFO.deliveredCount}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Videos Delivered
              </div>
            </div>
            <div className="w-[1px] h-8 bg-zinc-800" />
            <div className="hero-stat-item">
              <div className="font-display font-black text-2xl sm:text-3xl text-white">
                {PERSONAL_INFO.experienceYears}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Years In Craft
              </div>
            </div>
            <div className="w-[1px] h-8 bg-zinc-800" />
            <div className="hero-stat-item">
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
        <div className="hero-cta-col md:col-span-7 flex flex-col md:items-end justify-between space-y-6">
          <p className="font-mono text-xs sm:text-sm text-zinc-300 uppercase tracking-wide leading-relaxed md:text-right max-w-lg">
            EVERY FRAME HAS A PURPOSE. EVERY CUT HAS A RHYTHM. I COMBINE GENERATIVE AI AND CINEMATIC CRAFT TO BUILD STORIES AUDIENCES HIT REPLAY ON.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#works"
              className="hero-cta-btn flex items-center gap-2.5 px-6 sm:px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase tracking-wider font-bold rounded-sm shadow-lg shadow-red-900/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-red-600/40 bracket-box group"
            >
              <Clapperboard className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>EXPLORE SELECTED WORK</span>
            </a>

            <a
              href="#contact"
              className="hero-cta-btn flex items-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm border border-zinc-700 hover:border-zinc-500 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>LET'S TALK</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sequence Sticky Bottom Technical Rail (Matching Reference sec_112) */}
      <div className="hero-bottom-rail relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2 border-t border-white/10 pt-4 mt-8 font-mono text-[11px] text-zinc-400 uppercase tracking-widest">
        <div>[BANGALORE BASED]</div>
        <div className="text-right md:text-left">[AI VIDEO &amp; MOTION]</div>
        <div className="hidden md:block">[VEO 3 · RUNWAY · KLING]</div>
        <div className="text-right flex items-center justify-end gap-1.5 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>{liveTime}</span>
        </div>
      </div>
    </section>
  );
};
