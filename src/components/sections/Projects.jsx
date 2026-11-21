import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import { useProjects } from '../../hooks/useProjects';

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

  const filters = [
    { id: 'all', label: 'All Projects', count: totalCount },
    { id: 'ai', label: 'AI & GenAI' },
    { id: 'data', label: 'Data Analytics' },
    { id: 'fullstack', label: 'Web & Full-Stack' },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
              <Sparkles size={14} />
              Portfolio Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Selected Projects
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
              18 technical systems built with grounded RAG pipelines, local offline LLM inference, and data-driven analytical dashboards.
            </p>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or title..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-xs'
                  : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800 hover:border-stone-400'
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="text-xs text-stone-400 ml-auto hidden sm:inline">
            Showing {filteredCount} of {totalCount}
          </span>
        </div>

        {/* Projects Grid - 4 Columns */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
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

        {/* Empty Search State */}
        {projects.length === 0 && (
          <div className="py-16 text-center text-stone-500 dark:text-stone-400">
            <p className="text-sm">No projects match "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="mt-3 text-xs text-blue-600 dark:text-blue-400 hover:underline"
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
