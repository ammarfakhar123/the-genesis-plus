import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';

export default function BestSellersSection({ products }) {
  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 pt-12">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-100 gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              Best Sellers in Confectionery, Fragrance &amp; Wellness
            </h2>
            <p className="text-xs text-slate-500 font-normal">
              Top rated customer favorites with verified reviews and direct dispatch
            </p>
          </div>
          <Link
            to="/products"
            className="text-xs font-semibold text-[#10367D] hover:text-[#0C2B64] hover:underline"
          >
            See all rankings ›
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((product, idx) => (
            <ProductCard key={`bs-${product.id}`} product={product} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
