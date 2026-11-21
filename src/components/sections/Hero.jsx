import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../ui/Icons';
import heroImg from '../../assets/img/hero-img.jpg';
import resumePdf from '../../assets/img/Rishav Singh - Resume.pdf';
import Badge from '../ui/Badge';

export default function Hero({ projectCount = 18 }) {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Content) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <div className="mb-5">
              <Badge variant="default" className="text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to AI/GenAI, Data &amp; Full-Stack AI roles · Class of 2027
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.1] mb-4">
              Rishav Singh
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 mb-6">
              AI &amp; GenAI Engineer · Data Analyst · Pune, India
            </p>

            {/* Honest Bio */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl mb-8">
              I build AI systems that work offline, understand Indian languages, and stay grounded in source facts without hallucinating. 18 projects spanning agentic LangGraph workflows, local VLM pipelines, and data analytics dashboards. Currently finishing my B.Tech at MIT-WPU, Pune.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-sm hover:shadow-md active:scale-98"
              >
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-200 font-medium text-sm border border-stone-200 dark:border-stone-700 transition-all active:scale-98"
              >
                <span>Download Resume</span>
                <Download size={16} />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-stone-500 dark:text-stone-400">
              <a
                href="https://github.com/Rishav408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rishavsingh408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/RishavSingh408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:rishav4805@gmail.com"
                className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column (Card with Photo & Stats) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <div className="w-full max-w-[560px] bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xl overflow-hidden p-4">
              {/* Photo Frame - Full 16:9 landscape ratio */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 mb-4">
                <img
                  src={heroImg}
                  alt="Rishav Singh"
                  className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute bottom-3.5 left-3.5 bg-white/95 dark:bg-stone-900/90 backdrop-blur-md text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/60 dark:border-stone-700/60 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </div>
              </div>

              {/* Identity Details */}
              <div className="px-2.5 pb-2 text-left">
                <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-lg">
                  Rishav Singh
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                  MIT World Peace University · Pune (UTC+5:30)
                </p>
                <p className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 mt-1">
                  B.Tech AI &amp; DS (2023–2027) · CGPA 7.60
                </p>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-4 gap-1 p-2.5 mt-2 bg-stone-50 dark:bg-stone-950/80 rounded-xl border border-stone-100 dark:border-stone-800 text-center">
                <div className="py-1.5">
                  <div className="text-xl font-bold text-stone-900 dark:text-stone-100">{projectCount}</div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-wider font-medium">Projects</div>
                </div>
                <div className="py-1.5 border-l border-stone-200 dark:border-stone-800">
                  <div className="text-xl font-bold text-stone-900 dark:text-stone-100">3</div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-wider font-medium">Offline AI</div>
                </div>
                <div className="py-1.5 border-l border-stone-200 dark:border-stone-800">
                  <div className="text-xl font-bold text-stone-900 dark:text-stone-100">5</div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-wider font-medium">Languages</div>
                </div>
                <div className="py-1.5 border-l border-stone-200 dark:border-stone-800">
                  <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">1</div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-wider font-medium">IEEE Paper</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
