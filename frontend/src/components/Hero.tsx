"use client";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
  <section id="home" className="bg-light min-h-[calc(100vh-80px)] flex items-center relative hero-overlay-deep">
      {/* hero canvas host (Three.js will mount here) */}
      <div className="absolute inset-0 -z-10 opacity-90" aria-hidden>
        <div id="heroCanvasHost" className="w-full h-full" />
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <motion.h1 variants={itemUp} className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
            Supercharge Your Business with Expert Salesforce Solutions
          </motion.h1>

          <motion.p variants={itemUp} className="text-lg md:text-xl text-gray mb-8 max-w-3xl mx-auto">
            Drive growth, efficiency, and innovation with our proven Salesforce
            expertise — tailored to your industry and business needs.
          </motion.p>

          <motion.div variants={itemUp} className="flex justify-center space-x-4">
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#contact-form" className="animated-gradient-btn inline-block">
              Let’s Talk
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#projects" className="bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-full hover:bg-accent hover:text-white transition-colors duration-300 inline-block">
              See Our Success Stories
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;