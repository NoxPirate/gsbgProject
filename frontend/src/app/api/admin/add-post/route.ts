import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, excerpt, content } = body;
    const dataPath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
    let posts = [];
    try {
      const raw = fs.readFileSync(dataPath, 'utf-8');
      posts = JSON.parse(raw || '[]');
    } catch {
      posts = [];
    }
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now();
    const post = { id, title, excerpt, content };
    posts.unshift(post);
    fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), 'utf-8');
    return NextResponse.json({ ok: true, post });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
