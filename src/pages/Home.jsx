import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import SEO from '../components/SEO';

// Home Modular Section Components
import HomeHero from '../components/home/HomeHero';
import ValuePropositionStrip from '../components/home/ValuePropositionStrip';
import CategoryPillsRow from '../components/home/CategoryPillsRow';
import PromoQuadGrid from '../components/home/PromoQuadGrid';
import TodaysDealsSection from '../components/home/TodaysDealsSection';
import BrandTrustStrip from '../components/home/BrandTrustStrip';
import BestSellersSection from '../components/home/BestSellersSection';
import CustomerReviewsBanner from '../components/home/CustomerReviewsBanner';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : activeCategory === 'sours'
      ? PRODUCTS.filter(p => p.brand === 'Barnetts')
      : activeCategory === 'cologne'
        ? PRODUCTS.filter(p => p.slug.includes('florida'))
        : activeCategory === 'oral'
          ? PRODUCTS.filter(p => p.slug.includes('claybrite'))
          : PRODUCTS;

  return (
    <div className="bg-white min-h-screen text-[#0F172A] pb-16 font-sans">
      {/* 1. SEO METADATA & SCHEMA */}
      <SEO
        title="Official Store | Specialty Sweets, Historic Cologne & Natural Wellness"
        description="The Genesis Plus - Empowering Tomorrow. Curated authentic collection of world-famous Barnetts UK Mega Sour candies, Murray & Lanman Florida Water cologne, and Zion Health ClayBrite sensitive oral care."
        keywords="The Genesis Plus, Barnetts Mega Sours, Florida Water Cologne, ClayBrite Sensitive Toothpaste, extreme sour sweets, 20 second sour challenge, North America"
      />

      {/* 2. HERO BANNER SECTION */}
      <HomeHero />

      {/* 3. 5-COLUMN VALUE PROPOSITION STRIP */}
      <ValuePropositionStrip />

      {/* 4. SHOP BY DEPARTMENT PILLS */}
      <CategoryPillsRow
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* 5. 4-CARD PROMOTIONAL QUAD BANNER GRID */}
      <PromoQuadGrid />

      {/* 6. TODAY'S BEST DEALS SECTION */}
      <TodaysDealsSection products={filteredProducts} />

      {/* 7. BRAND QUALITY & LOCAL CURRENCY TRUST STRIP */}
      <BrandTrustStrip />

      {/* 8. BEST SELLERS SECTION */}
      <BestSellersSection products={PRODUCTS} />

      {/* 9. CUSTOMER REVIEWS & GUARANTEE BANNER */}
      <CustomerReviewsBanner />
    </div>
  );
}
