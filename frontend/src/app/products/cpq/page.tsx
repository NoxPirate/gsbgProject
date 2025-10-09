import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function CPQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff] pattern-blob">
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">CPQ (Configure, Price, Quote)</h1>
            <p className="mt-4 text-lg text-gray-700">Optimize quoting processes and reduce sales cycle time with modern CPQ solutions that integrate seamlessly with CRM, ERP and billing systems.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn">Get a CPQ assessment</button>
              <a className="nav-link font-semibold text-sm" href="#contact">Speak with an expert</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up stagger-1">
              <h3 className="text-lg font-bold">Fast Quoting</h3>
              <p className="mt-2 line-clamp-4">Automate complex product rules and pricing so sales reps can build accurate quotes in minutes instead of hours.</p>
            </div>
            <div className="premium-card fade-up stagger-2">
              <h3 className="text-lg font-bold">Error-Free Pricing</h3>
              <p className="mt-2 line-clamp-4">Reduce manual pricing mistakes using rule-driven validation and approvals tailored to your commercial model.</p>
            </div>
            <div className="premium-card fade-up stagger-3">
              <h3 className="text-lg font-bold">Seamless Integrations</h3>
              <p className="mt-2 line-clamp-4">Native connectors to ERP, billing and CRM systems keep pricing, inventory and billing aligned end-to-end.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-up">
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Results you can measure</h2>
              <ul className="text-gray-700 space-y-3">
                <li>Faster quote turnaround and shorter sales cycles</li>
                <li>Higher proposal accuracy and reduced write-offs</li>
                <li>Improved sales rep productivity and forecast reliability</li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">40%</div>
                  <div className="text-sm text-gray-600">Avg. time saved</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">99%</div>
                  <div className="text-sm text-gray-600">Quote accuracy</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">3x</div>
                  <div className="text-sm text-gray-600">Faster approvals</div>
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
              <h4 className="font-bold">Sales Cloud Integration</h4>
              <p className="mt-2 text-sm text-gray-700">Align CPQ with opportunity stages and pipeline metrics to improve forecasting.</p>
            </div>
            <div className="premium-card fade-up">
              <h4 className="font-bold">Billing & Invoicing</h4>
              <p className="mt-2 text-sm text-gray-700">Automate order-to-cash with billing system integrations for faster revenue recognition.</p>
            </div>
            <div className="premium-card fade-up">
              <h4 className="font-bold">Analytics & Reporting</h4>
              <p className="mt-2 text-sm text-gray-700">Actionable reporting to uncover pricing leaks and top-performing configurations.</p>
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
