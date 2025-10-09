"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const productsData = [
  {
    title: "Service Cloud",
    description: "We implement and optimize Salesforce Service Cloud to enhance customer service operations. This includes case management, automation, knowledge base integration, and AI-driven support for faster, more efficient resolution of customer issues.",
  },
  {
    title: "Sales Cloud",
    description: "Our team leverages Salesforce Sales Cloud to streamline and supercharge sales processes. From lead generation and pipeline management to forecasting and analytics, we help businesses increase sales productivity and close deals faster.",
  },
  {
    title: "Marketing Cloud",
    description: "We deploy Salesforce Marketing Cloud solutions to create personalized, multi-channel marketing campaigns. Our expertise includes customer journey automation, email marketing, social media engagement, and marketing analytics.",
  },
  {
    title: "Community Cloud",
    description: "Using Salesforce Community Cloud (now known as Experience Cloud), we build branded customer, partner, and employee portals that promote collaboration, self-service, and engagement.",
  },
  {
    title: "CPQ (Configure, Price, Quote)",
    description: "Our team implements Salesforce CPQ to simplify the configuration of complex product offerings, automate pricing rules, and generate error-free quotes quickly—accelerating the quote-to-cash process.",
  },
  {
    title: "Experience Cloud",
    description: "With Salesforce Experience Cloud, we design interactive digital experiences that are deeply integrated with CRM data, enabling personalized web portals, forums, and mobile apps for users and stakeholders.",
  },
  {
    title: "Velocity (Salesforce Industries)",
    description: "We specialize in Velocity, now known as Salesforce Industries, offering pre-built industry-specific solutions. This includes tailored CRM systems for sectors like telecommunications, insurance, healthcare, and public services—helping clients achieve faster time-to-value.",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-[#f6fbff]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0b4f6c] mb-10">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {productsData.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="premium-card flex flex-col h-full"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#0B63A6] to-[#00BFA6] flex items-center justify-center text-white font-bold">{product.title.split(' ').slice(0,2).map(w=>w[0]).join('')}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-1">{product.title}</h3>
                  <p className="text-sm md:text-base line-clamp-4 text-gray-700">{product.description}</p>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <a href="#" className="premium-cta">Explore</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;