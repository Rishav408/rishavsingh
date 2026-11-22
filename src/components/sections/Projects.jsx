import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import MobileProjectCarousel from '../ui/MobileProjectCarousel';
import MobileProjectRow from '../ui/MobileProjectRow';
import { useProjects } from '../../hooks/useProjects';

const MOBILE_INITIAL_ROWS = 5;

export default function Projects() {
  const {
    projects,
    activeFilter,
    setActiveFilter,
    selectedProject,
    setSelectedProject,
    searchQuery,
    setSearchQuery,
    totalCount,
    filteredCount
  } = useProjects();

  const [showAllRows, setShowAllRows] = useState(false);

  const filters = [
    { id: 'all', label: 'All Projects', count: totalCount },
    { id: 'ai', label: 'AI & GenAI' },
    { id: 'data', label: 'Data Analytics' },
    { id: 'fullstack', label: 'Web & Full-Stack' },
  ];

  // Featured projects for the carousel: only when filter === 'all' and no search
  const showCarousel = activeFilter === 'all' && !searchQuery;
  const featuredProjects = projects.filter((p) => p.featured);

  // Mobile row list: all filtered projects
  const mobileRows = showAllRows ? projects : projects.slice(0, MOBILE_INITIAL_ROWS);
  const hasMore = projects.length > MOBILE_INITIAL_ROWS;

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-[#E7E2DA] dark:border-[#2A2724] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-widest mb-2 font-mono">
              <Sparkles size={14} />
              Portfolio Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-[#EDE8E3] font-serif">
              Selected Projects
            </h2>
            <p className="text-stone-600 dark:text-[#9E988E] text-sm sm:text-base mt-2 max-w-xl">
              18 technical systems built with grounded RAG pipelines, local offline LLM inference, and data-driven analytical dashboards.
            </p>
          </div>

          {/* Search box — sticky on mobile */}
          <div
            className="sticky top-14 z-20 bg-[#FBF9F5]/95 dark:bg-[#0E0D0C]/95 backdrop-blur-sm py-3 -mx-4 px-4
                       md:static md:bg-transparent md:py-0 md:mx-0 md:px-0 md:backdrop-blur-none"
          >
            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tech or title..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#151311] border border-[#E7E2DA] dark:border-[#2A2724] text-stone-900 dark:text-[#EDE8E3] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/70"
              />
            </div>
          </div>
        </div>

        {/* Filter Tabs — scrollable on mobile, wrapping on desktop */}
        <div className="overflow-x-auto scrollbar-hide mb-8 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex flex-nowrap md:flex-wrap items-center gap-2 md:gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer font-mono ${
                  activeFilter === f.id
                    ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950 font-semibold shadow-2xs'
                    : 'bg-white dark:bg-[#151311] text-stone-700 dark:text-[#D6D0C7] border border-[#E7E2DA] dark:border-[#2A2724] hover:border-amber-500/50'
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="text-xs text-stone-400 font-mono ml-auto whitespace-nowrap">
              Showing {filteredCount} of {totalCount}
            </span>
          </div>
        </div>

        {/* ── MOBILE LAYOUT (md:hidden) ── */}
        <div className="md:hidden">
          {/* Featured carousel — only when no active filter/search */}
          {showCarousel && featuredProjects.length > 0 && (
            <MobileProjectCarousel
              projects={featuredProjects}
              onSelect={setSelectedProject}
            />
          )}

          {/* Compact row list */}
          {projects.length > 0 ? (
            <>
              <p className="text-xs font-semibold font-mono text-stone-500 dark:text-stone-500 uppercase tracking-widest mb-2">
                {searchQuery || activeFilter !== 'all' ? 'Filtered Results' : 'All Projects'}
              </p>

              <div className="rounded-xl border border-[#E7E2DA] dark:border-[#2A2724] bg-white dark:bg-[#151311] overflow-hidden px-2">
                {mobileRows.map((project) => (
                  <MobileProjectRow
                    key={project.id}
                    project={project}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>

              {hasMore && (
                <button
                  onClick={() => setShowAllRows((v) => !v)}
                  className="mt-3 w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium font-mono text-amber-700 dark:text-amber-400 border border-amber-300/50 dark:border-amber-700/40 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors"
                >
                  {showAllRows ? (
                    <>
                      <ChevronUp size={14} />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={14} />
                      Show All {projects.length} Projects
                    </>
                  )}
                </button>
              )}
            </>
          ) : (
            <div className="py-12 text-center text-stone-500 dark:text-[#9E988E]">
              <p className="text-sm">No projects match "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
                className="mt-3 text-xs text-amber-700 dark:text-amber-400 hover:underline font-mono"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* ── DESKTOP LAYOUT (hidden on mobile) ── */}
        <motion.div
          layout
          className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
                priority={index < 4}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state for desktop */}
        {projects.length === 0 && (
          <div className="hidden md:block py-16 text-center text-stone-500 dark:text-[#9E988E]">
            <p className="text-sm">No projects match "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="mt-3 text-xs text-amber-700 dark:text-amber-400 hover:underline font-mono"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
