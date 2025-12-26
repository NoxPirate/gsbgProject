import React from 'react';
import BackButton from '@/components/BackButton';

export default function StatutoryCompliance() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <BackButton className="mb-8" />
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Statutory Compliance</h1>
          <p className="text-slate-500 mb-8">Last Updated: January 2025</p>

          <div className="prose prose-slate max-w-none text-slate-600">
            <p>
              GSBG Technologies is committed to adhering to all applicable statutory and regulatory requirements in the jurisdictions where we operate. We believe in transparency and corporate responsibility.
            </p>

            <h3>Corporate Information</h3>
            <p>
              <strong>Legal Entity Name:</strong> GSBG Technologies Pvt. Ltd.<br />
              <strong>Registered Office:</strong> [Insert Registered Address Here]<br />
              <strong>Corporate Identity Number (CIN):</strong> [Insert CIN Here]<br />
              <strong>GSTIN:</strong> [Insert GSTIN Here]
            </p>

            <h3>Labor Law Compliance</h3>
            <p>
              We are fully compliant with all applicable labor laws, including but not limited to:
            </p>
            <ul>
              <li>Employees' Provident Funds and Miscellaneous Provisions Act, 1952</li>
              <li>Employees' State Insurance Act, 1948</li>
              <li>Payment of Gratuity Act, 1972</li>
              <li>Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</li>
            </ul>

            <h3>Data Protection and Privacy</h3>
            <p>
              We align our data processing practices with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. We are also continuously adapting to global standards such as GDPR where applicable.
            </p>
            
            <h3>Anti-Bribery and Corruption</h3>
            <p>
              GSBG has a zero-tolerance policy towards bribery and corruption. We conduct our business with integrity and in compliance with all applicable anti-corruption laws.
            </p>

            <p className="text-sm italic mt-8">
              Note: This page is for informational purposes. For specific compliance documents or queries, please contact our legal department.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
