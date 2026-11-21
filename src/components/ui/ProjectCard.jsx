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
      className="group cursor-pointer flex flex-col h-full bg-white dark:bg-[#151311] rounded-2xl border border-[#E7E2DA] dark:border-[#2A2724] hover:border-amber-600/50 dark:hover:border-amber-400/40 shadow-xs hover:shadow-md transition-all overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-amber-500/70"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#F4F0E8] dark:bg-[#181614]">
        <img
          src={project.image}
          alt={project.title}
          loading={priority ? 'eager' : 'lazy'}
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-350"
        />
        {project.featured && (
          <div className="absolute top-2.5 left-2.5 bg-amber-50/95 dark:bg-[#151311]/90 backdrop-blur-sm text-amber-800 dark:text-amber-300 text-[11px] font-semibold font-mono px-2 py-0.5 rounded border border-amber-300 dark:border-amber-700/50 shadow-2xs">
            Featured
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4 sm:p-4.5 flex flex-col flex-grow justify-between">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-[17px] sm:text-[18px] font-bold text-stone-900 dark:text-[#EDE8E3] group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug font-serif">
              {project.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0 text-stone-400 group-hover:text-stone-700 dark:group-hover:text-[#EDE8E3] pt-0.5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
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
                  className="p-1 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                  aria-label="Live application"
                >
                  <ExternalLink size={15} />
                </a>
              )}
              <ArrowUpRight size={15} className="text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-stone-600 dark:text-[#9E988E] line-clamp-3 mb-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-2.5 border-t border-[#E7E2DA]/60 dark:border-[#2A2724]">
          {(project.tags || []).slice(0, 3).map((tag) => (
            <Tag key={tag} className="text-[11px] px-1.5 py-0.5">{tag}</Tag>
          ))}
          {(project.tags || []).length > 3 && (
            <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 self-center">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
