"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about4"
      className="py-24 bg-sky-200 relative overflow-hidden"
    >
        {/* Background Decorative Elements */}
       

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            More <span className="text-[#0B63A6]">About Us</span>
            </h2>
        </motion.div>
       
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-[#0B63A6] mb-6">Who Are We?</h3>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed text-justify">
                <p>
                GSBG was founded by visionary entrepreneur <strong className="text-slate-900">Ankush Gaikawad</strong>, who set out to transform the digital landscape. From humble beginnings in a one-room flat, GSBG has grown into a thriving company with two offices and a team of over 10 talented professionals driving innovation daily.
                </p>
                <p>
                Starting in digital marketing, we expanded into building custom websites and mobile applications, helping businesses establish their digital presence. As demand for scalable, enterprise-grade solutions grew, we embarked on a journey into Salesforce implementation and consulting.
                </p>
                <p>
                Today, GSBG leads digital transformation, empowering businesses across industries to streamline operations, enhance customer experiences, and accelerate growth. We focus on mid- to large-scale projects, delivering in-depth technical expertise, strategic insight, and a client-first approach.
                </p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full max-w-lg">
                 {/* Blob background for image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl -z-10"></div>
                <Image 
                    src="/assets/images/undraw_team-page_q5am.svg" 
                    alt="Who are we - Team" 
                    width={600} 
                    height={500} 
                    className="w-full h-auto drop-shadow-xl"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;