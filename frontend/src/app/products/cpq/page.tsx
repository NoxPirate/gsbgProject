import React from 'react';
import Image from 'next/image';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function CPQPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center relative overflow-hidden bg-gradient-to-br from-[#1E4E8C] to-[#0A2647] text-white pt-20">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#4B9CD3] rounded-full blur-[120px]" />
           <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#00A9E0] rounded-full blur-[100px]" />
        </div>
        
        {/* Abstract Shapes / Banner Image as texture */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 lg:opacity-30 -rotate-12 scale-90 pointer-events-none select-none mix-blend-overlay">
          <Image 
            src="/assets/images/banner.png" 
            alt="Background Pattern" 
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left fade-up">
            <BackButton className="text-white/80 hover:text-white mb-8" />
            
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
              Revenue Cloud
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-sm">
              Configure, Price, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B9CD3] to-[#00A9E0]">
                Quote Perfect.
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              Automate complex quoting, control pricing, and close deals faster. 
              The engine for your revenue lifecycle is here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-[#4B9CD3] text-white font-bold text-lg hover:bg-[#3a8bc0] transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Start My Assessment
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 transition-all">
                View Demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm text-blue-200/80 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00A9E0]" /> 100% Native on Salesforce
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00A9E0]" /> AI-Powered Pricing
              </div>
            </div>
          </div>
          <div className="hidden lg:block"></div> 
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Leaders Choose Salesforce CPQ
            </h2>
            <p className="text-slate-600 text-lg">
              Eliminate errors and streamline your entire revenue lifecycle from quote to cash.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                color: "bg-amber-100 text-amber-600",
                title: "Accelerate Deals",
                desc: "Sales reps create accurate quotes in minutes, not days, speeding up approval cycles significantly."
              },
              {
                icon: "🎯",
                color: "bg-blue-100 text-blue-600",
                title: "Precision Pricing",
                desc: "Ensure 100% pricing accuracy with automated rules, discounting guardrails, and margin protection."
              },
              {
                icon: "🔄",
                color: "bg-green-100 text-green-600",
                title: "Unified Revenue",
                desc: "Seamlessly connect CPQ to billing, ERP, and revenue recognition for a 360-degree financial view."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Feature 1 */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl transform rotate-3 scale-105" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-slate-200 bg-white">
                 <Image 
                   src="/assets/images/cpq_dashboard_v2.png" 
                   alt="CPQ Quote Line Editor Interface" 
                   width={800} 
                   height={600}
                   className="w-full h-auto"
                 />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl mb-6">
                📑
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Intelligent Quote-to-Cash
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Empower your sales team with a guided selling experience. The CPQ quote line editor handles complex bundles, dependencies, and exclusions effortlessly.
              </p>
              <ul className="space-y-4">
                {[
                  "Guided Selling: Suggest the right products every time",
                  "Automated Approvals: Route discounts to the right managers",
                  "One-Click Proposal Generation: Professional PDFs instantly"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Feature 2 */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 text-2xl mb-6">
                 📊
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Insightful Analytics
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Gain deep visibility into your quoting cycles and product trends. Understand what's selling, where margins are slipping, and how to optimize pricing strategies.
              </p>
              <ul className="space-y-4">
                {[
                  "Margin Analysis: Protect profitability with real-time margin calculations",
                  "Cycle Time Tracking: Identify bottlenecks in the approval process",
                  "Product Mix Reports: Optimize your catalog based on actual sales data"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                     <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 relative">
              <div className="absolute inset-0 bg-amber-500/5 rounded-3xl transform -rotate-3 scale-105" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 z-10 aspect-video bg-slate-900">
                 <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/2ZkjhgBNI-Y?autoplay=0&modestbranding=1&rel=0"
                    title="CPQ Analytics Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0A2647] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { label: "Faster Quote Generation", value: "2x" },
              { label: "Reduction in Pricing Errors", value: "95%" },
              { label: "Faster Approval Cycles", value: "30%" },
              { label: "Increase in Deal Size", value: "25%" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl lg:text-5xl font-bold text-[#4B9CD3] mb-2">{stat.value}</div>
                <div className="text-blue-200 text-sm lg:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">Maximize Your Revenue Engine</h3>
          <div className="grid md:grid-cols-3 gap-6">
             {[
               {
                 title: "Sales Cloud",
                 desc: "The world's #1 CRM. Manage opportunities and pipeline alongside CPQ."
               },
               {
                 title: "Billing",
                 desc: "Usage-based pricing and complex invoicing, integrated directly with CPQ."
               },
               {
                 title: "B2B Commerce",
                 desc: "Empower customers to configure and buy products online with self-service."
               }
             ].map((item, i) => (
               <div key={i} className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all border border-gray-100 cursor-pointer group">
                 <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                   {item.title}
                 </h4>
                 <p className="text-sm text-slate-600">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="bg-slate-50">
        <Contact />
      </div>
    </main>
  );
}
