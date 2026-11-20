import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../../context/CurrencyContext';

export default function ProductInfo({
  product,
  selectedSize,
  setSelectedSize
}) {
  const { formatPrice, selectedCountry } = useCurrency();

  return (
    <div className="space-y-4">
      <div>
        {/* Brand Store Link */}
        <Link to="/products" className="text-xs font-bold text-[#007185] hover:text-[#C7511F] hover:underline block mb-1">
          Brand: {product.brand}
        </Link>

        {/* Title */}
        <h1 className="text-lg sm:text-2xl font-bold text-[#0F172A] leading-snug">
          {product.title}
        </h1>

        {/* Star Rating & Ratings Count */}
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs border-b border-slate-200 pb-3">
          <div className="flex text-amber-500 font-bold">
            {'★'.repeat(Math.floor(Number(product.rating)))}
            {'☆'.repeat(5 - Math.floor(Number(product.rating)))}
          </div>
          <span className="font-bold text-[#007185]">{product.rating}</span>
          <span className="text-[#007185] hover:underline cursor-pointer">
            {product.reviewCount} ratings
          </span>
          <span className="text-slate-300">|</span>
          <span className="bg-[#10367D] text-white text-[10px] font-black px-2 py-0.5 rounded">
            {product.badge}
          </span>
        </div>
      </div>

      {/* Price Block in Local Currency */}
      <div className="border-b border-slate-200 pb-4 space-y-1">
        <div className="flex items-baseline space-x-2">
          <span className="text-red-700 text-2xl font-bold">{product.discountPercent || "-20%"}</span>
          <span className="text-3xl font-bold text-[#10367D]">
            {formatPrice(product.price)}
          </span>
        </div>

        {product.listPrice && (
          <div className="text-xs text-slate-500">
            Typical Price: <span className="line-through">{formatPrice(product.listPrice)}</span>
          </div>
        )}

        {product.unitPrice && (
          <div className="text-xs text-slate-500 font-medium">
            Price: {product.unitPrice}
          </div>
        )}

        <div className="text-xs text-slate-700 pt-1">
          <span className="font-bold text-[#007185]">FREE Returns</span> • Available for fast dispatch to {selectedCountry.name}
        </div>
      </div>

      {/* Size / Variant Options */}
      {product.availableSizes && product.availableSizes.length > 0 && (
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <span className="text-xs font-bold text-slate-800">
            Size / Package: <strong className="text-slate-900">{selectedSize}</strong>
          </span>
          <div className="flex flex-wrap gap-2">
            {product.availableSizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                  selectedSize === size
                    ? 'border-[#10367D] bg-[#E1EDF9] text-[#10367D] font-bold ring-1 ring-[#10367D]'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Highlights Grid */}
      {product.highlights && (
        <div className="grid grid-cols-2 gap-2 text-xs border-b border-slate-200 pb-4">
          {product.highlights.map((h, i) => (
            <div key={i} className="p-2 bg-slate-50 rounded">
              <span className="block text-slate-500 text-[10px] uppercase font-bold">{h.label}</span>
              <span className="font-bold text-slate-900">{h.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* About this item (Amazon-Style Bullet Points) */}
      <div className="space-y-2 pt-2">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
          About this item
        </h3>
        <ul className="space-y-2 text-xs text-slate-700 list-disc list-outside pl-4 leading-relaxed">
          {product.features?.map((feat, idx) => (
            <li key={idx} className="marker:text-slate-400">
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* Ingredients & Safety */}
      {product.ingredients && (
        <div className="p-3.5 rounded-md bg-slate-50 border border-slate-200 text-xs space-y-1">
          <strong className="text-slate-900 block">Ingredients:</strong>
          <p className="text-slate-600 text-[11px] leading-relaxed">{product.ingredients}</p>
          {product.safetyWarning && (
            <p className="text-amber-900 text-[11px] font-bold pt-1 border-t border-slate-200">
              {product.safetyWarning}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
