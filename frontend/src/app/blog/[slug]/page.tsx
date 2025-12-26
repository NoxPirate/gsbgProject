import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ArticleControls from '../../../components/ArticleControls';
import BackButton from '@/components/BackButton';

interface Post {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  featuredImage?: string;
  likes?: number;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dataPath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  let posts: Post[] = [];
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    posts = JSON.parse(raw || '[]');
  } catch {
    posts = [];
  }

  const found = posts.find((p) => p.id === slug);
  const post: Post = (found as Post) || {
    id: slug,
    title: 'Post Not Found',
    content: '<p>The article you are looking for could not be found.</p>'
  }; 

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* HERO SECTION - Immersive Dark Theme */}
      <section className="relative pt-32 pb-48 overflow-hidden z-10 bg-[#0f172a] text-white">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 p-32 bg-purple-600/20 rounded-full blur-[100px] -mr-16 -mt-16 pointer-events-none opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-40 bg-blue-500/10 rounded-full blur-[120px] -ml-20 -mb-20 pointer-events-none opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]"></div>

        <div className="container mx-auto px-6 relative max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
                <Link href="/blog" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white hover:bg-white/20 transition-all">
                    ← Back to Articles
                </Link>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight drop-shadow-lg">
                {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-slate-300 text-sm font-medium">
                <span className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white ring-2 ring-white/20">GS</span>
                    GSBG Team
                </span>
                <span>•</span>
                <span>{new Date().toLocaleDateString()}</span> {/* Placeholder date logic */}
            </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="relative z-20 -mt-32 px-6 pb-24">
        <div className="container mx-auto max-w-3xl">
          <article className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden">
            
            {/* Featured Image */}
            {post.featuredImage && (
              <div className="relative w-full h-[400px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            )}

            <div className="p-8 md:p-12">
               {/* Controls (Progress bar etc) */}
               <div className="mb-8 border-b border-slate-100 pb-6 flex items-center justify-between">
                  <div className="text-sm text-slate-500 font-medium tracking-wide uppercase">Article Content</div>
                  <div className="scale-100">
                    <ArticleControls id={post.id} initialLikes={post.likes || 0} />
                  </div>
               </div>

                {/* Typography Content */}
               <div 
                  className="post-content prose prose-lg prose-slate prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600 max-w-none" 
                  dangerouslySetInnerHTML={{ __html: post.content || '' }} 
                />

                {/* Footer of Article */}
                <div className="mt-12 pt-8 border-t border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4">Share this article</h3>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                            🔗
                        </button>
                        <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-colors">
                            🐦
                        </button>
                        <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:text-white transition-colors">
                            💼
                        </button>
                    </div>
                </div>
            </div>
          </article>
        </div>
      </section>

    </main>
  );
}
