import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  title: string;
  summary?: string;
  logo?: string;
  link?: string;
  color?: string;
  goal?: string;
  implementation?: string[];
  technology?: string[];
  bgImage?: string;
}

export default function ProductCard({
  title,
  summary,
  logo,
  link = "#",
  color = "#0B63A6",
  goal,
  implementation,
  technology,
  bgImage,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[420px] rounded-2xl overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setShowDetails(true)}
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundColor: color
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
        {logo && (
          <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div className="relative w-full h-full">
              <Image src={logo} alt="logo" fill className="object-contain" />
            </div>
          </div>
        )}

        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300 translate-y-2 group-hover:translate-y-0">
          {title}
        </h3>

        <p className="text-gray-200 text-sm leading-relaxed line-clamp-3 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
          {summary}
        </p>

        <button className="w-fit px-5 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-300 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-100">
          View Case Study
        </button>
      </div>

      {/* Details Overlay */}
      {showDetails && (
        <div className="absolute inset-0 z-50 bg-dark/95 backdrop-blur-xl p-8 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <button
              onClick={(e) => { e.stopPropagation(); setShowDetails(false); }}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6 text-gray-300">
            {goal && (
              <div>
                <h4 className="text-accent font-semibold mb-2 uppercase text-xs tracking-wider">Goal</h4>
                <p className="text-sm leading-relaxed">{goal}</p>
              </div>
            )}

            {implementation && (
              <div>
                <h4 className="text-accent font-semibold mb-2 uppercase text-xs tracking-wider">Implementation</h4>
                <ul className="space-y-2">
                  {implementation.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {technology && (
              <div>
                <h4 className="text-accent font-semibold mb-2 uppercase text-xs tracking-wider">Technology</h4>
                <div className="flex flex-wrap gap-2">
                  {technology.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
