"use client";
import React from 'react';
import Image from 'next/image';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';
import { motion } from "framer-motion";

export default function VelocityPage() {
  return (
    <main className="min-h-screen bg-white text-dark font-sans pt-0">
      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4A00E0] to-[#8E2DE2]">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#E056FD] rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
           <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#686DE0] rounded-full blur-[100px] opacity-30 animate-float-slow" />
        </div>
        
        {/* Hero Image as Background Overlay */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 lg:opacity-30 -rotate-12 scale-90 pointer-events-none select-none mix-blend-overlay">
          <Image 
            src="/assets/images/banner.png" 
            alt="Background Pattern" 
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-3xl text-white space-y-8 mt-20">
            <BackButton />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
               <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-sm">
                Industry Specific. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5F5] to-[#E1BEE7]">
                  Deploy Faster.
                </span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-xl">
                 Accelerate digital transformation with pre-built solutions tailored for Communications, Media, Energy, and more.
              </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 rounded-full bg-[#FFFFFF] text-[#4A00E0] font-bold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25" suppressHydrationWarning>
                Learn More
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 transition-all" suppressHydrationWarning>
                View Industries
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======= VALUE PROPS ======= */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Tailored Functionality
            </h2>
            <p className="text-slate-600 text-lg">
              Stop building from scratch. Use industry-standard data models and processes right out of the box.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                color: "bg-purple-100 text-purple-700",
                title: "Rapid Deployment",
                desc: "Deploy in weeks, not months, with pre-configured industry clouds."
              },
              {
                icon: "🔄",
                color: "bg-slate-100 text-slate-600",
                title: "Omnichannel",
                desc: "Provide consistent experiences across web, mobile, and contact center channels."
              },
              {
                icon: "⚙️",
                color: "bg-pink-100 text-pink-600",
                title: "CPQ & Order Management",
                desc: "Handle complex product bundles and large-scale orders with industry-grade performance."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= DEEP DIVE FEATURES ======= */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 space-y-24">
          
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute inset-0 bg-[#8E2DE2] rounded-3xl transform rotate-3 scale-105 opacity-10" />
               <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-slate-200 bg-white">
                 <Image 
                   src="/assets/images/omnistudio_canvas.png" 
                   alt="OmniStudio Flow Builder" 
                   width={800} 
                   height={600}
                   className="w-full h-auto"
                   // Fallback
                   style={{ minHeight: '300px', backgroundColor: '#f3e8ff' }}
                 />
                 <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold opacity-40 text-xl">OmniStudio Canvas</div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-1 bg-[#8E2DE2] mb-6" />
              <h3 className="text-3xl font-bold text-slate-900 mb-6">OmniStudio & Low-Code Innovation</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 Build pixel-perfect, branded interactions without writing code. Use FlexCards and OmniScripts to guide users through complex processes across any channel.
              </p>
              <ul className="space-y-3">
                {["Drag-and-Drop Interface Builder", "DataRaptors for Fast Integration", "Reusable Industry Process Libraries"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <svg className="w-5 h-5 text-[#8E2DE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-1">
              <div className="w-12 h-1 bg-[#4A00E0] mb-6" />
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Enterprise Product & Order Management</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Handle even the most complex catalogs and offers. From telecom triple-plays to utility tariffs, manage pricing, bundles, and fulfillment with precision.
              </p>
               <ul className="space-y-3">
                {["Industry-Specific CPQ", "Orchestrated Order Fulfillment", "Catalog-Driven Workflow"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <svg className="w-5 h-5 text-[#4A00E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 relative">
               <div className="absolute inset-0 bg-[#4A00E0] rounded-3xl transform -rotate-3 scale-105 opacity-10" />
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 z-10 aspect-video bg-slate-900">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/2ZkjhgBNI-Y?autoplay=0&modestbranding=1&rel=0" // Dummy ID
                    title="Salesforce Industries Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                    {/* Placeholder cover */}
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center pointer-events-none">
                      <span className="text-white font-bold">Industry Cloud Demo</span>
                    </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======= STATS STRIP ======= */}
      <section className="py-20 bg-[#4A00E0] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-x divide-purple-500">
            {[
              { val: "-50%", label: "Development Time" },
              { val: "+30%", label: "Increased Order Accuracy" },
              { val: "3x", label: "Faster Time-to-Market" }
            ].map((stat, i) => (
               <div key={i} className="p-4">
                 <div className="text-5xl md:text-6xl font-extrabold text-[#E056FD] mb-4">{stat.val}</div>
                 <div className="text-xl text-purple-200 font-medium">{stat.label}</div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= RELATED SOLUTIONS ======= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Complete the Picture</h2>
            <p className="text-slate-600 mt-4">Salesforce Industries connects seamlessly with core clouds.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {[
               { title: "Experience Cloud", desc: "Expose industry processes to customers via self-service portals." },
               { title: "Service Cloud", desc: "Give agents industry-specific consoles for faster resolution." },
               { title: "MuleSoft", desc: "Integrate legacy back-end systems with your industry layer." }
             ].map((card, i) => (
               <div key={i} className="bg-purple-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-purple-100 hover:border-purple-300 group cursor-pointer">
                 <h4 className="font-bold text-xl text-[#4A00E0] mb-3 group-hover:text-[#311b92]">{card.title}</h4>
                 <p className="text-slate-600 mb-4">{card.desc}</p>
                 <span className="text-sm font-semibold text-slate-900 group-hover:underline">Learn more &rarr;</span>
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
