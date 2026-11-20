import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 0,
      badge: "THE GENESIS PLUS OFFICIAL STORE",
      title: "Empowering Tomorrow.",
      subtitle: "Curated Excellence in Heritage Confectionery, Fragrance & Wellness.",
      desc: "Direct priority dispatch across North America with guaranteed authenticity on every verified item.",
      ctaText: "Explore Collection",
      ctaLink: "/products",
      bgGradient: "from-[#0A204C] via-[#10367D] to-[#0D2B63]",
      images: [
        "/products/barnetts-fruits-main.jpg",
        "/products/florida-water-main.jpg",
        "/products/claybrite-toothpaste-main.jpg"
      ],
      stats: [
        { label: "Verified Stock", val: "100% Genuine" },
        { label: "Customer Score", val: "4.8 / 5.0 ★" },
        { label: "Dispatch Region", val: "North America" }
      ]
    },
    {
      id: 1,
      badge: "EXTREME SOUR CHALLENGE • SINCE 1896",
      title: "The 20-Second Mega Sour Rush.",
      subtitle: "Handmade in Nottingham UK Copper Boiling Pans.",
      desc: "Internationally renowned extreme sour boiled sweets with a 20-second sour blast and hidden fizzy sherbet center.",
      ctaText: "Discover Mega Sours",
      ctaLink: "/products/barnetts-mega-sour-candy-fruits-104g",
      bgGradient: "from-[#081B3D] via-[#10367D] to-[#164396]",
      images: [
        "/products/barnetts-fruits-main.jpg",
        "/products/barnetts-lemon-main.jpg",
        "/products/barnetts-bubblegum-main.jpg"
      ],
      stats: [
        { label: "Handcrafted", val: "Copper Pans" },
        { label: "Diet Type", val: "Gluten-Free" },
        { label: "Sour Duration", val: "20 Seconds" }
      ]
    },
    {
      id: 2,
      badge: "HERITAGE COLOGNE & ORAL DEFENSE",
      title: "Classic 1808 Refreshment & Care.",
      subtitle: "Murray & Lanman Florida Water & ClayBrite Hydroxyapatite.",
      desc: "Historic citrus floral cologne paired with pure non-foaming sensitive mineral oral defense.",
      ctaText: "View Heritage Care",
      ctaLink: "/products/florida-water-cologne-7-5oz",
      bgGradient: "from-[#061738] via-[#0E2F6E] to-[#123E8C]",
      images: [
        "/products/florida-water-main.jpg",
        "/products/florida-water-bottle.jpg",
        "/products/claybrite-toothpaste-main.jpg"
      ],
      stats: [
        { label: "Original Recipe", val: "1808 Historic" },
        { label: "Enamel Active", val: "Hydroxyapatite" },
        { label: "Formula Quality", val: "Fluoride-Free" }
      ]
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const slide = slides[currentSlide];

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-[#0A204C] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative w-full bg-gradient-to-r ${slide.bgGradient} text-white p-6 sm:p-10 lg:p-12 min-h-[440px] flex flex-col justify-between`}
        >
          {/* Subtle Ambient Glowing Rings */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#74B4DA]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 text-[#74B4DA] border border-white/20 text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-[#74B4DA] animate-ping"></span>
                <span>{slide.badge}</span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg font-bold text-[#74B4DA] leading-snug">
                  {slide.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-200/90 max-w-lg leading-relaxed">
                {slide.desc}
              </p>

              {/* Actions with High-Contrast Explicit Colors */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  to={slide.ctaLink}
                  className="inline-flex items-center space-x-2 bg-white hover:bg-[#EBEBEB] text-[#10367D] font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <span className="text-[#10367D] font-black">{slide.ctaText}</span>
                  <svg className="w-4 h-4 text-[#10367D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <a
                  href="#deals"
                  className="inline-flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-white/25 transition-all"
                >
                  <span>View All 5 Products</span>
                </a>
              </div>
            </div>

            {/* Right Product Showcase Column */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl flex items-center justify-center">
                <motion.img
                  key={slide.images[0]}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  src={slide.images[0]}
                  alt="Genesis Plus Featured Item"
                  className="max-h-60 sm:max-h-68 w-auto object-contain filter drop-shadow-2xl"
                />

                {/* Floating Micro Thumbnail 1 */}
                {slide.images[1] && (
                  <div className="absolute -bottom-3 -left-3 w-18 h-18 sm:w-20 sm:h-20 bg-white rounded-2xl p-2 shadow-xl border border-slate-200 flex items-center justify-center">
                    <img src={slide.images[1]} alt="Preview" className="w-full h-full object-contain" />
                  </div>
                )}

                {/* Floating Micro Thumbnail 2 */}
                {slide.images[2] && (
                  <div className="absolute -top-3 -right-3 w-18 h-18 sm:w-20 sm:h-20 bg-white rounded-2xl p-2 shadow-xl border border-slate-200 flex items-center justify-center">
                    <img src={slide.images[2]} alt="Preview" className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Bottom Bar: Stats & Controls */}
          <div className="relative z-10 pt-5 mt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Stats */}
            <div className="flex items-center space-x-6 text-left">
              {slide.stats.map((st, i) => (
                <div key={i}>
                  <span className="block text-sm sm:text-base font-black text-[#74B4DA]">{st.val}</span>
                  <span className="text-[10px] sm:text-xs text-slate-300 font-medium">{st.label}</span>
                </div>
              ))}
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center space-x-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? 'w-8 bg-[#74B4DA]'
                      : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
