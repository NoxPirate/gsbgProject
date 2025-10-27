import React from "react";
import Chatbot from "../../components/Chatbot";

export const metadata = {
  title: "Chatbot",
  description: "Chat with the GSBG assistant",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Chat with our assistant</h1>
      <Chatbot />
    </main>
  );
}
