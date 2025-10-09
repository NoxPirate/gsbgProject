import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function ServiceCloudPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff] pattern-blob">
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">Service Cloud</h1>
            <p className="mt-4 text-lg text-gray-700">Deliver exceptional customer service and unify interactions across channels. We help you reduce resolution times and improve CSAT.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn">Request a service review</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up stagger-1">
              <h3 className="text-lg font-bold">Omnichannel Support</h3>
              <p className="mt-2">Deliver consistent experiences from chat to phone and social with a unified agent workspace.</p>
            </div>
            <div className="premium-card fade-up stagger-2">
              <h3 className="text-lg font-bold">Knowledge & Self-Service</h3>
              <p className="mt-2">Empower customers with intelligent knowledge bases and AI-powered suggestions to deflect tickets.</p>
            </div>
            <div className="premium-card fade-up stagger-3">
              <h3 className="text-lg font-bold">Field Service</h3>
              <p className="mt-2">Schedule and dispatch technicians efficiently with mobile tools and intelligent routing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-up">
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Operational outcomes</h2>
              <ul className="text-gray-700 space-y-3">
                <li>Faster time-to-resolution and reduced ticket backlog</li>
                <li>Higher first-contact resolution with AI-assist</li>
                <li>Lower support cost per case and improved NPS</li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">25%</div>
                  <div className="text-sm text-gray-600">Faster resolution</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">35%</div>
                  <div className="text-sm text-gray-600">Ticket deflection</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">N/A</div>
                  <div className="text-sm text-gray-600">Agent satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#0b4f6c] text-center mb-6 fade-up">Related services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up">
              <h4 className="font-bold">Training & Change</h4>
              <p className="mt-2 text-sm text-gray-700">Adoption-led programs to ensure agents and admins get the most from your platform.</p>
            </div>
            <div className="premium-card fade-up">
              <h4 className="font-bold">Automation & Bots</h4>
              <p className="mt-2 text-sm text-gray-700">Self-service automation and conversational bots to reduce repetitive work.</p>
            </div>
            <div className="premium-card fade-up">
              <h4 className="font-bold">Analytics & Dashboards</h4>
              <p className="mt-2 text-sm text-gray-700">Operational dashboards to track SLAs, backlog and agent performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <Contact />
        </div>
      </section>
    </main>
  );
}
