"use client";
import React, { useEffect } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { useChatbot } from "@/context/ChatbotContext";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const { openChatbot } = useChatbot();
  useEffect(() => {
    const v = document.getElementById('heroBgVideo') as HTMLVideoElement | null;
    if (v) {
      v.play().catch(() => { });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36">
      {/* Background Video with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          id="heroBgVideo"
          className="w-full h-full object-cover"
          src="/assets/vedio/gsbg3.mp4"
          preload="metadata"
          muted
          loop
          playsInline
        />
        {/* Lighter gradient overlay to make video more visible while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-secondary/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass-panel p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            <motion.div variants={itemUp} className="mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide border border-primary/20">
                Salesforce Partner
              </span>
            </motion.div>

            <motion.h1 variants={itemUp} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-dark tracking-tight drop-shadow-sm">
              Supercharge Your Business with <span className="text-gradient drop-shadow-sm">Expert Salesforce Solutions</span>
            </motion.h1>

            <motion.p variants={itemUp} className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
              Drive growth, efficiency, and innovation with our proven expertise tailored to your industry. Experience the future of business automation.
            </motion.p>

            <motion.div variants={itemUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openChatbot}
                className="animated-gradient-btn w-full sm:w-auto text-lg shadow-lg shadow-primary/25"
                suppressHydrationWarning
              >
                Let’s Talk
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-white text-dark font-semibold border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all w-full sm:w-auto shadow-sm"
              >
                View Success Stories
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div style={{ opacity: scrollOpacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium text-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;