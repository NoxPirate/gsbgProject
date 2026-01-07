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

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const contentType = response.headers.get("content-type") || "";
      if (response.ok) {
        if (contentType.includes("application/json")) {
          const result = await response.json();
          console.log(result);
          setSubmitted(true);
        } else {
          // server returned non-JSON (HTML or plain text) but with 2xx status
          const text = await response.text();
          console.warn("Non-JSON response from contact endpoint:", text?.slice(0, 200));
          setSubmitted(true);
        }
      } else {
        // non-2xx response: try to parse json, otherwise read text
        if (contentType.includes("application/json")) {
          const errJson = await response.json();
          console.error("Contact submit failed:", errJson);
        } else {
          const errText = await response.text();
          console.error("Contact submit failed (text):", errText);
        }
        setError(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(true);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-[#07112b] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-6">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-accent">Get in Touch?</span>
        </h2>
        <p className="text-center text-lg text-gray-300 mb-12">We’d love to hear from you! Fill out the form or visit us at our location.</p>

          <div className="flex flex-col md:flex-row">
          {/* FORM */}
          <div className="md:w-1/2 md:pr-12">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">Thanks — we received your enquiry</h3>
                  <p className="text-gray-600">Our team will reach out to you shortly.</p>
                </div>
              ) : (
                <div>
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
                        className="w-full bg-white px-4 py-3 rounded-2xl shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400 text-[var(--color-dark)]"
                        suppressHydrationWarning
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
                        className="w-full bg-white px-4 py-3 rounded-2xl shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400 text-[var(--color-dark)]"
                        suppressHydrationWarning
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
                        className="w-full bg-white px-4 py-3 rounded-2xl shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400 text-[var(--color-dark)]"
                        suppressHydrationWarning
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
                        className="w-full bg-white px-4 py-3 rounded-2xl shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400 text-[var(--color-dark)]"
                        suppressHydrationWarning
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
                      className="w-full bg-white px-4 py-3 rounded-2xl shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400 text-[var(--color-dark)]"
                      suppressHydrationWarning
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full py-3 font-bold text-white rounded-2xl bg-[var(--color-primary)] transition-transform duration-200 hover:opacity-95 active:scale-95" suppressHydrationWarning>Submit</button>
                  {error && (
                    <div className="mt-4 text-sm text-red-600">There was an error submitting. Please try again or contact us at <a href="mailto:sales@gsbg.co.in" className="underline">sales@gsbg.co.in</a>.</div>
                  )}
                </div>
              )}
            </form>
            </div>

            {/* CONTACT INFO */}
            <div className="md:w-1/2 mt-10 md:mt-0 flex items-center">
              <div className="w-full bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">GSBG Technologies</h3>
                  <p className="text-white/80 leading-relaxed">
                    Shop No - 18, LODHA ELITE, Near Nilje Railway Station,<br />
                    Dombivali East, Thane, Pin-421204, Maharashtra, India
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <a href="mailto:sales@gsbg.co.in" className="text-accent hover:text-white transition-colors">sales@gsbg.co.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;
