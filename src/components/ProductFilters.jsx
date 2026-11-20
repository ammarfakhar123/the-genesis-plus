import React, { useState } from 'react';
import { CATEGORIES } from '../data/products';

export default function ProductFilters({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortChange,
  totalCount,
  onResetFilters
}) {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden mb-4 flex items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
        <button
          type="button"
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-700 hover:text-brand-600"
        >
          <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span>{isMobileFiltersOpen ? 'Hide Filters' : 'Show Filters & Sort'}</span>
        </button>

        <span className="text-xs font-medium text-slate-500">
          {totalCount} {totalCount === 1 ? 'Product' : 'Products'}
        </span>
      </div>

      {/* Filter Body (Always visible on desktop, toggleable on mobile) */}
      <div className={`space-y-6 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
        {/* Results Counter & Reset Box */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-subtle">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Catalog Filters</h2>
            {(selectedCategory !== 'All Categories' || searchQuery || sortOrder !== 'default') && (
              <button
                type="button"
                onClick={onResetFilters}
                className="text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors"
              >
                Reset
              </button>
            )}
          </div>
          <p className="text-xs text-slate-500">
            Showing <strong className="text-slate-900">{totalCount}</strong> verified Amazon {totalCount === 1 ? 'item' : 'items'}
          </p>
        </div>

        {/* Sort Options */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-subtle">
          <label htmlFor="sort-select" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
            Sort Order
          </label>
          <select
            id="sort-select"
            value={sortOrder}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full text-sm bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value="default">Default Order</option>
            <option value="name-asc">Title: A to Z</option>
            <option value="name-desc">Title: Z to A</option>
          </select>
        </div>

        {/* Category List */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-subtle">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Categories
          </h3>
          <div className="space-y-1.5">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => onSelectCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-between ${
                    isSelected
                      ? 'bg-brand-50 text-brand-700 font-semibold border-l-4 border-brand-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate">{category}</span>
                  {isSelected && (
                    <svg className="w-4 h-4 text-brand-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Brand Authenticity Assurance Card */}
        <div className="bg-blue-50/70 border border-blue-100 p-4 rounded-xl text-xs text-blue-900">
          <div className="flex items-center space-x-2 font-semibold mb-1">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Verified Marketplace Data</span>
          </div>
          <p className="text-blue-800 leading-relaxed text-[11px]">
            Every product in this catalog is verified against authentic Amazon listings with genuine ASINs.
          </p>
        </div>
      </div>
    </aside>
  );
}
