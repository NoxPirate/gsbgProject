import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function SalesCloudPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff]">
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">Sales Cloud</h1>
            <p className="mt-4 text-lg text-gray-600">Drive sales productivity and pipeline visibility with our Sales Cloud expertise. Accelerate deals and increase win rates with tailored solutions.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">What we offer</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Sales process design and optimization</li>
                <li>CRM migration and data strategy</li>
                <li>Custom Sales Cloud implementations and automations</li>
                <li>Integration with ERP and CPQ systems</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Why choose us</h2>
              <p className="text-gray-700">We combine deep Salesforce expertise with pragmatic delivery. Our solutions are designed to deliver measurable revenue impact quickly.</p>
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
