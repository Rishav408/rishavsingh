import { useState, useMemo } from 'react';
import projectsData from '../docs/projects.json';

export function useProjects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category filter matching
      const matchesCategory = () => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'ai') {
          return project.category === 'ai';
        }
        if (activeFilter === 'data') {
          return project.category === 'data' || 
                 (project.tags && project.tags.some(t => ['Data Analysis', 'Data Analytics', 'Visualization'].includes(t)));
        }
        if (activeFilter === 'fullstack') {
          return project.category === 'web' || project.category === 'app';
        }
        return true;
      };

      // Search matching
      const matchesSearch = () => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(q) ||
          project.description.toLowerCase().includes(q) ||
          (project.tags && project.tags.some(t => t.toLowerCase().includes(q))) ||
          (project.techStack && project.techStack.some(s => s.toLowerCase().includes(q)))
        );
      };

      return matchesCategory() && matchesSearch();
    });
  }, [activeFilter, searchQuery]);

  return {
    projects: filteredProjects,
    allProjects: projectsData,
    activeFilter,
    setActiveFilter,
    selectedProject,
    setSelectedProject,
    searchQuery,
    setSearchQuery,
    totalCount: projectsData.length,
    filteredCount: filteredProjects.length
  };
}
