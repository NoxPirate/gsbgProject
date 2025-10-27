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
      // Use NEXT_PUBLIC_API_URL if provided; fallback to localhost:8000
      const API_URL = (process.env.NEXT_PUBLIC_API_URL as string) || "http://localhost:8000";

      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        source: "website-contact-form",
      };

      const response = await fetch(`${API_URL}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.detail || `HTTP ${response.status}`);
      }

      const result = await response.json();
      console.log("Lead created:", result);
      alert("Thank you — your message has been sent. We'll be in touch soon.");
      // optionally reset form
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-[#07112b] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-white mb-4">Get in Touch</h2>
        <p className="text-center text-lg text-gray-300 mb-12">We’d love to hear from you! Fill out the form or visit us at our location.</p>

        <div className="flex flex-col md:flex-row">
          {/* FORM */}
          <div className="md:w-1/2 md:pr-12">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-[var(--color-dark)] font-semibold">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-3 rounded-2xl shadow-sm focus:outline-none placeholder:text-gray-500 text-[var(--color-dark)]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-[var(--color-dark)] font-semibold">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-3 rounded-2xl shadow-sm focus:outline-none placeholder:text-gray-500 text-[var(--color-dark)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-[var(--color-dark)] font-semibold">Email ID</label>
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
                  <label htmlFor="phone" className="block mb-2 text-[var(--color-dark)] font-semibold">Phone Number</label>
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
                <label htmlFor="message" className="block mb-2 text-[var(--color-dark)] font-semibold">How We Can Help You?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="w-full bg-white px-4 py-3 rounded-2xl shadow-sm focus:outline-none placeholder:text-gray-500 text-[var(--color-dark)]"
                ></textarea>
              </div>

                <button type="submit" className="w-full py-3 font-bold text-white rounded-2xl bg-[var(--color-primary)] transition-transform duration-200 hover:opacity-95 active:scale-95">Submit</button>
              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="md:w-1/2 mt-10 md:mt-0 flex items-center">
              <div className="w-full bg-white/3 p-6 rounded-xl">
                <p className="mb-6 text-gray-100">
                  <strong className="text-white">GSBG Technologies</strong> <br />
                  Shop No - 18, LODHA ELITE, Near Nilje Railway Station, <br />
                  Dombivali East, Thane, Pin-421204, Maharashtra, India
                </p>
                <p className="mb-6 text-gray-100">
                  <strong className="text-white">EMAIL US :</strong>
                  <a href="mailto:sales@gsbg.co.in" className="text-white ml-1">sales@gsbg.co.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;
