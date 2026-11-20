import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, BRAND_INFO } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import SEO from '../components/SEO';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'All Products';
  const searchQuery = searchParams.get('q') || searchParams.get('search') || '';
  const sortOrder = searchParams.get('sort') || 'default';

  // Handle Category selection
  const handleSelectCategory = (cat) => {
    const nextParams = new URLSearchParams(searchParams);
    if (cat === 'All Products') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', cat);
    }
    setSearchParams(nextParams);
  };

  // Handle Search Input
  const handleSearchChange = (query) => {
    const nextParams = new URLSearchParams(searchParams);
    if (!query) {
      nextParams.delete('q');
      nextParams.delete('search');
    } else {
      nextParams.set('q', query);
    }
    setSearchParams(nextParams);
  };

  // Handle Sort Change
  const handleSortChange = (sort) => {
    const nextParams = new URLSearchParams(searchParams);
    if (sort === 'default') {
      nextParams.delete('sort');
    } else {
      nextParams.set('sort', sort);
    }
    setSearchParams(nextParams);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  // Filtered & Sorted products computation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const matchCategory =
        selectedCategory === 'All Products' || product.category === selectedCategory;

      // Search match
      const matchSearch =
        !searchQuery.trim() ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.asin.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    }).sort((a, b) => {
      if (sortOrder === 'price-low') {
        return a.price - b.price;
      }
      if (sortOrder === 'price-high') {
        return b.price - a.price;
      }
      if (sortOrder === 'rating') {
        return Number(b.rating) - Number(a.rating);
      }
      if (sortOrder === 'name-asc') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="bg-white min-h-screen py-8 md:py-12">
      {/* SEO Metadata */}
      <SEO
        title="Verified Product Catalog | The Genesis Plus"
        description="Browse our curated collection of extreme sour sweets, traditional colognes, and natural oral care. 100% authentic quality fulfilled with fast express delivery."
        keywords="The Genesis Plus catalog, Barnetts Mega Sours, Florida Water, ClayBrite toothpaste, verified store"
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#0062BD] uppercase tracking-wider mb-1.5">
              <span>{BRAND_INFO.name}</span>
              <span>•</span>
              <span className="text-[#00A3E0]">Verified Catalog</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Verified Product Collection
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Showing {filteredProducts.length} verified item{filteredProducts.length === 1 ? '' : 's'} with full technical specifications and direct purchase availability.
            </p>
          </div>

          {/* Quick Filters Pill Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
              className="bg-slate-50 border border-slate-300 text-xs font-bold text-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A3E0]"
            >
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Customer Rating</option>
              <option value="name-asc">Alphabetical (A - Z)</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleSelectCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#0062BD] to-[#00A3E0] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid - EXACT UNIFORM SQUARE CARD IMAGES */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn't find any items matching "{searchQuery}". Try searching with different keywords.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-block bg-[#0062BD] hover:bg-[#0052A3] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
