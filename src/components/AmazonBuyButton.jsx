import React from 'react';

/**
 * Buy Now Button Component - The Genesis Plus Official Theme
 * Colors: Navy #10367D, Sky #74B4DA, Neutral #EBEBEB, Pure White #FFFFFF.
 */
export default function AmazonBuyButton({
  url,
  price,
  title = "Buy Now",
  className = "",
  size = "lg",
  showSubtext = true
}) {
  const sizeStyles = {
    sm: "py-2 px-4 text-xs font-bold",
    md: "py-2.5 px-5 text-sm font-bold",
    lg: "py-3.5 px-7 text-base font-extrabold"
  };

  return (
    <div className="flex flex-col items-start w-full">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full inline-flex items-center justify-center space-x-2 rounded-xl bg-genesis-navy hover:bg-genesis-blueHover text-white transition-all duration-200 shadow-md hover:shadow-glow-navy border border-genesis-sky/30 focus:outline-none focus:ring-2 focus:ring-genesis-sky focus:ring-offset-2 ${sizeStyles[size]} ${className}`}
      >
        <svg className="w-5 h-5 text-genesis-sky shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>

        <span>{price ? `Buy Now • $${typeof price === 'number' ? price.toFixed(2) : price}` : title}</span>

        <svg className="w-4 h-4 ml-1 opacity-90 text-genesis-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>

      {showSubtext && (
        <div className="mt-2.5 flex items-center justify-center space-x-1.5 text-[11px] text-slate-500 text-center w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>100% Verified Authentic Stock • Fast North American Dispatch</span>
        </div>
      )}
    </div>
  );
}
