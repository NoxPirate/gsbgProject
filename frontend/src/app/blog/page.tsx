import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  featuredImage?: string;
  likes?: number;
}

import LikeButton from '../../components/LikeButton';

export default function BlogPage() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  let posts: Post[] = [];
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    posts = JSON.parse(raw || '[]');
  } catch {
    posts = [];
  }

  return (
    <main className="min-h-screen pt-28 bg-gradient-to-b from-white to-slate-50">
      <section className="container mx-auto px-6 py-14">
        <div className="max-w-6xl mx-auto mb-6">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-sky-50 to-white p-8 shadow-md flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold">Insights & Articles</h1>
              <p className="mt-3 text-gray-600">Thought leadership, practical guides, and real customer stories to help you get more from cloud investments.</p>
            </div>
            <div>
              <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow text-sm text-gray-700 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                Back to Home
              </Link>
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <article key={p.id} className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                {p.featuredImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.featuredImage} alt={p.title} className="w-full h-44 object-cover" />
                ) : (
                  <div className="w-full h-44 bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center">
                    <div className="text-sky-700 font-semibold">Article</div>
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-2"><Link href={`/blog/${p.id}`}>{p.title}</Link></h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{p.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link href={`/blog/${p.id}`} className="text-sm text-sky-700 font-medium">Read article →</Link>
                    <div className="flex items-center gap-3">
                      <LikeButton id={p.id} initialLikes={p.likes || 0} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/admin/blog" className="inline-block bg-sky-700 text-white px-6 py-3 rounded-lg shadow">Admin: Add Post</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
