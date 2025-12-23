import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function EducationProduct() {
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
              Education <span className="text-gradient">Product</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              Engage learners and streamline administration with modern education tools built on the platform for CRM-driven student experiences.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn text-lg shadow-lg shadow-primary/20">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card fade-up stagger-1 p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-2xl">🎓</div>
              <h3 className="text-xl font-bold text-dark mb-3">Student Lifecycle</h3>
              <p className="text-gray-600">Manage enrolments, communications and retention with a unified student profile.</p>
            </div>
            <div className="premium-card fade-up stagger-2 p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-2xl">📊</div>
              <h3 className="text-xl font-bold text-dark mb-3">Assessment & Analytics</h3>
              <p className="text-gray-600">Track learning outcomes and personalise interventions using analytics.</p>
            </div>
            <div className="premium-card fade-up stagger-3 p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-2xl">🔌</div>
              <h3 className="text-xl font-bold text-dark mb-3">Integrations</h3>
              <p className="text-gray-600">Sync with LMS, SIS and third-party tools for a seamless administrative experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="text-3xl font-bold text-dark mb-6">Benefits for Institutions</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Higher student engagement and retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Reduced administrative overhead through automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Better visibility into student success metrics</span>
                </li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">+15%</div>
                  <div className="text-sm text-gray-600 font-medium">Retention Uplift</div>
                </div>
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">Auto</div>
                  <div className="text-sm text-gray-600 font-medium">Admin Tasks</div>
                </div>
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">Data</div>
                  <div className="text-sm text-gray-600 font-medium">Single Student View</div>
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
