import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function CPQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff]">
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">CPQ (Configure, Price, Quote)</h1>
            <p className="mt-4 text-lg text-gray-600">Optimize quoting processes and reduce sales cycle time with modern CPQ solutions.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">What we offer</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>End-to-end CPQ implementation</li>
                <li>Custom pricing rules and product catalogs</li>
                <li>Quote generation and approval workflows</li>
                <li>Integration with billing and ERP systems</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Why choose us</h2>
              <p className="text-gray-700">Our CPQ solutions reduce errors and speed up quote-to-cash cycles, helping your sales teams win more deals.</p>
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
