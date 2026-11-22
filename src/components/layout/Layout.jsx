import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNav from '../ui/BottomNav';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] dark:bg-[#0E0D0C] text-stone-900 dark:text-[#EDE8E3] selection:bg-amber-200 selection:text-stone-900 dark:selection:bg-amber-950 dark:selection:text-amber-200 transition-colors duration-250 font-sans">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow pt-20 pb-14 md:pb-0">
        {children}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
