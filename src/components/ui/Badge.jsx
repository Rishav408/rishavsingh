import React from 'react';

export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60',
    info: 'bg-amber-100/70 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60',
    accent: 'bg-[#F4F0E8] text-stone-800 dark:bg-[#181614] dark:text-stone-300 border border-[#E7E2DA] dark:border-[#2A2724]',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-full ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
}
