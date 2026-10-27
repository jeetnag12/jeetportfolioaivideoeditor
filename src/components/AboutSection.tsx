import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { gsap, EASES } from '../motion/motionSystem';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const portraitWrapperRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Headline masked line reveal
      if (headlineRef.current) {
        gsap.from('.about-headline-line', {
          yPercent: 110,
          opacity: 0,
          duration: 1.0,
          stagger: 0.15,
          ease: EASES.cinematicSmooth,
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      // 2. Portrait shutter clip-path reveal + parallax
      if (portraitWrapperRef.current) {
        gsap.fromTo(
          portraitWrapperRef.current,
          { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0.3 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            duration: 1.2,
            ease: EASES.cinematicSmooth,
            scrollTrigger: {
              trigger: portraitWrapperRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (portraitImgRef.current && portraitWrapperRef.current) {
        gsap.to(portraitImgRef.current, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: portraitWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // 3. Stats grid staggered cards
      gsap.from('.about-stat-card', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: EASES.cinematic,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.about-stats-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // 4. Testimonial card slide-in
      gsap.from('.about-testimonial-card', {
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 0.85,
        ease: EASES.cinematic,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.about-testimonial-card',
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-black text-white py-20 sm:py-28 border-b border-white/10 editorial-grid overflow-hidden"
    >
      <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Section Top Eyebrow */}
        <div className="font-mono text-xs uppercase tracking-widest text-red-500 mb-3 flex items-center gap-2">
          <span className="w-4 h-[1.5px] bg-red-600 inline-block" />
          <span>[03] — THE PHILOSOPHY</span>
        </div>

        {/* Massive Editorial Headline (Matching Reference sec_042) */}
        <h2
          ref={headlineRef}
          className="font-display font-black text-[clamp(2.2rem,6.2vw,5.2rem)] uppercase tracking-tighter leading-[0.95] max-w-5xl mb-12"
        >
          <span className="block overflow-hidden py-1">
            <span className="about-headline-line block text-zinc-100 will-change-transform">
              THIS DIDN'T HAPPEN
            </span>
          </span>
          <span className="block overflow-hidden py-1">
            <span className="about-headline-line block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-zinc-200 to-white will-change-transform">
              OVERNIGHT.
            </span>
          </span>
        </h2>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-white/10 pt-10">
          {/* Left Column: Subheadline & Portrait / Bio */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-zinc-100 uppercase tracking-tight">
              STORIES. <br />
              SYSTEMS. <br />
              MOVING IMAGES.
            </h3>

            <div
              ref={portraitWrapperRef}
              className="relative aspect-[4/5] max-w-sm rounded bg-zinc-950 border border-white/15 overflow-hidden bracket-box will-change-transform shadow-2xl"
            >
              <img
                ref={portraitImgRef}
                src="/hero/jeet_portrait.jpg"
                alt="Jeet Nag"
                className="w-full h-full object-cover filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
                <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
                <span className="text-red-400">BANGALORE, IN</span>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Philosophy & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <p className="font-body text-base sm:text-xl text-zinc-300 leading-relaxed font-light">
              I'm <strong className="text-white font-semibold">Jeet Nag</strong>, an AI Video Creator and Editor based in Bangalore. My work combines creative direction, generative video tools, motion design and cinematic editing to turn ideas into compelling visual stories.
            </p>

            <p className="font-body text-sm sm:text-base text-zinc-400 leading-relaxed">
              From concept development and prompt engineering to generation, editing, sound and final delivery, I work across the complete visual production process. Currently Associate Video Editor at <strong className="text-zinc-200">GRX10 Solutions Bangalore</strong>, engineering scalable generative pipelines using Veo 3, Runway Gen-3, Kling AI, and ComfyUI.
            </p>

            {/* Numeric Stats Grid (Matching Reference sec_042) */}
            <div className="about-stats-grid grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="about-stat-card p-4 rounded-sm bg-zinc-950/60 border border-white/5 hover:border-red-500/40 transition-colors duration-300 space-y-1">
                <div className="font-display font-black text-4xl sm:text-5xl text-white">
                  3+
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-red-500 font-bold">
                  Years Creating
                </div>
                <p className="font-mono text-xs text-zinc-400 pt-1">
                  Helping brands tell realer stories through thoughtful video production and creative post-production.
                </p>
              </div>

              <div className="about-stat-card p-4 rounded-sm bg-zinc-950/60 border border-white/5 hover:border-red-500/40 transition-colors duration-300 space-y-1">
                <div className="font-display font-black text-4xl sm:text-5xl text-white">
                  200+
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-red-500 font-bold">
                  Videos Delivered
                </div>
                <p className="font-mono text-xs text-zinc-400 pt-1">
                  From short-form viral cuts to brand commercials, crafted with purpose, pacing and precision.
                </p>
              </div>

              <div className="about-stat-card p-4 rounded-sm bg-zinc-950/60 border border-white/5 hover:border-red-500/40 transition-colors duration-300 space-y-1">
                <div className="font-display font-black text-4xl sm:text-5xl text-white">
                  +40%
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-red-500 font-bold">
                  Avg Engagement Lift
                </div>
                <p className="font-mono text-xs text-zinc-400 pt-1">
                  Proven retention gains across social-first formats, live event aftermovies, and creator edits.
                </p>
              </div>

              <div className="about-stat-card p-4 rounded-sm bg-zinc-950/60 border border-white/5 hover:border-red-500/40 transition-colors duration-300 space-y-1">
                <div className="font-display font-black text-4xl sm:text-5xl text-white">
                  5+
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-red-500 font-bold">
                  AI Pipelines
                </div>
                <p className="font-mono text-xs text-zinc-400 pt-1">
                  End-to-end node architecture across Veo 3, Runway Gen-3, Kling, Seedance, and ComfyUI.
                </p>
              </div>
            </div>

            {/* Testimonial & Credibility Card (Matching Reference sec_052) */}
            <div className="about-testimonial-card mt-8 p-6 sm:p-8 bg-zinc-950 border border-white/10 rounded-sm relative overflow-hidden group hover:border-red-600/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] transition-all duration-300">
              <div className="absolute top-0 right-0 w-2 h-full bg-red-600" />
              <div className="flex items-center gap-1.5 text-red-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="font-mono text-xs text-zinc-400 ml-2">
                  5.0 / 5.0 VERIFIED RATING
                </span>
              </div>
              <blockquote className="font-body text-sm sm:text-base text-zinc-200 italic leading-relaxed">
                "Jeet’s ability to take complex generative AI tools and turn them into cinematic, rhythm-perfect video edits is truly exceptional. Every cut feels intentional, sounds punchy, and hits retention goals."
              </blockquote>
              <div className="font-mono text-xs text-zinc-400 mt-4 flex items-center justify-between">
                <span>— Studio Production Feedback</span>
                <span className="text-red-400 font-bold uppercase tracking-wider">
                  "YOU ABSOLUTELY NAILED IT."
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
