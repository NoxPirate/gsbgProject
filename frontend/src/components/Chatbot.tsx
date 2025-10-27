"use client";
import React, { useEffect, useRef, useState } from "react";

type Msg = { id: string; sender: "user" | "bot"; text: string };

export default function Chatbot() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const sessionIdRef = useRef<string | null>(null);

  useEffect(() => {
    // simple session id
    sessionIdRef.current = sessionIdRef.current || Math.random().toString(36).slice(2);
  }, []);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text) return;
    const userMsg: Msg = { id: Date.now().toString(), sender: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text, session_id: sessionIdRef.current }),
      });
      const data = await res.json();
      const botText = data?.answer || data?.message || data?.error || "No response from server.";
      const botMsg: Msg = { id: (Date.now() + 1).toString(), sender: "bot", text: String(botText) };
      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      const errMsg: Msg = { id: (Date.now() + 2).toString(), sender: "bot", text: "Error connecting to chatbot." };
      setMessages((m) => [...m, errMsg]);
    } finally {
      setLoading(false);
    }
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 text-white p-4 font-semibold flex items-center justify-between">
          <span>💬 GSBG Chatbot</span>
          <div className="flex gap-2 items-center">
            {/* WhatsApp link: use env var if set, otherwise fallback to owner's number */}
            <a
              href={`https://wa.me/91${process.env.NEXT_PUBLIC_OWNER_PHONE || '9100000000'}`}
              target="_blank"
              rel="noreferrer"
              className="bg-white/20 text-white px-3 py-1 rounded text-sm"
            >
              Contact owner on WhatsApp
            </a>

            {/* Email link: use env var if set, otherwise fallback to owner's email */}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_OWNER_EMAIL || 'sales@gsbg.co.in'}`}
              className="bg-white/20 text-white px-3 py-1 rounded text-sm"
            >
              Email owner
            </a>
          </div>
        </div>
        <div ref={messagesRef} className="p-4 h-80 overflow-y-auto bg-gray-50">
          {messages.length === 0 && <div className="text-gray-500">Start the conversation — ask about services, pricing, or request a demo.</div>}
          {messages.map((m) => (
            <div key={m.id} className={`mb-3 flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`${m.sender === "user" ? "bg-blue-600 text-white" : "bg-white text-gray-800 border"} px-4 py-2 rounded-lg max-w-[80%]`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t bg-white">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder={loading ? "Waiting for response..." : "Type your message..."}
              className="flex-1 border px-3 py-2 rounded"
              disabled={loading}
            />
            <button onClick={send} className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
