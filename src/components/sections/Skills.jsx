import React from 'react';
import { Cpu, BarChart3, MessageSquare, Layout, Terminal, CheckCircle } from 'lucide-react';
import skillsData from '../../docs/skills.json';
import Tag from '../ui/Tag';

const CATEGORY_ICONS = {
  'AI & GenAI': Cpu,
  'Data Analysis & Visualization': BarChart3,
  'NLP & Audio': MessageSquare,
  'Full-Stack with AI': Layout,
  'Platforms & Tools': Terminal,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800 scroll-mt-12 bg-stone-50/40 dark:bg-stone-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
            <Cpu size={14} />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Skills &amp; Capabilities
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base mt-2 max-w-2xl">
            Grouped by verified hands-on implementation across projects, research, and applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {skillsData.categories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.name] || Cpu;
            return (
              <div
                key={cat.name}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base">
                      {cat.name}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-500 dark:text-stone-400 mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cat.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Soft Skills Card */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle size={18} />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base">
                  Engineering Practices
                </h3>
              </div>

              <p className="text-xs text-stone-500 dark:text-stone-400 mb-4 leading-relaxed">
                Working methodology, systems decomposition, and team collaboration
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {skillsData.softSkills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
