import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function SalesforceProfessional() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff] pattern-blob">
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">Salesforce Professional</h1>
            <p className="mt-4 text-lg text-gray-700">Managed services and professional support to run and evolve Salesforce effectively with measurable SLAs.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn">Explore managed services</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up stagger-1">
              <h3 className="text-lg font-bold">Managed Operations</h3>
              <p className="mt-2">Ongoing platform support, release management and monitoring with clear SLAs.</p>
            </div>
            <div className="premium-card fade-up stagger-2">
              <h3 className="text-lg font-bold">Automation & Optimisation</h3>
              <p className="mt-2">Identify and automate repetitive work to improve throughput and reduce human error.</p>
            </div>
            <div className="premium-card fade-up stagger-3">
              <h3 className="text-lg font-bold">Custom Development</h3>
              <p className="mt-2">Tailored integrations and applications built to extend Salesforce for unique business needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-up">
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Operational KPIs</h2>
              <ul className="text-gray-700 space-y-3">
                <li>Reduced mean time to resolution for incidents</li>
                <li>Improved platform stability during releases</li>
                <li>Predictable cost and resource planning</li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">SLA</div>
                  <div className="text-sm text-gray-600">Committed response times</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">99%</div>
                  <div className="text-sm text-gray-600">Uptime (target)</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">Ops</div>
                  <div className="text-sm text-gray-600">Runbook & playbooks</div>
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
