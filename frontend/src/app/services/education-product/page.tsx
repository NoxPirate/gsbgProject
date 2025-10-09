import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function EducationProduct() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff] pattern-blob">
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">Education Product</h1>
            <p className="mt-4 text-lg text-gray-700">Engage learners and streamline administration with modern education tools built on the platform for CRM-driven student experiences.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn">Request a demo</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up stagger-1">
              <h3 className="text-lg font-bold">Student Lifecycle</h3>
              <p className="mt-2">Manage enrolments, communications and retention with a unified student profile.</p>
            </div>
            <div className="premium-card fade-up stagger-2">
              <h3 className="text-lg font-bold">Assessment & Analytics</h3>
              <p className="mt-2">Track learning outcomes and personalise interventions using analytics.</p>
            </div>
            <div className="premium-card fade-up stagger-3">
              <h3 className="text-lg font-bold">Integrations</h3>
              <p className="mt-2">Sync with LMS, SIS and third-party tools for a seamless administrative experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-up">
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Benefits for institutions</h2>
              <ul className="text-gray-700 space-y-3">
                <li>Higher student engagement and retention</li>
                <li>Reduced administrative overhead through automation</li>
                <li>Better visibility into student success metrics</li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">+15%</div>
                  <div className="text-sm text-gray-600">Retention uplift</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">Automated</div>
                  <div className="text-sm text-gray-600">Admin tasks</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">Data</div>
                  <div className="text-sm text-gray-600">Single student view</div>
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
