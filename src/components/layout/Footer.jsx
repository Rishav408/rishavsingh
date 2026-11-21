import React from 'react';
import { FileText } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../ui/Icons';
import resumePdf from '../../assets/img/Rishav Singh - Resume.pdf';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="text-base font-semibold text-stone-900 dark:text-stone-100">
            Rishav Singh
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
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
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/rishavsingh408"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/RishavSingh408"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter size={18} />
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-white transition-colors inline-flex items-center gap-1 text-xs font-medium"
              aria-label="Download Resume PDF"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>
          <span className="text-xs text-stone-400 dark:text-stone-500">
            React 18 · Tailwind CSS · Vite
          </span>
        </div>
      </div>
    </footer>
  );
}
