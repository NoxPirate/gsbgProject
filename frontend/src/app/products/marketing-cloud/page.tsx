import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function MarketingCloudPage() {
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
              Marketing <span className="text-gradient">Cloud</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              Scale personalised marketing across channels with data-driven journeys and precise audience targeting.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn text-lg shadow-lg shadow-primary/20">
                Request a Campaign Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card fade-up stagger-1 p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-2xl">🎯</div>
              <h3 className="text-xl font-bold text-dark mb-3">Journey Orchestration</h3>
              <p className="text-gray-600">Design cross-channel experiences that adapt to customer behaviour in real time.</p>
            </div>
            <div className="premium-card fade-up stagger-2 p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-2xl">🎨</div>
              <h3 className="text-xl font-bold text-dark mb-3">Personalization</h3>
              <p className="text-gray-600">Use data models and AI to deliver the right message at the right time.</p>
            </div>
            <div className="premium-card fade-up stagger-3 p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-2xl">📊</div>
              <h3 className="text-xl font-bold text-dark mb-3">Measurement & ROI</h3>
              <p className="text-gray-600">Attribution and reporting to optimise spend and creative across channels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="text-3xl font-bold text-dark mb-6">Marketing Outcomes</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Improved engagement through tailored journeys</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Higher campaign efficiency with better targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</span>
                  <span className="text-gray-700 text-lg">Clearer ROI with end-to-end measurement</span>
                </li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">+22%</div>
                  <div className="text-sm text-gray-600 font-medium">Engagement Uplift</div>
                </div>
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">+18%</div>
                  <div className="text-sm text-gray-600 font-medium">Conversion Rate</div>
                </div>
                <div className="premium-card p-6">
                  <div className="text-4xl font-extrabold text-gradient mb-2">Better</div>
                  <div className="text-sm text-gray-600 font-medium">Attribution Clarity</div>
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
              <h4 className="text-xl font-bold text-dark mb-3">Data & CDP</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Unify customer profiles to drive more relevant campaigns and reporting.</p>
            </div>
            <div className="premium-card fade-up p-8 hover:-translate-y-2 transition-transform">
              <h4 className="text-xl font-bold text-dark mb-3">Creative & Content</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Content pipelines and templates to scale personalised creative.</p>
            </div>
            <div className="premium-card fade-up p-8 hover:-translate-y-2 transition-transform">
              <h4 className="text-xl font-bold text-dark mb-3">Testing & Optimization</h4>
              <p className="text-gray-600 text-sm leading-relaxed">A/B testing and experiments to optimise channel mix and messaging.</p>
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
