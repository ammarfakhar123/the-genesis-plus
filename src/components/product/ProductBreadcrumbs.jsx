import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductBreadcrumbs({ product }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center space-x-1.5 border-b border-slate-100 pb-2">
      <Link to="/" className="text-[#007185] hover:text-[#C7511F] hover:underline">Home</Link>
      <span>›</span>
      <Link to="/products" className="text-[#007185] hover:text-[#C7511F] hover:underline">{product.category}</Link>
      <span>›</span>
      <span className="text-slate-700 font-medium truncate max-w-xs sm:max-w-md">
        {product.shortTitle || product.title}
      </span>
    </nav>
  );
}
