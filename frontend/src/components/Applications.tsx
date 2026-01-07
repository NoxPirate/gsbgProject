"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const applications = [
  {
    title: "Email To Transaction",
    what: "Enables new email services with configurable fields, filters specific emails, processes anti-spam emails, manages auto-assignments, and sends acknowledgment notifications.",
    how: "Built by configuring existing Salesforce modules, allowing additional fields to be easily customized.",
    usage: "Improves efficiency by automating email workflows, reducing spam, and providing real-time transaction updates to customers, leading to better customer engagement and optimized processes.",
    image: "/assets/images/undraw_email-campaign_2z6t.svg",
  },
  {
    title: "HRM",
    what: "Built on Salesforce CRM using custom LWC components for UI and Apex for server-side logic.",
    how: "Utilizes Salesforce’s robust architecture with Lightning Web Components (LWC) for an intuitive UI, and Apex for handling complex server-side operations. It integrates all HR-related tasks into one seamless system.",
    usage: "Simplifies employee management, automates HR workflows, decommissions outdated systems, leading to increased efficiency, data accuracy, and better resource allocation.",
    image: "/assets/images/undraw_team-page_q5am.svg",
  },
  {
    title: "Lead Assignment Engine",
    what: "A Salesforce-based solution designed to automate the distribution of leads among sales teams using various rules like round-robin, LIFO, FIFO, Zip Code Ranges, and City logic.",
    how: "Leverages Salesforce’s custom logic, queues, and automation tools to assign leads evenly across sales teams. Admins define lead assignment rules, and the engine runs based on these inputs.",
    usage: "Streamlines the lead distribution process, ensuring fair allocation, faster response times, more efficient lead management, and improved sales outcomes.",
    image: "/assets/images/undraw_bear-market_dhi3.svg",
  },
  {
    title: "Case Management Automation",
    what: "A Salesforce solution to automate support case tracking, assignment, escalation, and resolution across service teams.",
    how: "Utilizes Service Cloud, automation rules, SLAs, and AI-powered recommendations to manage the entire support lifecycle.",
    usage: "Reduces manual workload, ensures faster issue resolution, improves customer satisfaction, and provides actionable service insights.",
    image: "/assets/images/undraw_sync-files_64mj.svg",
  },
];

const Applications = () => {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="salesforce-apps" className="py-24 bg-sky-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
          Transformative <span className="text-blue-600">Solutions</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {mounted && (
            <Slider {...settings}>
                {applications.map((app, index) => (
                <div key={index} className="px-2 pb-12">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[400px]">
                    {/* Left Content Side */}
                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white order-2 md:order-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0B63A6] mb-4 leading-tight">
                        {app.title}
                        </h3>
                        
                        <div className="space-y-4">
                        <div>
                            <span className="block text-slate-900 font-bold text-base mb-1">What:</span>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                            {app.what}
                            </p>
                        </div>
                        
                        <div>
                            <span className="block text-slate-900 font-bold text-base mb-1">How:</span>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                            {app.how}
                            </p>
                        </div>

                        <div>
                            <span className="block text-slate-900 font-bold text-base mb-1">Usage:</span>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                            {app.usage}
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Right Image Side */}
                    <div className="md:w-1/2 bg-[#0B1521] flex items-center justify-center p-8 order-1 md:order-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl scale-150 transform translate-x-1/2 translate-y-1/2"></div>
                        <div className="relative z-10 w-full h-48 md:h-auto flex items-center justify-center">
                        <Image 
                            src={app.image} 
                            alt={app.title} 
                            width={400} 
                            height={300} 
                            className="object-contain max-h-[250px] w-auto drop-shadow-2xl"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </Slider>
          )}
        </div>
      </div>

      {/* Style overrides for dots to utilize theme colors */}
      <style jsx global>{`
        .slick-dots li button:before {
          font-size: 12px;
          color: #0B63A6;
        }
        .slick-dots li.slick-active button:before {
          color: #0B63A6;
        }
        .slick-prev:before, .slick-next:before {
          color: #0B63A6;
        }
      `}</style>
    </section>
  );
};

export default Applications;