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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    <section id="contact-form" className="py-20 bg-gradient-to-b from-[#f4f7fb] to-white container-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-[#1089d3] mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-lg text-gray-500 mb-12">
          We’d love to hear from you! Fill out the form or visit us at our location.
        </p>

        <div className="flex flex-col md:flex-row">
          {/* FORM */}
          <div className="md:w-1/2 md:pr-12">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-t from-[#f4f7fb] to-white rounded-[30px] p-8 border-[5px] border-white shadow-[0_30px_30px_-20px_rgba(133,189,215,0.88)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-[#1089d3] font-semibold"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-3 rounded-2xl shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-[#1089d3] font-semibold"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-3 rounded-2xl shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[#1089d3] font-semibold"
                  >
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-3 rounded-2xl shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-[#1089d3] font-semibold"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    placeholder="e.g., 1234567890"
                    required
                    className="w-full bg-white px-4 py-3 rounded-2xl shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-[#1089d3] font-semibold"
                >
                  How We Can Help You?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="w-full bg-white px-4 py-3 rounded-2xl shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 font-bold text-white rounded-2xl bg-gradient-to-r from-[#1089d3] to-[#12B1D1] shadow-[0_20px_10px_-15px_rgba(133,189,215,0.88)] transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Submit
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <p className="mb-6 text-gray-600">
              <strong className="text-[#1089d3]">GSBG Technologies</strong> <br />
              Shop No - 18, LODHA ELITE, Near Nilje Railway Station, <br />
              Dombivali East, Thane, Pin-421204, Maharashtra, India
            </p>
            <p className="mb-6 text-gray-600">
              <strong className="text-[#1089d3]">EMAIL US :</strong>
              <a
                href="mailto:sales@gsbg.co.in"
                className="text-[#12B1D1] ml-1"
              >
                sales@gsbg.co.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
