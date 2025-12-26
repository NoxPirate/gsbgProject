import React from 'react';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function EducationProduct() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      
      {/* HERO SECTION - Dark & Immersive */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden z-10 bg-[#0f172a] text-white">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 p-32 bg-teal-500/20 rounded-full blur-[100px] -ml-16 -mt-16 pointer-events-none opacity-40"></div>
        <div className="absolute bottom-0 right-0 p-40 bg-blue-600/10 rounded-full blur-[120px] -mr-20 -mb-20 pointer-events-none opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]"></div>

        <div className="container mx-auto px-6 relative">
          <BackButton className="text-white/70 hover:text-white mb-8" />
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight fade-up tracking-tight">
              Future-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-500 drop-shadow-sm">
                Education Cloud
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/90 mb-10 leading-relaxed max-w-3xl fade-up delay-100 font-light">
              Engage learners, empower faculty, and streamline administration. Build a connected campus experience on the world's #1 CRM platform.
            </p>
            <div className="flex flex-wrap gap-4 fade-up delay-200">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-teal-500/30 transition-all transform hover:scale-105">
                Request a Demo
              </button>
              <button className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition-all">
                Explore Solutions
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
               <div className="absolute inset-0 bg-teal-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
               <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0d9488] mb-2">+15%</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Retention Rate</div>
               </div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0 relative group">
               <div className="absolute inset-0 bg-teal-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
               <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0d9488] mb-2">360°</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Student View</div>
               </div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0 relative group">
                <div className="absolute inset-0 bg-teal-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
                <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0d9488] mb-2">40%</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Admin Time Saved</div>
                </div>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0 relative group">
               <div className="absolute inset-0 bg-teal-50/50 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
               <div className="relative">
                  <div className="text-5xl font-extrabold text-[#0d9488] mb-2">1:1</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Personalized Support</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED FEATURES - Light Grey Background */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-teal-50/40 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-blue-600">The Connected Campus</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">
              One unified platform to manage the entire student lifecycle, from initial recruitment to alumni engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 group hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-teal-500/20">🎓</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">Student Success</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Proactively identify at-risk students and coordinate support services to improve outcomes.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-teal-500 text-xl">✓</span> Unified Advising Console
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-teal-500 text-xl">✓</span> Early Warning Systems
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-teal-500 text-xl">✓</span> Appointment Booking
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-xl shadow-teal-500/5 border border-teal-100 group hover:translate-y-[-5px] transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-500 to-emerald-400 opacity-10 rounded-bl-full pointer-events-none"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-blue-500/20">📊</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Recruitment & Admissions</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Attract the right students and streamline the application process with automation.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-blue-500 text-xl">✓</span> Application Portal
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-blue-500 text-xl">✓</span> Marketing Journeys
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-blue-500 text-xl">✓</span> Document Verification
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 group hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 ring-1 ring-indigo-500/20">🔌</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">Institutional Operations</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Integrate your SIS, LMS, and finance systems for a single source of truth.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-indigo-500 text-xl">✓</span> SIS Integration
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-indigo-500 text-xl">✓</span> Alumni Management
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-indigo-500 text-xl">✓</span> Corporate Relations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMING LEARNER JOURNEY - Dark Section */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
            {/* Visual Element */}
            <div className="w-full md:w-1/2 fade-up">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-teal-400 rounded-full blur-[60px] opacity-20"></div>
                <h3 className="text-2xl font-bold mb-8 text-white">Transforming the Experience</h3>
                <div className="space-y-8">
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-[#0f172a] border border-white/10 flex items-center justify-center text-teal-400 text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">📱</div>
                      <div>
                        <h4 className="font-bold text-lg text-white group-hover:text-teal-300 transition-colors">Mobile-First</h4>
                        <p className="text-slate-300/70 mt-2 text-sm leading-relaxed">Meet students where they are with responsive portals and mobile apps.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-[#0f172a] border border-white/10 flex items-center justify-center text-blue-400 text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">🤖</div>
                      <div>
                        <h4 className="font-bold text-lg text-white group-hover:text-blue-300 transition-colors">AI-Powered Insights</h4>
                        <p className="text-slate-300/70 mt-2 text-sm leading-relaxed">Predictive analytics to identify opportunities for intervention and support.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-[#0f172a] border border-white/10 flex items-center justify-center text-indigo-400 text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">🤝</div>
                      <div>
                        <h4 className="font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">Lifelong Relationships</h4>
                        <p className="text-slate-300/70 mt-2 text-sm leading-relaxed">From prospect to donor, manage the entire constituent relationship lifecycle.</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 fade-up delay-100 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Why Institutions <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Choose Us</span>
              </h2>
              <p className="text-lg text-slate-300/80 mb-8 leading-relaxed">
                Education is evolving, and so are student expectations. We help you bridge the gap between legacy systems and modern digital experiences.
              </p>
              <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-4 text-lg text-white font-medium">
                      <span className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm border border-teal-500/30">✓</span>
                      Higher Engagement & Retention
                  </li>
                   <li className="flex items-center gap-4 text-lg text-white font-medium">
                      <span className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm border border-teal-500/30">✓</span>
                      Streamlined Administrative Workflows
                  </li>
                   <li className="flex items-center gap-4 text-lg text-white font-medium">
                      <span className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm border border-teal-500/30">✓</span>
                      Data-Driven Decision Making
                  </li>
              </ul>
              <button className="text-white font-bold text-lg hover:text-teal-300 transition-colors inline-flex items-center gap-3 group border-b border-transparent hover:border-teal-300 pb-1">
                Download the Education Cloud Guide
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
