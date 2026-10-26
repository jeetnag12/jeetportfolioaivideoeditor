import React, { useState } from 'react';
import { Plus, X, ArrowRight } from 'lucide-react';
import { CAPABILITIES } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  // Open the first capability by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const previewThumbs = [
    '/thumbnails/jPzWNqfiZq4.jpg',
    '/thumbnails/f6IcUPwyMvE.jpg',
    '/thumbnails/GIa39NMrEvs.jpg',
    '/thumbnails/FDNVj9rJELE.jpg',
    '/thumbnails/STmefO96_o4.jpg'
  ];

  return (
    <section id="process" className="relative bg-black text-white py-20 sm:py-28 border-b border-white/10">
      <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-red-500 mb-2 flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-red-600 inline-block" />
              <span>[04] — PIPELINE &amp; SPECS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              PRODUCTION PROCESS
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md">
            A battle-tested production framework designed for speed, visual excellence, and zero surprise detours.
          </p>
        </div>

        {/* Top Preview Image Strip (Matching Reference sec_017) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {previewThumbs.map((thumb, idx) => (
            <div
              key={idx}
              className="relative aspect-video rounded-sm overflow-hidden bg-zinc-950 border border-white/10 group"
            >
              <img
                src={thumb}
                alt="Production Still"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-zinc-400">
                FRAME_{String(idx + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        {/* 3-Column Subservices Overview Strip (Matching Reference sec_017) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 bg-zinc-950/80 border border-white/10 rounded-sm mb-12 font-mono text-xs">
          <div className="space-y-3">
            <div className="text-red-500 font-bold uppercase tracking-wider text-[11px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
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
              <span className="w-2 h-2 rounded-full bg-red-600" />
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
              <span className="w-2 h-2 rounded-full bg-red-600" />
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
        <div className="divide-y divide-white/10 border-y border-white/10">
          {CAPABILITIES.map((cap, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={cap.step}
                className={`transition-colors duration-200 ${
                  isOpen ? 'bg-zinc-950' : 'bg-transparent hover:bg-zinc-950/40'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between text-left group"
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
                    className={`w-10 h-10 rounded-sm flex items-center justify-center border transition-all ${
                      isOpen
                        ? 'bg-red-600 text-white border-red-500'
                        : 'bg-zinc-900 text-zinc-400 border-white/10 group-hover:border-red-600 group-hover:text-white'
                    }`}
                  >
                    {isOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Content Panel */}
                {isOpen && (
                  <div className="pb-8 pt-2 px-2 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5 animate-in fade-in duration-300">
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
                        <span className="text-red-500">{cap.step}</span>
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
