"use client";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  // Ensure portals only render on client after mount to prevent hydration errors
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Dynamic Styles
  const isLight = scrolled || isHovered;
  const navBgClass = isLight ? "bg-white shadow-md border-b border-slate-100" : "bg-transparent";
  const linkClass = `px-1 py-0.5 rounded-lg nav-link font-medium cursor-pointer transition-colors ${
    isLight ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"
  }`;

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Layer */}
        <div className={`absolute inset-0 transition-colors duration-300 ${navBgClass}`} />

        {/* Content */}
        <nav className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-28 md:h-36">
              <div className="flex items-center gap-1">
                <Link href="/" className="flex items-center gap-3" aria-label="GSBG homepage">
                  <div className="flex flex-col items-start gap-1">
                    <div className="relative h-24 md:h-28 w-64 md:w-80 flex items-center">
                      <Image
                        src="/assets/images/Extreme_FInal-removebg-preview.png"
                        alt="GSBG Logo"
                        width={200}
                        height={60}
                        className="object-contain h-full w-auto"
                        priority={true}
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isLight ? 'text-slate-500' : 'text-slate-300/90'}`}>Trust · Value · Velocity</div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* DESKTOP NAVIGATION */}
              <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
                <ScrollLink to="home" smooth={true} duration={500} offset={-140} className={linkClass}>Home</ScrollLink>
                <ScrollLink to="our_strength" smooth={true} duration={500} offset={-140} className={linkClass}>Capabilities</ScrollLink>

                {/* Products dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleProductsEnter}
                  onMouseLeave={handleProductsLeave}
                >
                  <button
                    ref={productsRef}
                    className={`${linkClass} flex items-center gap-1`}
                    title="Products"
                    suppressHydrationWarning
                  >
                    Products
                    <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  {showProducts && productsRect && mounted && createPortal(
                    <div
                      className="absolute z-50 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
                      style={{
                        top: productsRect.bottom + 15 + window.scrollY,
                        left: productsRect.left - 100, // Slightly adjust left to center better if needed, keeping logic simple
                        width: 640,
                      }}
                       onMouseEnter={handleProductsEnter}
                       onMouseLeave={handleProductsLeave}
                    >
                      <div className="p-6 bg-white">
                        <div className="grid grid-cols-2 gap-4">
                           {[
                              { name: "Sales Cloud", href: "/products/sales-cloud", color: "bg-blue-50", text: "text-blue-600", desc: "Automate sales & close deals faster", icon: <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /> },
                              { name: "Service Cloud", href: "/products/service-cloud", color: "bg-teal-50", text: "text-teal-600", desc: "Deliver intelligent customer support", icon: <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /> },
                              { name: "Marketing Cloud", href: "/products/marketing-cloud", color: "bg-orange-50", text: "text-orange-600", desc: "Build personalized customer journeys", icon: <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /> },
                              { name: "Financial Cloud", href: "/products/financial-cloud", color: "bg-green-50", text: "text-green-600", desc: "Unify wealth & banking experiences", icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                              { name: "Community Cloud", href: "/products/community-cloud", color: "bg-indigo-50", text: "text-indigo-600", desc: "Connect partners & customers", icon: <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
                              { name: "Experience Cloud", href: "/products/experience-cloud", color: "bg-sky-50", text: "text-sky-600", desc: "Create digital experiences fast", icon: <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
                              { name: "Velocity (Industries)", href: "/products/velocity-industries", color: "bg-purple-50", text: "text-purple-600", desc: "Industry-specific solutions", icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" /> },
                              { name: "CPQ & Billing", href: "/products/cpq", color: "bg-pink-50", text: "text-pink-600", desc: "Streamline quote-to-cash", icon: <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /> },
                          ].map((item, i) => (
                              <Link key={i} href={item.href} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-100">
                                  <div className={`p-3 rounded-xl ${item.color} ${item.text} group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                                  </div>
                                  <div>
                                      <div className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{item.name}</div>
                                      <div className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</div>
                                  </div>
                              </Link>
                          ))}
                        </div>
                      </div>
                    </div>,
                    document.body
                  )}
                </div>

                <ScrollLink to="industries" smooth={true} duration={500} offset={-140} className={linkClass}>Industries</ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500} offset={-140} className={linkClass}>Case Studies</ScrollLink>
                <ScrollLink to="salesforce-apps" smooth={true} duration={500} offset={-140} className={linkClass}>Solutions</ScrollLink>
                <ScrollLink to="about4" smooth={true} duration={500} offset={-140} className={linkClass}>About</ScrollLink>

                {/* Blog link */}
                <Link href="/blog" className={linkClass}>Blog</Link>

                {/* Services dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <button
                    ref={servicesRef}
                    className={`${linkClass} flex items-center gap-1`}
                    title="Services"
                    suppressHydrationWarning
                  >
                    Services
                    <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>

                  {showServices && servicesRect && mounted && createPortal(
                    <div
                      className="absolute z-50 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
                      style={{
                        top: servicesRect.bottom + 15 + window.scrollY,
                        left: servicesRect.left - 260, // Shift more to left to align with right side of screen safer
                        width: 380,
                      }}
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      <div className="p-4 bg-white">
                         <div className="flex flex-col gap-2">
                          {[
                              { name: "Salesforce Consulting", href: "/services/salesforce-consulting", color: "bg-indigo-50", text: "text-indigo-600", desc: "Expert guidance for your CRM strategy", icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
                              { name: "Education Product", href: "/services/education-product", color: "bg-pink-50", text: "text-pink-600", desc: "Learning management solutions", icon: <path d="M12 14l9-5-9-5-9 5 9 5z" /> },
                              { name: "Salesforce Professional", href: "/services/salesforce-professional", color: "bg-cyan-50", text: "text-cyan-600", desc: "Staffing and resource augmentation", icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                          ].map((item, i) => (
                              <Link key={i} href={item.href} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-100">
                                  <div className={`p-3 rounded-xl ${item.color} ${item.text} group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                                  </div>
                                  <div>
                                      <div className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{item.name}</div>
                                      <div className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</div>
                                  </div>
                              </Link>
                          ))}
                        </div>
                      </div>
                    </div>,
                    document.body
                  )}
                </div>
              </div>

              {/* MOBILE MENU TOGGLE BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                title={menuOpen ? "Close menu" : "Open menu"}
                className={`md:hidden p-2 rounded-full hover:bg-black/5 transition-colors ${isLight ? "text-slate-800" : "text-white"}`}
                suppressHydrationWarning
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
        </nav>

        {/* MOBILE DRAWER (Portal) */}
        {mounted && createPortal(
          <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'}`}>
            <div 
              className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} 
              onClick={() => setMenuOpen(false)}
            />
            <div className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="p-6 flex justify-between items-center border-b border-slate-100 bg-slate-50/50">
                <span className="text-lg font-bold text-slate-800">Menu</span>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-500"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 flex flex-col space-y-4">
                 <ScrollLink to="home" smooth={true} duration={500} offset={-140} className="text-lg font-medium text-slate-700 hover:text-blue-600 block py-2 border-b border-slate-50" onClick={() => setMenuOpen(false)}>Home</ScrollLink>
                 <ScrollLink to="our_strength" smooth={true} duration={500} offset={-140} className="text-lg font-medium text-slate-700 hover:text-blue-600 block py-2 border-b border-slate-50" onClick={() => setMenuOpen(false)}>Capabilities</ScrollLink>
                 <Link href="/blog" className="text-lg font-medium text-slate-700 hover:text-blue-600 block py-2 border-b border-slate-50" onClick={() => setMenuOpen(false)}>Blog</Link>
                 
                 <div className="py-2">
                   <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Products</p>
                   {/* Product Links ... same links, just styles */}
                   <Link href="/products/sales-cloud" className="block py-2 text-slate-600 hover:text-blue-600 pl-3 border-l-2 border-slate-100 hover:border-blue-500 mb-1" onClick={() => setMenuOpen(false)}>Sales Cloud</Link>
                   <Link href="/products/service-cloud" className="block py-2 text-slate-600 hover:text-blue-600 pl-3 border-l-2 border-slate-100 hover:border-blue-500 mb-1" onClick={() => setMenuOpen(false)}>Service Cloud</Link>
                   <Link href="/products/cpq" className="block py-2 text-slate-600 hover:text-blue-600 pl-3 border-l-2 border-slate-100 hover:border-blue-500 mb-1" onClick={() => setMenuOpen(false)}>CPQ</Link>
                    <Link href="/products/financial-cloud" className="block py-2 text-slate-600 hover:text-blue-600 pl-3 border-l-2 border-slate-100 hover:border-blue-500 mb-1" onClick={() => setMenuOpen(false)}>Financial Cloud</Link>
                   <Link href="/products/marketing-cloud" className="block py-2 text-slate-600 hover:text-blue-600 pl-3 border-l-2 border-slate-100 hover:border-blue-500 mb-1" onClick={() => setMenuOpen(false)}>Marketing Cloud</Link>
                   <Link href="/products/community-cloud" className="block py-2 text-slate-600 hover:text-blue-600 pl-3 border-l-2 border-slate-100 hover:border-blue-500 mb-1" onClick={() => setMenuOpen(false)}>Community Cloud</Link>
                   <Link href="/products/experience-cloud" className="block py-2 text-slate-600 hover:text-blue-600 pl-3 border-l-2 border-slate-100 hover:border-blue-500 mb-1" onClick={() => setMenuOpen(false)}>Experience Cloud</Link>
                   <Link href="/products/velocity-industries" className="block py-2 text-slate-600 hover:text-blue-600 pl-3 border-l-2 border-slate-100 hover:border-blue-500 mb-1" onClick={() => setMenuOpen(false)}>Velocity (Industries)</Link>
                 </div>

                 <div className="py-2">
                   <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Services</p>
                   <Link href="/services/salesforce-consulting" className="block py-2 text-slate-600 hover:text-blue-600 pl-3 border-l-2 border-slate-100 hover:border-blue-500 mb-1" onClick={() => setMenuOpen(false)}>Salesforce Consulting</Link>
                   <Link href="/services/education-product" className="block py-2 text-slate-600 hover:text-blue-600 pl-3 border-l-2 border-slate-100 hover:border-blue-500 mb-1" onClick={() => setMenuOpen(false)}>Education Product</Link>
                   <Link href="/services/salesforce-professional" className="block py-2 text-slate-600 hover:text-blue-600 pl-3 border-l-2 border-slate-100 hover:border-blue-500 mb-1" onClick={() => setMenuOpen(false)}>Salesforce Professional</Link>
                 </div>
                 
                 <ScrollLink to="industries" smooth={true} duration={500} offset={-140} className="text-lg font-medium text-slate-700 hover:text-blue-600 block py-2 border-b border-slate-50" onClick={() => setMenuOpen(false)}>Industries</ScrollLink>
                 <ScrollLink to="projects" smooth={true} duration={500} offset={-140} className="text-lg font-medium text-slate-700 hover:text-blue-600 block py-2 border-b border-slate-50" onClick={() => setMenuOpen(false)}>Case Studies</ScrollLink>
                 
                 <ScrollLink to="contact-form" smooth={true} duration={500} offset={-140} className="mt-8 w-full bg-slate-900 text-white py-4 rounded-xl text-center font-bold shadow-lg shadow-slate-300 hover:shadow-slate-400 transition-all" onClick={() => setMenuOpen(false)}>Contact Us</ScrollLink>
              </div>
            </div>
          </div>,
          document.body
        )}
      </header>
    </>
  );
};

export default Header;
