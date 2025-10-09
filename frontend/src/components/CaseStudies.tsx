"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductCard from './ProductCard';
import { caseStudies } from "./data";

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
  <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[var(--color-dark)] mb-12">Our Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {caseStudies.map((study, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <ProductCard
                title={study.title}
                summary={study.summary}
                logo={study.image}
                link="#"
                color={study.color || '#f40103'}
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