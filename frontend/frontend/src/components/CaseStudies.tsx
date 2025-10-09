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
    <section id="projects" className="py-20 bg-sky-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[var(--color-dark)] mb-12">Our Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-slate-200">
              <div className="w-full h-24 flex items-center justify-center bg-gray-50">
                <div className="max-h-16 flex items-center justify-center">
                  <Image src={study.image} alt={study.title} width={180} height={60} className="object-contain" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-[var(--color-dark)]">{study.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{study.summary}</p>
                <div className="flex items-center justify-between">
                  <button onClick={() => handleToggle(index)} className="animated-gradient-btn text-sm">
                    {activeIndex === index ? "Hide" : "View Case Study"}
                  </button>
                </div>
                {activeIndex === index && (
                  <div className="mt-4 text-sm text-[var(--color-text)] space-y-2">
                    <p><strong className="text-primary">Goal:</strong> {study.goal}</p>
                    <p><strong className="text-primary">Implementation:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      {study.implementation.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p><strong className="text-primary">Technology Used:</strong></p>
                    <ul className="list-disc list-inside ml-4">
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