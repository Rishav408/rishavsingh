import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import resumePdf from '../../assets/img/Rishav_Singh_Resume.pdf';
import logoImg from '../../assets/img/Rlogo.jpg';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROJECTS', href: '/#projects' },
    { name: 'RESEARCH', href: '/#research' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'SKILLS', href: '/#skills' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FBF9F5]/92 dark:bg-[#0E0D0C]/92 backdrop-blur-md border-b border-[#E7E2DA] dark:border-[#2A2724] shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 font-semibold text-stone-900 dark:text-[#EDE8E3] hover:opacity-85 transition-opacity"
        >
          <img 
            src={logoImg} 
            alt="Rishav Singh Logo" 
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-cover border border-[#E7E2DA] dark:border-[#2A2724] shadow-2xs" 
          />
          <span className="text-base sm:text-lg tracking-tight font-bold font-serif">Rishav Singh</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-6 text-sm font-semibold tracking-wide text-stone-600 dark:text-[#D6D0C7]">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`hover:text-amber-700 dark:hover:text-amber-400 transition-colors ${
                      location.pathname === link.href ? 'text-amber-700 dark:text-amber-400 font-bold' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="h-5 w-px bg-[#E7E2DA] dark:bg-[#2A2724]" />

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-stone-600 hover:text-stone-900 dark:text-[#D6D0C7] dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Status Dot */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to work
          </div>

          {/* Resume Link */}
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-stone-900 text-[#FBF9F5] dark:bg-[#EDE8E3] dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-white transition-all shadow-xs active:scale-98"
          >
            <span>Resume</span>
            <Download size={15} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl text-stone-600 dark:text-[#D6D0C7] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Full-Screen Overlay Menu */}
    {mobileMenuOpen && (
      <div className="md:hidden fixed inset-0 z-50 bg-[#FBF9F5] dark:bg-[#0E0D0C] flex flex-col justify-between p-6">
        {/* Top Header inside Overlay */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E7E2DA] dark:border-[#2A2724]">
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className="flex items-center gap-3 font-semibold text-stone-900 dark:text-[#EDE8E3]"
          >
            <img 
              src={logoImg} 
              alt="Rishav Singh Logo" 
              className="w-9 h-9 rounded-lg object-cover border border-[#E7E2DA] dark:border-[#2A2724]" 
            />
            <span className="text-base tracking-tight font-bold font-serif">Rishav Singh</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-stone-600 dark:text-[#D6D0C7] hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl text-stone-700 dark:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Large Touch Navigation Links */}
        <nav className="flex flex-col justify-center gap-2 py-8 my-auto">
          {navLinks.map((link) => {
            const isCurrent = location.pathname === link.href || location.hash === link.href.replace('/', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`py-3.5 px-3 rounded-2xl text-2xl font-serif font-bold tracking-tight transition-colors flex items-center justify-between ${
                  isCurrent 
                    ? 'text-amber-700 dark:text-amber-400 bg-amber-500/10' 
                    : 'text-stone-800 dark:text-stone-100 hover:text-amber-700 dark:hover:text-amber-400'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-sm font-mono opacity-40 font-normal">→</span>
              </a>
            );
          })}
        </nav>

        {/* Bottom Actions Bar */}
        <div className="pt-4 border-t border-[#E7E2DA] dark:border-[#2A2724] space-y-4 pb-safe">
          <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-semibold font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to work · Class of 2027
          </div>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold rounded-2xl bg-stone-900 text-white dark:bg-[#EDE8E3] dark:text-stone-900 shadow-md transition-all active:scale-98"
          >
            <span>Download Resume PDF</span>
            <Download size={16} />
          </a>
        </div>
      </div>
    )}
    </>
  );
}
