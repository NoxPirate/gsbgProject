import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function SalesforceConsulting() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      
      {/* HERO SECTION - Dark & Immersive */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden z-10 bg-[#061020] text-white">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 p-32 bg-blue-600/20 rounded-full blur-[100px] -mr-16 -mt-16 pointer-events-none opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-40 bg-teal-500/10 rounded-full blur-[120px] -ml-20 -mb-20 pointer-events-none opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]"></div>

        <div className="container mx-auto px-6 relative">
          <BackButton className="text-white/70 hover:text-white mb-8" />
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight fade-up tracking-tight">
              Salesforce <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-sm">
                Consulting Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/90 mb-10 leading-relaxed max-w-3xl fade-up delay-100 font-light">
              Strategy, architecture, and delivery to transform your business. We unlock the full potential of your Salesforce investment with rigorous, proven methodologies.
            </p>
            <div className="flex flex-wrap gap-4 fade-up delay-200">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:scale-105">
                Start a Discovery
              </button>
              <button className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP - Floating Glass Card */}
      <section className="relative z-20 -mt-16 mb-24 px-6">
        <div className="container mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200/50 border border-white/50 p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 fade-up delay-300">
            <div className="text-center border-r border-slate-100 last:border-0 relative group">
               <div className="absolute inset-0 bg-blue-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
               <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0B63A6] mb-2">90%</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Milestone Delivery</div>
               </div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0 relative group">
               <div className="absolute inset-0 bg-blue-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
               <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0B63A6] mb-2">100+</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Projects Delivered</div>
               </div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0 relative group">
                <div className="absolute inset-0 bg-blue-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
                <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0B63A6] mb-2">3x</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Faster ROI</div>
                </div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0 relative group">
               <div className="absolute inset-0 bg-blue-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
               <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0B63A6] mb-2">24/7</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Support</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES - Light Grey Background */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-blue-50/40 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">Comprehensive Services</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">
              From initial strategy to ongoing support, we cover every aspect of your Salesforce journey with precision and care.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 group hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-blue-500/20">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Strategy & Roadmap</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Define outcomes, success metrics and an actionable roadmap to get there.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-cyan-500 text-xl">✓</span> Business Process Review
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-cyan-500 text-xl">✓</span> Solution Architecture
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-cyan-500 text-xl">✓</span> Digital Transformation
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-xl shadow-blue-500/5 border border-blue-100 group hover:translate-y-[-5px] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-600 to-cyan-500 opacity-10 rounded-bl-full pointer-events-none"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-cyan-500/20">🚀</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">Implementation</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Design and deliver cloud solutions with iterative sprints and stakeholder alignment.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-blue-500 text-xl">✓</span> Quick Start Packages
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-blue-500 text-xl">✓</span> Custom Development
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-blue-500 text-xl">✓</span> Lightning Experience
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 group hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-indigo-500/20">🔗</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">Data & Integration</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Migrate and integrate data reliably to avoid disruption and enable analytics.</p>
              <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-indigo-500 text-xl">✓</span> Data Cleanup & Migration
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-indigo-500 text-xl">✓</span> MuleSoft Integration
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-indigo-500 text-xl">✓</span> Analytics & Dashboards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY APPROACH - High Contrast Dark Section */}
      <section className="py-24 bg-[#0a1628] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
            {/* Visual Element */}
            <div className="w-full md:w-1/2 fade-up">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-cyan-400 rounded-full blur-[50px] opacity-40"></div>
                <h3 className="text-2xl font-bold mb-8 text-white">Why Our Delivery Works</h3>
                <div className="space-y-8">
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-full bg-[#112240] border border-white/10 flex items-center justify-center text-cyan-400 font-bold text-xl shrink-0 group-hover:border-cyan-400/50 group-hover:text-white group-hover:bg-cyan-500 transition-all duration-300">1</div>
                      <div>
                        <h4 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">Outcome-Driven</h4>
                        <p className="text-blue-100/60 mt-2 leading-relaxed">We focus on measurable business outcomes, not just technical deployment.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-full bg-[#112240] border border-white/10 flex items-center justify-center text-blue-400 font-bold text-xl shrink-0 group-hover:border-blue-400/50 group-hover:text-white group-hover:bg-blue-500 transition-all duration-300">2</div>
                      <div>
                        <h4 className="font-bold text-lg text-white group-hover:text-blue-300 transition-colors">Adoption-Focused</h4>
                        <p className="text-blue-100/60 mt-2 leading-relaxed">Cross-functional teams that prioritize user adoption and change management.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-full bg-[#112240] border border-white/10 flex items-center justify-center text-purple-400 font-bold text-xl shrink-0 group-hover:border-purple-400/50 group-hover:text-white group-hover:bg-purple-500 transition-all duration-300">3</div>
                      <div>
                        <h4 className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors">Risk-Managed</h4>
                        <p className="text-blue-100/60 mt-2 leading-relaxed">Strong governance and risk controls ensure predictable timeline and budget.</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 fade-up delay-100 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Your Partner in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Success</span>
              </h2>
              <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
                We believe that successful Salesforce implementation is 20% technology and 80% people and process. Our proven consulting methodology ensures your team is ready to leverage the full power of the platform from Day 1.
              </p>
              <button className="text-white font-bold text-lg hover:text-cyan-300 transition-colors inline-flex items-center gap-3 group border-b border-transparent hover:border-cyan-300 pb-1">
                Learn about our methodology 
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <div className="bg-slate-50">
        <Contact />
      </div>
      
    </main>
  );
}
