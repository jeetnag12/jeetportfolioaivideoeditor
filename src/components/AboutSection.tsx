import React from 'react';
import { Star } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-black text-white py-20 sm:py-28 border-b border-white/10 editorial-grid">
      <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Section Top Eyebrow */}
        <div className="font-mono text-xs uppercase tracking-widest text-red-500 mb-3 flex items-center gap-2">
          <span className="w-4 h-[1.5px] bg-red-600 inline-block" />
          <span>[03] — THE PHILOSOPHY</span>
        </div>

        {/* Massive Editorial Headline (Matching Reference sec_042) */}
        <h2 className="font-display font-black text-[clamp(2.2rem,6.2vw,5.2rem)] uppercase tracking-tighter leading-[0.95] max-w-5xl mb-12">
          THIS DIDN'T HAPPEN <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-zinc-200 to-white">
            OVERNIGHT.
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

            <div className="relative aspect-[4/5] max-w-sm rounded bg-zinc-950 border border-white/15 overflow-hidden bracket-box">
              <img
                src="/hero/jeet_portrait.jpg"
                alt="Jeet Nag"
                className="w-full h-full object-cover filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="space-y-1">
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

              <div className="space-y-1">
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

              <div className="space-y-1">
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

              <div className="space-y-1">
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
            <div className="mt-8 p-6 sm:p-8 bg-zinc-950 border border-white/10 rounded-sm relative overflow-hidden group">
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
