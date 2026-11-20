import React from 'react';
import { BRAND_INFO } from '../data/products';

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 md:py-16 space-y-8">
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
          Consumer Disclosure &amp; Policy
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Disclaimer &amp; Affiliate Disclosure
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Effective Date: January 1, 2026 • Brand: {BRAND_INFO.name}
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-6 leading-relaxed bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-subtle">
        <div className="bg-blue-50 border-l-4 border-brand-600 p-4 rounded-r-md text-xs text-brand-900">
          <strong>Important Customer Notice:</strong> The Genesis Plus is an independent product discovery catalog. We do not sell items directly, process payments, or maintain warehouse inventory. All purchases are completed exclusively on Amazon.com.
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Amazon Referral &amp; Non-Endorsement Notice</h2>
          <p>
            {BRAND_INFO.name} features product information to help users explore and compare items. Outbound links to Amazon.com may be affiliate or sponsored links. As an independent platform, {BRAND_INFO.name} is not officially affiliated with, endorsed by, sponsored by, or operated by Amazon.com, Inc. or its subsidiaries.
          </p>
          <p>
            Amazon, the Amazon logo, AmazonSupply, and the AmazonSupply logo are trademarks of Amazon.com, Inc. or its affiliates.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Pricing &amp; Inventory Availability Notice</h2>
          <p>
            Prices and availability for products on Amazon.com change dynamically and may differ from references in this catalog. We intentionally display "Check price on Amazon" rather than static price estimates so that visitors always view current, authentic pricing directly on Amazon.com.
          </p>
          <p>
            Any price displayed on Amazon.com at the time of purchase will govern the purchase of that product.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Product Details &amp; Manufacturer Information</h2>
          <p>
            Product descriptions, images, ingredient listings, and technical specifications are compiled based on verified manufacturer disclosures and public catalog listings. While we strive to maintain accurate information, manufacturers may update packaging, formulations, or specifications without prior notice. Always read labels, warnings, and directions provided with the product before use.
          </p>
          <p>
            Products displayed on this website are manufactured by their respective brand owners (e.g. Murray &amp; Lanman, Barnett Confectioners Ltd., Zion Health). {BRAND_INFO.name} does not manufacture these goods.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Customer Support &amp; Order Inquiries</h2>
          <p>
            Because all commercial transactions take place on Amazon.com, inquiries regarding payment authorization, order tracking, shipping dates, damaged parcels, returns, or refunds must be directed to Amazon Customer Service or the seller of record through your Amazon account.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">5. Contact The Genesis Plus</h2>
          <p>
            For questions about our platform or general IT inquiries, please contact:
          </p>
          <p className="text-xs">
            <strong>The Genesis Plus</strong><br />
            Email: <a href={`mailto:${BRAND_INFO.email}`} className="text-brand-600 underline">{BRAND_INFO.email}</a><br />
            Phone: {BRAND_INFO.phone}<br />
            Region: {BRAND_INFO.region}
          </p>
        </section>
      </div>
    </div>
  );
}
