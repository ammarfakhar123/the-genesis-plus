import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CountryModal from './components/CountryModal';
import { CurrencyProvider } from './context/CurrencyContext';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <CurrencyProvider>
      <div className="flex flex-col min-h-screen bg-white text-[#0f172a]">
        <ScrollToTop />
        <CountryModal />
        
        {/* Sticky Amazon-Inspired Clean White Header */}
        <Header />

        {/* Main Routed Page Content */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Modern Clean White Footer */}
        <Footer />
      </div>
    </CurrencyProvider>
  );
}
