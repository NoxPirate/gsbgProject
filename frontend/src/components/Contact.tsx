"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-4">Get in Touch</h2>
        <p className="text-center text-lg text-gray mb-12">We’d love to hear from you! Fill out the form or visit us at our location.</p>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-12">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-dark">Name</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full p-2 border border-gray rounded bg-secondary text-dark" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-dark">Last Name</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full p-2 border border-gray rounded bg-secondary text-dark" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-dark">Email ID</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray rounded bg-secondary text-dark" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-dark">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" placeholder="e.g., 1234567890" required className="w-full p-2 border border-gray rounded bg-secondary text-dark" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-dark">How We Can Help You?</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} required className="w-full p-2 border border-gray rounded bg-secondary text-dark"></textarea>
              </div>
              <button type="submit" className="animated-gradient-btn">Submit</button>
            </form>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <p className="mb-4 text-gray">
              <strong className="text-primary">GSBG Technologies</strong> <br />
              Shop No - 18, LODHA ELITE, Near Nilje Railway Station, <br />
              Dombivali East, Thane, Pin-421204, Maharashtra, India<br />
            </p>
            <p className="mb-4 text-gray">
              <strong className="text-primary">EMAIL US :</strong><a href="mailto:sales@gsbg.co.in" className="text-accent"> sales@gsbg.co.in</a>
            </p>
            {/* <div className="h-80">
              <iframe
                src="https://www.google.com/maps/place/LODHA+ELITE,+Maduban+Society,+Nilje+Gaon,+Maharashtra+421204/@19.1564269,73.0781197,19.73z/data=!4m6!3m5!1s0x3be7bffa2e072d81:0x286e1e41ef6a0240!8m2!3d19.15626!4d73.0785332!16s%2Fg%2F11pcw4xgm1?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Our Location - Salesforce Street"
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;