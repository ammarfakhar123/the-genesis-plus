import React from 'react';
import { BRAND_INFO } from '../data/products';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 md:py-16 space-y-8">
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
          Consumer Trust &amp; Data Transparency
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Effective Date: January 1, 2026 • Brand: {BRAND_INFO.name}
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-6 leading-relaxed bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-subtle">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md text-xs text-amber-900">
          <strong>Notice Regarding Legal Review:</strong> This privacy statement provides transparency on how The Genesis Plus operates as a static frontend product discovery catalog. Sections herein describe current technical operation and remain subject to customary business and legal review.
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Overview and Operational Scope</h2>
          <p>
            {BRAND_INFO.name} ("we", "us", or "our") operates a product discovery catalog serving consumers in North America. This website is a strictly frontend informational website designed to help visitors research product details, specifications, and verified ASINs before choosing to purchase items through third-party retailers, specifically Amazon.com.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. No Payment or Account Data Collected</h2>
          <p>
            Our website does not operate user accounts, customer logins, database registrations, or shopping carts. We do not request, process, handle, or store credit card numbers, billing addresses, banking credentials, or personal payment data.
          </p>
          <p>
            When you choose to purchase an item by clicking "Buy From Amazon", you are redirected to Amazon.com. All subsequent payment processing, transaction data, customer account management, and order fulfillment are governed solely by Amazon's Privacy Notice and Terms of Use.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Information Submitted via Contact Inquiries</h2>
          <p>
            If you voluntarily contact us via email or our client-side mailto inquiry feature, we receive only the information you choose to include in your email message (such as your email address, name, and message content). This information is utilized solely to respond to your specific customer service or IT inquiry.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Third-Party Links &amp; Retailer Relationships</h2>
          <p>
            This website contains outbound links to Amazon.com. We are not responsible for the privacy practices, cookie policies, or content of external websites. We encourage you to review the privacy policies of any third-party websites you visit.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">5. Contact Information</h2>
          <p>
            For questions or concerns regarding this privacy policy or our website practices, please contact us at:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Email:</strong> <a href={`mailto:${BRAND_INFO.email}`} className="text-brand-600 underline">{BRAND_INFO.email}</a></li>
            <li><strong>Phone:</strong> {BRAND_INFO.phone}</li>
            <li><strong>Region:</strong> {BRAND_INFO.region}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
