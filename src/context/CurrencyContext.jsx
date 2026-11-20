import React, { createContext, useContext, useState, useEffect } from 'react';

export const COUNTRIES = [
  { id: 'US', name: 'United States', code: 'USD', symbol: '$', rate: 1.0, flag: '🇺🇸', locale: 'en-US' },
  { id: 'PK', name: 'Pakistan', code: 'PKR', symbol: 'PKR ', rate: 278.5, flag: '🇵🇰', locale: 'en-PK' },
  { id: 'GB', name: 'United Kingdom', code: 'GBP', symbol: '£', rate: 0.79, flag: '🇬🇧', locale: 'en-GB' },
  { id: 'CA', name: 'Canada', code: 'CAD', symbol: 'CA$', rate: 1.38, flag: '🇨🇦', locale: 'en-CA' },
  { id: 'EU', name: 'Germany / Europe', code: 'EUR', symbol: '€', rate: 0.92, flag: '🇪🇺', locale: 'de-DE' },
  { id: 'AE', name: 'United Arab Emirates', code: 'AED', symbol: 'AED ', rate: 3.67, flag: '🇦🇪', locale: 'ar-AE' },
  { id: 'SA', name: 'Saudi Arabia', code: 'SAR', symbol: 'SAR ', rate: 3.75, flag: '🇸🇦', locale: 'ar-SA' },
  { id: 'AU', name: 'Australia', code: 'AUD', symbol: 'A$', rate: 1.54, flag: '🇦🇺', locale: 'en-AU' },
  { id: 'IN', name: 'India', code: 'INR', symbol: '₹', rate: 84.3, flag: '🇮🇳', locale: 'en-IN' },
  { id: 'JP', name: 'Japan', code: 'JPY', symbol: '¥', rate: 154.2, flag: '🇯🇵', locale: 'ja-JP' },
  { id: 'SG', name: 'Singapore', code: 'SGD', symbol: 'SG$', rate: 1.34, flag: '🇸🇬', locale: 'en-SG' },
  { id: 'MY', name: 'Malaysia', code: 'MYR', symbol: 'RM ', rate: 4.46, flag: '🇲🇾', locale: 'en-MY' },
];

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [selectedCountry, setSelectedCountry] = useState(() => {
    try {
      const saved = localStorage.getItem('genesis_country');
      if (saved) {
        const found = COUNTRIES.find((c) => c.id === saved);
        if (found) return found;
      }
    } catch {
      // ignore
    }
    return COUNTRIES[0]; // Default United States
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('genesis_country', selectedCountry.id);
    } catch {
      // ignore
    }
  }, [selectedCountry]);

  // Format single USD price to selected country's currency
  const formatPrice = (usdAmount) => {
    if (usdAmount === undefined || usdAmount === null) return '';
    const converted = Number(usdAmount) * selectedCountry.rate;

    if (selectedCountry.code === 'PKR') {
      return `PKR ${Math.round(converted).toLocaleString('en-US')}`;
    }
    if (selectedCountry.code === 'JPY') {
      return `¥${Math.round(converted).toLocaleString('ja-JP')}`;
    }
    if (selectedCountry.code === 'INR') {
      return `₹${Math.round(converted).toLocaleString('en-IN')}`;
    }
    if (selectedCountry.code === 'USD' || selectedCountry.code === 'GBP' || selectedCountry.code === 'EUR') {
      return `${selectedCountry.symbol}${converted.toFixed(2)}`;
    }
    return `${selectedCountry.symbol}${converted.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        countries: COUNTRIES,
        selectedCountry,
        setSelectedCountry,
        isModalOpen,
        setIsModalOpen,
        formatPrice
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
