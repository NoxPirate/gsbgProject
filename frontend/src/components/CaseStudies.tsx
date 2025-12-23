"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductCard from './ProductCard';
import { caseStudies } from "./data";
import { motion } from "framer-motion";

const CaseStudies = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-secondary relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide border border-primary/20 inline-block mb-4"
          >
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            Real Results for <span className="text-gradient">Real Business</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="flex justify-center">
              <ProductCard
                title={study.title}
                summary={study.summary}
                logo={study.image}
                link="#"
                color={study.color || '#0B63A6'}
                goal={study.goal}
                implementation={study.implementation}
                technology={study.technology}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;