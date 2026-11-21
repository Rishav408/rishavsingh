import React from 'react';
import { User, GraduationCap, MapPin, Target, CheckCircle2 } from 'lucide-react';
import rksPhoto from '../../assets/img/rks.jpg';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
            <User size={14} />
            Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (Prose) */}
          <div className="lg:col-span-7 space-y-5 text-stone-700 dark:text-stone-300 text-left text-sm sm:text-base leading-relaxed">
            <p>
              I got into AI engineering because too many ML projects never escape the notebook: a high validation score, a couple of charts, and zero actual software around them. I focus on building systems that people can actually run: turning models into offline-first tools, grounded RAG assistants, and data-driven analytical platforms.
            </p>
            <p>
              My recent work focuses on three core projects:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-2.5">
                <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">1.</span>
                <span>
                  <strong className="text-stone-900 dark:text-stone-100">Jurista:</strong> An Indian legal intelligence copilot on LangChain and Gemini with session-isolated memory and a dynamic search router to verify live judicial records only when statutory texts are insufficient.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">2.</span>
                <span>
                  <strong className="text-stone-900 dark:text-stone-100">VeeraServe AI:</strong> An agentic AI waiter on LangGraph with 12 tools for cart management and order execution. Runs locally via LM Studio with Chroma RAG, achieving 0% hallucinated prices in measured evaluations.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">3.</span>
                <span>
                  <strong className="text-stone-900 dark:text-stone-100">Local AI Dashcam:</strong> A 5-phase offline pipeline using YOLO11 and Farneback optical flow to flag incidents first, cutting expensive VLM calls by about 80% without any cloud dependency.
                </span>
              </li>
            </ul>
            <p>
              The common thread across my work is building offline-first where sensitive data cannot leave the machine, and grounding every output in verified data rather than model assumptions.
            </p>
          </div>

          {/* Right Column (Photo & Fact Card) */}
          <div className="lg:col-span-5 flex flex-col gap-5 text-left">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={rksPhoto}
                  alt="Rishav Singh"
                  className="w-16 h-16 rounded-xl object-cover border border-stone-200 dark:border-stone-700"
                />
                <div>
                  <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base">
                    Rishav Singh
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    B.Tech AI &amp; Data Science (2023–2027)
                  </p>
                </div>
              </div>

              {/* Facts List */}
              <div className="space-y-3.5 text-xs sm:text-sm border-t border-stone-100 dark:border-stone-800 pt-4">
                <div className="flex items-start gap-3">
                  <GraduationCap size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800 dark:text-stone-200 block">Education &amp; CGPA</span>
                    <span className="text-stone-500 dark:text-stone-400">MIT-WPU, Pune · CGPA: 7.60/10</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800 dark:text-stone-200 block">Location</span>
                    <span className="text-stone-500 dark:text-stone-400">Pune, Maharashtra, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800 dark:text-stone-200 block">Target Roles</span>
                    <span className="text-stone-500 dark:text-stone-400">AI/GenAI Engineer · Data Analyst · Full-Stack AI</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800 dark:text-stone-200 block">Availability</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Open to internships &amp; fresher roles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Roles Focus Box */}
            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs text-blue-950 dark:text-blue-200">
              <span className="font-semibold block mb-1">Three Dedicated Focus Areas:</span>
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
