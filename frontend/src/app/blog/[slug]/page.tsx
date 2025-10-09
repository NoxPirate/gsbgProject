import React from 'react';
import fs from 'fs';
import path from 'path';
import ArticleControls from '../../../components/ArticleControls';

interface Post {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  featuredImage?: string;
  likes?: number;
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

  const found = posts.find((p) => p.id === params.slug);
  const post: Post = (found as Post) || {
    id: params.slug,
    title: 'Demo Post',
    content: '<p>This is a demo blog post. Replace with real content via admin.</p>'
  };

  return (
    <main className="min-h-screen pt-28 bg-white">
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <article>
            <ArticleControls id={post.id} initialLikes={post.likes || 0} />
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            {post.featuredImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.featuredImage} alt={post.title} className="w-full h-64 object-cover rounded-xl mb-6 shadow" />
            )}

            <div className="post-content prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          </article>
        </div>
      </section>
    </main>
  );
}
