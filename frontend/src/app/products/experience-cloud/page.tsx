"use client";
import React from 'react';
import Image from 'next/image';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';
import { motion } from "framer-motion";

export default function ExperienceCloudPage() {
  return (
    <main className="min-h-screen bg-white text-dark font-sans pt-0">
      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0CAAFF] to-[#004E92]">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#6DD5FA] rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
           <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#2980B9] rounded-full blur-[100px] opacity-30 animate-float-slow" />
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
                Digital Experiences <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0F7FA] to-[#80D8FF]">
                  Reimagined.
                </span>
              </h1>
              
              <p className="text-xl text-sky-100 mb-8 leading-relaxed max-w-xl">
                 Create fast, beautiful, and personalized digital sites that are deeply connected to your CRM data.
              </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 rounded-full bg-white text-[#004E92] font-bold text-lg hover:bg-sky-50 transition-all transform hover:scale-105 shadow-lg shadow-sky-500/25" suppressHydrationWarning>
                Start Building
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 transition-all" suppressHydrationWarning>
                See Examples
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
              Next-Gen Digital Portals
            </h2>
            <p className="text-slate-600 text-lg">
              Deliver pixel-perfect, data-driven experiences that integrate directly with your CRM.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                color: "bg-sky-100 text-sky-700",
                title: "Custom Design",
                desc: "Build branded sites with drag-and-drop ease or custom code for complete control."
              },
              {
                icon: "📱",
                color: "bg-slate-100 text-slate-600",
                title: "Mobile Ready",
                desc: "All sites are fully responsive and can be published as mobile apps instantly."
              },
              {
                icon: "⚡",
                color: "bg-blue-100 text-blue-600",
                title: "CRM Connected",
                desc: "Surface CRM data securely to users, allowing them to view cases, orders, and more."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300"
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
               <div className="absolute inset-0 bg-[#0CAAFF] rounded-3xl transform -rotate-2 scale-105 opacity-10" />
               <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/10 border border-slate-200 bg-white">
                 <Image 
                   src="/assets/images/experience_builder.png" 
                   alt="Experience Builder Interface" 
                   width={800} 
                   height={600}
                   className="w-full h-auto"
                   // Fallback
                   style={{ minHeight: '300px', backgroundColor: '#e0f2fe' }}
                 />
                 <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold opacity-40 text-xl">Experience Builder View</div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-1 bg-[#0CAAFF] mb-6" />
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Build With Speed & Flexibility</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Launch faster with pre-built Lightning templates or go pixel-perfect with Lightning Web Components. Use the drag-and-drop Experience Builder to control every detail.
              </p>
              <ul className="space-y-3">
                {["Library of Industry Templates", "Drag-and-Drop Components", "Pixel-Perfect Branding Control"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <svg className="w-5 h-5 text-[#0CAAFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-1">
              <div className="w-12 h-1 bg-[#004E92] mb-6" />
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Personalized Customer Journeys</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Don't treat every visitor the same. Use Audience Targeting to show specific content, record lists, and branding to different user groups based on their CRM profile.
              </p>
               <ul className="space-y-3">
                {["Audience Targeting & Personalization", "CRM Record Visibility Rules", "Dynamic Content Recommendations"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <svg className="w-5 h-5 text-[#004E92]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 relative">
               <div className="absolute inset-0 bg-[#004E92] rounded-3xl transform rotate-3 scale-105 opacity-10" />
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 z-10 aspect-video bg-slate-900">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/2ZkjhgBNI-Y?autoplay=0&modestbranding=1&rel=0" // Dummy ID
                    title="Experience Cloud Personalization"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                    {/* Placeholder cover */}
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center pointer-events-none">
                      <span className="text-white font-bold">Experience Cloud Demo</span>
                    </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======= STATS STRIP ======= */}
      <section className="py-20 bg-[#004E92] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-x divide-sky-800">
            {[
              { val: "2x", label: "Faster Site Launch" },
              { val: "+40%", label: "Increase in User Engagement" },
              { val: "100%", label: "Mobile Responsive" }
            ].map((stat, i) => (
               <div key={i} className="p-4">
                 <div className="text-5xl md:text-6xl font-extrabold text-[#0CAAFF] mb-4">{stat.val}</div>
                 <div className="text-xl text-sky-200 font-medium">{stat.label}</div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= RELATED SOLUTIONS ======= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Build Your Stack</h2>
            <p className="text-slate-600 mt-4">Enhance your digital experiences with these tools.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {[
               { title: "Salesforce CMS", desc: "Create, manage, and deliver content to your sites from a central hub." },
               { title: "Service Cloud", desc: "Embed chat and case management directly into your customer portal." },
               { title: "Marketing Cloud", desc: "Drive traffic to your sites with personalized email journeys." }
             ].map((card, i) => (
               <div key={i} className="bg-sky-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-sky-100 hover:border-sky-300 group cursor-pointer">
                 <h4 className="font-bold text-xl text-[#004E92] mb-3 group-hover:text-[#003366]">{card.title}</h4>
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
