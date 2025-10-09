"use client";
import React, { useState } from 'react';

export default function LikeButton({ id, initialLikes = 0 }: { id: string; initialLikes?: number }) {
  const [likes, setLikes] = useState<number>(initialLikes || 0);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    if (loading) return;
    setLoading(true);
    setLikes((s) => s + 1);
    try {
      const res = await fetch('/api/blog/like', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
      const json = await res.json();
      if (json.ok && typeof json.likes === 'number') setLikes(json.likes);
    } catch {
      // noop
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleLike} className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-500" aria-label={`Like post ${id}`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-6-4.35-9-7.36C-1.14 8.59 3.5 3 8.26 6.04 10 7.3 12 9 12 9s2-1.7 3.74-2.96C20.5 3 26.14 8.59 21 13.64 18 16.65 12 21 12 21z"/></svg>
      <span>{likes}</span>
    </button>
  );
}
