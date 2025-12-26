"use client";
import React from "react";
import { motion } from "framer-motion";

const industriesData = [
  {
    title: "Real Estate",
    description: "The real estate industry involves the buying, selling, leasing, and management of properties including residential, commercial, and industrial spaces. With Salesforce, real estate businesses can streamline lead tracking, automate client communications, and manage property listings more efficiently.",
    icon: "🏢"
  },
  {
    title: "Manufacturing",
    description: "We have delivered robust Salesforce-based solutions for Keysight and other prominent US-based manufacturers, utilizing Sales Cloud, Service Cloud, and CPQ to enhance field service efficiency, manage complex product configurations, and optimize after-sales support.",
    icon: "🏭"
  },
  {
    title: "Public Sector",
    description: "We’ve worked with the U.S. government to implement Health Cloud and OmniStudio solutions, enabling agencies to manage compensation, services, and benefits more effectively through automated workflows and citizen-facing platforms.",
    icon: "🏛️"
  },
  {
    title: "Ecommerce",
    description: "We have led B2B and B2C digital transformation projects for clients like Driscoll’s, leveraging Salesforce Sales Cloud, Service Cloud, and Commerce Cloud to unify customer experiences across digital storefronts, automate workflows, and drive scalable growth.",
    icon: "🛒"
  },
  {
    title: "Telecom",
    description: "Our team has executed comprehensive Lead-to-Cash implementations for leading telecom providers in Europe and India. These solutions integrate Salesforce CRM, CPQ, and Zora to enable streamlined customer acquisition, dynamic pricing, contract management, and billing.",
    icon: "📡"
  },
  {
    title: "Healthcare",
    description: "For companies like BD, a global medical device leader, we have enabled secure and compliant digital transformation using Salesforce Health Cloud and custom solutions to improve patient engagement, sales operations, and internal collaboration.",
    icon: "🏥"
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-dark relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-white/10 text-accent font-semibold text-sm tracking-wide border border-white/10 inline-block mb-4"
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Tailored Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-accent">Every Sector</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className="text-4xl mb-6 bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{industry.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;