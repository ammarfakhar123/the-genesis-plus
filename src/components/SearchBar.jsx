import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function SearchBar({ placeholder = "Search products, brands, or categories...", className = "" }) {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') || '');
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/products?search=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/products');
    }
  };

  const handleClear = () => {
    setQuery('');
    if (searchParams.get('search')) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('search');
      navigate(`/products${newParams.toString() ? `?${newParams.toString()}` : ''}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative flex items-center w-full ${className}`}>
      <div className="relative flex-1 flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label="Search product catalog"
          className="w-full h-11 pl-4 pr-10 rounded-l-lg border-2 border-r-0 border-slate-300 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors shadow-sm"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search text"
            className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 focus:outline-none"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <button
        type="submit"
        aria-label="Submit search"
        className="h-11 px-5 rounded-r-lg bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center font-medium text-sm transition-colors border-2 border-brand-600 hover:border-brand-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}
