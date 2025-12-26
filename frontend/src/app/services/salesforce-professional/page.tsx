import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function SalesforceProfessional() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      
      {/* HERO SECTION - Professional Dark Theme */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden z-10 bg-[#0c1a2f] text-white">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 p-32 bg-sky-600/20 rounded-full blur-[100px] -mr-16 -mt-16 pointer-events-none opacity-40"></div>
        <div className="absolute bottom-0 left-0 p-40 bg-indigo-600/10 rounded-full blur-[120px] -ml-20 -mb-20 pointer-events-none opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]"></div>

        <div className="container mx-auto px-6 relative">
          <BackButton className="text-white/70 hover:text-white mb-8" />
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight fade-up tracking-tight">
              Salesforce <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 drop-shadow-sm">
                Professional Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300/90 mb-10 leading-relaxed max-w-3xl fade-up delay-100 font-light">
              Maximize availability, performance, and value. Our managed services and professional support ensure your Salesforce platform evolves at the speed of your business.
            </p>
            <div className="flex flex-wrap gap-4 fade-up delay-200">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-sky-500/30 transition-all transform hover:scale-105">
                Explore Managed Services
              </button>
              <button className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition-all">
                View SLA Options
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
               <div className="absolute inset-0 bg-sky-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
               <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0369a1] mb-2">99.9%</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Uptime Target</div>
               </div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0 relative group">
               <div className="absolute inset-0 bg-sky-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
               <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0369a1] mb-2">&lt;15m</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Response Time</div>
               </div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0 relative group">
                <div className="absolute inset-0 bg-sky-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
                <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0369a1] mb-2">24/7</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Monitoring</div>
               </div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0 relative group">
               <div className="absolute inset-0 bg-sky-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
               <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0369a1] mb-2">100%</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Certified Experts</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES - Light Grey Background */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-sky-50/40 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-indigo-600">Scalable Support Solutions</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">
              We provide the technical expertise and operational discipline to keep your critical business systems running smoothly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 group hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-sky-500/20">🛠️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">Managed Operations</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Comprehensive platform management including user administration, security audits, and health checks.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-sky-500 text-xl">✓</span> Incident Management
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-sky-500 text-xl">✓</span> User & License Mgmt
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-sky-500 text-xl">✓</span> Quarterly Health Checks
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-xl shadow-sky-500/5 border border-sky-100 group hover:translate-y-[-5px] transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-600 to-indigo-500 opacity-10 rounded-bl-full pointer-events-none"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-indigo-500/20">⚡</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">Automation & DevOps</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Streamline your release process and automate repetitive tasks to increase velocity and quality.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-indigo-500 text-xl">✓</span> CI/CD Pipeline Setup
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-indigo-500 text-xl">✓</span> Test Automation
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-indigo-500 text-xl">✓</span> Sandbox Management
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 group hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-blue-500/20">💻</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Custom Enhancements</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Agile development services to build new features, integrations, and lightning components.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-blue-500 text-xl">✓</span> LWC Development
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-blue-500 text-xl">✓</span> Apex Triggers & Classes
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-blue-500 text-xl">✓</span> API Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONAL EXCELLENCE - Dark Mode Section */}
      <section className="py-24 bg-[#0b1221] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-indigo-500/10 blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
            {/* Text Content */}
            <div className="w-full md:w-1/2 fade-up">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Commitment to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Excellence</span>
              </h2>
               <p className="text-lg text-slate-300/80 mb-10 leading-relaxed">
                Our support model is built on transparency and accountability. We don't just close tickets; we solve problems and prevent recurrence.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center text-green-400 text-2xl shadow-inner border border-white/5">🛡️</div>
                      <div>
                          <h4 className="font-bold text-white text-lg">Proactive Security</h4>
                          <p className="text-sm text-slate-400 mt-1">Continuous monitoring of shield events and login history.</p>
                      </div>
                  </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center text-blue-400 text-2xl shadow-inner border border-white/5">📈</div>
                      <div>
                          <h4 className="font-bold text-white text-lg">Performance Tuning</h4>
                          <p className="text-sm text-slate-400 mt-1">Optimization of queries and heavy processing jobs.</p>
                      </div>
                  </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center text-purple-400 text-2xl shadow-inner border border-white/5">📚</div>
                      <div>
                          <h4 className="font-bold text-white text-lg">Knowledge Base</h4>
                          <p className="text-sm text-slate-400 mt-1">Documentation of all customizations and fixes.</p>
                      </div>
                  </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center text-orange-400 text-2xl shadow-inner border border-white/5">🤝</div>
                      <div>
                          <h4 className="font-bold text-white text-lg">Dedicated Manager</h4>
                          <p className="text-sm text-slate-400 mt-1">Single point of contact for all your escalations.</p>
                      </div>
                  </div>
              </div>

               <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
                        <span>TRUSTED BY:</span>
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-[#0c1a2f]"></div>
                            <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-[#0c1a2f]"></div>
                            <div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-[#0c1a2f]"></div>
                        </div>
                        <span className="ml-2 text-sky-400">and 50+ other organizations</span>
                    </div>
               </div>
            </div>

            {/* Dashboard Visual */}
            <div className="w-full md:w-1/2 fade-up float-y delay-100">
                <div className="relative group">
                  <div className="absolute inset-0 bg-sky-500 rounded-3xl blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="bg-[#112240]/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
                     {/* Dashboard Header */}
                     <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                        <h3 className="text-xl font-bold text-white">Live Performance</h3>
                        <div className="flex gap-2">
                           <span className="w-3 h-3 rounded-full bg-red-500"></span>
                           <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                           <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        </div>
                     </div>
                     
                     <div className="space-y-8">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium text-slate-300">Incident Resolution</span>
                                <span className="font-bold text-green-400">98%</span>
                            </div>
                            <div className="w-full bg-[#0c1a2f] rounded-full h-2 overflow-hidden">
                                <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" style={{width: '98%'}}></div>
                            </div>
                        </div>
                         <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium text-slate-300">Customer Satisfaction</span>
                                <span className="font-bold text-sky-400">4.9/5</span>
                            </div>
                            <div className="w-full bg-[#0c1a2f] rounded-full h-2 overflow-hidden">
                                <div className="bg-gradient-to-r from-sky-500 to-blue-400 h-2 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]" style={{width: '96%'}}></div>
                            </div>
                        </div>
                         <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium text-slate-300">Release Success Rate</span>
                                <span className="font-bold text-indigo-400">100%</span>
                            </div>
                            <div className="w-full bg-[#0c1a2f] rounded-full h-2 overflow-hidden">
                                <div className="bg-gradient-to-r from-indigo-500 to-purple-400 h-2 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.5)]" style={{width: '100%'}}></div>
                            </div>
                        </div>
                     </div>
                     
                     <div className="mt-10 bg-[#0c1a2f] rounded-2xl p-6 text-center border border-white/5 relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-sky-400 to-indigo-400"></div>
                         <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold mb-2">Avg. Response Time</p>
                         <p className="text-4xl font-extrabold text-white">12 <span className="text-lg text-slate-500 font-normal">mins</span></p>
                     </div>
                  </div>
                </div>
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
