import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-50 to-white text-slate-700 py-12 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-6">
        <div className="md:flex-1">
          <Image src="/assets/images/Extreme_FInal-removebg-preview.png" alt="GSBG Logo" width={400} height={120} className="h-12 md:h-14 w-auto mb-4" />
          <p className="mb-3 text-sm font-medium">Trust · Value · Velocity</p>
          <p className="text-sm text-gray-600 max-w-xl">We help organizations accelerate revenue, improve customer experience, and modernize operations with cloud-first architectures and pragmatic delivery.</p>
          <p className="text-sm mt-4 text-gray-500">© 2025 GSBG. Managed by GSBG. All Rights Reserved.</p>
        </div>

        <div className="md:w-1/3 grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Solutions</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="/products/sales-cloud" className="hover:text-sky-600 transition">Sales Cloud</a></li>
              <li><a href="/products/service-cloud" className="hover:text-sky-600 transition">Service Cloud</a></li>
              <li><a href="/products/cpq" className="hover:text-sky-600 transition">CPQ</a></li>
              <li><a href="/products/financial-cloud" className="hover:text-sky-600 transition">Financial Cloud</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="https://www.linkedin.com/company/gsbg-technologies/?viewAsMember=true" className="hover:text-sky-600 transition">LinkedIn</a></li>
              <li><a href="https://wa.me/918097904244" className="hover:text-sky-600 transition">WhatsApp</a></li>
              <li><a href="mailto:sales@gsbg.co.in" className="hover:text-sky-600 transition">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;