"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Strength = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id="our_strength" className="py-20 bg-secondary" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[var(--color-dark)] mb-12">Our Strength</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image src="/assets/images/undraw_growth-curve_kzjb.svg" alt="Our Scale" width={500} height={400} />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <span className="text-4xl font-bold text-accent">
                  {inView ? <CountUp end={10} duration={2} /> : "0"}+
                </span>
                <p className="text-gray">Strong SFDC Bench</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-accent">
                  {inView ? <CountUp end={50} duration={2} /> : "0"}+
                </span>
                <p className="text-gray">SFDC Licenses</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-accent">
                  {inView ? <CountUp end={60} duration={2} /> : "0"}+
                </span>
                <p className="text-gray">Completed Projects</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-accent">
                  {inView ? <CountUp end={2} duration={2} /> : "0"}
                </span>
                <p className="text-gray">Offices – Mumbai & Pune</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-accent">
                  {inView ? <CountUp end={30} duration={2} /> : "0"}+
                </span>
                <p className="text-gray">Clients Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strength;