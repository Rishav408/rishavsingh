import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import Tag from '../ui/Tag';

export default function WritingList({ posts, onSelectPost }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {posts.map((post) => (
          <article
            key={post.id}
            onClick={() => onSelectPost(post)}
            className="group cursor-pointer bg-white dark:bg-[#151311] border border-[#E7E2DA] dark:border-[#2A2724] rounded-2xl p-6 shadow-xs hover:border-amber-400/80 dark:hover:border-amber-700/80 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-stone-400 mb-3">
                <Calendar size={13} />
                <time>{post.date}</time>
                <span>·</span>
                <span className="uppercase text-[10px] tracking-wider text-amber-800 dark:text-amber-400 font-semibold">
                  {post.category}
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors mb-2 leading-snug">
                {post.title}
              </h3>

              <p className="text-sm text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed mb-4">
                {post.excerpt}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E7E2DA] dark:border-[#2A2724] mb-4">
                {(post.tags || []).map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>Read technical note</span>
                <ArrowRight size={13} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
