import React from 'react';
import { User, GraduationCap, MapPin, Target, CheckCircle2 } from 'lucide-react';
import rksPhoto from '../../assets/img/rks.jpg';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-[#E7E2DA] dark:border-[#2A2724] scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-widest mb-2">
            <User size={14} />
            Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (Prose) */}
          <div className="lg:col-span-7 space-y-5 text-stone-700 dark:text-stone-300 text-left text-sm sm:text-base leading-relaxed">
            {/* Mobile Identity Strip - condensed representation on small screens */}
            <div className="lg:hidden flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-[#151311] border border-[#E7E2DA] dark:border-[#2A2724] shadow-2xs mb-4">
              <img
                src={rksPhoto}
                alt="Rishav Singh"
                className="w-12 h-12 rounded-xl object-cover border border-[#E7E2DA] dark:border-[#2A2724] shrink-0"
              />
              <div className="text-left">
                <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base leading-tight">
                  Rishav Singh
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                  MIT-WPU · CGPA 7.60 · Pune, India
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium mt-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to internships &amp; fresher roles
                </div>
              </div>
            </div>

            <p>
              I got into AI engineering because too many ML projects never escape the notebook: a high validation score, a couple of charts, and zero actual software around them. I focus on building systems that people can actually run: turning models into offline-first tools, grounded RAG assistants, and data-driven analytical platforms.
            </p>
            <p>
              My recent work focuses on three core projects:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="font-serif font-bold text-amber-700 dark:text-amber-400 text-base leading-none shrink-0 mt-0.5">1.</span>
                <span>
                  <strong className="text-stone-900 dark:text-stone-100 font-medium">Jurista:</strong> Indian legal intelligence copilot on LangChain and Gemini with session-isolated memory and dynamic search router.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-serif font-bold text-amber-700 dark:text-amber-400 text-base leading-none shrink-0 mt-0.5">2.</span>
                <span>
                  <strong className="text-stone-900 dark:text-stone-100 font-medium">VeeraServe AI:</strong> Agentic AI waiter on LangGraph with 12 tools for cart and order actions, local LM Studio inference, 0% hallucinated prices.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-serif font-bold text-amber-700 dark:text-amber-400 text-base leading-none shrink-0 mt-0.5">3.</span>
                <span>
                  <strong className="text-stone-900 dark:text-stone-100 font-medium">Local AI Dashcam:</strong> 5-phase offline pipeline using YOLO11 and Farneback optical flow, cutting VLM calls by ~80% offline.
                </span>
              </li>
            </ul>
            <p>
              The common thread across my work is building offline-first where sensitive data cannot leave the machine, and grounding every output in verified data rather than model assumptions.
            </p>
          </div>

          {/* Right Column (Photo & Fact Card) - Visible on lg+ screens */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-5 text-left">
            <div className="bg-white dark:bg-[#151311] border border-[#E7E2DA] dark:border-[#2A2724] rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={rksPhoto}
                  alt="Rishav Singh"
                  className="w-16 h-16 rounded-xl object-cover border border-[#E7E2DA] dark:border-[#2A2724]"
                />
                <div>
                  <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-lg leading-tight">
                    Rishav Singh
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 font-mono">
                    B.Tech AI &amp; Data Science (2023–2027)
                  </p>
                </div>
              </div>

              {/* Facts List */}
              <div className="space-y-3.5 text-xs sm:text-sm border-t border-[#E7E2DA] dark:border-[#2A2724] pt-4">
                <div className="flex items-start gap-3">
                  <GraduationCap size={16} className="text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800 dark:text-stone-200 block">Education &amp; CGPA</span>
                    <span className="text-stone-500 dark:text-stone-400">MIT-WPU, Pune · CGPA: 7.60/10</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800 dark:text-stone-200 block">Location</span>
                    <span className="text-stone-500 dark:text-stone-400">Pune, Maharashtra, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target size={16} className="text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800 dark:text-stone-200 block">Target Roles</span>
                    <span className="text-stone-500 dark:text-stone-400">AI/GenAI Engineer · Data Analyst · Full-Stack AI</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800 dark:text-stone-200 block">Availability</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">Open to internships &amp; fresher roles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Roles Focus Box */}
            <div className="p-4 rounded-xl bg-[#F4F0E8]/70 dark:bg-[#181614]/80 border border-[#E7E2DA] dark:border-[#2A2724] text-xs text-stone-800 dark:text-stone-300">
              <span className="font-semibold text-stone-900 dark:text-stone-100 block mb-1">Three Dedicated Focus Areas:</span>
              1. AI &amp; GenAI Engineering (RAG, tool-calling agents, local VLMs)<br/>
              2. Data Analysis (ETL, profiling, statistical &amp; time-series dashboards)<br/>
              3. Full-Stack with AI (FastAPI / Flask microservices with React frontends)
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
