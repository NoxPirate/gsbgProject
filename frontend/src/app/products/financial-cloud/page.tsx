import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function FinancialCloudPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff] pattern-blob">
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">Financial Services Cloud</h1>
            <p className="mt-4 text-lg text-gray-700">Deliver personalised and compliant financial services experiences — from wealth management to banking operations.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn">Book a compliance review</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up stagger-1">
              <h3 className="text-lg font-bold">Client Lifecycle</h3>
              <p className="mt-2">Manage client onboarding, KYC and relationship data with a single, auditable source of truth.</p>
            </div>
            <div className="premium-card fade-up stagger-2">
              <h3 className="text-lg font-bold">Compliance & Security</h3>
              <p className="mt-2">Built-in controls and advisory to help meet regulatory requirements and protect customer data.</p>
            </div>
            <div className="premium-card fade-up stagger-3">
              <h3 className="text-lg font-bold">Insights & Reporting</h3>
              <p className="mt-2">Custom reporting and analytics for portfolio performance, risk and revenue tracking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-up">
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Why financial organisations choose us</h2>
              <ul className="text-gray-700 space-y-3">
                <li>Proven delivery in regulated environments</li>
                <li>Secure integrations to core banking and ledger systems</li>
                <li>Operational controls to support audits and compliance</li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">99%</div>
                  <div className="text-sm text-gray-600">Data integrity</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">Secure</div>
                  <div className="text-sm text-gray-600">Compliance-first design</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">10+</div>
                  <div className="text-sm text-gray-600">Years in financial services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#0b4f6c] text-center mb-6 fade-up">Recommended integrations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up">
              <h4 className="font-bold">Core Banking</h4>
              <p className="mt-2 text-sm text-gray-700">Connect to ledgers for real-time positions and settlement states.</p>
            </div>
            <div className="premium-card fade-up">
              <h4 className="font-bold">Risk & Compliance</h4>
              <p className="mt-2 text-sm text-gray-700">Automate reporting and controls to reduce audit overhead.</p>
            </div>
            <div className="premium-card fade-up">
              <h4 className="font-bold">Analytics & BI</h4>
              <p className="mt-2 text-sm text-gray-700">Enhance portfolio insights with custom BI pipelines.</p>
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
