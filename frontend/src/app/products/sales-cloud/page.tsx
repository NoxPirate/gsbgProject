"use client";
import React from "react";
import Image from "next/image";
import Contact from "@/components/Contact";
import BackButton from "@/components/BackButton";

export default function SalesCloudPage() {
  return (
    <main className="min-h-screen bg-secondary text-dark font-sans">
      {/* ======= BANNER SECTION ======= */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/banner.png"
          alt="Trusted Cloud Solutions Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-primary/40"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl text-white">
          <BackButton />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Sales Cloud
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            Secure, integrated platforms that accelerate revenue and reduce complexity.
          </p>
        </div>
      </section>

      {/* ======= INTRO SECTION ======= */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 text-center max-w-4xl fade-up">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide border border-primary/20 inline-block mb-4">
            Overview
          </span>
          <h2 className="text-4xl font-bold text-dark mb-6">
            Salesforce <span className="text-gradient">Sales Cloud</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Salesforce Sales Cloud is an intelligent CRM solution designed to drive sales
            productivity, improve forecasting accuracy, and empower businesses with
            actionable insights. It unifies every step from lead to cash — automating
            processes, guiding reps, and optimizing growth opportunities.
          </p>

          {/* YouTube Embed */}
          <div className="mt-10 flex justify-center">
            <div className="relative w-full md:w-3/4 lg:w-2/3 aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 ring-1 ring-black/5">
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center fade-up relative z-10">
          <h3 className="text-3xl font-bold text-dark mb-12">
            Core Features of Sales Cloud
          </h3>
          <div className="flex justify-center">
            <div className="p-4 bg-white rounded-3xl shadow-2xl border border-gray-100">
              <Image
                src="/assets/images/Sales_Cloud.jpg"
                alt="Features of Salesforce Sales Cloud"
                width={900}
                height={600}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======= BUSINESS IMPACT ======= */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <h2 className="text-3xl font-bold text-dark mb-8">
              Real Business Impact
            </h2>
            <ul className="space-y-6">
              {[
                "Improved pipeline visibility and forecasting accuracy",
                "Guided selling with AI-based recommendations",
                "Accelerated deal closure with automation and insights",
                "Centralized collaboration between sales and marketing",
                "Enhanced decision-making with real-time dashboards"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">✓</div>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center float-y">
            {[
              { val: "20%", label: "Win Rate Uplift" },
              { val: "30%", label: "Faster Sales Cycle" },
              { val: "1.5×", label: "Rep Productivity" }
            ].map((stat, i) => (
              <div key={i} className="premium-card p-6 flex flex-col items-center justify-center h-full">
                <div className="text-4xl font-extrabold text-gradient mb-2">{stat.val}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= RELATED SOLUTIONS ======= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-dark mb-12 fade-up">
            Related Solutions
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                className="premium-card p-8 text-left fade-up"
              >
                <h4 className="font-bold text-xl text-dark mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <a href="#" className="inline-block mt-4 text-primary font-semibold hover:text-accent transition-colors">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CONTACT SECTION ======= */}
      <section id="contact" className="bg-secondary py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <Contact />
        </div>
      </section>
    </main>
  );
}
