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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      style={{
        backdropFilter: scrolled ? 'saturate(120%) blur(6px)' : undefined
      }}
    >
  <div className="bg-secondary p-2 text-right header-deep">
        <a
          href="mailto:sales@gsbg.co.in"
          className="px-3 text-dark hover:text-primary transition-colors duration-300"
        >
          sales@gsbg.co.in
        </a>
        <a
          href="https://www.linkedin.com/company/gsbg-technologies/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 text-dark hover:text-primary transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://wa.me/918097904244"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 text-dark hover:text-primary transition-colors duration-300"
        >
          WhatsApp
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61576211807667"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 text-dark hover:text-primary transition-colors duration-300"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/gsbgtech?igsh=cWRkNHd4dW9xMjFs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 text-dark hover:text-primary transition-colors duration-300"
        >
          Instagram
        </a>
      </div>
  <div className="hero-overlay-deep">
        <nav className="p-4">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="block h-12 w-auto" aria-label="GSBG homepage">
                <Image
                  src="/assets/images/Extreme_FInal-removebg-preview.png"
                  alt="GSBG Logo"
                  width={220}
                  height={60}
                  className="object-contain h-12 w-auto"
                  priority={true}
                />
              </Link>
                <div className="text-sm font-semibold text-gray tracking-wider">
                Trust · Value · Velocity
              </div>
            </div>
          <div className="hidden md:flex">
            {/* 3D toggle removed per user request */}
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer px-4 py-2 hover:text-accent transition-colors duration-300"
              activeClass="text-primary"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="our_strength"
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer px-4 py-2 hover:text-accent transition-colors duration-300"
              activeClass="text-primary"
            >
              Our Strength
            </ScrollLink>
            <ScrollLink
              to="products"
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer px-4 py-2 hover:text-accent transition-colors duration-300"
              activeClass="text-primary"
            >
              Products
            </ScrollLink>
            <ScrollLink
              to="industries"
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer px-4 py-2 hover:text-accent transition-colors duration-300"
              activeClass="text-primary"
            >
              Industries
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer px-4 py-2 hover:text-accent transition-colors duration-300"
              activeClass="text-primary"
            >
              Case Studies
            </ScrollLink>
            <ScrollLink
              to="salesforce-apps"
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer px-4 py-2 hover:text-accent transition-colors duration-300"
              activeClass="text-primary"
            >
              Applications
            </ScrollLink>
            <ScrollLink
              to="about4"
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer px-4 py-2 hover:text-accent transition-colors duration-300"
              activeClass="text-primary"
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="contact-form"
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer px-4 py-2 hover:text-accent transition-colors duration-300"
              activeClass="text-primary"
            >
              Contact Us
            </ScrollLink>
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
          <div className="md:hidden bg-white p-4">
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
      </div> {/* End of new wrapper div */}
    </header>
  );
};

export default Header;