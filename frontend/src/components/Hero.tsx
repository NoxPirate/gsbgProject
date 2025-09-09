"use client";
import React, { useEffect } from "react";
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
  useEffect(() => {
    const v = document.getElementById('heroBgVideo') as HTMLVideoElement | null;
    if (v) {
      // some browsers block autoplay unless play() is called from script even when muted
      v.play().catch(() => {
        // ignore play promise rejection; video will start when user interacts
      });
    }
  }, []);

  return (
  <section id="home" className="bg-light min-h-screen flex items-center relative hero-overlay-deep pt-32">
      {/* background video (served from public/assets/vedio/gsbg.mp4) */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          id="heroBgVideo"
          className="w-full h-full object-cover"
          src="/assets/vedio/gsbg.mp4"
          preload="auto"
          muted
          loop
          playsInline
        />
      </div>

      {/* hero canvas host (Three.js will mount here) */}
      <div className="absolute inset-0 z-5 opacity-90" aria-hidden>
        <div id="heroCanvasHost" className="w-full h-full" />
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        <div className="flex justify-start items-center">
          <div className="w-full md:w-1/2 px-4">
            <div className="backdrop-blur-sm bg-black/20 rounded-xl p-8 shadow-lg">
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                <motion.h1 variants={itemUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                  Supercharge Your Business with Expert Salesforce Solutions
                </motion.h1>

                <motion.p variants={itemUp} className="text-md md:text-lg text-white mb-6 max-w-2xl">
                  Drive growth, efficiency, and innovation with our proven Salesforce expertise — tailored to your industry and business needs. The animated background demonstrates platform energy while content remains readable.
                </motion.p>

                <motion.div variants={itemUp} className="flex flex-wrap gap-3">
                  <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#contact-form" className="animated-gradient-btn inline-block">
                    Let’s Talk
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#projects" className="bg-transparent border-2 border-white/40 text-white px-5 py-2 rounded-full hover:bg-white/10 transition-colors duration-300 inline-block">
                    See Our Success Stories
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
};

export default Hero;