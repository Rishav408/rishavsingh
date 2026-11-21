import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import Tag from './Tag';

export default function ProjectCard({ project, onSelect, priority = false }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -4 }}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      className="group cursor-pointer flex flex-col h-full bg-white dark:bg-stone-900/90 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-700 shadow-sm hover:shadow-md transition-all overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
        <img
          src={project.image}
          alt={project.title}
          loading={priority ? 'eager' : 'lazy'}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-2.5 left-2.5 bg-stone-900/80 backdrop-blur-sm text-amber-300 text-[11px] font-medium px-2 py-0.5 rounded border border-amber-500/30">
            Featured
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4 sm:p-4.5 flex flex-col flex-grow justify-between">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-[15px] sm:text-base font-semibold text-stone-900 dark:text-stone-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
              {project.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0 text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-200 pt-0.5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 hover:text-stone-900 dark:hover:text-white transition-colors"
                  aria-label="GitHub repository"
                >
                  <Github size={15} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 hover:text-stone-900 dark:hover:text-white transition-colors"
                  aria-label="Live application"
                >
                  <ExternalLink size={15} />
                </a>
              )}
              <ArrowUpRight size={15} className="text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-stone-600 dark:text-stone-300 line-clamp-3 mb-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-2.5 border-t border-stone-100 dark:border-stone-800/80">
          {(project.tags || []).slice(0, 3).map((tag) => (
            <Tag key={tag} className="text-[11px] px-1.5 py-0.5">{tag}</Tag>
          ))}
          {(project.tags || []).length > 3 && (
            <span className="text-[11px] font-mono text-stone-400 self-center">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
