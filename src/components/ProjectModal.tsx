import React, { useEffect, useRef } from 'react';
import { X, Calendar, User, Clock, Film } from 'lucide-react';
import { type Project } from '../data/portfolioData';
import { gsap, EASES } from '../motion/motionSystem';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = React.useCallback(() => {
    if (!overlayRef.current || !contentRef.current) {
      onClose();
      return;
    }

    gsap.to(contentRef.current, {
      scale: 0.96,
      y: 15,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: onClose,
    });
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      if (overlayRef.current && contentRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: 'power2.out' }
        );
        gsap.fromTo(
          contentRef.current,
          { scale: 0.94, y: 25, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 0.35, ease: EASES.cinematic }
        );
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleClose]);

  if (!project) return null;

  const isVertical = project.aspectRatio === '9:16';

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className={`w-full ${
          isVertical ? 'max-w-xl' : 'max-w-4xl'
        } bg-zinc-950 border border-zinc-800 shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[92vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-zinc-900 border-b border-zinc-800 px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="font-mono text-xs uppercase text-zinc-300 tracking-wider">
              {project.category} · {project.aspectRatio}
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden">
          {project.embedType === 'youtube' ? (
            <div className="w-full aspect-video bg-black">
              <iframe
                src={project.videoUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : project.embedType === 'instagram' ? (
            <div className="w-full flex justify-center py-4 bg-zinc-950">
              <div className="w-[330px] sm:w-[360px] h-[580px] bg-black rounded overflow-hidden shadow-xl border border-zinc-800">
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  allowFullScreen
                  scrolling="no"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          ) : (
            <div className="w-full aspect-video bg-black">
              <video
                src={project.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>

        {/* Project Information */}
        <div className="p-5 sm:p-6 bg-zinc-950 overflow-y-auto space-y-4 border-t border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
              {project.title}
            </h3>
            {project.client && (
              <span className="font-mono text-xs text-red-400 bg-red-950/40 border border-red-800/40 px-2.5 py-1 rounded w-fit">
                {project.client}
              </span>
            )}
          </div>

          <p className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          {/* Meta details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-zinc-900 font-mono text-xs text-zinc-400">
            {project.year && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span>{project.year}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                <span>{project.duration}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-zinc-500" />
              <span>{project.aspectRatio}</span>
            </div>
            {project.client && (
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-zinc-500" />
                <span className="truncate">{project.client}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
