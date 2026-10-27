import React, { useState, useRef, useEffect } from 'react';
import { Plus, Play, Table, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';
import { type Project, PROJECTS } from '../data/portfolioData';
import { gsap, EASES } from '../motion/motionSystem';

interface ProjectGalleryProps {
  onSelectProject: (p: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'edl'>('grid');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  const categories = [
    'ALL',
    'GENERATIVE AI',
    'MOTION DESIGN',
    'COMMERCIAL & ADS',
    'CONCERTS & EVENTS',
    'TRAVEL & CINEMATIC',
  ];

  const filteredProjects =
    selectedCategory === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const scrollReel = (direction: 'left' | 'right') => {
    if (reelRef.current) {
      const scrollAmount = direction === 'left' ? -460 : 460;
      reelRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Section Entrance ScrollTrigger Animation
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

        tl.from('.gallery-eyebrow', {
          x: -20,
          opacity: 0,
          duration: 0.6,
          ease: EASES.cinematic,
          clearProps: 'transform,opacity',
        });

        tl.from(
          '.gallery-title',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: EASES.cinematicSmooth,
            clearProps: 'transform,opacity',
          },
          '-=0.3'
        );

        tl.from(
          '.gallery-controls',
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
            ease: EASES.cinematic,
            clearProps: 'transform,opacity',
          },
          '-=0.4'
        );

        tl.from(
          '.gallery-categories',
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
            ease: EASES.cinematic,
            clearProps: 'transform,opacity',
          },
          '-=0.3'
        );
      }

      // 2. Initial card reel stagger
      if (reelRef.current) {
        gsap.from('.project-card', {
          opacity: 0,
          y: 40,
          scale: 0.97,
          duration: 0.85,
          stagger: 0.08,
          ease: EASES.cinematic,
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: reelRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Filter & Layout change animation (only triggers on user interaction, NOT on first mount)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (viewMode === 'grid' && reelRef.current) {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 20, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: EASES.cinematic,
          clearProps: 'transform,opacity',
        }
      );
    } else if (viewMode === 'edl' && tableContainerRef.current) {
      gsap.fromTo(
        'table tbody tr',
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          stagger: 0.03,
          ease: EASES.cinematic,
          clearProps: 'transform,opacity',
        }
      );
    }
  }, [selectedCategory, viewMode]);

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative bg-black text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden"
    >
      {/* Header and Controls */}
      <div ref={headerRef} className="px-4 sm:px-8 md:px-12 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="gallery-eyebrow font-mono text-xs uppercase tracking-widest text-red-500 mb-2 flex items-center gap-2">
              <span className="w-4 h-[1.5px] bg-red-600 inline-block" />
              <span>[02] — SELECTED REEL</span>
            </div>
            <h2 className="gallery-title font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              FEATURED WORKS
            </h2>
          </div>

          {/* Dual Layout Switcher (Sequenc Signature: Poster vs EDL) */}
          <div className="gallery-controls flex items-center gap-2 bg-zinc-950 p-1 rounded border border-white/10">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-sm font-mono text-xs uppercase transition-all duration-300 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-red-600 text-white font-bold shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>POSTER REEL</span>
            </button>
            <button
              onClick={() => setViewMode('edl')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-sm font-mono text-xs uppercase transition-all duration-300 cursor-pointer ${
                viewMode === 'edl'
                  ? 'bg-red-600 text-white font-bold shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>EDL TABLE</span>
            </button>
          </div>
        </div>

        {/* Category Pills Strip */}
        <div className="gallery-categories flex items-center justify-between gap-4 mt-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-bold shadow-md scale-[1.02]'
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
                className="w-8 h-8 rounded bg-zinc-900 hover:bg-red-600 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-red-500 cursor-pointer"
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollReel('right')}
                className="w-8 h-8 rounded bg-zinc-900 hover:bg-red-600 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-red-500 cursor-pointer"
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* VIEW 1: HORIZONTAL & GRID POSTER REEL */}
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
                  className={`project-card group flex-shrink-0 cursor-pointer snap-start transition-all duration-300 ${
                    isVertical ? 'w-[260px] sm:w-[280px]' : 'w-[360px] sm:w-[460px]'
                  }`}
                >
                  {/* Thumbnail Container */}
                  <div className="relative bg-zinc-950 border border-white/10 overflow-hidden bracket-box group-hover:border-red-600/80 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.25)] transition-all duration-300">
                    <div
                      className={`relative w-full overflow-hidden ${
                        isVertical ? 'aspect-[9/16]' : 'aspect-video'
                      }`}
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-108 group-hover:brightness-100 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 group-hover:opacity-75 transition-opacity duration-300" />

                      {/* Top Corner Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono text-[10px] text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span>{project.aspectRatio}</span>
                      </div>

                      {/* Top Right Duration */}
                      {project.duration && (
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono text-[10px] text-zinc-300">
                          {project.duration}
                        </div>
                      )}

                      {/* Bottom Right Corner [+] Expansion Button (Sequenc signature) */}
                      <div className="absolute bottom-3 right-3 w-8 h-8 rounded-sm bg-white/10 backdrop-blur-md group-hover:bg-red-600 text-white flex items-center justify-center border border-white/20 group-hover:border-red-500 transition-all duration-300 group-hover:scale-110">
                        <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                      </div>

                      {/* Play overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg shadow-red-900/60 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metadata below Card (Matching Reference t_111.5s) */}
                  <div className="mt-3.5 space-y-1">
                    <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500">
                      <span>©{project.year || '2026'}</span>
                      <span className="text-red-400 uppercase tracking-widest text-[10px] font-semibold">
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
        <div ref={tableContainerRef} className="px-4 sm:px-8 md:px-12">
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
                    className="hover:bg-zinc-900/90 cursor-pointer transition-colors group"
                  >
                    <td className="py-3.5 px-4 text-zinc-500 group-hover:text-red-400 transition-colors">
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
                      <span className="inline-flex items-center gap-1.5 text-red-500 group-hover:text-red-400 font-bold group-hover:translate-x-1 transition-transform">
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
