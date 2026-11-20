import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/products';
import logoImg from '../assets/logo/genesis-plus-logo.jpg';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="bg-white min-h-screen py-12 md:py-16 font-sans">
      <SEO
        title="About Us | The Genesis Plus"
        description="Learn about The Genesis Plus — Empowering Tomorrow. Our mission, verified consumer catalog standards, and regional IT solutions across North America."
        keywords="About The Genesis Plus, Empowering Tomorrow, verified catalog, North America"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-genesis-navy text-xs font-black uppercase tracking-widest shadow-xs">
            <span>Our Corporate Identity</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-genesis-navy tracking-tight font-heading">
            About {BRAND_INFO.name}
          </h1>

          <p className="text-base sm:text-lg text-genesis-sky font-bold">
            "{BRAND_INFO.tagline}"
          </p>
        </div>

        {/* Brand Profile Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-card space-y-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 pb-8 border-b border-slate-100">
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm shrink-0">
              <img
                src={logoImg}
                alt="The Genesis Plus Official Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="text-center sm:text-left space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-genesis-navy font-heading">
                Verified Product Discovery & Consumer Solutions
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The Genesis Plus is dedicated to providing consumers across North America with curated, verified, and transparent access to high-standard consumer goods and technological solutions. We focus on authentic product verification, precise technical specifications, and expedited regional fulfillment.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-genesis-navy text-white flex items-center justify-center font-black text-sm mb-3">
                01
              </div>
              <h3 className="text-base font-black text-genesis-navy font-heading">Verified Authenticity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every single item in our catalog is rigorously validated for genuine manufacturing origin, verified ingredients, and truthful specifications.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-genesis-navy text-white flex items-center justify-center font-black text-sm mb-3">
                02
              </div>
              <h3 className="text-base font-black text-genesis-navy font-heading">Direct Dispatch</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All customer orders are handled with end-to-end encrypted security and expedited shipping across {BRAND_INFO.region}.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-genesis-navy text-white flex items-center justify-center font-black text-sm mb-3">
                03
              </div>
              <h3 className="text-base font-black text-genesis-navy font-heading">IT & Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {BRAND_INFO.contactHeading}. Our dedicated digital inquiries team is available for prompt communication and client support.
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/products"
              className="px-6 py-3.5 rounded-xl bg-genesis-navy text-white font-extrabold text-xs sm:text-sm hover:bg-genesis-blueHover transition-all shadow-md"
            >
              Explore Verified Products (5)
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#EBEBEB] text-genesis-navy font-bold text-xs sm:text-sm hover:bg-slate-200 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
