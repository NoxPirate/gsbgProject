import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function CPQPage() {
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
              CPQ <span className="text-gradient">(Configure, Price, Quote)</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              Optimize quoting processes and reduce sales cycle time with modern CPQ solutions that integrate seamlessly with CRM, ERP and billing systems.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn text-lg shadow-lg shadow-primary/20">
                Get a CPQ Assessment
              </button>
              <a className="px-6 py-3 rounded-full border border-gray-300 font-semibold text-gray-700 hover:bg-gray-50 transition-colors" href="#contact">
                Speak with an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card fade-up stagger-1 p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-2xl">⚡</div>
              <h3 className="text-xl font-bold text-dark mb-3">Fast Quoting</h3>
              <p className="text-gray-600">Automate complex product rules and pricing so sales reps can build accurate quotes in minutes instead of hours.</p>
            </div>
            <div className="premium-card fade-up stagger-2 p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-2xl">✅</div>
              <h3 className="text-xl font-bold text-dark mb-3">Error-Free Pricing</h3>
              <p className="text-gray-600">Reduce manual pricing mistakes using rule-driven validation and approvals tailored to your commercial model.</p>
            </div>
            <div className="premium-card fade-up stagger-3 p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-2xl">🔗</div>
              <h3 className="text-xl font-bold text-dark mb-3">Seamless Integrations</h3>
              <p className="text-gray-600">Native connectors to ERP, billing and CRM systems keep pricing, inventory and billing aligned end-to-end.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="text-3xl font-bold text-dark mb-6">Results You Can Measure</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Faster quote turnaround and shorter sales cycles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Higher proposal accuracy and reduced write-offs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Improved sales rep productivity and forecast reliability</span>
                </li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">40%</div>
                  <div className="text-sm text-gray-600 font-medium">Avg. Time Saved</div>
                </div>
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">99%</div>
                  <div className="text-sm text-gray-600 font-medium">Quote Accuracy</div>
                </div>
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">3x</div>
                  <div className="text-sm text-gray-600 font-medium">Faster Approvals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-dark text-center mb-10 fade-up">Related Solutions</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card fade-up p-8 hover:-translate-y-2 transition-transform">
              <h4 className="text-xl font-bold text-dark mb-3">Sales Cloud Integration</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Align CPQ with opportunity stages and pipeline metrics to improve forecasting.</p>
            </div>
            <div className="premium-card fade-up p-8 hover:-translate-y-2 transition-transform">
              <h4 className="text-xl font-bold text-dark mb-3">Billing & Invoicing</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Automate order-to-cash with billing system integrations for faster revenue recognition.</p>
            </div>
            <div className="premium-card fade-up p-8 hover:-translate-y-2 transition-transform">
              <h4 className="text-xl font-bold text-dark mb-3">Analytics & Reporting</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Actionable reporting to uncover pricing leaks and top-performing configurations.</p>
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
