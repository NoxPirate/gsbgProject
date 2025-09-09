"use client";
import React, { useState } from "react";
import Image from "next/image";
import { caseStudies } from "./data";

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[var(--color-dark)] mb-12">Our Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
      <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <Image src={study.image} alt={study.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[var(--color-dark)]">{study.title}</h3>
        <p className="text-gray mb-4">{study.summary}</p>
                <button onClick={() => handleToggle(index)} className="animated-gradient-btn">
                  {activeIndex === index ? "Hide Case Study" : "View Case Study"}
                </button>
                {activeIndex === index && (
                  <div className="mt-4">
                    <p className="text-[var(--color-text)]"><strong className="text-primary">Goal:</strong> {study.goal}</p>
                    <p className="mt-2 text-[var(--color-text)]"><strong className="text-primary">Implementation:</strong></p>
                    <ul className="list-disc list-inside ml-4 text-[var(--color-text)]">
                      {study.implementation.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-[var(--color-text)]"><strong className="text-primary">Technology Used:</strong></p>
                    <ul className="list-disc list-inside ml-4 text-[var(--color-text)]">
                      {study.technology.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;