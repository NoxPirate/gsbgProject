import React from 'react';
import Image from 'next/image';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function FinancialCloudPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center relative overflow-hidden bg-gradient-to-br from-[#005C55] to-[#012E2B] text-white pt-20">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#00D4BD] rounded-full blur-[120px]" />
           <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#008F85] rounded-full blur-[100px]" />
        </div>
        
        {/* Abstract Shapes / Banner Image as texture */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 lg:opacity-30 -rotate-12 scale-90 pointer-events-none select-none mix-blend-overlay">
          <Image 
            src="/assets/images/banner.png" 
            alt="Background Pattern" 
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left fade-up">
            <BackButton className="text-white/80 hover:text-white mb-8" />
            
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
              Financial Services
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-sm">
              Build Trust. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4BD] to-[#4FFFD6]">
                Grow Wealth.
              </span>
            </h1>
            
            <p className="text-xl text-teal-100 mb-8 leading-relaxed max-w-xl">
              Unify client relationships, automate compliance, and deliver personalized financial advice at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-[#00D4BD] text-[#002A26] font-bold text-lg hover:bg-[#00ebd1] transition-all transform hover:scale-105 shadow-lg shadow-teal-500/25">
                Explore Solutions
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 transition-all">
                Watch Demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm text-teal-200/80 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D4BD]" /> Wealth Management
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D4BD]" /> Retail Banking
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D4BD]" /> Insurance
              </div>
            </div>
          </div>
          <div className="hidden lg:block"></div> 
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Reinventing Financial Services
            </h2>
            <p className="text-slate-600 text-lg">
              Secure, compliant, and data-driven solutions for modern financial institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👔",
                color: "bg-teal-100 text-teal-700",
                title: "Client Centricity",
                desc: "Get a 360-degree view of your client's financial life—accounts, goals, and family relationships—in one place."
              },
              {
                icon: "🔒",
                color: "bg-slate-100 text-slate-600",
                title: "Regulatory Compliance",
                desc: "Built-in guardrails and audit trails to help you stay compliant with KYC, AML, and fiduciary standards."
              },
              {
                icon: "📊",
                color: "bg-blue-100 text-blue-600",
                title: "Actionable Insights",
                desc: "AI-powered analytics identify new opportunities, churn risks, and next-best actions for advisors."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Feature 1 */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-teal-500/5 rounded-3xl transform -rotate-2 scale-105" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/10 border border-slate-200 bg-white">
                 <Image 
                   src="/assets/images/financial_dashboard_v2.png" 
                   alt="Financial Services Client Household View" 
                   width={800} 
                   height={600}
                   className="w-full h-auto"
                 />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 text-2xl mb-6">
                👪
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Total Household Visibility
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Go beyond individual accounts. Visualise client relationships, households, and business networks to uncover hidden opportunities and provide holistic advice.
              </p>
              <ul className="space-y-4">
                {[
                  "Visual Relationship Maps: Understand family and business connections at a glance",
                  "Life Events Tracking: Pivot advice based on key milestones",
                  "Unified Goal Planning: Track progress towards retiring, buying a home, or education"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Feature 2 */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl mb-6">
                🎯
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Goal-Based Planning
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Help clients achieve their dreams. Create comprehensive financial plans that track progress towards retirement, education, and major purchases in real-time.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized Savings Plans: Tailor strategies to each client's unique situation",
                  "Interactive Projections: Show clients the impact of their decisions instantly",
                  "Proactive Alerts: Notify advisors when plans go off track"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                     <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl transform rotate-3 scale-105" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 z-10 aspect-video bg-slate-900">
                 <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/2ZkjhgBNI-Y?autoplay=0&modestbranding=1&rel=0"
                    title="Financial Cloud Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#012E2B] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { label: "Increase in Advisor Productivity", value: "40%" },
              { label: "Improvement in CSAT / NPS", value: "+15pts" },
              { label: "Faster Client Onboarding", value: "50%" },
              { label: "Wallet Share Growth", value: "22%" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl lg:text-5xl font-bold text-[#00D4BD] mb-2">{stat.value}</div>
                <div className="text-teal-100 text-sm lg:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="bg-slate-50">
        <Contact />
      </div>
    </main>
  );
}
