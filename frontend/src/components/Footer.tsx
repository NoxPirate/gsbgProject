import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-deep)] text-light py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image src="/assets/images/Extreme_Final2-removebg-preview.png" alt="GSBG Logo" width={150} height={48} className="h-12 mb-4" style={{ filter: 'invert(1) hue-rotate(180deg)' }} />
          <p className="mb-4 text-gray">Trust. Value. Velocity</p>
          <p className="text-sm">
            <a href="/legal/privacy_notice.html" className="mr-4 hover:text-accent transition-colors duration-300">Privacy Notice</a>
            <a href="/legal/cookie_policy.html" className="mr-4 hover:text-accent transition-colors duration-300">Cookie Policy</a>
            <a href="/legal/statutory-compliance.html" className="mr-4 hover:text-accent transition-colors duration-300">Statutory Compliance</a>
            <a href="/legal/terms-of-use.html" className="hover:text-accent transition-colors duration-300">Term of Use</a>
          </p>
          <p className="text-sm mt-4 text-gray">© 2025 GSBG. Managed by GSBG. All Rights Reserved.</p>
          <p className="text-sm mt-4 text-gray">GSBG Technologies, Shop No - 18, LODHA ELITE, Near Nilje Railway Station, Dombivali East, Thane, Pin-421204, Maharashtra, India</p>
        </div>
        <div className="md:w-1/4">
          <h4 className="text-xl font-bold mb-4 text-white">Direct Links</h4>
          <ul>
            <li className="mb-2"><a href="https://www.linkedin.com/company/gsbg-technologies/?viewAsMember=true" className="hover:text-accent transition-colors duration-300">LinkedIn</a></li>
            <li className="mb-2"><a href="https://wa.me/918097904244" className="hover:text-accent transition-colors duration-300">WhatsApp</a></li>
            <li className="mb-2"><a href="https://www.facebook.com/profile.php?id=61576211807667" className="hover:text-accent transition-colors duration-300">Facebook</a></li>
            <li className="mb-2"><a href="https://www.instagram.com/gsbgtech?igsh=cWRkNHd4dW9xMjFs" className="hover:text-accent transition-colors duration-300">Instagram</a></li>
            <li className="mb-2"><a href="mailto:sales@gsbg.co.in" className="hover:text-accent transition-colors duration-300">Email Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;