import React, { useEffect } from 'react';

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  image = "/genesis-plus-logo.jpg",
  type = "website",
  product = null,
  breadcrumbs = null
}) {
  const siteName = "The Genesis Plus";
  const defaultDesc = "The Genesis Plus - Empowering Tomorrow. Premium verified product catalog featuring traditional British confectionery, heritage fragrances, and specialized personal care fulfilled by Amazon.";
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Empowering Tomorrow - Official Product Catalog`;
  const metaDescription = description || defaultDesc;
  const canonicalUrl = canonical || window.location.href;
  const imageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;

  useEffect(() => {
    // 1. Page Title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('description', metaDescription);
    if (keywords) {
      setMeta('keywords', keywords);
    }
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. OpenGraph Tags
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', metaDescription, true);
    setMeta('og:image', imageUrl, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:type', type, true);
    setMeta('og:site_name', siteName, true);

    // 4. Twitter Cards
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', metaDescription);
    setMeta('twitter:image', imageUrl);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Structured Data Schema
    const scriptId = 'genesis-json-ld';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "The Genesis Plus",
        "url": window.location.origin,
        "logo": `${window.location.origin}/genesis-plus-logo.jpg`,
        "description": "Empowering Tomorrow - Official product catalog and IT solutions",
        "email": "emailus@thegenesisplus.net",
        "telephone": "+1 123-456-7890",
        "areaServed": "North America"
      }
    ];

    if (breadcrumbs && Array.isArray(breadcrumbs)) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": crumb.url.startsWith('http') ? crumb.url : `${window.location.origin}${crumb.url}`
        }))
      });
    }

    if (product) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.title,
        "image": product.images?.map(img => img.startsWith('http') ? img : `${window.location.origin}${img}`) || [imageUrl],
        "description": product.shortDescription || product.fullDescription,
        "sku": product.asin,
        "mpn": product.asin,
        "brand": {
          "@type": "Brand",
          "name": product.brand
        },
        "offers": {
          "@type": "Offer",
          "url": product.amazonUrl,
          "priceCurrency": "USD",
          "price": product.price,
          "priceValidUntil": "2027-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "seller": {
            "@type": "Organization",
            "name": product.seller || "THEGENESISPLUS LLC / Amazon"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "reviewCount": product.reviewCount.replace(/,/g, '')
        }
      });
    }

    scriptTag.textContent = JSON.stringify(schemas);

  }, [fullTitle, metaDescription, canonicalUrl, imageUrl, type, product, breadcrumbs]);

  return null;
}
