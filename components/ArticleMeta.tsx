"use client";

import { useState, useEffect } from "react";
import { ShareIcon } from '@heroicons/react/24/outline';

export default function ArticleMeta({ date, readingTime, articleSlug }: { date: string; readingTime?: string; articleSlug: string }) {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const [articleUrl, setArticleUrl] = useState<string | null>(null);

  useEffect(() => {
    if (articleSlug) {
      setArticleUrl(`${window.location.origin}/articles/${articleSlug}`);
    }
  }, [articleSlug]);

  const handleCopyClick = async () => {
    if (!articleUrl) return;

    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (error) {
      console.error('Failed to copy URL:', error);
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2000);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-gray-400 mb-2 border-b border-gray-800 pb-3">
      <div className="flex items-center gap-2">
        <span>{date}</span>
        {readingTime && (
          <>
            <span>•</span>
            <span>{readingTime}</span>
          </>
        )}
      </div>

      {articleSlug && (
        <div className="flex items-center gap-2">
          {copyStatus !== 'idle' && (
            <span className={`px-2 py-1 rounded whitespace-nowrap text-xs ${
              copyStatus === 'copied' ? 'bg-gray-800 text-[var(--link-color)]' : 'bg-red-800 text-red-400'
            }`}>
              {copyStatus === 'copied' ? 'copied!' : 'error!'}
            </span>
          )}
          <button
            onClick={handleCopyClick}
            className="flex items-center gap-1 p-1 rounded-md transition-colors duration-200
                       text-[var(--link-color)] hover:text-[var(--link-hover-color)]"
            aria-label="Copy article URL to clipboard"
          >
            <ShareIcon className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}