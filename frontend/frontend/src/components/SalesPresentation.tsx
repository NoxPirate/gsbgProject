import React from "react";
import AnimatedBackground from "./AnimatedBackground";

const SalesPresentation = () => {
  return (
  <section id="sales-presentaton" className="relative overflow-hidden py-20">
      <AnimatedBackground />
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Sales Presentation Demo</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 text-white">
            <p className="text-lg mb-4">Explore some key features of Sales Cloud</p>
            <p className="text-xl font-semibold mb-4">Do you agree that this solution looks very user-friendly?</p>
            <p className="mb-4">Now imagine that you have such a tool always at hand. Upgrade your sales process with intuitive tools and gain valuable insight into your business. Adapt to the changing market and reliably meet your customers&apos; expectations. Draw conclusions from the data you collect with the help of the best CRM in the world, and improve your sales strategy.</p>
            <p className="font-bold">Earn more customers, sell more and grow with Salesforce Sales Cloud!</p>
          </div>
          <div className="md:w-1/2">
            <div className="w-full h-80 rounded-lg overflow-hidden bg-sky-200 header-deep">
              <iframe
                title="Sales Presentation Demo"
                className="w-full h-full"
                src="https://www.youtube.com/embed/2ZkjhgBNI-Y"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesPresentation;