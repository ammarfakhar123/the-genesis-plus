import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo/genesis-plus-logo.jpg';
import { BRAND_INFO } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { selectedCountry, setIsModalOpen } = useCurrency();

  const departments = [
    { name: 'All Departments', id: 'all' },
    { name: 'Grocery & Gourmet (Extreme Sours)', id: 'candy' },
    { name: 'Beauty & Personal Care (Florida Water)', id: 'cologne' },
    { name: 'Health & Oral Care (ClayBrite)', id: 'oral' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/products');
    }
  };

  return (
    <header className="sticky top-0 z-40 shadow-xs font-sans select-none border-b border-slate-200 bg-white">
      {/* 1. AMAZON MAIN TOP HEADER - CLEAN WHITE BACKGROUND */}
      <div className="bg-white text-slate-800 px-3 sm:px-6 py-2.5 border-b border-slate-100">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 p-1 rounded hover:opacity-90 transition-opacity">
            <img
              src={logoImg}
              alt="The Genesis Plus - Empowering Tomorrow"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Dynamic "Deliver to [Country]" Pill - Triggers Country & Currency Selector Modal */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="hidden lg:flex items-center space-x-2 text-xs px-2.5 py-1.5 rounded-xl hover:bg-slate-100 cursor-pointer shrink-0 transition-colors text-left border border-transparent hover:border-slate-200"
            title="Change country / currency"
          >
            <svg className="w-5 h-5 text-[#10367D] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] text-slate-500 font-medium">Deliver to</span>
              <span className="font-extrabold text-[#10367D] text-xs flex items-center space-x-1">
                <span>{selectedCountry.name}</span>
                <span className="text-[10px] text-slate-400">▼</span>
              </span>
            </div>
          </button>

          {/* Amazon Wide Central Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-4xl mx-auto hidden sm:flex items-stretch rounded-xl overflow-hidden bg-white border-2 border-[#10367D] shadow-xs focus-within:ring-2 focus-within:ring-[#74B4DA]">
            {/* Category Dropdown */}
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="bg-[#F1F5F9] hover:bg-slate-200 text-[#10367D] text-xs font-black px-3 py-2 border-r border-slate-300 focus:outline-none cursor-pointer shrink-0"
              aria-label="Select department"
            >
              <option value="All">All</option>
              <option value="Extreme Sours">Extreme Sours</option>
              <option value="Fragrance">Fragrance</option>
              <option value="Oral Care">Oral Care</option>
            </select>

            {/* Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search The Genesis Plus..."
              className="flex-1 px-4 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 bg-white focus:outline-none"
            />

            {/* Search Button in Brand Navy #10367D */}
            <button
              type="submit"
              className="bg-[#10367D] hover:bg-[#0C2B64] text-white px-5 flex items-center justify-center transition-colors shrink-0"
              aria-label="Search"
            >
              <svg className="w-5 h-5 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </button>
          </form>

          {/* Right Header Navigation Icons */}
          <div className="flex items-center space-x-1 sm:space-x-3 shrink-0 text-slate-800">
            {/* Country & Currency Selector Trigger */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-1.5 text-xs px-2.5 py-1.5 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors border border-slate-100 hover:border-slate-200"
              title="Change Country & Currency"
            >
              <span className="text-base">{selectedCountry.flag}</span>
              <span className="font-black text-xs text-slate-800 font-heading">{selectedCountry.code}</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </button>

            {/* Account & Lists */}
            <Link
              to="/contact"
              className="hidden lg:flex flex-col text-left leading-tight px-2 py-1.5 rounded hover:bg-slate-100 transition-colors"
            >
              <span className="text-[11px] text-slate-500">Hello, Guest</span>
              <span className="font-black text-xs text-[#10367D]">Account &amp; Lists</span>
            </Link>

            {/* Returns & Orders */}
            <Link
              to="/products"
              className="hidden md:flex flex-col text-left leading-tight px-2 py-1.5 rounded hover:bg-slate-100 transition-colors"
            >
              <span className="text-[11px] text-slate-500">Returns</span>
              <span className="font-black text-xs text-[#10367D]">&amp; Orders</span>
            </Link>

            {/* Cart Icon with count */}
            <Link
              to="/products"
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded hover:bg-slate-100 text-[#10367D] transition-colors"
              aria-label="Cart"
            >
              <div className="relative">
                <svg className="w-7 h-7 text-[#10367D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 bg-[#E11D48] text-white font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  5
                </span>
              </div>
              <span className="hidden sm:inline font-black text-xs text-[#10367D]">Cart</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-1.5 rounded text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-[#10367D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar & Deliver-To Bar */}
        <div className="sm:hidden mt-2 space-y-2">
          <form onSubmit={handleSearch} className="flex rounded-xl overflow-hidden bg-white border border-[#10367D] shadow-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search The Genesis Plus..."
              className="flex-1 px-3 py-2 text-xs text-slate-900 bg-white focus:outline-none"
            />
            <button type="submit" className="bg-[#10367D] px-4 flex items-center justify-center text-white">
              <svg className="w-4 h-4 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </button>
          </form>

          {/* Mobile Deliver to Pill */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full flex items-center justify-between text-xs py-1.5 px-2 bg-slate-50 rounded-lg text-slate-700 border border-slate-200"
          >
            <div className="flex items-center space-x-1.5">
              <svg className="w-4 h-4 text-[#10367D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Deliver to <strong>{selectedCountry.name}</strong></span>
            </div>
            <span className="font-bold text-[#10367D]">{selectedCountry.flag} {selectedCountry.code} ›</span>
          </button>
        </div>
      </div>

      {/* 2. AMAZON SUB-NAV BAR - CLEAN & UNOBSTRUCTED (RIGHT SIDE TEXT REMOVED PER USER REQUEST) */}
      <div className="bg-[#F8FAFC] text-slate-700 text-xs px-3 sm:px-6 py-2 border-b border-slate-200 font-bold">
        <div className="max-w-[1500px] mx-auto flex items-center overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-3 sm:gap-4">
          
          {/* "All" Hamburger Menu */}
          <button
            type="button"
            onClick={() => setIsDeptOpen(!isDeptOpen)}
            className="flex items-center space-x-1.5 font-black text-[#10367D] hover:bg-slate-200 transition-colors px-2 py-1 rounded-lg shrink-0"
          >
            <svg className="w-4 h-4 text-[#10367D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>All</span>
          </button>

          <a href="/#deals" className="hover:text-[#10367D] hover:bg-slate-100 px-2 py-1 rounded-lg transition-colors shrink-0">
            Today's Deals
          </a>
          <Link to="/products" className="hover:text-[#10367D] hover:bg-slate-100 px-2 py-1 rounded-lg transition-colors shrink-0">
            Best Sellers
          </Link>
          <Link to="/products?category=Grocery+%26+Gourmet+Food" className="hover:text-[#10367D] hover:bg-slate-100 px-2 py-1 rounded-lg transition-colors shrink-0">
            Mega Sour Sweets
          </Link>
          <Link to="/products/florida-water-cologne-7-5oz" className="hover:text-[#10367D] hover:bg-slate-100 px-2 py-1 rounded-lg transition-colors shrink-0">
            Florida Water 1808
          </Link>
          <Link to="/products/claybrite-sensitive-natural-toothpaste-4oz" className="hover:text-[#10367D] hover:bg-slate-100 px-2 py-1 rounded-lg transition-colors shrink-0">
            Mineral Oral Care
          </Link>
          <Link to="/about" className="hover:text-[#10367D] hover:bg-slate-100 px-2 py-1 rounded-lg transition-colors shrink-0">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-[#10367D] hover:bg-slate-100 px-2 py-1 rounded-lg transition-colors shrink-0">
            Customer Service
          </Link>
        </div>
      </div>

      {/* "All" Dropdown Menu */}
      {isDeptOpen && (
        <div className="bg-white text-slate-800 border-b border-slate-200 py-4 px-6 shadow-xl">
          <div className="max-w-[1500px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {departments.map((dept) => (
              <Link
                key={dept.id}
                to="/products"
                onClick={() => setIsDeptOpen(false)}
                className="p-3 rounded-xl hover:bg-slate-50 text-[#10367D] font-extrabold border border-slate-100 hover:border-[#74B4DA] transition-all"
              >
                {dept.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white text-slate-800 p-5 space-y-3 border-b border-slate-200 shadow-lg">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 font-bold text-[#10367D] hover:bg-slate-50 rounded px-2"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 font-bold text-[#10367D] hover:bg-slate-50 rounded px-2"
          >
            All Verified Products (5)
          </Link>
          <a
            href="/#deals"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 font-bold text-[#10367D] hover:bg-slate-50 rounded px-2"
          >
            Today's Deals
          </a>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 font-bold text-[#10367D] hover:bg-slate-50 rounded px-2"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 font-bold text-[#10367D] hover:bg-slate-50 rounded px-2"
          >
            Customer Service
          </Link>
        </div>
      )}
    </header>
  );
}
