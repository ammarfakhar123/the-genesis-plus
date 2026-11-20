import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS, BRAND_INFO } from '../data/products';
import SEO from '../components/SEO';

// Product Modular Components
import ProductBreadcrumbs from '../components/product/ProductBreadcrumbs';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import AmazonBuyBox from '../components/product/AmazonBuyBox';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [selectedSize, setSelectedSize] = useState(product.availableSizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 5);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: product.shortTitle || product.title, url: `/products/${product.slug}` }
  ];

  return (
    <div className="bg-white min-h-screen py-4 sm:py-6 font-sans">
      {/* 1. SEO METADATA & SCHEMA */}
      <SEO
        title={`${product.shortTitle || product.title} | ${BRAND_INFO.name}`}
        description={product.shortDescription || product.fullDescription}
        image={product.images[0]}
        type="product"
        product={product}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Amazon Breadcrumb Bar */}
        <ProductBreadcrumbs product={product} />

        {/* 2. THE ICONIC AMAZON 3-COLUMN PRODUCT VIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Column 1: Image Gallery (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <ProductGallery images={product.images} title={product.title} />
          </div>

          {/* Column 2: Product Info & Bullet Points (4 Cols) */}
          <div className="lg:col-span-4">
            <ProductInfo
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </div>

          {/* Column 3: The Famous Amazon Buy Box (3 Cols) */}
          <div className="lg:col-span-3">
            <AmazonBuyBox
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>

        </div>

        {/* 3. TECHNICAL SPECIFICATIONS TABLE */}
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider font-heading">
            Technical Details &amp; Specifications
          </h2>
          <div className="max-w-2xl border border-slate-200 rounded-lg overflow-hidden text-xs">
            {Object.entries(product.specifications || {}).map(([key, val], i) => (
              <div
                key={key}
                className={`flex border-b border-slate-100 last:border-b-0 ${
                  i % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                }`}
              >
                <div className="w-1/3 p-3 font-bold text-slate-700 border-r border-slate-100">
                  {key}
                </div>
                <div className="w-2/3 p-3 text-slate-900 font-medium">
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FREQUENTLY BOUGHT TOGETHER / RELATED PRODUCTS */}
        <div className="border-t border-slate-200 pt-8 pb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4 font-heading">
            Customers who viewed this item also viewed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((p, idx) => (
              <ProductCard key={p.id} product={p} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
