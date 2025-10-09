import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function SalesCloudPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff] pattern-blob">
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">Sales Cloud</h1>
            <p className="mt-4 text-lg text-gray-700">Drive sales productivity and pipeline visibility with tailored Sales Cloud solutions — from lead-to-cash automation to coaching and analytics.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn">Schedule a sales workshop</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up stagger-1">
              <h3 className="text-lg font-bold">Process & Playbooks</h3>
              <p className="mt-2">Define repeatable sales plays and automation to convert pipeline faster.</p>
            </div>
            <div className="premium-card fade-up stagger-2">
              <h3 className="text-lg font-bold">Coaching & Insights</h3>
              <p className="mt-2">Give managers visibility and actionable coaching prompts driven by activity and outcomes.</p>
            </div>
            <div className="premium-card fade-up stagger-3">
              <h3 className="text-lg font-bold">Data & Integrations</h3>
              <p className="mt-2">Clean CRM data, feed forecasting models, and integrate with CPQ/ERP/marketing systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-up">
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Business impact</h2>
              <ul className="text-gray-700 space-y-3">
                <li>Improved pipeline hygiene and predictable forecasting</li>
                <li>Faster opportunity conversions with guided selling</li>
                <li>Higher average deal size through productised offers</li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">20%</div>
                  <div className="text-sm text-gray-600">Win rate uplift</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">30%</div>
                  <div className="text-sm text-gray-600">Shorter sales cycle</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">1.5x</div>
                  <div className="text-sm text-gray-600">Rep productivity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#0b4f6c] text-center mb-6 fade-up">Related solutions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up">
              <h4 className="font-bold">CPQ & Pricing</h4>
              <p className="mt-2 text-sm text-gray-700">Ensure pricing accuracy and speed with CPQ integrated into your sales motions.</p>
            </div>
            <div className="premium-card fade-up">
              <h4 className="font-bold">Sales Enablement</h4>
              <p className="mt-2 text-sm text-gray-700">Content and playbooks delivered at the right moment to improve conversion.</p>
            </div>
            <div className="premium-card fade-up">
              <h4 className="font-bold">Forecasting & Analytics</h4>
              <p className="mt-2 text-sm text-gray-700">Turn CRM data into reliable forecasts and sales capacity planning.</p>
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
