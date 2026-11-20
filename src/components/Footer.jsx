import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/genesis-plus-logo.jpg';
import { BRAND_INFO } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';

export default function Footer() {
  const { selectedCountry, setIsModalOpen } = useCurrency();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-700 select-none font-sans border-t border-slate-200">
      {/* 1. Back to Top Bar in Clean Light Neutral (#F8FAFC) */}
      <button
        type="button"
        onClick={scrollToTop}
        className="w-full bg-[#F8FAFC] hover:bg-slate-100 text-[#10367D] border-b border-slate-200 transition-colors py-3 text-center text-xs font-semibold tracking-wider uppercase block"
      >
        ▲ Back to top
      </button>

      {/* 2. Main 4-Column Directory on Pure White Background */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-xs">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#10367D] uppercase tracking-wider font-heading">
              The Genesis Plus
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs font-normal">
              "{BRAND_INFO.tagline}" — Curated authentic consumer specialties, guaranteed factory original batches, and rapid priority fulfillment across North America &amp; globally.
            </p>
            <div className="pt-1">
              <span className="inline-block bg-[#E1EDF9] text-[#10367D] text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Region: {BRAND_INFO.region}
              </span>
            </div>
          </div>

          {/* Column 2: Specialty Catalog Navigation */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#10367D] uppercase tracking-wider font-heading">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-slate-600 font-normal">
              <li>
                <Link to="/products?category=Grocery+%26+Gourmet+Food" className="hover:text-[#10367D] transition-colors">
                  Barnetts British Mega Sours
                </Link>
              </li>
              <li>
                <Link to="/products/florida-water-cologne-7-5oz" className="hover:text-[#10367D] transition-colors">
                  Murray &amp; Lanman Florida Water 1808
                </Link>
              </li>
              <li>
                <Link to="/products/claybrite-sensitive-natural-toothpaste-4oz" className="hover:text-[#10367D] transition-colors">
                  ClayBrite Sensitive Mineral Toothpaste
                </Link>
              </li>
              <li>
                <a href="/#deals" className="hover:text-[#10367D] transition-colors">
                  Today's Featured Deals
                </a>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#10367D] transition-colors">
                  Complete 5-Product Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Contacts */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#10367D] uppercase tracking-wider font-heading">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li className="font-semibold text-slate-900">
                {BRAND_INFO.contactHeading}
              </li>
              <li>
                <a href={`mailto:${BRAND_INFO.email}`} className="text-[#10367D] hover:underline transition-colors font-medium">
                  {BRAND_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${BRAND_INFO.phone}`} className="text-slate-800 hover:text-[#10367D] transition-colors font-medium">
                  {BRAND_INFO.phone}
                </a>
              </li>
              <li className="text-[11px] text-slate-500 font-normal">
                Support Hours: Mon - Fri, 9am - 6pm EST
              </li>
            </ul>
          </div>

          {/* Column 4: Verification & Trust */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#10367D] uppercase tracking-wider font-heading">
              Quality Assurance
            </h4>
            <p className="text-slate-600 leading-relaxed text-[11px] font-normal">
              Every item in our collection is backed by direct origin verification, complete ingredient disclosures, and a 30-day satisfaction guarantee.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-[10px] font-medium border border-slate-200">
                ✓ 100% Genuine
              </span>
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-[10px] font-medium border border-slate-200">
                ✓ SSL Encrypted
              </span>
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-[10px] font-medium border border-slate-200">
                ✓ 30-Day Returns
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Utility & Copyright Bar */}
      <div className="bg-[#F8FAFC] py-5 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          {/* Logo & Slogan */}
          <div className="flex items-center space-x-3">
            <img
              src={logoImg}
              alt="The Genesis Plus"
              className="h-8 w-auto object-contain"
            />
            <span className="font-bold text-[#10367D] text-xs font-heading">
              {BRAND_INFO.name}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] font-normal text-slate-500">{BRAND_INFO.tagline}</span>
          </div>

          {/* Dynamic Currency / Region Trigger */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 text-[11px] px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
            title="Change Country & Currency"
          >
            <span className="text-sm">{selectedCountry.flag}</span>
            <span className="font-medium text-slate-700">{selectedCountry.name}</span>
            <span className="text-slate-300">•</span>
            <span className="font-bold text-[#10367D]">{selectedCountry.code} ({selectedCountry.symbol.trim()})</span>
            <span className="text-[10px] text-slate-400 font-normal">▼</span>
          </button>

          {/* Legal */}
          <div className="text-[11px] text-slate-500 text-center sm:text-right font-normal">
            <span>© 2026 {BRAND_INFO.name}. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
