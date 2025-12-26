import React from 'react';
import BackButton from '@/components/BackButton';

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <BackButton className="mb-8" />
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Cookie Policy</h1>
          <p className="text-slate-500 mb-8">Last Updated: January 2025</p>

          <div className="prose prose-slate max-w-none text-slate-600">
            <p>
              This Cookie Policy explains how GSBG Technologies ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h3>What are cookies?</h3>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>

            <h3>Why do we use cookies?</h3>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
            </p>

            <h3>Types of Cookies We Use</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</li>
              <li><strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</li>
              <li><strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</li>
            </ul>

            <h3>How can I control cookies?</h3>
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
