import React from 'react';
import { useCurrency } from '../../context/CurrencyContext';

export default function AmazonBuyBox({
  product,
  quantity,
  setQuantity
}) {
  const { formatPrice, selectedCountry, setIsModalOpen } = useCurrency();

  return (
    <div className="border border-slate-300 rounded-lg p-5 space-y-4 bg-white shadow-xs">
      <div className="space-y-1">
        <span className="text-2xl font-bold text-[#10367D]">
          {formatPrice(product.price)}
        </span>
        <div className="text-xs text-slate-600">
          <span>FREE delivery to </span>
          <strong className="text-slate-900">{selectedCountry.name}</strong>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="text-xs text-[#007185] hover:text-[#C7511F] flex items-center space-x-1 cursor-pointer"
        >
          <svg className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <span>Deliver to {selectedCountry.name} ({selectedCountry.code})</span>
        </button>
      </div>

      <div className="text-lg font-bold text-emerald-700">
        In Stock
      </div>

      {/* Quantity Selector */}
      <div className="text-xs space-y-1">
        <label className="block text-slate-600">Quantity:</label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="bg-slate-100 border border-slate-300 rounded px-2.5 py-1 text-xs font-bold text-slate-800 focus:outline-none"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Prominent Buy Now Button in Brand Navy #10367D */}
      <div className="pt-2">
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-[#10367D] hover:bg-[#0C2B64] text-white font-bold text-sm shadow transition-all duration-150"
        >
          <span>Buy Now</span>
          <svg className="w-4 h-4 text-[#74B4DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Security & Seller Info */}
      <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 space-y-2">
        <div className="flex justify-between">
          <span className="text-slate-500">Ships from</span>
          <span className="font-bold text-slate-800">The Genesis Plus</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Sold by</span>
          <span className="font-bold text-slate-800">THEGENESISPLUS LLC</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Returns</span>
          <span className="text-[#007185] hover:underline cursor-pointer">Returnable within 30 days</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Payment</span>
          <span className="text-[#007185] hover:underline cursor-pointer">Secure transaction</span>
        </div>
      </div>

      {/* Safe Shopping Guarantee Badge */}
      <div className="p-2.5 bg-emerald-50 rounded border border-emerald-200 text-[11px] text-emerald-800 flex items-center space-x-2">
        <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>100% Genuine factory-sealed batch.</span>
      </div>
    </div>
  );
}
