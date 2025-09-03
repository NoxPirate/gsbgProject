"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Ankush Gaikawad",
    title: "Salesforce Expert",
    quote: "Our mission is to empower businesses with Salesforce solutions that drive real impact.",
    image: "/assets/images/ankush.jpeg",
  },
];

const Founders = () => {
  return (
    <motion.section
      id="about9"
      className="py-20 bg-secondary"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">Meet Our Founders and Directors</h2>
        <div className="flex justify-center">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm transform hover:-translate-y-2 transition-transform duration-300">
              <Image src={founder.image} alt={founder.name} width={400} height={400} className="w-full h-80 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-primary mb-2">{founder.name}</h4>
                <p className="text-gray mb-4">{founder.title}</p>
                <blockquote className="text-lg italic text-dark">&quot;{founder.quote}&quot;</blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Founders;