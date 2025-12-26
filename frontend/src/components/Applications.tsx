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
  <section id="salesforce-apps" className="py-20 bg-sky-200">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-12">
          Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Solutions</span>
        </h2>
        <Slider {...settings}>
          {applications.map((app, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">{app.title}</h3>
                  <p className="mb-2 text-gray"><strong className="text-[var(--color-dark)]">What:</strong> {app.what}</p>
                  <p className="mb-2 text-gray"><strong className="text-[var(--color-dark)]">How:</strong> {app.how}</p>
                  <p className="text-gray"><strong className="text-[var(--color-dark)]">Usage:</strong> {app.usage}</p>
                </div>
                <div className="md:w-1/2 flex items-center justify-center p-6 bg-dark">
                  <Image src={app.image} alt={app.title} width={300} height={200} style={{ height: "auto" }} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Applications;