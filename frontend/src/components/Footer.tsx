import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-slate-300 py-16 border-t border-slate-800 relative z-10 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
          {/* Column 1: Brand */}
          <div className="space-y-6">
             <Link href="/" className="block">
                <Image 
                    src="/assets/images/Extreme_FInal-removebg-preview.png" 
                    alt="GSBG Logo" 
                    width={180} 
                    height={60} 
                    className="h-14 w-auto hover:opacity-90 transition-opacity" 
                />
             </Link>
             <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">Trust · Value · Velocity</p>
             <p className="text-slate-400 leading-relaxed text-sm">
               We help organizations accelerate revenue, improve customer experience, and modernize operations with cloud-first architectures and pragmatic delivery.
             </p>
             <div className="flex items-center gap-4 pt-2">
                <a 
                    href="https://www.linkedin.com/company/gsbg-technologies/?viewAsMember=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                >
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a 
                    href="https://wa.me/918097904244" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300"
                    aria-label="WhatsApp"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
                <a 
                    href="mailto:sales@gsbg.co.in" 
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-all duration-300"
                    aria-label="Email"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </a>
             </div>
          </div>

          {/* Column 2 & 3 Replacement: Map */}
          <div className="lg:col-span-2 h-full min-h-[300px] relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group ring-1 ring-white/5">
             <iframe 
                src="https://maps.google.com/maps?q=Shop%20No%20-%2018,%20LODHA%20ELITE,%20Near%20Nilje%20Railway%20Station,%20Dombivali%20East,%20Thane,%20421204,%20Maharashtra,%20India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                title="GSBG Location Map"
             ></iframe>
             {/* Gradient Overlay for blending */}
             <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
             <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                    <svg className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <span>Pune, Maharashtra, India</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                    <svg className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    <a href="tel:+918097904244" className="hover:text-white transition-colors">+91 80979 04244</a>
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                    <svg className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <a href="mailto:sales@gsbg.co.in" className="hover:text-white transition-colors">sales@gsbg.co.in</a>
                </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 w-full mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
           <p>© {new Date().getFullYear()} GSBG Technologies. All Rights Reserved.</p>
           <div className="flex flex-wrap justify-center gap-6">
             <Link href="/legal/privacy-notice" className="hover:text-slate-300 transition-colors">Privacy Notice</Link>
             <Link href="/legal/cookie-policy" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
             <Link href="/legal/statutory-compliance" className="hover:text-slate-300 transition-colors">Statutory Compliance</Link>
             <Link href="/legal/terms-of-use" className="hover:text-slate-300 transition-colors">Terms of Use</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;