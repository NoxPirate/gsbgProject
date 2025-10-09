"use client";
import React, { useEffect, useRef, useState } from 'react';
import LikeButton from './LikeButton';
import { useRouter } from 'next/navigation';

export default function ArticleControls({ id, initialLikes = 0 }: { id: string; initialLikes?: number }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.querySelector('article .post-content') as HTMLElement | null;
    contentRef.current = el;
    const onScroll = () => {
      if (!contentRef.current) return;
      const rect = contentRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight + 200;
      const scrolled = Math.min(Math.max(0, window.scrollY - (contentRef.current.offsetTop - 100)), total);
      const pct = total > 0 ? Math.round((scrolled / total) * 100) : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-16 left-0 right-0 h-1 z-50 pointer-events-none">
        <div className="h-1 bg-[#0b4f6c] transition-all" style={{ width: `${progress}%` }} />
      </div>
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => router.back()} className="text-sm text-gray-600">← Back</button>
        <div className="flex items-center gap-4">
          <LikeButton id={id} initialLikes={initialLikes} />
        </div>
      </div>
    </>
  );
}
