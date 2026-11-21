import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, ArrowRight,
  Search, Sliders, Database, Cpu, Scale, MessageCircle,
  Bot, ShoppingCart, Settings, Video, Scan, Target,
  Brain, FileText, Type, Globe, Filter, Activity,
  UserPlus, Mic, ClipboardCheck, Film, Layers, Eye,
  Moon, Home, LogIn, Users, LayoutDashboard, Bell,
  Upload, CheckSquare, Link as LinkIcon, BarChart, Check,
  GitBranch, UserCheck, Camera, Smile, TrendingUp,
  ClipboardList, GitMerge, PieChart, Calendar, Heart,
  Hand, BookOpen, CheckCircle, User, Cloud, Map
} from 'lucide-react';
import { Github } from './Icons';
import Tag from './Tag';

// Icon map helper
const ICON_MAP = {
  Search, Sliders, Database, Cpu, Scale, MessageCircle,
  Bot, ShoppingCart, Settings, Video, Scan, Target,
  Brain, FileText, Type, Globe, Filter, Activity,
  UserPlus, Mic, ClipboardCheck, Film, Layers, Eye,
  Moon, Home, LogIn, Users, LayoutDashboard, Bell,
  Upload, CheckSquare, Link: LinkIcon, BarChart, Check,
  GitBranch, UserCheck, Camera, Smile, TrendingUp,
  ClipboardList, GitMerge, PieChart, Calendar, Heart,
  Hand, BookOpen, CheckCircle, User, Cloud, Map
};

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Banner image */}
          <div className="relative h-48 sm:h-64 w-full bg-stone-100 dark:bg-stone-800 overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {(project.tags || []).map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs bg-white/20 backdrop-blur-sm text-white rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-stone-700 dark:text-stone-300">
            {/* Problem & Concept */}
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Problem &amp; Concept
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-300">
                {project.concept || project.description}
              </p>
            </div>

            {/* System Architecture */}
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-100 mb-2">
                System Architecture
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-300 mb-4">
                {project.architecture}
              </p>

              {/* Architecture steps pipeline */}
              {project.archSteps && project.archSteps.length > 0 && (
                <div className="p-4 bg-stone-50 dark:bg-stone-950/60 rounded-xl border border-stone-200 dark:border-stone-800 overflow-x-auto">
                  <div className="flex items-center justify-between min-w-max gap-2 py-1">
                    {project.archSteps.map((step, idx) => {
                      const IconComponent = ICON_MAP[step.icon] || Cpu;
                      return (
                        <React.Fragment key={step.label}>
                          <div className="flex flex-col items-center gap-1.5 text-center px-2">
                            <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-sm">
                              <IconComponent size={18} />
                            </div>
                            <span className="text-xs font-medium text-stone-700 dark:text-stone-300 max-w-[90px] leading-tight">
                              {step.label}
                            </span>
                          </div>
                          {idx < project.archSteps.length - 1 && (
                            <ArrowRight size={16} className="text-stone-400 shrink-0 mx-1" />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Two column: Stack & Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Tech Stack */}
              <div className="p-4 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-800">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-200 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(project.techStack || []).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              {/* Differentiators */}
              <div className="p-4 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-800">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-200 mb-3">
                  Key Differentiators
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                  {(project.differentiators || []).map((diff, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold shrink-0">•</span>
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-100 dark:border-stone-800">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-900 transition-colors shadow-sm"
                >
                  <Github size={16} />
                  View Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-sm"
                >
                  <ExternalLink size={16} />
                  Open Live App
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
