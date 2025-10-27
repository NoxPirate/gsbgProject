"use client";
import React, { useState } from "react";
import Chatbot from "@/components/Chatbot";

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-chatbot">
      {!open && (
        <button
          aria-label="Open chatbot"
          className="floating-button"
          onClick={() => setOpen(true)}
        >
          💬
        </button>
      )}

      {open && (
        <div className="floating-panel">
          <div className="floating-header">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">🤖</div>
              <div className="font-semibold">Ask our AI anything</div>
            </div>
            <div>
              <button className="text-sm px-3 py-1 bg-white/10 rounded" onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>

          <div className="floating-body">
            <Chatbot />
          </div>
        </div>
      )}
    </div>
  );
}
