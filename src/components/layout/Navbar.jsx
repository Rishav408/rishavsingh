import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import resumePdf from '../../assets/img/Rishav Singh - Resume.pdf';
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
    { name: 'WRITING', href: '/writing', isRoute: true },
    { name: 'CONTACT', href: '/#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-xs py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 font-semibold text-stone-900 dark:text-stone-100 hover:opacity-80 transition-opacity"
        >
          <img 
            src={logoImg} 
            alt="Rishav Singh Logo" 
            className="w-7 h-7 rounded-md object-cover border border-stone-200 dark:border-stone-700" 
          />
          <span className="text-sm tracking-tight font-medium">Rishav Singh</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-xs font-medium tracking-wider text-stone-600 dark:text-stone-400">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`hover:text-stone-950 dark:hover:text-white transition-colors ${
                      location.pathname === link.href ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
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
                  className="hover:text-stone-950 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="h-4 w-px bg-stone-200 dark:bg-stone-800" />

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Status Dot */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to work
          </div>

          {/* Resume Link */}
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 hover:opacity-90 transition-opacity shadow-xs"
          >
            <span>Resume</span>
            <Download size={13} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-stone-600 dark:text-stone-400"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 px-6 py-5 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={handleLinkClick}
                    className="text-stone-700 dark:text-stone-300 hover:text-blue-600 py-1"
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-stone-700 dark:text-stone-300 hover:text-blue-600 py-1"
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to work · 2027
            </div>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
            >
              Resume PDF
              <Download size={13} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
