import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { useCurrency } from '../../context/CurrencyContext';

export default function TodaysDealsSection({ products }) {
  const { selectedCountry } = useCurrency();

  return (
    <div id="deals" className="max-w-[1500px] mx-auto px-4 sm:px-6 pt-12">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-100 gap-3">
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <span className="bg-[#E11D48] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                TODAY'S DEALS
              </span>
              <span className="text-xs text-slate-500 font-normal">
                Prices in {selectedCountry.name} ({selectedCountry.code})
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              Limited-Time Featured Deals
            </h2>
          </div>

          <Link
            to="/products"
            className="text-xs font-semibold text-[#10367D] hover:text-[#0C2B64] hover:underline flex items-center space-x-1"
          >
            <span>View full catalog</span>
            <span>›</span>
          </Link>
        </div>

        {/* Product Grid: 100% Uniform Square Aspect Ratio Frame for all 5 Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
