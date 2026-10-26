import React from 'react';

export const FilmstripTicker: React.FC = () => {
  const items = [
    "LET'S MAKE SOMETHING UNFORGETTABLE",
    "BOOK A PROJECT",
    "READY TO ROLL",
    "CINEMATIC AI VIDEO PRODUCTION",
    "PREMIERE PRO & AFTER EFFECTS",
    "VEO 3 · RUNWAY · KLING 3.0",
    "MOTION DESIGN & VISUAL STORIES",
    "BANGALORE · GLOBAL COMMISSIONS"
  ];

  return (
    <div className="w-full bg-red-600 text-white overflow-hidden py-2.5 relative select-none border-y border-red-700">
      {/* Top Film Sprockets */}
      <div className="sprockets-top px-2 mb-1.5 opacity-40">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="sprocket-hole" />
        ))}
      </div>

      {/* Marquee Text Content */}
      <div className="flex animate-marquee whitespace-nowrap">
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider">
              {item}
            </span>
            <span className="w-2.5 h-2.5 bg-black mx-6 inline-block transform rotate-45" />
          </div>
        ))}
      </div>

      {/* Bottom Film Sprockets */}
      <div className="sprockets-bottom px-2 mt-1.5 opacity-40">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="sprocket-hole" />
        ))}
      </div>
    </div>
  );
};
