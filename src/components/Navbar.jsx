import React from 'react';
import { NavLink, useSearchParams, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data/products';

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentCategory = searchParams.get('category') || 'All Categories';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const handleCategoryClick = (category) => {
    if (category === 'All Categories') {
      navigate('/products');
    } else {
      navigate(`/products?category=${encodeURIComponent(category)}`);
    }
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="w-full">
      {/* Secondary Horizontal Category Bar (Amazon-inspired light category ribbon) */}
      <div className="border-t border-b border-slate-200 bg-slate-50/90 backdrop-blur-sm px-4 lg:px-8 py-2 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium">
          <span className="hidden sm:inline-flex items-center text-slate-500 mr-2 uppercase tracking-wider text-[11px] font-semibold">
            Categories:
          </span>
          {CATEGORIES.map((cat) => {
            const isActive = currentCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full transition-all duration-150 ${
                  isActive
                    ? 'bg-brand-600 text-white font-semibold shadow-sm'
                    : 'text-slate-700 hover:text-brand-700 hover:bg-slate-200/70'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
