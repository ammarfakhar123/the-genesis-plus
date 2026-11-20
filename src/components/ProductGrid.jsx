import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products = [], emptyMessage = "No products found matching your criteria." }) {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center my-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-1">No Products Match</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id || product.asin} product={product} index={index} />
      ))}
    </div>
  );
}
