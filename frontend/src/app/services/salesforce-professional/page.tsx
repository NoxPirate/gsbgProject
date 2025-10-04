import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function SalesforceProfessional() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f6fbff]">
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4f6c]">Salesforce Professional</h1>
            <p className="mt-4 text-lg text-gray-600">Professional services to implement and operate Salesforce effectively for your organisation.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Offerings</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Managed services and support</li>
                <li>Release management and QA</li>
                <li>Automation and optimisation</li>
                <li>Custom development and integration</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">Why work with us</h2>
              <p className="text-gray-700">We provide proven delivery models and experienced teams to run and evolve your Salesforce platform.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <Contact />
        </div>
      </section>
    </main>
  );
}
