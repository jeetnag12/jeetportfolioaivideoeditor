import React, { useState, useRef } from 'react';
import { Plus, Play, Table, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';
import { type Project, PROJECTS } from '../data/portfolioData';

interface ProjectGalleryProps {
  onSelectProject: (p: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'edl'>('grid');
  const reelRef = useRef<HTMLDivElement>(null);

  const categories = [
    'ALL',
    'GENERATIVE AI',
    'MOTION DESIGN',
    'COMMERCIAL & ADS',
    'CONCERTS & EVENTS',
    'TRAVEL & CINEMATIC'
  ];

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const scrollReel = (direction: 'left' | 'right') => {
    if (reelRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      reelRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="works" className="relative bg-black text-white py-16 sm:py-24 border-b border-white/10">
      {/* Header and Controls */}
      <div className="px-4 sm:px-8 md:px-12 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-red-500 mb-2 flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-red-600 inline-block" />
              <span>[02] — SELECTED REEL</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              FEATURED WORKS
            </h2>
          </div>

          {/* Dual Layout Switcher (Sequenc Signature: Poster vs EDL) */}
          <div className="flex items-center gap-2 bg-zinc-950 p-1 rounded border border-white/10">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-sm font-mono text-xs uppercase transition-all ${
                viewMode === 'grid'
                  ? 'bg-red-600 text-white font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>POSTER REEL</span>
            </button>
            <button
              onClick={() => setViewMode('edl')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-sm font-mono text-xs uppercase transition-all ${
                viewMode === 'edl'
                  ? 'bg-red-600 text-white font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>EDL TABLE</span>
            </button>
          </div>
        </div>

        {/* Category Pills Strip */}
        <div className="flex items-center justify-between gap-4 mt-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-sm whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Reel Nav Arrows (when in grid mode) */}
          {viewMode === 'grid' && (
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollReel('left')}
                className="w-8 h-8 rounded bg-zinc-900 hover:bg-red-600 text-zinc-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollReel('right')}
                className="w-8 h-8 rounded bg-zinc-900 hover:bg-red-600 text-zinc-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* VIEW 1: HORIZONTAL & GRID POSTER REEL (Matching Reference sec_007 & sec_111.5) */}
      {viewMode === 'grid' ? (
        <div className="px-4 sm:px-8 md:px-12">
          {/* Horizontal Scroll Track */}
          <div
            ref={reelRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth snap-x"
          >
            {filteredProjects.map((project) => {
              const isVertical = project.aspectRatio === '9:16';
              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`group flex-shrink-0 cursor-pointer snap-start transition-all duration-300 ${
                    isVertical ? 'w-[260px] sm:w-[280px]' : 'w-[360px] sm:w-[460px]'
                  }`}
                >
                  {/* Thumbnail Container */}
                  <div className="relative bg-zinc-950 border border-white/10 overflow-hidden bracket-box group-hover:border-red-600/80 transition-all duration-300">
                    <div
                      className={`relative w-full overflow-hidden ${
                        isVertical ? 'aspect-[9/16]' : 'aspect-video'
                      }`}
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 group-hover:brightness-100 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                      {/* Top Corner Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono text-[10px] text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span>{project.aspectRatio}</span>
                      </div>

                      {/* Top Right Duration */}
                      {project.duration && (
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono text-[10px] text-zinc-300">
                          {project.duration}
                        </div>
                      )}

                      {/* Bottom Right Corner [+] Expansion Button (Sequenc signature) */}
                      <div className="absolute bottom-3 right-3 w-8 h-8 rounded-sm bg-white/10 backdrop-blur-md group-hover:bg-red-600 text-white flex items-center justify-center border border-white/20 group-hover:border-red-500 transition-all duration-300">
                        <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                      </div>

                      {/* Play overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg shadow-red-900/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metadata below Card (Matching Reference t_111.5s) */}
                  <div className="mt-3.5 space-y-1">
                    <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500">
                      <span>©{project.year || '2026'}</span>
                      <span className="text-red-400 uppercase tracking-widest text-[10px]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-base sm:text-lg text-zinc-200 group-hover:text-white tracking-tight uppercase transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="font-mono text-xs text-zinc-400 line-clamp-1">
                      {project.tags.join(' — ')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* VIEW 2: EDL TABLE VIEW (Edit Decision List) */
        <div className="px-4 sm:px-8 md:px-12">
          <div className="w-full border border-white/10 rounded overflow-x-auto bg-zinc-950">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-zinc-900/80 text-zinc-400 uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-4">CLIP ID</th>
                  <th className="py-3 px-4">PROJECT TITLE</th>
                  <th className="py-3 px-4">CATEGORY</th>
                  <th className="py-3 px-4">FORMAT</th>
                  <th className="py-3 px-4">CLIENT / IP</th>
                  <th className="py-3 px-4">YEAR</th>
                  <th className="py-3 px-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredProjects.map((project, idx) => (
                  <tr
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="hover:bg-zinc-900 cursor-pointer transition-colors group"
                  >
                    <td className="py-3.5 px-4 text-zinc-500">
                      [{String(idx + 1).padStart(3, '0')}]
                    </td>
                    <td className="py-3.5 px-4 font-display font-bold text-sm text-zinc-200 group-hover:text-white transition-colors">
                      {project.title}
                    </td>
                    <td className="py-3.5 px-4 text-red-400">
                      {project.category}
                    </td>
                    <td className="py-3.5 px-4 text-zinc-400">
                      {project.aspectRatio} ({project.duration || '01:00'})
                    </td>
                    <td className="py-3.5 px-4 text-zinc-300">
                      {project.client || 'Jeet Nag Original'}
                    </td>
                    <td className="py-3.5 px-4 text-zinc-500">
                      {project.year || '2026'}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="inline-flex items-center gap-1 text-red-500 group-hover:text-red-400 font-bold">
                        <span>PLAY</span>
                        <Play className="w-3 h-3 fill-current" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};
