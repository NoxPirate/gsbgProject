import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function SalesforceConsulting() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff] pattern-blob">
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">Salesforce Consulting</h1>
            <p className="mt-4 text-lg text-gray-700">Strategy, architecture and delivery to transform your business using Salesforce as the platform for growth.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn">Start a discovery</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up stagger-1">
              <h3 className="text-lg font-bold">Strategy & Roadmap</h3>
              <p className="mt-2">Define outcomes, success metrics and an actionable roadmap to get there.</p>
            </div>
            <div className="premium-card fade-up stagger-2">
              <h3 className="text-lg font-bold">Implementation</h3>
              <p className="mt-2">Design and deliver cloud solutions with iterative sprints and stakeholder alignment.</p>
            </div>
            <div className="premium-card fade-up stagger-3">
              <h3 className="text-lg font-bold">Data & Integration</h3>
              <p className="mt-2">Migrate and integrate data reliably to avoid disruption and enable analytics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-up">
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Delivery approach</h2>
              <ul className="text-gray-700 space-y-3">
                <li>Outcome-driven, incremental delivery with measurable milestones</li>
                <li>Cross-functional teams focused on adoption</li>
                <li>Governance and risk management for predictable delivery</li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">90%</div>
                  <div className="text-sm text-gray-600">Milestone delivery</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">Adopt</div>
                  <div className="text-sm text-gray-600">Adoption-led design</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">Govern</div>
                  <div className="text-sm text-gray-600">Clear risk controls</div>
                </div>
              </div>
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
