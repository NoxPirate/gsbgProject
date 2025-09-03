"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <section id="schedule-demo" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* left: content */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">Demo Sales Cloud</h2>
            <p className="text-lg text-gray mb-6 max-w-xl">
              Get to know your future sales platform. Schedule a guided demo to see how Sales Cloud
              can streamline pipelines, accelerate deals, and give your team full visibility.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="inline-block mr-3 mt-1 text-primary">•</span>
                <span className="text-sm text-gray">Lead & opportunity management tailored to your process</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block mr-3 mt-1 text-primary">•</span>
                <span className="text-sm text-gray">Real-time forecasting, reporting and dashboards</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block mr-3 mt-1 text-primary">•</span>
                <span className="text-sm text-gray">Seamless CPQ and quote-to-cash workflows</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium shadow"
              >
                Schedule a Demo
              </a>
              <a
                href="#sales-presentation"
                className="inline-block border-2 border-accent text-accent px-5 py-3 rounded-md font-medium hover:bg-accent hover:text-white transition-colors"
              >
                View Presentation
              </a>
            </div>
          </div>

          {/* right: image card */}
          <div className="flex items-center justify-center">
            <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/images/Image-76.png"
                alt="Schedule a Demo"
                width={800}
                height={500}
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
