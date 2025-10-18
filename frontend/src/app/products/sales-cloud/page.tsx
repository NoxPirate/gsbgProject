"use client";
import React from "react";
import Image from "next/image";
import Contact from "@/components/Contact";
import BackButton from "@/components/BackButton";

export default function SalesCloudPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f3f9fd] text-gray-800">
      {/* ======= BANNER SECTION ======= */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/banner.png"
          alt="Trusted Cloud Solutions Banner"
          fill
          priority
          className="object-cover object-center brightness-[0.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b4f6c]/70 to-[#001b2e]/60"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl text-white">
          <BackButton />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight whitespace-nowrap">
            Sales Cloud - GSBG.Technologies
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Secure, integrated platforms that accelerate revenue and reduce complexity.
          </p>
        </div>
      </section>

      {/* ======= INTRO SECTION ======= */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl fade-up">
          <h2 className="text-4xl font-bold text-[#0b4f6c] mb-4">
            Salesforce Sales Cloud
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Salesforce Sales Cloud is an intelligent CRM solution designed to drive sales
            productivity, improve forecasting accuracy, and empower businesses with
            actionable insights. It unifies every step from lead to cash — automating
            processes, guiding reps, and optimizing growth opportunities.
          </p>

          {/* YouTube Embed */}
          <div className="mt-10 flex justify-center">
            <div className="relative w-full md:w-3/4 lg:w-2/3 aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/2ZkjhgBNI-Y?autoplay=0&modestbranding=1&rel=0"
                title="Sales Cloud Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ======= FEATURES IMAGE ======= */}
      <section className="py-20 bg-[#f8fcff]">
        <div className="container mx-auto px-6 text-center fade-up">
          <h3 className="text-3xl font-bold text-[#0b4f6c] mb-8">
            Core Features of Sales Cloud
          </h3>
          <div className="flex justify-center">
            <Image
              src="/assets/images/Sales_Cloud.jpg"
              alt="Features of Salesforce Sales Cloud"
              width={900}
              height={600}
              className="rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* ======= BUSINESS IMPACT ======= */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <h2 className="text-2xl font-bold text-[#0b4f6c] mb-4">
              Real Business Impact
            </h2>
            <ul className="text-gray-700 space-y-4 text-lg leading-relaxed">
              <li>✔ Improved pipeline visibility and forecasting accuracy</li>
              <li>✔ Guided selling with AI-based recommendations</li>
              <li>✔ Accelerated deal closure with automation and insights</li>
              <li>✔ Centralized collaboration between sales and marketing</li>
              <li>✔ Enhanced decision-making with real-time dashboards</li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center float-y">
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-extrabold text-[#0b4f6c]">20%</div>
              <div className="text-sm text-gray-600 mt-1">Win Rate Uplift</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-extrabold text-[#0b4f6c]">30%</div>
              <div className="text-sm text-gray-600 mt-1">Faster Sales Cycle</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-extrabold text-[#0b4f6c]">1.5×</div>
              <div className="text-sm text-gray-600 mt-1">Rep Productivity</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= RELATED SOLUTIONS ======= */}
      <section className="py-20 bg-[#f9fafc]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-[#0b4f6c] mb-10 fade-up">
            Related Solutions
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "CPQ & Pricing",
                desc: "Ensure pricing accuracy and speed with CPQ integrated into your sales motions.",
              },
              {
                title: "Sales Enablement",
                desc: "Deliver playbooks, insights, and assets that boost conversion rates.",
              },
              {
                title: "Forecasting & Analytics",
                desc: "Transform CRM data into reliable forecasts and sales capacity insights.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all fade-up"
              >
                <h4 className="font-bold text-lg text-[#0b4f6c]">{item.title}</h4>
                <p className="mt-3 text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CONTACT SECTION ======= */}
      <section id="contact" className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <Contact />
        </div>
      </section>
    </main>
  );
}
