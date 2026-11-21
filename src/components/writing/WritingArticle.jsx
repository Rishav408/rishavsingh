import React from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import Tag from '../ui/Tag';

export default function WritingArticle({ post, onBack }) {
  if (!post) return null;

  return (
    <div className="max-w-3xl mx-auto text-left py-6">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-mono font-medium text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 mb-8 cursor-pointer group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to all writing</span>
      </button>

      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-400 mb-3">
          <Calendar size={13} />
          <time>{post.date}</time>
          <span>·</span>
          <span className="uppercase text-[11px] tracking-wider text-amber-800 dark:text-amber-400 font-semibold">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {(post.tags || []).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {post.image && (
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 mb-8 border border-[#E7E2DA] dark:border-[#2A2724]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}
      </header>

      {/* HTML Content */}
      <div 
        className="prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-relaxed space-y-4 text-base"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
