"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminBlog() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Saving...');
    try {
      const res = await fetch('/api/admin/add-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, excerpt, content, featuredImage }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus('Saved — Redirecting to blog...');
        // clear inputs
        setTitle('');
        setExcerpt('');
        setContent('');
        setFeaturedImage('');
        // give the file system a moment then navigate to /blog
        setTimeout(() => router.push('/blog'), 700);
      } else {
        setStatus('Error saving');
      }
    } catch (err) {
      setStatus('Error saving');
    }
  };

  return (
    <main className="min-h-screen pt-28 bg-slate-50">
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
          <h1 className="text-2xl font-bold mb-4">Admin — Add Blog Post</h1>
          <p className="text-sm text-gray-500 mb-4">Create high-quality content. Use full HTML for content (images allowed).</p>
          <form onSubmit={handleSubmit} className="">
            <div className="mb-4">
              <label className="block mb-1 font-medium">Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} required aria-label="Title" placeholder="Article title" className="w-full border px-3 py-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Excerpt</label>
              <input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} aria-label="Excerpt" placeholder="Short summary" className="w-full border px-3 py-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Featured image URL</label>
              <input value={featuredImage} onChange={(e) => setFeaturedImage(e.target.value)} placeholder="/assets/images/hero.png or https://..." className="w-full border px-3 py-2 rounded" />
              {featuredImage && (
                <div className="mt-3">
                  <div className="text-xs text-gray-500 mb-1">Preview:</div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={featuredImage} alt="Preview" className="max-h-40 object-contain rounded shadow" />
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Content (HTML)</label>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} aria-label="Content" placeholder="Write HTML content here, images allowed" className="w-full border px-3 py-2 rounded h-56" />
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-[#0b4f6c] text-white px-4 py-2 rounded">Save & Publish</button>
              <div className="text-sm text-gray-600">{status}</div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
