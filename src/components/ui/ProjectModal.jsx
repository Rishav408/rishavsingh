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
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] flex flex-col bg-[#FBF9F5] dark:bg-[#151311] border border-[#E7E2DA] dark:border-[#2A2724] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden mt-auto sm:my-auto"
        >
          {/* Mobile drag handle indicator */}
          <div className="sm:hidden flex justify-center pt-3 pb-1 absolute top-0 left-0 right-0 z-20 pointer-events-none">
            <div className="w-10 h-1 rounded-full bg-white/70 shadow-xs" />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Banner image */}
          <div className="relative h-48 sm:h-64 w-full bg-[#F4F0E8] dark:bg-[#181614] overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-left">
              <h2 id="modal-title" className="text-xl sm:text-3xl font-bold text-white mb-2 leading-tight font-serif">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {(project.tags || []).map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs bg-white/20 backdrop-blur-sm text-white rounded font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-700 dark:text-[#D6D0C7] text-left pb-10 sm:pb-8">
            {/* Problem & Concept */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-amber-800 dark:text-amber-400 mb-2 font-mono">
                Problem &amp; Concept
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-stone-700 dark:text-[#EDE8E3]">
                {project.concept || project.description}
              </p>
            </div>

            {/* System Architecture */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-amber-800 dark:text-amber-400 mb-2 font-mono">
                System Architecture
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-stone-700 dark:text-[#EDE8E3] mb-4">
                {project.architecture}
              </p>

              {/* Architecture steps pipeline */}
              {project.archSteps && project.archSteps.length > 0 && (
                <div className="p-4 bg-[#F4F0E8]/70 dark:bg-[#1E1B18]/70 rounded-2xl border border-[#E7E2DA] dark:border-[#2A2724] overflow-x-auto">
                  <div className="flex items-center justify-between min-w-max gap-2 py-1">
                    {project.archSteps.map((step, idx) => {
                      const IconComponent = ICON_MAP[step.icon] || Cpu;
                      return (
                        <React.Fragment key={step.label}>
                          <div className="flex flex-col items-center gap-1.5 text-center px-2">
                            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 flex items-center justify-center shadow-2xs">
                              <IconComponent size={18} />
                            </div>
                            <span className="text-xs font-medium text-stone-800 dark:text-[#EDE8E3] max-w-[90px] leading-tight font-mono">
                              {step.label}
                            </span>
                          </div>
                          {idx < project.archSteps.length - 1 && (
                            <ArrowRight size={16} className="text-stone-400 dark:text-stone-600 shrink-0 mx-1" />
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
              <div className="p-4.5 bg-[#F4F0E8]/60 dark:bg-[#181614]/60 rounded-2xl border border-[#E7E2DA] dark:border-[#2A2724]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-800 dark:text-amber-400 mb-3 font-mono">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(project.techStack || []).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              {/* Differentiators */}
              <div className="p-4.5 bg-[#F4F0E8]/60 dark:bg-[#181614]/60 rounded-2xl border border-[#E7E2DA] dark:border-[#2A2724]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-800 dark:text-amber-400 mb-3 font-mono">
                  Key Differentiators
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-[#D6D0C7]">
                  {(project.differentiators || []).map((diff, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">•</span>
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E7E2DA] dark:border-[#2A2724]">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 text-sm font-semibold rounded-xl bg-stone-900 hover:bg-stone-800 text-white dark:bg-[#EDE8E3] dark:hover:bg-white dark:text-stone-900 transition-colors shadow-xs"
                >
                  <Github size={16} />
                  <span>View Repository</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 text-sm font-semibold rounded-xl bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-stone-950 transition-colors shadow-xs"
                >
                  <ExternalLink size={16} />
                  <span>Open Live App</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
