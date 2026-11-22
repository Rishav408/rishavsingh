import React, { useState, useEffect } from 'react';
import { Layers, BookOpen, User, Cpu, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Projects', href: '#projects', icon: Layers },
  { label: 'Research', href: '#research', icon: BookOpen },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Cpu },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function BottomNav() {
  const [activeHref, setActiveHref] = useState('');

  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHref('#' + entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#FBF9F5]/95 dark:bg-[#0E0D0C]/95 backdrop-blur-md border-t border-[#E7E2DA] dark:border-[#2A2724]"
    >
      <div
        className="flex items-stretch"
        style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}
      >
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const isActive = activeHref === href;
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-2 transition-colors ${
                isActive
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-stone-500 dark:text-stone-400'
              }`}
              aria-label={label}
            >
              <Icon size={20} />
              <span className="text-[10px] font-mono">{label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
