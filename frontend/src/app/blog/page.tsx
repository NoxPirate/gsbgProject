import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
}

export default function BlogPage() {
  // Read posts from local JSON at build/runtime (server component)
  const dataPath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  let posts: Post[] = [];
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    posts = JSON.parse(raw || '[]');
  } catch {
    posts = [];
  }

  const demoPosts: Post[] = posts.length ? posts : [
    { id: 'demo-1', title: 'How to accelerate sales with Sales Cloud', excerpt: 'Practical steps to modernize your sales processes using Salesforce.' },
    { id: 'demo-2', title: 'Delivering world-class service with Service Cloud', excerpt: 'Improve customer satisfaction with omnichannel support strategies.' },
  ];

  return (
    <main className="min-h-screen pt-28">
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Insights & Articles</h1>
          <p className="mt-4 text-gray-600">Thought leadership and practical guides from our team.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {demoPosts.map((p) => (
            <article key={p.id} className="p-6 bg-white rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-2"><Link href={`/blog/${p.id}`}>{p.title}</Link></h2>
              <p className="text-gray-600">{p.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/admin/blog" className="inline-block bg-[#0b4f6c] text-white px-4 py-2 rounded">Admin: Add Post</Link>
        </div>
      </section>
    </main>
  );
}
