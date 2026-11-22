import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../ui/Icons';
import heroImg from '../../assets/img/hero-img.jpg';
import resumePdf from '../../assets/img/Rishav_Singh_Resume.pdf';
import Badge from '../ui/Badge';

export default function Hero({ projectCount = 18 }) {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── MOBILE-ONLY REDESIGNED HERO ── */}
        <div className="md:hidden flex flex-col gap-4 text-left">

          {/* Top Status & Class Pill */}
          <div className="flex items-center justify-between gap-2 w-full">
            <Badge variant="accent" className="text-[11px] font-mono py-1 px-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to AI &amp; Full-Stack Roles
            </Badge>
            <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 font-semibold">
              Class of 2027
            </span>
          </div>

          {/* Hero Name & Title */}
          <div>
            <h1 className="text-3xl font-bold font-serif tracking-tight text-stone-900 dark:text-[#EDE8E3] leading-tight">
              Rishav Singh
            </h1>
            <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mt-0.5">
              AI &amp; GenAI Engineer · Data Analyst · Pune, India
            </p>
          </div>

          {/* Featured Visual Portrait Card (High-Impact Showcase) */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-white dark:bg-[#151311] border border-[#E7E2DA] dark:border-[#2A2724] shadow-sm">
            {/* Cinematic Portrait with Glass Overlays */}
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#F4F0E8] dark:bg-[#181614]">
              <img
                src={heroImg}
                alt="Rishav Singh - AI & GenAI Engineer"
                className="w-full h-full object-cover object-top"
              />
              {/* Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Floating Status Glass Pill (Top Left) */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[11px] font-mono font-medium border border-white/20 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available</span>
              </div>

              {/* Education Pill (Top Right) */}
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-black/45 backdrop-blur-md text-stone-200 text-[10px] font-mono border border-white/15">
                MIT-WPU · 7.60 CGPA
              </div>

              {/* Identity & Focus Anchor (Bottom Left) */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="text-white font-serif font-bold text-lg leading-tight drop-shadow-xs">
                  Rishav Singh
                </p>
                <p className="text-stone-300 text-[11px] font-mono mt-0.5 drop-shadow-2xs">
                  Offline AI Systems · Grounded RAG · Agentic Workflows
                </p>
              </div>
            </div>

            {/* Integrated Stats Strip directly under photo */}
            <div className="grid grid-cols-4 divide-x divide-[#E7E2DA] dark:divide-[#2A2724] bg-[#F4F0E8]/70 dark:bg-[#181614]/80 border-t border-[#E7E2DA] dark:border-[#2A2724] text-center py-2.5">
              <div>
                <div className="text-lg font-bold font-mono text-stone-900 dark:text-[#EDE8E3] leading-none">{projectCount}</div>
                <div className="text-[10px] text-stone-500 dark:text-[#9E988E] uppercase tracking-wider font-medium mt-1">Projects</div>
              </div>
              <div>
                <div className="text-lg font-bold font-mono text-stone-900 dark:text-[#EDE8E3] leading-none">3</div>
                <div className="text-[10px] text-stone-500 dark:text-[#9E988E] uppercase tracking-wider font-medium mt-1">Offline AI</div>
              </div>
              <div>
                <div className="text-lg font-bold font-mono text-stone-900 dark:text-[#EDE8E3] leading-none">5</div>
                <div className="text-[10px] text-stone-500 dark:text-[#9E988E] uppercase tracking-wider font-medium mt-1">Langs</div>
              </div>
              <div>
                <div className="text-lg font-bold font-mono text-amber-700 dark:text-amber-400 leading-none">1</div>
                <div className="text-[10px] text-stone-500 dark:text-[#9E988E] uppercase tracking-wider font-medium mt-1">IEEE Paper</div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <p className="text-[13px] text-stone-700 dark:text-[#D6D0C7] leading-relaxed">
            I build AI systems that work offline, understand Indian languages, and stay grounded in source facts without hallucinating. 18 projects spanning agentic LangGraph workflows, local VLM pipelines, and analytical dashboards.
          </p>

          {/* Dual CTAs (Side by Side) */}
          <div className="grid grid-cols-2 gap-2.5 w-full pt-1">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-stone-950 font-semibold text-xs transition-all shadow-xs active:scale-98"
            >
              <span>View Projects</span>
              <ArrowDown size={14} />
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F4F0E8] hover:bg-[#EAE4D8] text-stone-800 dark:bg-[#181614] dark:hover:bg-[#211E1B] dark:text-[#EDE8E3] font-medium text-xs border border-[#E7E2DA] dark:border-[#2A2724] transition-all active:scale-98"
            >
              <span>Resume PDF</span>
              <Download size={14} />
            </a>
          </div>

          {/* Social Connect Bar */}
          <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white dark:bg-[#151311] border border-[#E7E2DA] dark:border-[#2A2724] text-stone-500 dark:text-[#9E988E] w-full">
            <span className="text-xs font-mono font-medium text-stone-400 dark:text-stone-500">Profiles:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Rishav408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-[#F4F0E8] dark:hover:bg-[#181614] hover:text-stone-900 dark:hover:text-[#EDE8E3] transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/rishavsingh408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-[#F4F0E8] dark:hover:bg-[#181614] hover:text-stone-900 dark:hover:text-[#EDE8E3] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/RishavSingh408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-[#F4F0E8] dark:hover:bg-[#181614] hover:text-stone-900 dark:hover:text-[#EDE8E3] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:rishav4805@gmail.com"
                className="p-1.5 rounded-lg hover:bg-[#F4F0E8] dark:hover:bg-[#181614] hover:text-stone-900 dark:hover:text-[#EDE8E3] transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* ── DESKTOP LAYOUT (unchanged, hidden on mobile) ── */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Content) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <div className="mb-5">
              <Badge variant="accent" className="text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to AI/GenAI, Data &amp; Full-Stack AI roles · Class of 2027
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-[#EDE8E3] leading-[1.08] mb-4 font-serif">
              Rishav Singh
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-medium text-amber-800 dark:text-amber-400 mb-6">
              AI &amp; GenAI Engineer · Data Analyst · Pune, India
            </p>

            {/* Honest Bio */}
            <p className="text-base sm:text-lg text-stone-700 dark:text-[#D6D0C7] leading-relaxed max-w-2xl mb-8">
              I build AI systems that work offline, understand Indian languages, and stay grounded in source facts without hallucinating. 18 projects spanning agentic LangGraph workflows, local VLM pipelines, and data analytics dashboards. Currently finishing my B.Tech at MIT-WPU, Pune.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-stone-950 font-semibold text-sm transition-all shadow-xs hover:shadow-sm active:scale-98"
              >
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F4F0E8] hover:bg-[#EAE4D8] text-stone-800 dark:bg-[#181614] dark:hover:bg-[#211E1B] dark:text-[#EDE8E3] font-medium text-sm border border-[#E7E2DA] dark:border-[#2A2724] transition-all active:scale-98"
              >
                <span>Download Resume</span>
                <Download size={16} />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-stone-500 dark:text-[#9E988E]">
              <a
                href="https://github.com/Rishav408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-[#F4F0E8] dark:hover:bg-[#181614] hover:text-stone-900 dark:hover:text-[#EDE8E3] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rishavsingh408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-[#F4F0E8] dark:hover:bg-[#181614] hover:text-stone-900 dark:hover:text-[#EDE8E3] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/RishavSingh408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-[#F4F0E8] dark:hover:bg-[#181614] hover:text-stone-900 dark:hover:text-[#EDE8E3] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:rishav4805@gmail.com"
                className="p-2 rounded-lg hover:bg-[#F4F0E8] dark:hover:bg-[#181614] hover:text-stone-900 dark:hover:text-[#EDE8E3] transition-colors"
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
            <div className="w-full max-w-[560px] bg-white dark:bg-[#151311] rounded-2xl border border-[#E7E2DA] dark:border-[#2A2724] shadow-sm overflow-hidden p-4">
              {/* Photo Frame - Full 16:9 landscape ratio */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#F4F0E8] dark:bg-[#181614] mb-4">
                <img
                  src={heroImg}
                  alt="Rishav Singh"
                  className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute bottom-3.5 left-3.5 bg-white/95 dark:bg-[#151311]/92 backdrop-blur-md text-emerald-800 dark:text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#E7E2DA] dark:border-[#2A2724] shadow-2xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </div>
              </div>

              {/* Identity Details */}
              <div className="px-2.5 pb-2 text-left">
                <h3 className="font-bold text-stone-900 dark:text-[#EDE8E3] text-xl font-serif">
                  Rishav Singh
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-[#9E988E] mt-0.5">
                  MIT World Peace University · Pune (UTC+5:30)
                </p>
                <p className="text-xs sm:text-sm font-mono text-amber-800 dark:text-amber-400 mt-1 font-semibold">
                  B.Tech AI &amp; DS (2023–2027) · CGPA 7.60
                </p>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-4 gap-1 p-2.5 mt-2 bg-[#F4F0E8]/70 dark:bg-[#181614]/70 rounded-xl border border-[#E7E2DA] dark:border-[#2A2724] text-center">
                <div className="py-1.5">
                  <div className="text-xl font-bold text-stone-900 dark:text-[#EDE8E3] font-mono">{projectCount}</div>
                  <div className="text-[11px] text-stone-500 dark:text-[#9E988E] uppercase tracking-wider font-medium">Projects</div>
                </div>
                <div className="py-1.5 border-l border-[#E7E2DA] dark:border-[#2A2724]">
                  <div className="text-xl font-bold text-stone-900 dark:text-[#EDE8E3] font-mono">3</div>
                  <div className="text-[11px] text-stone-500 dark:text-[#9E988E] uppercase tracking-wider font-medium">Offline AI</div>
                </div>
                <div className="py-1.5 border-l border-[#E7E2DA] dark:border-[#2A2724]">
                  <div className="text-xl font-bold text-stone-900 dark:text-[#EDE8E3] font-mono">5</div>
                  <div className="text-[11px] text-stone-500 dark:text-[#9E988E] uppercase tracking-wider font-medium">Languages</div>
                </div>
                <div className="py-1.5 border-l border-[#E7E2DA] dark:border-[#2A2724]">
                  <div className="text-xl font-bold text-amber-700 dark:text-amber-400 font-mono">1</div>
                  <div className="text-[11px] text-stone-500 dark:text-[#9E988E] uppercase tracking-wider font-medium">IEEE Paper</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>{/* end desktop grid */}
      </div>
    </section>
  );
}
