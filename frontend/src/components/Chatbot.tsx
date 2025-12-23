"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Msg = { id: string; sender: "user" | "bot"; text: string };

export default function Chatbot() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const sessionIdRef = useRef<string | null>(null);

  useEffect(() => {
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
    <div className="flex flex-col h-full">
      <div ref={messagesRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              👋
            </div>
            <h4 className="font-semibold text-dark mb-2">Welcome to GSBG!</h4>
            <p className="text-sm text-gray-500 max-w-[240px] mx-auto">
              I can help you with services, pricing, or scheduling a demo. How can I assist you today?
            </p>
          </div>
        )}

        {messages.map((m) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={m.id}
            className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${m.sender === "user"
                  ? "bg-gradient-to-r from-primary to-primary-dark text-white rounded-tr-none"
                  : "bg-white text-dark border border-gray-100 rounded-tl-none"
                }`}
            >
              {m.text}
            </div>
          </motion.div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-gray-100">
        <div className="relative flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Type your message..."
            className="flex-1 bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
            disabled={loading}
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="p-3 bg-primary text-white rounded-xl hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <div className="mt-2 flex justify-center gap-4 text-xs text-gray-400">
          <a href={`https://wa.me/91${process.env.NEXT_PUBLIC_OWNER_PHONE || '9372904186'}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <span>WhatsApp</span>
          </a>
          <span>•</span>
          <a href={`mailto:${process.env.NEXT_PUBLIC_OWNER_EMAIL || 'ritikv.123456789@gmail.com'}`} className="hover:text-primary transition-colors flex items-center gap-1">
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
