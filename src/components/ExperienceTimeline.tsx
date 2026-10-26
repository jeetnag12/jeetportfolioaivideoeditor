import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE, SKILLS_CATEGORIES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative bg-black text-white py-20 sm:py-28 border-b border-white/10 editorial-grid">
      <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="pb-8 border-b border-white/10 mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-red-500 mb-2 flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-red-600 inline-block" />
            <span>[05] — TRACK RECORD</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            WORK EXPERIENCE
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
            A chronological timeline of agency, studio, and commercial video production roles across India.
          </p>
        </div>

        {/* Experience Timeline Rows */}
        <div className="space-y-8">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.company + exp.period}
              className={`p-6 sm:p-8 rounded-sm border transition-all ${
                exp.isCurrent
                  ? 'bg-zinc-950 border-red-600/60 shadow-[0_0_30px_rgba(220,38,38,0.15)] bracket-box'
                  : 'bg-zinc-950/60 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      {exp.company}
                    </h3>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-500 border border-red-500/40 font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5">
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
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-red-500 mt-0.5 font-bold">›</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="p-6 bg-zinc-950 border border-white/10 rounded-sm hover:border-red-600/50 transition-colors bracket-box"
              >
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-red-400 mb-4 pb-2 border-b border-white/10">
                  {cat.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-sm bg-zinc-900 border border-white/5 text-zinc-200 hover:text-white hover:border-red-500/50 transition-colors"
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
