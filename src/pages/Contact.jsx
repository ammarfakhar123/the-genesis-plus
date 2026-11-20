import React, { useState } from 'react';
import { BRAND_INFO } from '../data/products';
import SEO from '../components/SEO';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMailtoSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject ? `[The Genesis Plus Inquiry] ${subject}` : `[The Genesis Plus Inquiry] from ${name || 'Customer'}`);
    const mailtoBody = encodeURIComponent(
      `Hello The Genesis Plus Team,\n\nName: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\n\nMessage:\n${message}\n\n---\nSent from thegenesisplus.net official store`
    );
    window.location.href = `mailto:${BRAND_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-12 md:py-16 font-sans">
      <SEO
        title="Contact Us | The Genesis Plus"
        description="Reach out to The Genesis Plus for all your IT needs and product catalog inquiries. Email: emailus@thegenesisplus.net, Phone: +1 123-456-7890."
        keywords="Contact The Genesis Plus, IT needs, customer support, emailus@thegenesisplus.net, North America"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black text-genesis-sky uppercase tracking-widest block font-heading">
            Direct Support & Inquiries
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-genesis-navy tracking-tight font-heading">
            {BRAND_INFO.contactHeading}
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Have questions regarding our product catalog, IT solutions, or corporate inquiries? Our North American support team is here to assist you.
          </p>
        </div>

        {/* Main Grid: Direct Channels & Form */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-white rounded-3xl border border-slate-200/80 shadow-card overflow-hidden">
          
          {/* Left Column: Direct Info in Brand Navy (#10367D) */}
          <div className="md:col-span-2 bg-[#10367D] text-white p-8 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-genesis-sky bg-white/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Direct Channels
                </span>
                <h2 className="text-xl font-black font-heading">Contact Details</h2>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Reach out directly via email or telephone. Our team responds promptly to all inquiries.
                </p>
              </div>

              <div className="space-y-5 text-sm">
                {/* Email Channel */}
                <div className="space-y-1">
                  <span className="text-[10px] text-genesis-sky font-bold block uppercase tracking-wider">Email</span>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="inline-flex items-center space-x-2 text-white hover:text-genesis-sky transition-colors font-medium break-all"
                  >
                    <span>{BRAND_INFO.email}</span>
                  </a>
                </div>

                {/* Telephone Channel */}
                <div className="space-y-1">
                  <span className="text-[10px] text-genesis-sky font-bold block uppercase tracking-wider">Phone</span>
                  <a
                    href={`tel:${BRAND_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center space-x-2 text-white hover:text-genesis-sky transition-colors font-bold text-base"
                  >
                    <span>{BRAND_INFO.phone}</span>
                  </a>
                </div>

                {/* Region */}
                <div className="space-y-1">
                  <span className="text-[10px] text-genesis-sky font-bold block uppercase tracking-wider">Region</span>
                  <div className="text-white font-semibold">
                    <span>{BRAND_INFO.region} (United States & Canada)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/15 text-[11px] text-slate-300">
              <strong className="text-white block mb-0.5 font-heading">Business Hours:</strong>
              Monday – Friday: 9:00 AM – 6:00 PM EST.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-3 p-8 sm:p-10 space-y-6">
            <div>
              <h2 className="text-xl font-black text-genesis-navy font-heading">Send Us a Message</h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the form below and we'll connect with you shortly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <span className="text-3xl">✅</span>
                <h3 className="text-base font-bold text-emerald-900">Message Ready!</h3>
                <p className="text-xs text-emerald-700">
                  Your email client has opened with your inquiry pre-filled to {BRAND_INFO.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleMailtoSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-genesis-navy uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-genesis-sky"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-genesis-navy uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-genesis-sky"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-genesis-navy uppercase tracking-wider mb-1">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="E.g., IT Consulting, Order Assistance, Product Specs"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-genesis-sky"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-genesis-navy uppercase tracking-wider mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-genesis-sky"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-genesis-navy hover:bg-genesis-blueHover text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-glow-navy transition-all uppercase tracking-wider"
                >
                  Send Inquiry to {BRAND_INFO.name}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
