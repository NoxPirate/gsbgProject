"use client";
import React from "react";
import Image from "next/image";
import Contact from "@/components/Contact";
import BackButton from "@/components/BackButton";
import { motion } from "framer-motion";

export default function ServiceCloudPage() {
  return (
    <main className="min-h-screen bg-white text-dark font-sans pt-0">
      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4A00E0] to-[#8E2DE2]">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00D2FF]/20 rounded-full blur-3xl animate-float-slow" />
        </div>

        {/* Hero Image as Background Overlay */}
        <div className="absolute top-1/2 right-[-10%] transform -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none -rotate-12 scale-90 blur-sm lg:opacity-30 lg:blur-0 lg:right-[-5%] transition-all duration-1000">
           <Image
             src="/assets/images/banner.png" 
             alt="Service Cloud Background"
             fill
             className="object-cover"
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
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
                Service that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#3A7BD5]">Delights.</span>
              </h1>
              <p className="text-xl text-gray-100 max-w-xl font-light leading-relaxed drop-shadow-md">
                Deliver personalized support at scale. Unify every customer interaction across channels with Salesforce Service Cloud.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact-forms" className="px-8 py-4 rounded-full bg-[#00D2FF] text-[#06263A] font-bold hover:bg-[#00D2FF]/90 transition-all shadow-lg shadow-[#00D2FF]/30 transform hover:-translate-y-1">
                Start Transformation
              </a>
              <a href="#features" className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all backdrop-blur-sm">
                See Capabilities
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======= VALUE PROPS ======= */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06263A] mb-4">Reimagine Customer Service</h2>
            <p className="text-gray-600 text-lg">Build lasting loyalty with intelligent, connected service experiences.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💬",
                title: "Omni-Channel Support",
                desc: "Meet customers where they are—email, chat, phone, or messaging apps—from a single, unified console."
              },
              {
                icon: "🤖",
                title: "AI & Automation",
                desc: "Deflect routine cases with Einstein Bots and empower agents with AI-driven next-best actions."
              },
              {
                icon: "🔄",
                title: "360-Degree View",
                desc: "Give agents distinct context with complete customer history, ensuring personalized and faster resolutions."
              }
            ].map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-[#4A00E0]/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-bold text-[#06263A] mb-3">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= DEEP DIVE FEATURES ======= */}
      <section id="features" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 space-y-24">
          
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-[#4A00E0] rounded-full filter blur-[100px] opacity-20" />
              <Image 
                src="/assets/images/service_cloud_dashboard.png" 
                alt="Omni-Channel Service" 
                width={800} 
                height={600} 
                className="relative rounded-2xl shadow-2xl border border-gray-100 z-10"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-1 bg-[#4A00E0] mb-6" />
              <h3 className="text-3xl font-bold text-[#06263A] mb-6">Unified Agent Workspace</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                 Stop alt-tabbing. Give your agents a single screen to manage cases, view customer profiles, and access knowledge articles instantly.
              </p>
              <ul className="space-y-3">
                {["Single-pane-of-glass Console", "Integration with CTI/Telephony", "Real-time Knowledge Recommendations"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <svg className="w-5 h-5 text-[#4A00E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-1">
              <div className="w-12 h-1 bg-[#00D2FF] mb-6" />
              <h3 className="text-3xl font-bold text-[#06263A] mb-6">Field Service Lightning</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Extend service beyond the contact center. Equip mobile workers with the right tools and information to solve issues on the first visit.
              </p>
               <ul className="space-y-3">
                {["Smart Scheduling & Dispatching", "Offline Mobile App Access", "Asset & Inventory Management"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <svg className="w-5 h-5 text-[#00D2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 relative">
              <div className="absolute inset-0 bg-[#00D2FF] rounded-full filter blur-[100px] opacity-20" />
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 z-10 aspect-video bg-gray-900">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/2ZkjhgBNI-Y?autoplay=0&modestbranding=1&rel=0" // Dummy ID
                    title="Service Cloud Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                   {/* Placeholder cover for iframe since video ID might not be real */}
                   <div className="absolute inset-0 bg-gray-900 flex items-center justify-center pointer-events-none">
                      <span className="text-white font-bold">Service Cloud Demo Video</span>
                   </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======= STATS STRIP ======= */}
      <section className="py-20 bg-[#06263A] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { val: "+32%", label: "Increase in CSAT Scores" },
              { val: "-26%", label: "Reduction in Case Volume" },
              { val: "+40%", label: "Faster First Response" }
            ].map((stat, i) => (
               <div key={i} className="p-4">
                 <div className="text-5xl md:text-6xl font-extrabold text-[#00D2FF] mb-4">{stat.val}</div>
                 <div className="text-xl text-gray-300 font-medium">{stat.label}</div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= RELATED SOLUTIONS ======= */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#06263A]">Extend Your Reach</h2>
            <p className="text-gray-600 mt-4">Powerful add-ons to enhance your service capabilities.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {[
               { title: "Service Cloud Voice", desc: "Integrate phone channels directly into the Service Cloud console." },
               { title: "Customer Community", desc: "Build self-service portals where customers can help themselves." },
               { title: "Einstein Bots", desc: "Scale support with intelligent chatbots that handle common queries 24/7." }
             ].map((card, i) => (
               <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                 <h4 className="font-bold text-xl text-[#4A00E0] mb-3">{card.title}</h4>
                 <p className="text-gray-600 mb-4">{card.desc}</p>
                 <span className="text-sm font-semibold text-[#06263A] cursor-pointer hover:underline">Learn more &rarr;</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ======= CONTACT SECTION ======= */}
      <Contact />

    </main>
  );
}
