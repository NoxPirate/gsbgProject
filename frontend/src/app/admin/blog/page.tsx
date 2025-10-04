"use client";
import React, { useState } from 'react';

export default function AdminBlog() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Saving...');
    try {
      const res = await fetch('/api/admin/add-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, excerpt, content }),
      });
      if (res.ok) {
        setStatus('Saved');
        setTitle('');
        setExcerpt('');
        setContent('');
      } else {
        setStatus('Error saving');
      }
    } catch {
      setStatus('Error saving');
    }
  };

  return (
    <main className="min-h-screen pt-28">
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-4">Admin - Add Blog Post</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="mb-4">
            <label className="block mb-1">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border px-3 py-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Excerpt</label>
            <input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="w-full border px-3 py-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Content (HTML)</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full border px-3 py-2 rounded h-40" />
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-[#0b4f6c] text-white px-4 py-2 rounded">Save</button>
            <div>{status}</div>
          </div>
        </form>
      </section>
    </main>
  );
}
