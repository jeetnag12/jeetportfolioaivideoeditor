import React from 'react';
import { CLIENT_STRIP, PERSONAL_INFO } from '../data/portfolioData';

export const CredibilityStrip: React.FC = () => {
  return (
    <section className="w-full bg-black border-b border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        {/* Left Red Highlight Card (Matching Reference sec_000) */}
        <div className="lg:col-span-4 bg-red-700 text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-red-200 mb-2">
              STUDIO RECORD
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
              className="p-5 sm:p-6 flex flex-col justify-between hover:bg-zinc-900 transition-colors group min-h-[130px]"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 group-hover:text-red-400 transition-colors">
                {client.tag}
              </span>
              <div>
                <div className="font-display font-extrabold text-sm sm:text-base text-zinc-200 group-hover:text-white transition-colors">
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
