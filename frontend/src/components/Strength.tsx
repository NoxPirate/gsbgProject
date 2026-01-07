"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { label: "Strong SFDC Bench", value: 10, suffix: "+", icon: "🚀" },
  { label: "SFDC Licenses", value: 50, suffix: "+", icon: "🔑" },
  { label: "Completed Projects", value: 60, suffix: "+", icon: "📈" },
  { label: "Offices – Mumbai & Pune", value: 2, suffix: "", icon: "🏢" },
  { label: "Clients Served", value: 30, suffix: "+", icon: "🤝" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Strength = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="our_strength" className="py-24 bg-gradient-to-b from-slate-900 via-[#0B1120] to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-semibold tracking-wider mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building on <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Our Strength</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            We combine technical expertise with deep industry knowledge to deliver exceptional Salesforce solutions that drive real growth.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-cyan-500/30 transition-colors duration-300 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <span className="text-6xl grayscale group-hover:grayscale-0 transition-all text-white">{stat.icon}</span>
                </div>
                
                <div className="text-4xl mb-4 p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                   <span className="text-3xl">{stat.icon}</span>
                </div>

                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-200 mb-2 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                  {inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : "0"}
                  <span className="text-2xl md:text-3xl ml-1 text-cyan-500">{stat.suffix}</span>
                </div>
                
                <p className="text-white font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Strength;