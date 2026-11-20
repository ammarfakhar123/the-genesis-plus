import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24 text-center">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-card space-y-6">
        <div className="w-16 h-16 mx-auto bg-brand-50 text-brand-600 rounded-full flex items-center justify-center font-extrabold text-2xl">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          The page or product you are looking for may have been moved, removed, or does not exist.
        </p>

        <div className="max-w-md mx-auto pt-2">
          <SearchBar placeholder="Search our catalog instead..." />
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-lg bg-brand-600 text-white font-medium text-xs sm:text-sm hover:bg-brand-700 transition-colors shadow-sm"
          >
            Go to Home
          </Link>
          <Link
            to="/products"
            className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-medium text-xs sm:text-sm hover:bg-slate-200 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
