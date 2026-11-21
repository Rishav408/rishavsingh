import React from 'react';

export default function Tag({ children, className = '' }) {
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-mono rounded-md bg-[#F4F0E8]/70 dark:bg-[#181614] text-stone-700 dark:text-stone-300 border border-[#E7E2DA] dark:border-[#2A2724] ${className}`}>
      {children}
    </span>
  );
}
