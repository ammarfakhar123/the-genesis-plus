import React, { useState } from 'react';

export default function ProductGallery({ images = [], title = "Product" }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const activeImage = images[selectedIndex] || images[0] || '/genesis-plus-logo.jpg';

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 items-start w-full select-none">
      {/* Thumbnails Strip - ALL UNIFORM SQUARES */}
      {images.length > 1 && (
        <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto w-full lg:w-24 pb-2 lg:pb-0 flex-shrink-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {images.map((img, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                aria-label={`Select product image ${idx + 1}`}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 aspect-square rounded-2xl p-2 bg-white border-2 transition-all flex-shrink-0 flex items-center justify-center overflow-hidden ${
                  isSelected
                    ? 'border-[#10367D] shadow-md ring-2 ring-[#74B4DA]'
                    : 'border-slate-200 hover:border-slate-300 opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`${title} thumbnail ${idx + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Main Hero Preview Box - EXACT UNIFORM SQUARE WITH INTERACTIVE ZOOM */}
      <div className="relative flex-1 w-full aspect-square bg-[#F8FAFC] rounded-3xl border border-slate-200/90 p-6 sm:p-10 flex items-center justify-center overflow-hidden shadow-card">
        <div
          className="relative w-full h-full flex items-center justify-center cursor-crosshair group"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            src={activeImage}
            alt={title}
            className={`w-full h-full object-contain filter drop-shadow-md transition-transform duration-100 ease-out ${
              isZoomed ? 'scale-175' : 'scale-100'
            }`}
            style={
              isZoomed
                ? {
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }
                : undefined
            }
          />

          {/* Interactive Zoom Hint */}
          {!isZoomed && (
            <div className="absolute bottom-3 right-3 bg-[#0A204C]/80 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl backdrop-blur-sm pointer-events-none flex items-center space-x-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
              <svg className="w-3.5 h-3.5 text-[#74B4DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Hover to zoom</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
