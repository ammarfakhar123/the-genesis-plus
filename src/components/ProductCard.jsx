import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCurrency } from '../../context/CurrencyContext';

export default function ProductCard({ product, index = 0 }) {
  const {
    slug,
    title,
    shortTitle,
    category,
    brand,
    discountPercent,
    price,
    listPrice,
    unitPrice,
    rating,
    reviewCount,
    images,
    amazonUrl
  } = product;

  const { formatPrice, selectedCountry } = useCurrency();
  const primaryImage = images && images.length > 0 ? images[0] : '/genesis-plus-logo.jpg';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-300 overflow-hidden"
    >
      {/* 1. EXACT SAME UNIFORM SQUARE PHOTO FRAME (100% IDENTICAL SIZE FOR ALL 5 PRODUCTS) */}
      <Link
        to={`/products/${slug}`}
        className="relative w-full aspect-square bg-[#F8FAFC] p-6 flex items-center justify-center overflow-hidden border-b border-slate-100 cursor-pointer select-none"
        aria-label={`View details for ${shortTitle || title}`}
      >
        <img
          src={primaryImage}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
        />

        {/* Discount Pill Badge in Vivid High-Contrast Red */}
        {discountPercent && (
          <span className="absolute top-3.5 left-3.5 bg-[#E11D48] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs tracking-wider">
            {discountPercent}
          </span>
        )}

        {/* Brand Tag in Royal Blue */}
        <span className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-xs text-[#10367D] text-[11px] font-semibold px-2.5 py-0.5 rounded-lg shadow-xs border border-slate-200">
          {brand}
        </span>
      </Link>

      {/* 2. PRODUCT BODY CONTENT */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          {/* Category */}
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0062BD] block mb-1">
            {category}
          </span>

          {/* Product Title */}
          <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#10367D] transition-colors line-clamp-2 leading-snug mb-2 font-heading">
            <Link to={`/products/${slug}`}>
              {shortTitle || title}
            </Link>
          </h3>

          {/* Star Rating & Review Count */}
          <div className="flex items-center space-x-1.5 mb-3">
            <div className="flex text-amber-400 text-xs font-bold">
              {'★'.repeat(Math.floor(Number(rating)))}
              {'☆'.repeat(5 - Math.floor(Number(rating)))}
            </div>
            <span className="text-xs font-semibold text-slate-800">{rating}</span>
            <span className="text-[11px] text-slate-400 font-normal">({reviewCount})</span>
          </div>
        </div>

        {/* 3. PROMINENT PRICE BLOCK IN LOCAL CURRENCY */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-[#10367D] tracking-tight font-heading">
                {formatPrice(price)}
              </span>
              {listPrice && (
                <span className="text-xs text-slate-400 line-through font-normal">
                  {formatPrice(listPrice)}
                </span>
              )}
            </div>

            {unitPrice && (
              <span className="block text-[11px] text-slate-500 font-normal mt-0.5">
                {unitPrice}
              </span>
            )}

            {/* Fast Delivery Note with Selected Country */}
            <div className="flex items-center space-x-1.5 mt-1 text-[11px] text-emerald-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>FREE Delivery to {selectedCountry.name}</span>
            </div>
          </div>

          {/* 4. ACTIONS: DETAILS & BUY NOW (SMOOTH DIRECT DESTINATION) */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              to={`/products/${slug}`}
              className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-[#F0F4F8] hover:bg-slate-200 text-[#10367D] font-semibold text-xs transition-colors"
            >
              Details
            </Link>

            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1 py-2.5 px-3 rounded-xl bg-[#10367D] hover:bg-[#0C2B64] text-white font-semibold text-xs shadow-sm transition-all"
            >
              <span>Buy Now</span>
              <svg className="w-3.5 h-3.5 text-[#74B4DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
