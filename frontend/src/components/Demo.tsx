"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <section id="schedule-demo" className="relative py-24 overflow-hidden bg-slate-900">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div>
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Experience the Power of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Sales Cloud
                </span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Transform your sales process with the world's #1 CRM. Schedule a personalized demo to see how we can help you close deals faster and smarter.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "AI-driven lead scoring & routing",
                "Real-time pipeline analytics",
                "Seamless quote-to-cash workflow"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-slate-200">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact-form"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-1"
              >
                Schedule Demo
              </a>
              <a
                href="#sales-presentation"
                className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm transition-all"
              >
                Watch Overview
              </a>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative group">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800"
            >
              <Image
                src="/assets/images/Image-76.png"
                alt="Sales Cloud Dashboard"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient for nicer blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
