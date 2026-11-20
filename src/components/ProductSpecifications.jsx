import React from 'react';

export default function ProductSpecifications({ specifications = {}, asin = "" }) {
  const specEntries = Object.entries(specifications);

  if (specEntries.length === 0) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-sm text-slate-500 italic">
        Detailed technical specifications are verified directly on the Amazon product page.
      </div>
    );
  }

  return (
    <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-subtle">
      <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-900">Verified Technical Specifications</h3>
        {asin && (
          <span className="text-xs text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-md font-mono font-medium">
            ASIN: {asin}
          </span>
        )}
      </div>

      <div className="divide-y divide-slate-100">
        {specEntries.map(([key, value], idx) => (
          <div
            key={key}
            className={`grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-sm ${
              idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
            }`}
          >
            <span className="font-medium text-slate-600 sm:col-span-1">{key}</span>
            <span className="text-slate-900 sm:col-span-2 mt-0.5 sm:mt-0 font-normal">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
