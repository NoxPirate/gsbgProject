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
    <section id="products" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-light mb-10">Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="grid grid-cols-1 gap-6">
              {productsData.map((product, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.45 }} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.01] transform-gpu transition-all duration-300 border border-transparent hover:border-accent/20">
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">{product.title}</h3>
                  <p className="text-gray text-sm md:text-base">{product.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Image src="/assets/images/undraw_data-processing_z2q6.svg" alt="Salesforce Practices" width={520} height={420} className="max-w-full h-auto object-contain" loading="lazy" />
            </motion.div>
          </div>
        </div>
  {/* removed mini 3D canvases (user requested) */}
  <div className="mt-8" />
      </div>
    </section>
  );
};

export default Products;