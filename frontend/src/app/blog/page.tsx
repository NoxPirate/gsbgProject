import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import BackButton from '@/components/BackButton';
import LikeButton from '@/components/LikeButton';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  featuredImage?: string;
  likes?: number;
}

export default function BlogPage() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  let posts: Post[] = [];
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    posts = JSON.parse(raw || '[]');
  } catch {
    posts = [];
  }

  // Calculate generic read time based on excerpt length (placeholder logic)
  const getReadTime = (text: string) => {
    const words = text.split(' ').length;
    return Math.ceil(words / 50) + ' min read'; // rough estimate
  };

  return (
    <main className="min-h-screen bg-slate-50 relative">
      
      {/* HERO SECTION - Immersive Dark Theme */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden z-10 bg-[#0f172a] text-white">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 p-32 bg-purple-600/20 rounded-full blur-[100px] -mr-16 -mt-16 pointer-events-none opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-40 bg-blue-500/10 rounded-full blur-[120px] -ml-20 -mb-20 pointer-events-none opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]"></div>

        <div className="container mx-auto px-6 relative">
          <BackButton className="text-white/70 hover:text-white mb-8" />
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-sky-400 drop-shadow-sm">
                Perspectives
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300/90 mb-10 leading-relaxed max-w-2xl font-light">
              Thought leadership, practical guides, and real customer stories to help you navigate the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION - Floating over the hero */}
      <section className="relative z-20 -mt-20 px-6 pb-24">
        <div className="container mx-auto">
          
          {/* Featured/Latest Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {posts.map((p, index) => (
              <article 
                key={p.id} 
                className="group flex flex-col bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image Container */}
                <Link href={`/blog/${p.id}`} className="relative h-60 overflow-hidden block">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  {p.featuredImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={p.featuredImage} 
                      alt={p.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur flex items-center justify-center text-3xl">
                        📝
                      </div>
                    </div>
                  )}
                  {/* Tag Overlay */}
                  <div className="absolute top-4 left-4 z-20">
                     <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-slate-900/60 backdrop-blur-md rounded-full shadow-lg border border-white/10">
                        Article
                     </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <span>{getReadTime(p.excerpt)}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>Technology</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${p.id}`}>{p.title}</Link>
                  </h2>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3 flex-1 font-light">
                    {p.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <Link href={`/blog/${p.id}`} className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 group/link">
                      Read more 
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                    <div className="scale-90 origin-right">
                       <LikeButton id={p.id} initialLikes={p.likes || 0} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Fallback if no posts */}
          {posts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-xl font-bold text-slate-800">No posts found</h3>
              <p className="text-slate-500 mt-2">Check back later for new insights.</p>
            </div>
          )}

          {/* Admin Action */}
          <div className="mt-20 flex justify-center pb-10">
            <Link 
              href="/admin/blog" 
              className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-full shadow-lg shadow-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-medium"
            >
              <span>⚙️</span>
              <span>Admin Dashboard</span>
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
