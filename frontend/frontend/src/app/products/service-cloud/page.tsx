import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function ServiceCloudPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff]">
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">Service Cloud</h1>
            <p className="mt-4 text-lg text-gray-600">Deliver exceptional customer service with Sales Cloud&apos;s companion: Service Cloud. Streamline support processes and boost satisfaction.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">What we offer</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Service process transformation and design</li>
                <li>Omnichannel support and knowledge management</li>
                <li>Case management, automation and workflows</li>
                <li>Field service and scheduling integrations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Why choose us</h2>
              <p className="text-gray-700">We deliver scalable service platforms focused on reducing resolution times and improving customer loyalty.</p>
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
