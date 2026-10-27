import React, { useState, useEffect, useRef } from 'react';
import { Plus, X } from 'lucide-react';
import { FAQ_LIST } from '../data/portfolioData';
import { gsap, EASES } from '../motion/motionSystem';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-01');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        tl.from('.faq-eyebrow', {
          x: -20,
          opacity: 0,
          duration: 0.6,
          ease: EASES.cinematic,
          clearProps: 'transform,opacity',
        });

        tl.from(
          '.faq-title',
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
          '.faq-desc',
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

      gsap.from('.faq-accordion-item', {
        opacity: 0,
        y: 25,
        duration: 0.65,
        stagger: 0.08,
        ease: EASES.cinematic,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.faq-accordion-container',
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
      className="relative bg-black text-white py-20 sm:py-28 border-b border-white/10 overflow-hidden"
    >
      <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Section Header (Matching Reference sec_060 & sec_070) */}
        <div
          ref={headerRef}
          className="pb-8 border-b border-white/10 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="faq-eyebrow font-mono text-xs uppercase tracking-widest text-red-500 mb-2 flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-red-600 inline-block" />
              <span>[06] — FAQ</span>
            </div>
            <h2 className="faq-title font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              THE QUESTIONS
            </h2>
          </div>
          <div className="faq-desc font-mono text-xs text-zinc-400 max-w-sm">
            Everything you need to know about working together, from AI prompt architectures to commercial delivery rights.
          </div>
        </div>

        {/* Accordions */}
        <div className="faq-accordion-container divide-y divide-white/10 border-y border-white/10">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-accordion-item transition-colors duration-300 ${
                  isOpen ? 'bg-zinc-950 shadow-inner' : 'bg-transparent hover:bg-zinc-950/40'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between text-left group transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6 pr-4">
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-red-500 transition-colors">
                      [{String(idx + 1).padStart(3, '0')}]
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-2xl text-zinc-200 group-hover:text-white transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-sm flex items-center justify-center border flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-red-600 text-white border-red-500 rotate-90 shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                        : 'bg-zinc-900 text-zinc-400 border-white/10 group-hover:border-red-600 group-hover:text-white'
                    }`}
                  >
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-8 pt-2 px-2 sm:px-12 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl">
                      {item.answer}
                    </p>
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
