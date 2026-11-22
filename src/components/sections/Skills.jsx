import React, { useState } from 'react';
import { Cpu, BarChart3, MessageSquare, Layout, Terminal, CheckCircle, ChevronDown } from 'lucide-react';
import skillsData from '../../docs/skills.json';
import Tag from '../ui/Tag';

const CATEGORY_ICONS = {
  'AI & GenAI': Cpu,
  'Data Analysis & Visualization': BarChart3,
  'NLP & Audio': MessageSquare,
  'Full-Stack with AI': Layout,
  'Platforms & Tools': Terminal,
};

function MobileSkillsAccordion({ categories, softSkills }) {
  const [openIdx, setOpenIdx] = useState(0);

  const items = [
    ...categories.map((cat) => ({
      name: cat.name,
      icon: CATEGORY_ICONS[cat.name] || Cpu,
      iconBg: 'bg-amber-100/70 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300',
      description: cat.description,
      skills: cat.skills,
    })),
    {
      name: 'Engineering Practices',
      icon: CheckCircle,
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400',
      description: 'Working methodology, systems decomposition, and team collaboration',
      skills: softSkills,
    },
  ];

  return (
    <div className="md:hidden space-y-2 mt-4">
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isOpen = openIdx === idx;
        return (
          <div
            key={item.name}
            className={`bg-white dark:bg-[#151311] border rounded-2xl overflow-hidden transition-colors ${
              isOpen
                ? 'border-amber-300 dark:border-amber-700/60'
                : 'border-[#E7E2DA] dark:border-[#2A2724]'
            }`}
          >
            {/* Header */}
            <button
              className="w-full flex items-center gap-2.5 px-4 py-3.5 text-left"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
            >
              <div className={`p-1.5 rounded-lg shrink-0 ${item.iconBg}`}>
                <Icon size={16} />
              </div>
              <span className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm flex-1 leading-tight">
                {item.name}
              </span>
              {!isOpen && (
                <div className="flex gap-1 mr-2 flex-wrap max-w-[120px] justify-end">
                  {item.skills.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#F4F0E8] dark:bg-[#1E1B18] text-stone-600 dark:text-stone-400 border border-[#E7E2DA] dark:border-[#2A2724] leading-none whitespace-nowrap"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
              <ChevronDown
                size={16}
                className={`text-stone-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Expanded Content */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-4 pb-4">
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-3 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-[#E7E2DA] dark:border-[#2A2724] scroll-mt-12 bg-[#F4F0E8]/30 dark:bg-[#151311]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-widest mb-2">
            <Cpu size={14} />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Skills &amp; Capabilities
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base mt-2 max-w-2xl">
            Grouped by verified hands-on implementation across projects, research, and applications.
          </p>
        </div>

        {/* Mobile Accordion */}
        <MobileSkillsAccordion
          categories={skillsData.categories}
          softSkills={skillsData.softSkills}
        />

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {skillsData.categories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.name] || Cpu;
            return (
              <div
                key={cat.name}
                className="bg-white dark:bg-[#151311] border border-[#E7E2DA] dark:border-[#2A2724] rounded-2xl p-6 shadow-xs hover:border-amber-300 dark:hover:border-amber-800/80 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-amber-100/70 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base">
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
          <div className="bg-white dark:bg-[#151311] border border-[#E7E2DA] dark:border-[#2A2724] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                  <CheckCircle size={18} />
                </div>
                <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base">
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
