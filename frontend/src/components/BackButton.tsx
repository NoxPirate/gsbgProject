"use client";
import Link from "next/link";
import React from "react";

export default function BackButton({ href = "/" }: { href?: string }) {
  return (
    <div className="mb-6">
      <Link href={href} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm border border-slate-100 hover:translate-x-0.5 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0b4f6c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-[#0b4f6c]">Back to home</span>
      </Link>
    </div>
  );
}
