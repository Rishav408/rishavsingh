import React from 'react';
import { FileText } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../ui/Icons';
import resumePdf from '../../assets/img/Rishav_Singh_Resume.pdf';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E7E2DA] dark:border-[#2A2724] bg-[#F4F0E8]/50 dark:bg-[#0E0D0C] py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
            Rishav Singh
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-mono">
            AI &amp; GenAI Engineer · Data Analyst · Pune, India · &copy; {currentYear}
          </p>
        </div>

        {/* Right Links */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-5 text-stone-500 dark:text-stone-400">
            <a
              href="https://github.com/Rishav408"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/rishavsingh408"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/RishavSingh408"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter size={18} />
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1 text-xs font-mono font-medium"
              aria-label="Download Resume PDF"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>
          <span className="text-xs font-mono text-stone-400 dark:text-stone-500">
            React 18 · Tailwind CSS · Vite
          </span>
        </div>
      </div>
    </footer>
  );
}
