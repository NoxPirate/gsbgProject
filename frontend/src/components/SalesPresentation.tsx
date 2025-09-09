import React from "react";

const SalesPresentation = () => {
  return (
  <section id="sales-presentaton" className="py-20 bg-secondary hero-overlay-deep">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[var(--color-dark)] mb-12">Sales Presentation Demo</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <p className="text-lg mb-4">Explore some key features of Sales Cloud</p>
            <p className="text-xl font-semibold mb-4">Do you agree that this solution looks very user-friendly?</p>
            <p className="mb-4">Now imagine that you have such a tool always at hand. Upgrade your sales process with intuitive tools and gain valuable insight into your business. Adapt to the changing market and reliably meet your customers’ expectations. Draw conclusions from the data you collect with the help of the best CRM in the world, and improve your sales strategy.</p>
            <p className="font-bold">Earn more customers, sell more and grow with Salesforce Sales Cloud!</p>
          </div>
          <div className="md:w-1/2">
            <div className="w-full h-80 rounded-lg overflow-hidden bg-light header-deep">
              <div id="logoCanvasHost" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesPresentation;