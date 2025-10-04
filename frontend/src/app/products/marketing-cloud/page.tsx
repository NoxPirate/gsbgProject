import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function MarketingCloudPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff]">
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">Marketing Cloud</h1>
            <p className="mt-4 text-lg text-gray-600">Scale personalized marketing across channels with Marketing Cloud and data-driven campaigns.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">What we offer</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Journey orchestration and automation</li>
                <li>Data-driven personalization</li>
                <li>Campaign management across channels</li>
                <li>Reporting and ROI analysis</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Why choose us</h2>
              <p className="text-gray-700">We focus on measurable growth using strategic campaigns and technical expertise to scale marketing operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse contact form */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <Contact />
        </div>
      </section>
    </main>
  );
}
