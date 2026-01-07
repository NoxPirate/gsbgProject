"use client";
import React from 'react';
import Image from 'next/image';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';
import { motion } from "framer-motion";

export default function CommunityCloudPage() {
  return (
    <main className="min-h-screen bg-white text-dark font-sans pt-0">
      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E1b4B] to-[#312E81]">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#4F46E5] rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
           <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#4338CA] rounded-full blur-[100px] opacity-30 animate-float-slow" />
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
                Connect. Collaborate. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#C7D2FE]">
                  Thrive Together.
                </span>
              </h1>
              
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed max-w-xl">
                 Build branded digital experiences for customers, partners, and employees. Drive engagement, deflect cases, and accelerate sales with Community Cloud.
              </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 rounded-full bg-[#4F46E5] text-white font-bold text-lg hover:bg-[#4338CA] transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25" suppressHydrationWarning>
                Explore Solutions
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 transition-all" suppressHydrationWarning>
                Watch Demo
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
              Power Your Ecosystem
            </h2>
            <p className="text-slate-600 text-lg">
              Create seamless digital experiences that connect your business with the people who matter most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                color: "bg-indigo-100 text-indigo-700",
                title: "Customer Engagement",
                desc: "Empower customers with self-service portals, forums, and knowledge bases to find answers fast."
              },
              {
                icon: "💼",
                color: "bg-slate-100 text-slate-600",
                title: "Partner Management",
                desc: "Streamline channel sales with a dedicated partner portal for lead sharing and collaboration."
              },
              {
                icon: "🏢",
                color: "bg-blue-100 text-blue-600",
                title: "Employee Productivity",
                desc: "Connect teams, share files, and manage projects in a unified internal workspace."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
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
               <div className="absolute inset-0 bg-[#4F46E5] rounded-3xl transform rotate-3 scale-105 opacity-10" />
               <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-slate-200 bg-white">
                 <Image 
                   src="/assets/images/community_dashboard.png" 
                   alt="Self Service Portal" 
                   width={800} 
                   height={600}
                   className="w-full h-auto"
                   // Fallback for demo if image missing
                   style={{ minHeight: '300px', backgroundColor: '#eef2ff' }}
                 />
                 <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold opacity-30 text-xl">Dashboard Interface</div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-1 bg-[#4F46E5] mb-6" />
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Empower Customers to Find Answers</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Deflect cases and increase satisfaction with a branded help center. Let customers find articles, log cases, and help themselves 24/7 without waiting for an agent.
              </p>
              <ul className="space-y-3">
                {["Knowledge Base Integration", "Case Management & Status Tracking", "Community Forums for Peer Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <svg className="w-5 h-5 text-[#4F46E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-1">
              <div className="w-12 h-1 bg-[#818CF8] mb-6" />
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Supercharge Your Partner Ecosystem</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Give partners a dedicated space to register leads, update opportunities, and access enablement materials. Drive indirect sales like never before with complete visibility.
              </p>
               <ul className="space-y-3">
                {["Deal Registration & Lead Distribution", "MDF (Market Development Funds) Management", "Real-time Pipeline Visibility"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <svg className="w-5 h-5 text-[#818CF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 relative">
               <div className="absolute inset-0 bg-[#818CF8] rounded-3xl transform -rotate-3 scale-105 opacity-10" />
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 z-10 aspect-video bg-slate-900">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/2ZkjhgBNI-Y?autoplay=0&modestbranding=1&rel=0" // Dummy ID
                    title="Experience Cloud Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                    {/* Placeholder cover for iframe since video ID might not be real */}
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center pointer-events-none">
                      <span className="text-white font-bold">Community Cloud Demo</span>
                    </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======= STATS STRIP ======= */}
      <section className="py-20 bg-[#1E1b4B] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-x divide-indigo-800">
            {[
              { val: "+48%", label: "Faster Case Resolution" },
              { val: "+35%", label: "Increase in Partner Sales" },
              { val: "+45%", label: "Higher Customer Satisfaction" }
            ].map((stat, i) => (
               <div key={i} className="p-4">
                 <div className="text-5xl md:text-6xl font-extrabold text-[#818CF8] mb-4">{stat.val}</div>
                 <div className="text-xl text-indigo-200 font-medium">{stat.label}</div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= RELATED SOLUTIONS ======= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Integrate & Expand</h2>
            <p className="text-slate-600 mt-4">Community Cloud works perfectly with these add-ons.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {[
               { title: "Service Cloud", desc: "Connect your community directly to your support center for seamless case escalation." },
               { title: "Sales Cloud", desc: "Allow partners to update opportunities directly in your CRM." },
               { title: "CMS", desc: "Manage and publish content across all your channels from a single location." }
             ].map((card, i) => (
               <div key={i} className="bg-slate-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-100 hover:border-indigo-200 group cursor-pointer">
                 <h4 className="font-bold text-xl text-[#4F46E5] mb-3 group-hover:text-[#4338CA]">{card.title}</h4>
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
