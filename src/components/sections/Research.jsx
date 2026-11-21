import React from 'react';
import { BookOpen, CheckCircle2, Languages, ShieldCheck, Cpu } from 'lucide-react';
import { Github } from '../ui/Icons';
import Badge from '../ui/Badge';

export default function Research() {
  return (
    <section id="research" className="py-16 md:py-20 border-t border-stone-200 dark:border-stone-800 scroll-mt-12 bg-stone-50/50 dark:bg-stone-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
            <BookOpen size={14} />
            Academic Research
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Research &amp; Publications
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base mt-2 max-w-2xl">
            Lead author on an accepted IEEE conference paper addressing explainable, multilingual hate-speech analysis without black-box transformers.
          </p>
        </div>

        {/* Paper Feature Card */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <Badge variant="info" className="text-xs">
              IEEE Conference Publication
            </Badge>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={15} />
              <span>Status: Accepted (Revisions in Progress)</span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 leading-snug mb-3">
            A Real-time Multilingual Hate Speech Analysis Framework for Penta Language Corpus
          </h3>

          <p className="text-xs sm:text-sm font-medium text-stone-500 dark:text-stone-400 mb-6">
            Authors: <strong className="text-stone-800 dark:text-stone-200">Rishav Singh (Lead Author)</strong> · MIT World Peace University
          </p>

          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
            This work presents a framework for hate-speech analysis across five Indian languages (English, Hindi, Marathi, Bhojpuri, and Marwari) designed around transparent risk scoring. Rather than relying on black-box neural networks, the system implements a classical NLP pipeline that combines lexical matching with severity spans, rule-based causality extraction, and demographic bias auditing into an auditable composite score.
          </p>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-4 border-t border-stone-100 dark:border-stone-800">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0">
                <Languages size={18} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-stone-900 dark:text-stone-100">Penta-Language Corpus</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  English, Hindi, Marathi, Bhojpuri, and Marwari.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-stone-900 dark:text-stone-100">Transparent Risk Scoring</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  Lexical severity, causality, and demographic bias breakdown.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 shrink-0">
                <Cpu size={18} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-stone-900 dark:text-stone-100">Classical Statistical NLP</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  Naive Bayes and rule engines, fully auditable for moderation.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Rishav408/justify-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-900 text-xs sm:text-sm font-medium transition-colors"
            >
              <Github size={16} />
              <span>View Framework Repository</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
