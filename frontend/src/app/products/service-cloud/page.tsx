import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function ServiceCloudPage() {
  return (
    <main className="min-h-screen bg-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <section className="pt-32 pb-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <BackButton />
            <h1 className="text-5xl md:text-6xl font-extrabold text-dark mb-6">
              Service <span className="text-gradient">Cloud</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              Deliver exceptional customer service and unify interactions across channels. We help you reduce resolution times and improve CSAT.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn text-lg shadow-lg shadow-primary/20">
                Request a Service Review
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card fade-up stagger-1 p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-2xl">💬</div>
              <h3 className="text-xl font-bold text-dark mb-3">Omnichannel Support</h3>
              <p className="text-gray-600">Deliver consistent experiences from chat to phone and social with a unified agent workspace.</p>
            </div>
            <div className="premium-card fade-up stagger-2 p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-2xl">📚</div>
              <h3 className="text-xl font-bold text-dark mb-3">Knowledge & Self-Service</h3>
              <p className="text-gray-600">Empower customers with intelligent knowledge bases and AI-powered suggestions to deflect tickets.</p>
            </div>
            <div className="premium-card fade-up stagger-3 p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-2xl">🔧</div>
              <h3 className="text-xl font-bold text-dark mb-3">Field Service</h3>
              <p className="text-gray-600">Schedule and dispatch technicians efficiently with mobile tools and intelligent routing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="text-3xl font-bold text-dark mb-6">Operational Outcomes</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Faster time-to-resolution and reduced ticket backlog</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Higher first-contact resolution with AI-assist</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Lower support cost per case and improved NPS</span>
                </li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">25%</div>
                  <div className="text-sm text-gray-600 font-medium">Faster Resolution</div>
                </div>
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">35%</div>
                  <div className="text-sm text-gray-600 font-medium">Ticket Deflection</div>
                </div>
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">High</div>
                  <div className="text-sm text-gray-600 font-medium">Agent Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-dark text-center mb-10 fade-up">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card fade-up p-8 hover:-translate-y-2 transition-transform">
              <h4 className="text-xl font-bold text-dark mb-3">Training & Change</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Adoption-led programs to ensure agents and admins get the most from your platform.</p>
            </div>
            <div className="premium-card fade-up p-8 hover:-translate-y-2 transition-transform">
              <h4 className="text-xl font-bold text-dark mb-3">Automation & Bots</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Self-service automation and conversational bots to reduce repetitive work.</p>
            </div>
            <div className="premium-card fade-up p-8 hover:-translate-y-2 transition-transform">
              <h4 className="text-xl font-bold text-dark mb-3">Analytics & Dashboards</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Operational dashboards to track SLAs, backlog and agent performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 border-t border-gray-100 relative z-10">
        <div className="container mx-auto px-6">
          <Contact />
        </div>
      </section>
    </main>
  );
}
