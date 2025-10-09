import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function MarketingCloudPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff] pattern-blob">
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">Marketing Cloud</h1>
            <p className="mt-4 text-lg text-gray-700">Scale personalised marketing across channels with data-driven journeys and precise audience targeting.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="animated-gradient-btn">Request a campaign audit</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up stagger-1">
              <h3 className="text-lg font-bold">Journey Orchestration</h3>
              <p className="mt-2">Design cross-channel experiences that adapt to customer behaviour in real time.</p>
            </div>
            <div className="premium-card fade-up stagger-2">
              <h3 className="text-lg font-bold">Personalization</h3>
              <p className="mt-2">Use data models and AI to deliver the right message at the right time.</p>
            </div>
            <div className="premium-card fade-up stagger-3">
              <h3 className="text-lg font-bold">Measurement & ROI</h3>
              <p className="mt-2">Attribution and reporting to optimise spend and creative across channels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-up">
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Marketing outcomes</h2>
              <ul className="text-gray-700 space-y-3">
                <li>Improved engagement through tailored journeys</li>
                <li>Higher campaign efficiency with better targeting</li>
                <li>Clearer ROI with end-to-end measurement</li>
              </ul>
            </div>
            <div className="fade-up float-y">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">+22%</div>
                  <div className="text-sm text-gray-600">Engagement uplift</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">+18%</div>
                  <div className="text-sm text-gray-600">Conversion improvement</div>
                </div>
                <div className="premium-card">
                  <div className="text-3xl font-extrabold">Better</div>
                  <div className="text-sm text-gray-600">Attribution clarity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#0b4f6c] text-center mb-6 fade-up">Related services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card fade-up">
              <h4 className="font-bold">Data & CDP</h4>
              <p className="mt-2 text-sm text-gray-700">Unify customer profiles to drive more relevant campaigns and reporting.</p>
            </div>
            <div className="premium-card fade-up">
              <h4 className="font-bold">Creative & Content</h4>
              <p className="mt-2 text-sm text-gray-700">Content pipelines and templates to scale personalised creative.</p>
            </div>
            <div className="premium-card fade-up">
              <h4 className="font-bold">Testing & Optimization</h4>
              <p className="mt-2 text-sm text-gray-700">A/B testing and experiments to optimise channel mix and messaging.</p>
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
