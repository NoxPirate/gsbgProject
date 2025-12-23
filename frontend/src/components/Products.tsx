"use client";
import React from "react";
import { motion } from "framer-motion";

const productsData = [
  {
    title: "Service Cloud",
    description: "We implement and optimize Salesforce Service Cloud to enhance customer service operations. This includes case management, automation, knowledge base integration, and AI-driven support for faster, more efficient resolution of customer issues.",
    icon: "🛠️"
  },
  {
    title: "Sales Cloud",
    description: "Our team leverages Salesforce Sales Cloud to streamline and supercharge sales processes. From lead generation and pipeline management to forecasting and analytics, we help businesses increase sales productivity and close deals faster.",
    icon: "📈"
  },
  {
    title: "Marketing Cloud",
    description: "We deploy Salesforce Marketing Cloud solutions to create personalized, multi-channel marketing campaigns. Our expertise includes customer journey automation, email marketing, social media engagement, and marketing analytics.",
    icon: "📢"
  },
  {
    title: "Community Cloud",
    description: "Using Salesforce Community Cloud (now known as Experience Cloud), we build branded customer, partner, and employee portals that promote collaboration, self-service, and engagement.",
    icon: "🤝"
  },
  {
    title: "CPQ (Configure, Price, Quote)",
    description: "Our team implements Salesforce CPQ to simplify the configuration of complex product offerings, automate pricing rules, and generate error-free quotes quickly—accelerating the quote-to-cash process.",
    icon: "⚙️"
  },
  {
    title: "Experience Cloud",
    description: "With Salesforce Experience Cloud, we design interactive digital experiences that are deeply integrated with CRM data, enabling personalized web portals, forums, and mobile apps for users and stakeholders.",
    icon: "🌐"
  },
  {
    title: "Velocity (Salesforce Industries)",
    description: "We specialize in Velocity, now known as Salesforce Industries, offering pre-built industry-specific solutions. This includes tailored CRM systems for sectors like telecommunications, insurance, healthcare, and public services.",
    icon: "🚀"
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide border border-primary/20 inline-block mb-4"
          >
            Our Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            Transform Your Business with <span className="text-gradient">Salesforce Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Leverage the full power of the Salesforce ecosystem with our expert implementation and optimization services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="premium-card group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {product.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group/link">
                  Learn more
                  <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;