import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function SalesforceProfessional() {
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
              Salesforce <span className="text-gradient">Professional</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              Managed services and professional support to run and evolve Salesforce effectively with measurable SLAs.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn text-lg shadow-lg shadow-primary/20">
                Explore Managed Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card fade-up stagger-1 p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-2xl">🛠️</div>
              <h3 className="text-xl font-bold text-dark mb-3">Managed Operations</h3>
              <p className="text-gray-600">Ongoing platform support, release management and monitoring with clear SLAs.</p>
            </div>
            <div className="premium-card fade-up stagger-2 p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-2xl">⚡</div>
              <h3 className="text-xl font-bold text-dark mb-3">Automation & Optimisation</h3>
              <p className="text-gray-600">Identify and automate repetitive work to improve throughput and reduce human error.</p>
            </div>
            <div className="premium-card fade-up stagger-3 p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-2xl">💻</div>
              <h3 className="text-xl font-bold text-dark mb-3">Custom Development</h3>
              <p className="text-gray-600">Tailored integrations and applications built to extend Salesforce for unique business needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="text-3xl font-bold text-dark mb-6">Operational KPIs</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Reduced mean time to resolution for incidents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Improved platform stability during releases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Predictable cost and resource planning</span>
                </li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">SLA</div>
                  <div className="text-sm text-gray-600 font-medium">Committed Response</div>
                </div>
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">99%</div>
                  <div className="text-sm text-gray-600 font-medium">Uptime Target</div>
                </div>
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">Ops</div>
                  <div className="text-sm text-gray-600 font-medium">Runbook & Playbooks</div>
                </div>
              </div>
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
