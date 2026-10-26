import React, { useEffect, useState } from 'react';

interface TimelineRulerProps {
  label?: string;
  leftTag?: string;
  rightTag?: string;
}

export const TimelineRuler: React.FC<TimelineRulerProps> = ({
  label = 'FEATURED WORKS',
  leftTag = 'SCENE_12.MP4',
  rightTag = 'MASTER_EDIT.PRPROJ'
}) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = (window.scrollY / totalScroll) * 100;
        setScrollPercent(Math.min(Math.max(current, 0), 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-zinc-950/90 border-y border-white/10 select-none relative overflow-hidden">
      {/* Upper Timeline Tick Marks */}
      <div className="h-6 w-full ruler-pattern relative flex items-center justify-between px-4 font-mono text-[9px] text-zinc-500">
        <span className="bg-black/80 px-1.5 py-0.5 rounded border border-white/5">00:00:00:00</span>
        <span className="hidden md:inline bg-black/80 px-1.5 py-0.5 rounded border border-white/5">00:01:15:12</span>
        <span className="hidden sm:inline bg-black/80 px-1.5 py-0.5 rounded border border-white/5">00:02:30:24</span>
        <span className="bg-black/80 px-1.5 py-0.5 rounded border border-white/5">00:03:45:00</span>

        {/* Dynamic Red Playhead Scrubber */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none transition-all duration-75 ease-out"
          style={{ left: `${scrollPercent}%` }}
        >
          {/* Top playhead indicator head */}
          <div className="w-3 h-3 bg-red-600 -translate-x-1.5 rounded-sm transform rotate-45 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
          {/* Vertical red playhead needle */}
          <div className="w-[1.5px] h-12 bg-red-600 shadow-[0_0_6px_rgba(220,38,38,0.8)] -translate-x-[0.75px]" />
        </div>
      </div>

      {/* Lower Clip Strip (Sequence signature) */}
      <div className="grid grid-cols-3 items-center py-2 px-4 sm:px-8 border-t border-white/5 bg-zinc-900/60 font-mono text-[10px] sm:text-xs text-zinc-400">
        <div className="truncate text-left text-zinc-500">
          [{leftTag}]
        </div>
        <div className="text-center font-bold tracking-widest text-zinc-200 uppercase truncate">
          {label}
        </div>
        <div className="truncate text-right text-zinc-500">
          [{rightTag}]
        </div>
      </div>
    </div>
  );
};
