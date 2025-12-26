"use client";
import React from "react";
import Image from "next/image";
import Contact from "@/components/Contact";
import BackButton from "@/components/BackButton";
import { motion } from "framer-motion";

export default function SalesCloudPage() {
  return (
    <main className="min-h-screen bg-white text-dark font-sans pt-0">
      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B63A6] to-[#06263A]">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00BFA6]/20 rounded-full blur-3xl animate-float-slow" />
        </div>

        {/* Hero Image as Background Overlay */}
        <div className="absolute top-1/2 right-[-10%] transform -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none rotate-12 blur-sm lg:opacity-40 lg:blur-0 lg:right-[-5%] transition-all duration-1000">
           <Image
             src="/assets/images/banner.png" 
             alt="Sales Cloud Background"
             fill
             className="object-contain"
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
                Close More Deals, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA6] to-[#33D4BE]">Faster.</span>
              </h1>
              <p className="text-xl text-gray-100 max-w-xl font-light leading-relaxed drop-shadow-md">
                The world’s #1 CRM, reimagined for the AI era. Accelerate growth directly from lead to cash with the power of Salesforce Sales Cloud.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact-forms" className="px-8 py-4 rounded-full bg-[#00BFA6] text-white font-bold hover:bg-[#009b86] transition-all shadow-lg shadow-[#00BFA6]/30 transform hover:-translate-y-1">
                Schedule a Demo
              </a>
              <a href="#features" className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all backdrop-blur-sm">
                Explore Features
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======= VALUE PROPS ======= */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06263A] mb-4">Why Leading Teams Choose Sales Cloud</h2>
            <p className="text-gray-600 text-lg">Drive efficiency and growth with a platform built for high-performance sales teams.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Accelerate Productivity",
                desc: "Automate manual tasks and streamline workflows so reps can focus on selling, not administrative work."
              },
              {
                icon: "🧠",
                title: "AI-Powered Insights",
                desc: "Uncover hidden opportunities and forecast with precision using built-in Einstein AI intelligence."
              },
              {
                icon: "🔗",
                title: "Connected Experience",
                desc: "Unify marketing, sales, and service data to give every team a complete 360-degree view of the customer."
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
                <div className="w-14 h-14 bg-[#0B63A6]/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
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
              <div className="absolute inset-0 bg-[#00BFA6] rounded-full filter blur-[100px] opacity-20" />
              <Image 
                src="/assets/images/Sales_Cloud.jpg" 
                alt="Lead Management" 
                width={600} 
                height={400} 
                className="relative rounded-2xl shadow-2xl border border-gray-100 z-10"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-1 bg-[#00BFA6] mb-6" />
              <h3 className="text-3xl font-bold text-[#06263A] mb-6">Pipeline Mastery & Lead Management</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Never let a lead drop. Automatically capture, score, and route leads to the right reps. Visualize your entire pipeline in real-time and drag-and-drop deals to the next stage with intuitive Kanban boards.
              </p>
              <ul className="space-y-3">
                {["Automated Lead Scoring", "Visual Pipeline Management", "Activity Tracking"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <svg className="w-5 h-5 text-[#00BFA6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-1">
              <div className="w-12 h-1 bg-[#0B63A6] mb-6" />
              <h3 className="text-3xl font-bold text-[#06263A] mb-6">Forecasting & Analytics</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Stop guessing and start predicting. Get a real-time view of your business health with customizable dashboards. Drill down from global sales view to individual rep performance in seconds.
              </p>
               <ul className="space-y-3">
                {["Real-time Executive Dashboards", "AI-Driven Sales Forecasting", "Customizable Reports"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <svg className="w-5 h-5 text-[#0B63A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 relative">
              <div className="absolute inset-0 bg-[#0B63A6] rounded-full filter blur-[100px] opacity-20" />
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 z-10 aspect-video bg-gray-900">
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

        </div>
      </section>

      {/* ======= STATS STRIP ======= */}
      <section className="py-20 bg-[#06263A] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { val: "+29%", label: "Increase in Sales Productivity" },
              { val: "+25%", label: "Win Rate Improvement" },
              { val: "+32%", label: "Faster Revenue Growth" }
            ].map((stat, i) => (
               <div key={i} className="p-4">
                 <div className="text-5xl md:text-6xl font-extrabold text-[#00BFA6] mb-4">{stat.val}</div>
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
            <h2 className="text-3xl font-bold text-[#06263A]">Integrate & Expand</h2>
            <p className="text-gray-600 mt-4">Sales Cloud works perfectly with these add-ons.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {[
               { title: "CPQ & Billing", desc: "Configure complex quotes and automate billing cycles seamlessly." },
               { title: "Sales Engagement", desc: "Connect with buyers across email, phone, and web efficiently." },
               { title: "Einstein GPT", desc: "Generative AI that creates personalized emails and meeting preps." }
             ].map((card, i) => (
               <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                 <h4 className="font-bold text-xl text-[#0B63A6] mb-3">{card.title}</h4>
                 <p className="text-gray-600 mb-4">{card.desc}</p>
                 <span className="text-sm font-semibold text-[#06263A] cursor-pointer hover:underline">Learn more &rarr;</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ======= CONTACT SECTION ======= */}
      {/* Directly render the Contact component to maintain consistent styling with the main page */}
      <Contact />

    </main>
  );
}
