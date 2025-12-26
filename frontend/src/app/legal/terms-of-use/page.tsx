import React from 'react';
import BackButton from '@/components/BackButton';

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <BackButton className="mb-8" />
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Terms of Use</h1>
          <p className="text-slate-500 mb-8">Last Updated: January 2025</p>

          <div className="prose prose-slate max-w-none text-slate-600">
            <p>
              Welcome to the GSBG Technologies website. By accessing or using our website, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our website.
            </p>

            <h3>1. Use of Website</h3>
            <p>
              You may use our website for lawful purposes only. You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful.
            </p>

            <h3>2. Intellectual Property Rights</h3>
            <p>
              Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. All these intellectual property rights are reserved. You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms of use.
            </p>

            <h3>3. Limitations of Liability</h3>
            <p>
              The information on this website is provided free-of-charge, and you acknowledge that it would be unreasonable to hold us liable in respect of this website and the information on this website. We will not be liable for any direct, indirect or consequential loss or damage arising under these terms and conditions or in connection with our website.
            </p>

            <h3>4. Restricted Access</h3>
            <p>
              We reserve the right to restrict access to areas of our website, or indeed our whole website, at our discretion. If we provide you with a user ID and password to enable you to access restricted areas of our website, you must ensure that the password is kept confidential.
            </p>

            <h3>5. Variation</h3>
            <p>
              We may revise these terms of use from time-to-time. Revised terms of use will apply to the use of our website from the date of the publication of the revised terms of use on our website.
            </p>

            <h3>6. Governing Law</h3>
            <p>
              These terms of use will be governed by and construed in accordance with the laws of India, and any disputes relating to these terms of use will be subject to the exclusive jurisdiction of the courts of Pune, India.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
