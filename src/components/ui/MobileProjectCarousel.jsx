import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Github } from './Icons';

export default function MobileProjectCarousel({ projects, onSelect }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  if (!projects || projects.length === 0) return null;

  const total = projects.length;

  const prev = (e) => {
    if (e) e.stopPropagation();
    setActiveIdx((i) => (i - 1 + total) % total);
  };

  const next = (e) => {
    if (e) e.stopPropagation();
    setActiveIdx((i) => (i + 1) % total);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        next();
      } else {
        prev();
      }
    }
    setTouchStart(null);
  };

  const project = projects[activeIdx];

  return (
    <div className="mb-6">
      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden border border-[#E7E2DA] dark:border-[#2A2724] shadow-sm"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={() => onSelect(project)}
      >
        {/* Image */}
        <div className="aspect-video w-full relative bg-[#F4F0E8] dark:bg-[#181614]">
          <img
            src={project.image}
            alt={project.title}
            loading="eager"
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Featured badge */}
          <div className="absolute top-2.5 left-2.5 bg-amber-50/95 dark:bg-[#151311]/90 backdrop-blur-sm text-amber-800 dark:text-amber-300 text-[11px] font-semibold font-mono px-2 py-0.5 rounded border border-amber-300 dark:border-amber-700/50 shadow-2xs">
            Featured
          </div>

          {/* Link buttons top-right */}
          <div
            className="absolute top-2.5 right-2.5 flex items-center gap-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors"
                aria-label="GitHub repository"
              >
                <Github size={14} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors"
                aria-label="Live application"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          {/* Title + tags overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-white font-bold font-serif text-base leading-snug line-clamp-2 mb-1.5">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1">
              {(project.tags || []).slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-1.5 py-0.5 text-[10px] font-mono rounded bg-white/15 backdrop-blur-sm text-white border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/35 backdrop-blur-sm text-white hover:bg-black/55 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/35 backdrop-blur-sm text-white hover:bg-black/55 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-2.5">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === activeIdx
                ? 'w-5 h-2 bg-amber-600 dark:bg-amber-500'
                : 'w-2 h-2 bg-stone-300 dark:bg-stone-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
