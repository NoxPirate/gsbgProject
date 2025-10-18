"use client";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const productsRef = useRef<HTMLButtonElement | null>(null);
  const servicesRef = useRef<HTMLButtonElement | null>(null);
  const [productsRect, setProductsRect] = useState<DOMRect | null>(null);
  const [servicesRect, setServicesRect] = useState<DOMRect | null>(null);
  // small delays to prevent dropdown flicker on quick mouse moves
  const SHOW_DELAY = 120; // ms
  const HIDE_DELAY = 240; // ms
  const productsShowTimer = useRef<number | null>(null);
  const productsHideTimer = useRef<number | null>(null);
  const servicesShowTimer = useRef<number | null>(null);
  const servicesHideTimer = useRef<number | null>(null);

  const handleProductsEnter = () => {
    if (productsHideTimer.current) {
      clearTimeout(productsHideTimer.current);
      productsHideTimer.current = null;
    }
    productsShowTimer.current = window.setTimeout(() => setShowProducts(true), SHOW_DELAY);
  };

  const handleProductsLeave = () => {
    if (productsShowTimer.current) {
      clearTimeout(productsShowTimer.current);
      productsShowTimer.current = null;
    }
    productsHideTimer.current = window.setTimeout(() => setShowProducts(false), HIDE_DELAY);
  };

  const handleServicesEnter = () => {
    if (servicesHideTimer.current) {
      clearTimeout(servicesHideTimer.current);
      servicesHideTimer.current = null;
    }
    servicesShowTimer.current = window.setTimeout(() => setShowServices(true), SHOW_DELAY);
  };

  const handleServicesLeave = () => {
    if (servicesShowTimer.current) {
      clearTimeout(servicesShowTimer.current);
      servicesShowTimer.current = null;
    }
    servicesHideTimer.current = window.setTimeout(() => setShowServices(false), HIDE_DELAY);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // measure buttons for portal positioning
  useEffect(() => {
    const measure = () => {
      if (productsRef.current) setProductsRect(productsRef.current.getBoundingClientRect());
      if (servicesRef.current) setServicesRect(servicesRef.current.getBoundingClientRect());
    };
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, []);

  return (
    <>
  <header className="fixed top-0 left-0 right-0 w-full backdrop-blur-md bg-transparent z-50">
        {/* Glass background overlay - keep blur, transparent base */}
        <div className="absolute inset-0 backdrop-blur-md" />
        <div className={`absolute inset-0 ${scrolled ? "bg-black/20" : "bg-transparent"}`} />

        {/* Content */}
        <nav className="relative z-10">
          <div className="glass-nav max-w-full mx-auto px-4">
            <div className="glass-filter" />
            <div className="glass-overlay" />
            <div className="glass-specular" />
            <div className="glass-content">
              <div className="max-w-7xl mx-auto px-2 py-0 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Link href="/" className="flex items-center gap-3" aria-label="GSBG homepage">
                    <div className="flex flex-col items-start gap-1">
                      <div className="relative h-24 md:h-32 w-64 md:w-88 flex items-center">
                        <Image
                          src="/assets/images/Extreme_FInal-removebg-preview.png"
                          alt="GSBG Logo"
                          width={1400}
                          height={400}
                          className="object-contain h-full w-auto"
                          priority={true}
                        />
                      </div>
                      <div className="block">
                        <div className="text-xs md:text-sm font-medium tracking-wide text-dark-blue opacity-90">Trust · Value · Velocity</div>
                      </div>
                    </div>
                  </Link>
                </div>

                  <div className="hidden md:flex items-center space-x-1 flex-nowrap whitespace-nowrap">
                    <ScrollLink to="home" smooth={true} duration={500} className="px-1 py-0.5 rounded-lg nav-link hover:bg-transparent cursor-pointer">Home</ScrollLink>
                    <ScrollLink to="our_strength" smooth={true} duration={500} className="px-1 py-0.5 rounded-lg nav-link hover:bg-transparent cursor-pointer">Capabilities</ScrollLink>

                  {/* Products dropdown (rendered in a portal so backdrop-filter blurs page content) */}
                  <div
                    className="relative"
                    onMouseEnter={handleProductsEnter}
                    onMouseLeave={handleProductsLeave}
                  >
                    <button
                      ref={productsRef}
                      className="px-1 py-0.5 rounded-lg nav-link font-medium hover:bg-transparent flex items-center gap-1"
                      title="Products"
                    >
                      Products
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    {showProducts && productsRect && typeof document !== 'undefined' && createPortal(
                      <div
                        className="nav-glass rounded-xl transition-all z-50"
                        style={{
                          position: "absolute",
                          top: productsRect.bottom + 8 + window.scrollY,
                          left: productsRect.left,
                          width: 224,
                        }}
                      >
                        <div className="glass-filter rounded-xl" />
                        <div className="glass-overlay rounded-xl" />
                        <div className="glass-specular rounded-xl" />
                        <div className="glass-content">
                          <div className="flex flex-col p-2">
                            <Link href="/products/sales-cloud" className="px-3 py-1 text-sm nav-link hover:bg-transparent rounded">Sales Cloud</Link>
                            <Link href="/products/service-cloud" className="px-3 py-1 text-sm nav-link hover:bg-transparent rounded">Service Cloud</Link>
                            <Link href="/products/cpq" className="px-3 py-1 text-sm nav-link hover:bg-transparent rounded">CPQ</Link>
                            <Link href="/products/financial-cloud" className="px-3 py-1 text-sm nav-link hover:bg-transparent rounded">Financial Cloud</Link>
                            <Link href="/products/marketing-cloud" className="px-3 py-1 text-sm nav-link hover:bg-transparent rounded">Marketing Cloud</Link>
                          </div>
                        </div>
                      </div>,
                      document.body
                    )}
                  </div>

                  <ScrollLink to="industries" smooth={true} duration={500} className="px-1 py-0.5 rounded-lg nav-link hover:bg-transparent cursor-pointer">Industries</ScrollLink>
                  <ScrollLink to="projects" smooth={true} duration={500} className="px-1 py-0.5 rounded-lg nav-link hover:bg-transparent cursor-pointer">Case Studies</ScrollLink>
                  <ScrollLink to="salesforce-apps" smooth={true} duration={500} className="px-1 py-0.5 rounded-lg nav-link hover:bg-transparent cursor-pointer">Solutions</ScrollLink>
                  <ScrollLink to="about4" smooth={true} duration={500} className="px-1 py-0.5 rounded-lg nav-link hover:bg-transparent cursor-pointer">About</ScrollLink>

                  {/* Blog link */}
                  <Link href="/blog" className="px-1 py-0.5 rounded-lg nav-link hover:bg-transparent">Blog</Link>

                  {/* Services dropdown (portal) */}
                  <div
                    className="relative"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <button
                      ref={servicesRef}
                      className="px-1 py-0.5 rounded-lg nav-link font-medium hover:bg-transparent flex items-center gap-1"
                      title="Services"
                    >
                      Services
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>

                    {showServices && servicesRect && typeof document !== 'undefined' && createPortal(
                      <div
                        className="nav-glass rounded-xl transition-all z-50"
                        style={{
                          position: "absolute",
                          top: servicesRect.bottom + 8 + window.scrollY,
                          left: servicesRect.left - 40,
                          width: 256,
                        }}
                      >
                        <div className="glass-filter rounded-xl" />
                        <div className="glass-overlay rounded-xl" />
                        <div className="glass-specular rounded-xl" />
                        <div className="glass-content">
                          <div className="flex flex-col p-2">
                            <Link href="/services/salesforce-consulting" className="px-3 py-1 text-sm nav-link hover:bg-transparent rounded">Salesforce Consulting</Link>
                            <Link href="/services/education-product" className="px-3 py-1 text-sm nav-link hover:bg-transparent rounded">Education Product</Link>
                            <Link href="/services/salesforce-professional" className="px-3 py-1 text-sm nav-link hover:bg-transparent rounded">Salesforce Professional</Link>
                          </div>
                        </div>
                      </div>,
                      document.body
                    )}
                  </div>

                  {/* menu toggle (desktop shows icon on the right) */}
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    title={menuOpen ? "Close menu" : "Open menu"}
                  >
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
            </div>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden p-4 rounded-b-lg nav-glass">
            <ScrollLink to="home" smooth={true} duration={500} className="block py-2 text-center nav-link hover:bg-white/5 rounded" onClick={() => setMenuOpen(false)}>Home</ScrollLink>
            <ScrollLink to="our_strength" smooth={true} duration={500} className="block py-2 text-center nav-link hover:bg-white/5 rounded" onClick={() => setMenuOpen(false)}>Our Strength</ScrollLink>
            <Link href="/blog" className="block py-2 text-center nav-link hover:bg-white/5 rounded" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/products/sales-cloud" className="block py-2 text-center nav-link hover:bg-white/5 rounded" onClick={() => setMenuOpen(false)}>Products</Link>
            <ScrollLink to="industries" smooth={true} duration={500} className="block py-2 text-center nav-link hover:bg-white/5 rounded" onClick={() => setMenuOpen(false)}>Industries</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="block py-2 text-center nav-link hover:bg-white/5 rounded" onClick={() => setMenuOpen(false)}>Case Studies</ScrollLink>
            <ScrollLink to="salesforce-apps" smooth={true} duration={500} className="block py-2 text-center nav-link hover:bg-white/5 rounded" onClick={() => setMenuOpen(false)}>Applications</ScrollLink>
            <ScrollLink to="about4" smooth={true} duration={500} className="block py-2 text-center nav-link hover:bg-white/5 rounded" onClick={() => setMenuOpen(false)}>About Us</ScrollLink>
            <ScrollLink to="contact-form" smooth={true} duration={500} className="block py-2 text-center nav-link hover:bg-white/5 rounded" onClick={() => setMenuOpen(false)}>Contact Us</ScrollLink>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
