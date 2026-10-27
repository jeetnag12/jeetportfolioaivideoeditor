import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE, SKILLS_CATEGORIES } from '../data/portfolioData';
import { gsap, EASES } from '../motion/motionSystem';

export const ExperienceTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal
      if (headerRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        tl.from('.exp-eyebrow', {
          x: -20,
          opacity: 0,
          duration: 0.6,
          ease: EASES.cinematic,
          clearProps: 'transform,opacity',
        });

        tl.from(
          '.exp-title',
          {
            y: 30,
            opacity: 0,
            duration: 0.85,
            ease: EASES.cinematicSmooth,
            clearProps: 'transform,opacity',
          },
          '-=0.3'
        );

        tl.from(
          '.exp-desc',
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: EASES.cinematic,
            clearProps: 'transform,opacity',
          },
          '-=0.4'
        );
      }

      // 2. Experience cards stagger
      gsap.from('.experience-timeline-card', {
        opacity: 0,
        y: 35,
        scale: 0.98,
        duration: 0.8,
        stagger: 0.12,
        ease: EASES.cinematic,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.experience-timeline-list',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // 3. Technical arsenal cards stagger
      gsap.from('.skill-category-card', {
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.1,
        ease: EASES.cinematic,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.skills-category-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-black text-white py-20 sm:py-28 border-b border-white/10 editorial-grid overflow-hidden"
    >
      <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="pb-8 border-b border-white/10 mb-12">
          <div className="exp-eyebrow font-mono text-xs uppercase tracking-widest text-red-500 mb-2 flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-red-600 inline-block" />
            <span>[05] — TRACK RECORD</span>
          </div>
          <h2 className="exp-title font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            WORK EXPERIENCE
          </h2>
          <p className="exp-desc font-mono text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
            A chronological timeline of agency, studio, and commercial video production roles across India.
          </p>
        </div>

        {/* Experience Timeline Rows */}
        <div className="experience-timeline-list space-y-8">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.company + exp.period}
              className={`experience-timeline-card p-6 sm:p-8 rounded-sm border transition-all duration-300 ${
                exp.isCurrent
                  ? 'bg-zinc-950 border-red-600/60 shadow-[0_0_30px_rgba(220,38,38,0.15)] bracket-box hover:border-red-500'
                  : 'bg-zinc-950/60 border-white/10 hover:border-white/25 hover:bg-zinc-900/40'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      {exp.company}
                    </h3>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-500 border border-red-500/40 font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5 shadow-[0_0_10px_rgba(220,38,38,0.3)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        CURRENT
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-sm text-red-400 font-semibold mt-1">
                    {exp.role}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.location}</span>
                  </span>
                  {exp.highlight && (
                    <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-[10px] text-zinc-200">
                      {exp.highlight}
                    </span>
                  )}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs text-zinc-300">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed group">
                    <span className="text-red-500 mt-0.5 font-bold group-hover:translate-x-0.5 transition-transform">
                      ›
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools and Skills Grid */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="font-mono text-xs uppercase tracking-widest text-red-500 mb-2">
            TECHNICAL ARSENAL
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-8">
            TOOLS &amp; WORKFLOWS
          </h3>

          <div className="skills-category-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="skill-category-card p-6 bg-zinc-950 border border-white/10 rounded-sm hover:border-red-600/50 hover:shadow-[0_0_25px_rgba(220,38,38,0.15)] transition-all duration-300 bracket-box"
              >
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-red-400 mb-4 pb-2 border-b border-white/10">
                  {cat.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-sm bg-zinc-900 border border-white/5 text-zinc-200 hover:text-white hover:border-red-500/60 hover:bg-zinc-800 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
