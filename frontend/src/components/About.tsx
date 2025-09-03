"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about4"
      className="py-20 bg-light"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h3 className="text-2xl font-bold text-primary mb-4">Who Are We?</h3>
            <p className="text-gray mb-4">
              GSBG was founded by visionary entrepreneur <strong className="text-dark">Ankush Gaikawad</strong>, who set out to transform the digital
              landscape. From humble beginnings in a one-room flat, GSBG has grown into a thriving company with two offices and a
              team of over 10 talented professionals driving innovation daily.
            </p>
            <p className="text-gray mb-4">
              Starting in digital marketing, we expanded into building custom websites and mobile applications, helping businesses
              establish their digital presence. As demand for scalable, enterprise-grade solutions grew, we embarked on a journey
              into Salesforce implementation and consulting.
            </p>
            <p className="text-gray mb-4">
              Today, GSBG leads digital transformation, empowering businesses across industries to streamline operations, enhance
              customer experiences, and accelerate growth. We focus on mid- to large-scale projects, delivering in-depth technical
              expertise, strategic insight, and a client-first approach.
            </p>
            <p className="text-gray">
              Guided by our core values of innovation, integrity, and impact, we are committed to delivering tailored solutions that
              exceed client expectations. Our mission is to help businesses unlock their full potential in a digital-first world.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/assets/images/undraw_team-spirit_18vw.svg" alt="Who are we" width={500} height={400} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;