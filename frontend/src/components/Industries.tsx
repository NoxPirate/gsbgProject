import React from "react";
import IndustryRobot from "./IndustryRobot";

const industriesData = [
    {
        title: "Real Estate",
        description: "The real estate industry involves the buying, selling, leasing, and management of properties including residential, commercial, and industrial spaces. With Salesforce, real estate businesses can streamline lead tracking, automate client communications, and manage property listings more efficiently. Implementing Salesforce solutions enhances customer relationship management and drives smarter, data-driven decision-making across the property lifecycle.",
      },
      {
        title: "Manufacturing",
        description: "We have delivered robust Salesforce-based solutions for Keysight and other prominent US-based manufacturers, utilizing Sales Cloud, Service Cloud, and CPQ to enhance field service efficiency, manage complex product configurations, and optimize after-sales support.",
      },
      {
        title: "Public Sector",
        description: "We’ve worked with the U.S. government to implement Health Cloud and OmniStudio solutions, enabling agencies to manage compensation, services, and benefits more effectively through automated workflows and citizen-facing platforms.",
      },
      {
        title: "Ecommerce",
        description: "We have led B2B and B2C digital transformation projects for clients like Driscoll’s, leveraging Salesforce Sales Cloud, Service Cloud, and Commerce Cloud to unify customer experiences across digital storefronts, a automate workflows, and drive scalable growth.",
      },
      {
        title: "Telecom",
        description: "Our team has executed comprehensive Lead-to-Cash implementations for leading telecom providers in Europe and India. These solutions integrate Salesforce CRM, CPQ, and Zora to enable streamlined customer acquisition, dynamic pricing, contract management, and billing.",
      },
      {
        title: "Healthcare",
        description: "For companies like BD, a global medical device leader, we have enabled secure and compliant digital transformation using Salesforce Health Cloud and custom solutions to improve patient engagement, sales operations, and internal collaboration.",
      },
];

const Industries = () => {
  const radius = 450; // Radius of the ring
  const angleStep = (2 * Math.PI) / industriesData.length;

  return (
    <section id="industries" className="py-20" style={{ backgroundColor: '#0a0a1a' }}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Industries</h2>
        <div className="relative flex justify-center items-center" style={{ height: '800px' }}>
          <div className="absolute inset-0">
            <IndustryRobot />
          </div>
          {industriesData.map((industry, index) => {
            const angle = index * angleStep;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return (
              <div
                key={index}
                className="absolute bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  width: '200px',
                }}
              >
                <h3 className="text-lg font-bold text-primary mb-1">{industry.title}</h3>
                <p className="text-gray text-sm">{industry.description.substring(0, 100)}...</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;