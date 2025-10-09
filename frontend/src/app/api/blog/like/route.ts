import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;
    const dataPath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
    let posts: any[] = [];
    try {
      const raw = fs.readFileSync(dataPath, 'utf-8');
      posts = JSON.parse(raw || '[]');
    } catch {
      posts = [];
    }
    const idx = posts.findIndex((p) => p.id === id);
    if (idx === -1) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
    posts[idx].likes = (posts[idx].likes || 0) + 1;
    fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), 'utf-8');
    return NextResponse.json({ ok: true, likes: posts[idx].likes });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
