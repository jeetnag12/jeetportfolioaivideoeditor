import React, { useState, useEffect, useRef } from 'react';
import { Plus, X, ArrowRight } from 'lucide-react';
import { CAPABILITIES } from '../data/portfolioData';
import { gsap, EASES } from '../motion/motionSystem';

export const ProcessSection: React.FC = () => {
  // Open the first capability by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const previewThumbs = [
    '/thumbnails/jPzWNqfiZq4.jpg',
    '/thumbnails/f6IcUPwyMvE.jpg',
    '/thumbnails/GIa39NMrEvs.jpg',
    '/thumbnails/FDNVj9rJELE.jpg',
    '/thumbnails/STmefO96_o4.jpg',
  ];

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

        tl.from('.process-eyebrow', {
          x: -20,
          opacity: 0,
          duration: 0.6,
          ease: EASES.cinematic,
          clearProps: 'transform,opacity',
        });

        tl.from(
          '.process-title',
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
          '.process-desc',
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

      // 2. Preview frames strip staggered reveal
      gsap.from('.preview-thumb-box', {
        opacity: 0,
        y: 25,
        scale: 0.95,
        duration: 0.7,
        stagger: 0.08,
        ease: EASES.cinematic,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.preview-thumbs-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // 3. Subservices 3-col card entrance
      gsap.from('.subservices-grid', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: EASES.cinematic,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.subservices-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // 4. Accordion rows stagger
      gsap.from('.capability-row', {
        opacity: 0,
        y: 25,
        duration: 0.65,
        stagger: 0.08,
        ease: EASES.cinematic,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.capability-accordion-list',
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
      id="process"
      className="relative bg-black text-white py-20 sm:py-28 border-b border-white/10 overflow-hidden"
    >
      <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10"
        >
          <div>
            <div className="process-eyebrow font-mono text-xs uppercase tracking-widest text-red-500 mb-2 flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-red-600 inline-block" />
              <span>[04] — PIPELINE &amp; SPECS</span>
            </div>
            <h2 className="process-title font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              PRODUCTION PROCESS
            </h2>
          </div>
          <p className="process-desc font-mono text-xs sm:text-sm text-zinc-400 max-w-md">
            A battle-tested production framework designed for speed, visual excellence, and zero surprise detours.
          </p>
        </div>

        {/* Top Preview Image Strip (Matching Reference sec_017) */}
        <div className="preview-thumbs-grid grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {previewThumbs.map((thumb, idx) => (
            <div
              key={idx}
              className="preview-thumb-box relative aspect-video rounded-sm overflow-hidden bg-zinc-950 border border-white/10 group shadow-md hover:border-red-500/50 transition-all duration-300"
            >
              <img
                src={thumb}
                alt="Production Still"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-108 group-hover:brightness-100 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-zinc-400 group-hover:text-red-400 transition-colors">
                FRAME_{String(idx + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        {/* 3-Column Subservices Overview Strip (Matching Reference sec_017) */}
        <div className="subservices-grid grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 bg-zinc-950/80 border border-white/10 rounded-sm mb-12 font-mono text-xs hover:border-white/20 transition-colors">
          <div className="space-y-3">
            <div className="text-red-500 font-bold uppercase tracking-wider text-[11px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>AI &amp; GENERATIVE DEV</span>
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> Veo 3 &amp; Runway Gen-3 Pipelines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> Kling 3.0 &amp; Seedance Motion
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> ComfyUI Node Workflows
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> Character &amp; Face Consistency
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-red-500 font-bold uppercase tracking-wider text-[11px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>POST &amp; MOTION DESIGN</span>
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> Adobe Premiere Pro Master Edits
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> After Effects Kinetic Typography
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> Custom LUTs &amp; Color Grading
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> Multi-Layered Sound Design
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-red-500 font-bold uppercase tracking-wider text-[11px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>DELIVERY &amp; PERFORMANCE</span>
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> 16:9 YouTube &amp; Commercial Masters
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> 9:16 Vertical Instagram Reels
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> High-Retention Hook Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-600">::</span> 4K Ultra-HD Master Archive
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Full-Width Accordion Panels (Matching Reference sec_025 & sec_030) */}
        <div className="capability-accordion-list divide-y divide-white/10 border-y border-white/10">
          {CAPABILITIES.map((cap, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={cap.step}
                className={`capability-row transition-colors duration-300 ${
                  isOpen ? 'bg-zinc-950 shadow-inner' : 'bg-transparent hover:bg-zinc-950/40'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between text-left group transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className="font-mono text-xs sm:text-sm text-zinc-500 group-hover:text-red-500 transition-colors">
                      {cap.step}
                    </span>
                    <div>
                      <h3 className="font-display font-black text-xl sm:text-3xl uppercase tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                        {cap.title}
                      </h3>
                      <div className="font-mono text-xs text-zinc-500 mt-1">
                        {cap.subtitle}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-sm flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? 'bg-red-600 text-white border-red-500 rotate-90 shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                        : 'bg-zinc-900 text-zinc-400 border-white/10 group-hover:border-red-600 group-hover:text-white'
                    }`}
                  >
                    {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Content Panel */}
                {isOpen && (
                  <div className="pb-8 pt-2 px-2 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="md:col-span-6 space-y-4">
                      <p className="font-body text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {cap.summary}
                      </p>

                      <div className="space-y-2 pt-2">
                        <div className="font-mono text-xs uppercase tracking-wider text-red-400 font-bold">
                          KEY DELIVERABLES:
                        </div>
                        <ul className="space-y-1.5 font-mono text-xs text-zinc-400">
                          {cap.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-red-500 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="md:col-span-6 bg-zinc-900/60 p-6 rounded border border-white/10 space-y-4 font-mono text-xs">
                      <div className="text-zinc-300 uppercase tracking-wider font-bold border-b border-white/10 pb-2 flex items-center justify-between">
                        <span>STAGE SPECIFICATIONS</span>
                        <span className="text-red-500 font-mono">{cap.step}</span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-zinc-500">TYPICAL TURNAROUND:</span>
                          <span className="text-zinc-200 font-semibold">{cap.specs.turnaround}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-zinc-500">REVISION ROUNDS:</span>
                          <span className="text-zinc-200 font-semibold">{cap.specs.revisions}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-zinc-500">FINAL ARTIFACT:</span>
                          <span className="text-zinc-200 font-semibold">{cap.specs.output}</span>
                        </div>
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold uppercase tracking-wider pt-2 group"
                      >
                        <span>DISCUSS THIS STAGE</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
