/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import fs from 'fs';
import path from 'path';

interface Post {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
}

export default async function PostPage(props: any) {
  const { params } = props;
  const dataPath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  let posts: Post[] = [];
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    posts = JSON.parse(raw || '[]');
  } catch {
    posts = [];
  }

  const post = posts.find((p) => p.id === params.slug) || {
    id: params.slug,
    title: 'Demo Post',
    content: 'This is a demo blog post. Replace with real content via admin.'
  };

  return (
    <main className="min-h-screen pt-28">
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
        </div>
      </section>
    </main>
  );
}
