import React from "react";
import AnimatedBackground from "./AnimatedBackground";

const SalesPresentation = () => {
  return (
  <section id="sales-presentation" className="relative overflow-hidden py-24">
      {/* Background handled by AnimatedBackground but we can add a subtle overlay if needed */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-white text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md shadow-sm">
              Explore Features
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
              See Sales Cloud <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white">
                In Action
              </span>
            </h2>
            
            <p className="text-xl text-sky-100 font-medium mb-6 leading-relaxed">
              Experience the interface that powers the world's most productive sales teams.
            </p>
            
            <p className="text-white/80 leading-relaxed mb-8 text-lg">
              Imagine having a tool that adapts to your workflow. Upgrade your sales process with intuitive dashboards, AI-driven insights, and automation that frees you to focus on closing deals.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B63A6] bg-slate-200 relative overflow-hidden" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`, backgroundSize: 'cover' }}></div>
                 ))}
              </div>
              <p className="font-bold text-white text-sm">Trusted by 150,000+ companies</p>
            </div>
          </div>
          
          {/* Video Container */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group rounded-3xl p-3 bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl shadow-sky-900/40 transition-transform duration-500 hover:scale-[1.01]">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/20 shadow-inner">
                <iframe
                  title="Sales Presentation Demo"
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/2ZkjhgBNI-Y"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-sky-400/30 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl animate-float-slow"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SalesPresentation;