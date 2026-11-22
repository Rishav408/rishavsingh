import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function MobileProjectRow({ project, onSelect }) {
  return (
    <button
      onClick={() => onSelect(project)}
      className="w-full flex items-center gap-3 py-3 px-1 border-b border-[#E7E2DA] dark:border-[#2A2724] hover:bg-stone-50 dark:hover:bg-[#151311] active:bg-stone-100 dark:active:bg-[#1a1816] transition-colors text-left last:border-b-0"
    >
      {/* Thumbnail */}
      <div className="shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-[#F4F0E8] dark:bg-[#181614]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle: title + tags */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-stone-900 dark:text-[#EDE8E3] font-serif truncate leading-tight mb-1">
          {project.title}
        </p>
        <div className="flex gap-1 flex-wrap">
          {(project.tags || []).slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-block px-1.5 py-0.5 text-[10px] font-mono rounded-md bg-[#F4F0E8]/70 dark:bg-[#181614] text-stone-700 dark:text-stone-300 border border-[#E7E2DA] dark:border-[#2A2724]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right: arrow icon */}
      <ArrowUpRight
        size={16}
        className="shrink-0 text-stone-400 dark:text-stone-500 group-hover:text-amber-600 dark:group-hover:text-amber-400"
      />
    </button>
  );
}
