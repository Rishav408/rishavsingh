import React, { useState } from 'react';
import writingData from '../docs/writing.json';
import WritingList from '../components/writing/WritingList';
import WritingArticle from '../components/writing/WritingArticle';
import { BookOpen } from 'lucide-react';

export default function Writing() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {!selectedPost ? (
          <div>
            <div className="text-left mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
                <BookOpen size={14} />
                Technical Notes &amp; Papers
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                Writing
              </h1>
              <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
                Technical writeups on local VLM inference, explainable NLP across Indian languages, and practical constraints when shipping offline RAG.
              </p>
            </div>

            <WritingList posts={writingData} onSelectPost={setSelectedPost} />
          </div>
        ) : (
          <WritingArticle post={selectedPost} onBack={() => setSelectedPost(null)} />
        )}
      </div>
    </div>
  );
}
