import React, { useEffect, useRef } from 'react';
import { CLIENT_STRIP, PERSONAL_INFO } from '../data/portfolioData';
import { gsap, EASES } from '../motion/motionSystem';

export const CredibilityStrip: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      tl.from('.studio-record-card', {
        x: -40,
        opacity: 0,
        duration: 0.85,
        ease: EASES.cinematic,
        clearProps: 'transform,opacity',
      });

      tl.from(
        '.client-grid-box',
        {
          y: 30,
          opacity: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: EASES.cinematic,
          clearProps: 'transform,opacity',
        },
        '-=0.45'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black border-b border-white/10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        {/* Left Red Highlight Card (Matching Reference sec_000) */}
        <div className="studio-record-card lg:col-span-4 bg-red-700 text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:bg-red-650">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-red-200 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>STUDIO RECORD</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight leading-tight">
              {PERSONAL_INFO.experienceYears} YEARS {PERSONAL_INFO.deliveredCount} PROJECTS
            </h2>
          </div>

          <p className="font-mono text-xs text-red-100/90 leading-relaxed mt-4">
            Every project represents a creative partnership, an engineered AI pipeline, and a story built to deliver measurable audience engagement.
          </p>
        </div>

        {/* Right Partner / Client Grid (5 boxes) */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-white/10 bg-zinc-950">
          {CLIENT_STRIP.slice(0, 5).map((client) => (
            <div
              key={client.name}
              className="client-grid-box p-5 sm:p-6 flex flex-col justify-between hover:bg-zinc-900/90 transition-all duration-300 group min-h-[130px] border-b sm:border-b-0 hover:border-red-500/30"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 group-hover:text-red-400 transition-colors">
                {client.tag}
              </span>
              <div>
                <div className="font-display font-extrabold text-sm sm:text-base text-zinc-200 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  {client.name}
                </div>
                <div className="font-mono text-[11px] text-zinc-500 mt-0.5">
                  {client.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
