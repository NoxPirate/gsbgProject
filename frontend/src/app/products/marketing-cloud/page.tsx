import React from 'react';
import Image from 'next/image';
import Contact from '@/components/Contact';
import BackButton from '@/components/BackButton';

export default function MarketingCloudPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center relative overflow-hidden bg-gradient-to-br from-[#E85D04] to-[#9D0208] text-white pt-20">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#FFBA08] rounded-full blur-[120px]" />
           <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#DC2F02] rounded-full blur-[100px]" />
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
              Marketing Cloud
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-sm">
              Make Every Moment <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBA08] to-[#FAA307]">
                Count.
              </span>
            </h1>
            
            <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-xl">
              Build lifelong relationships with data-first digital marketing. Deliver the right message, at the right time, on any channel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-[#FAA307] text-[#9D0208] font-bold text-lg hover:bg-[#ffb72b] transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25" suppressHydrationWarning>
                See it in Action
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 transition-all" suppressHydrationWarning>
                Learn More
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm text-orange-200/80 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FAA307]" /> Email & Mobile
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FAA307]" /> Social Media
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FAA307]" /> Advertising
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
              Intelligence Marketing Platform
            </h2>
            <p className="text-slate-600 text-lg">
              Know your customer, humanize every interaction, and optimize impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛣️",
                color: "bg-orange-100 text-orange-600",
                title: "Journey Builder",
                desc: "Create 1-to-1 customer journeys across email, mobile, ads, and the web that adapt based on customer behavior."
              },
              {
                icon: "🧠",
                color: "bg-purple-100 text-purple-600",
                title: "Einstein AI",
                desc: "Use artificial intelligence to predict engagement, send time, and content preferences for higher conversion."
              },
              {
                icon: "📈",
                color: "bg-green-100 text-green-600",
                title: "Data Cloud",
                desc: "Unify all your customer data to build a single source of truth that powers personalized experiences."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
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
              <div className="absolute inset-0 bg-orange-500/5 rounded-3xl transform rotate-3 scale-105" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10 border border-slate-200 bg-white">
                 <Image 
                   src="/assets/images/marketing_dashboard_v2.png" 
                   alt="Journey Builder Interface" 
                   width={800} 
                   height={600}
                   className="w-full h-auto"
                 />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 text-2xl mb-6">
                🚀
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Orchestrate Real-Time Journeys
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                 Guide customers through their unique lifecycle. From onboarding to retention, ensure every touchpoint is relevant, timely, and personal.
              </p>
              <ul className="space-y-4">
                {[
                  "Cross-Channel Triggering: Respond instantly to actions on your website or app",
                  "Dynamic Content: Adapt email and ad content based on user preferences",
                  "A/B Testing: Continually optimize paths for the best results"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-2xl mb-6">
                🧬
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Data-Driven Personalization
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Go beyond basic demographics. Use comprehensive customer data to deliver hyper-personalized experiences that resonate and convert.
              </p>
              <ul className="space-y-4">
                {[
                  "360-Degree Profiles: View all customer interactions in one place",
                  "Predictive Intelligence: Anticipate what customers want before they do",
                  "Automated Segmentation: Target niche audiences with precision"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                     <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 relative">
              <div className="absolute inset-0 bg-purple-500/5 rounded-3xl transform -rotate-3 scale-105" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 z-10 aspect-video bg-slate-900">
                 <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/2ZkjhgBNI-Y?autoplay=0&modestbranding=1&rel=0"
                    title="Marketing Cloud Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#9D0208] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { label: "Increase in Marketing ROI", value: "25%" },
              { label: "Higher Engagement Rates", value: "30%" },
              { label: "Faster Campaign Launch", value: "55%" },
              { label: "More Efficient Spend", value: "20%" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl lg:text-5xl font-bold text-[#FFBA08] mb-2">{stat.value}</div>
                <div className="text-orange-100 text-sm lg:text-base font-medium">{stat.label}</div>
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
