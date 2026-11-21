import React from 'react';

export default function Tag({ children, className = '' }) {
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-mono rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700/60 ${className}`}>
      {children}
    </span>
  );
}
