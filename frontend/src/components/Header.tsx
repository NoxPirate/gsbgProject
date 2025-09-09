"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SVG Filter with Animated Turbulence */}
      <svg style={{ display: "none" }}>
        <filter id="liquid-glass">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.012"
            numOctaves="3"
            seed="2"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="8s"
              values="0.012;0.02;0.012"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" />
        </filter>
      </svg>

      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-7xl mx-auto rounded-2xl overflow-hidden z-50">
        {/* Glass background */}
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            WebkitFilter: "url(#liquid-glass)",
            filter: "url(#liquid-glass)",
          }}
        />
        <div className={`absolute inset-0 ${scrolled ? "bg-black/20" : "bg-transparent"}`} />
        <div className="absolute inset-0 shadow-inner shadow-white/10" />

        {/* Content */}
        <nav className="relative z-10 p-3">
          <div className="max-w-full mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="block h-12 w-auto" aria-label="GSBG homepage">
                <Image
                  src="/assets/images/Extreme_FInal-removebg-preview.png"
                  alt="GSBG Logo"
                  width={260}
                  height={80}
                  className="object-contain h-16 w-auto"
                  priority={true}
                  style={{ filter: 'invert(1) hue-rotate(180deg)' }}
                />
              </Link>
              <div className="text-sm font-semibold tracking-wider opacity-90 text-white">
                Trust · Value · Velocity
              </div>
            </div>
            <div className={`hidden md:flex items-center space-x-1 flex-nowrap`}>
              <ScrollLink to="home" smooth={true} duration={500} className="px-4 py-2 rounded-lg text-white font-medium transition hover:bg-white/20 hover:scale-105 cursor-pointer" activeClass="bg-white/30">Home</ScrollLink>
              <ScrollLink to="our_strength" smooth={true} duration={500} className="px-4 py-2 rounded-lg text-white font-medium transition hover:bg-white/20 hover:scale-105 cursor-pointer" activeClass="bg-white/30">Our Strength</ScrollLink>
              <ScrollLink to="products" smooth={true} duration={500} className="px-4 py-2 rounded-lg text-white font-medium transition hover:bg-white/20 hover:scale-105 cursor-pointer" activeClass="bg-white/30">Products</ScrollLink>
              <ScrollLink to="industries" smooth={true} duration={500} className="px-4 py-2 rounded-lg text-white font-medium transition hover:bg-white/20 hover:scale-105 cursor-pointer" activeClass="bg-white/30">Industries</ScrollLink>
              <ScrollLink to="projects" smooth={true} duration={500} className="px-4 py-2 rounded-lg text-white font-medium transition hover:bg-white/20 hover:scale-105 cursor-pointer" activeClass="bg-white/30">Case Studies</ScrollLink>
              <ScrollLink to="salesforce-apps" smooth={true} duration={500} className="px-4 py-2 rounded-lg text-white font-medium transition hover:bg-white/20 hover:scale-105 cursor-pointer" activeClass="bg-white/30">Applications</ScrollLink>
              <ScrollLink to="about4" smooth={true} duration={500} className="px-4 py-2 rounded-lg text-white font-medium transition hover:bg-white/20 hover:scale-105 cursor-pointer" activeClass="bg-white/30">About Us</ScrollLink>
              <ScrollLink to="contact-form" smooth={true} duration={500} className="px-4 py-2 rounded-lg text-white font-medium transition hover:bg-white/20 hover:scale-105 cursor-pointer" activeClass="bg-white/30">Contact Us</ScrollLink>
              <a href="#contact-form" className="ml-4 inline-block bg-primary text-white px-4 py-2 rounded-full font-semibold shadow-sm hover:opacity-95">Get a Demo</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-transparent p-4">
            <ScrollLink to="home" smooth={true} duration={500} className="block py-2 text-center hover:text-accent" onClick={() => setMenuOpen(false)}>Home</ScrollLink>
            <ScrollLink to="our_strength" smooth={true} duration={500} className="block py-2 text-center hover:text-accent" onClick={() => setMenuOpen(false)}>Our Strength</ScrollLink>
            <ScrollLink to="products" smooth={true} duration={500} className="block py-2 text-center hover:text-accent" onClick={() => setMenuOpen(false)}>Products</ScrollLink>
            <ScrollLink to="industries" smooth={true} duration={500} className="block py-2 text-center hover:text-accent" onClick={() => setMenuOpen(false)}>Industries</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="block py-2 text-center hover:text-accent" onClick={() => setMenuOpen(false)}>Case Studies</ScrollLink>
            <ScrollLink to="salesforce-apps" smooth={true} duration={500} className="block py-2 text-center hover:text-accent" onClick={() => setMenuOpen(false)}>Applications</ScrollLink>
            <ScrollLink to="about4" smooth={true} duration={500} className="block py-2 text-center hover:text-accent" onClick={() => setMenuOpen(false)}>About Us</ScrollLink>
            <ScrollLink to="contact-form" smooth={true} duration={500} className="block py-2 text-center hover:text-accent" onClick={() => setMenuOpen(false)}>Contact Us</ScrollLink>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
