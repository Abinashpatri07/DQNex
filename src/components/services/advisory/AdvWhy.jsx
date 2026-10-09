import React from "react";
import advisoryWhyBg from "../../../assets/servicewhyadvisory.png";

const AdvWhy = () => {
  return (
    <section className="relative w-full py-10 md:py-16 lg:py-24 px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 font-sans">
      <div className="mx-auto max-w-[1500px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">

        {/* Left Image Area */}
        <div className="relative w-full lg:w-1/2 h-[450px] rounded-2xl overflow-hidden border border-white/10">
          <img src={advisoryWhyBg} alt="Why Advisory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#061423]/40" />
        </div>

        {/* Right Content Area */}
        <div className="w-full lg:w-1/2">
          <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)] mb-6">
            Why Advisory
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            From Ambiguity to Action
          </h2>

          <p className="text-[15px] text-[#c8d1dc] mb-10 max-w-[550px]">
            We turn complex business challenges into clear strategies and actionable plans, helping you move from ideas to measurable impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">

            {/* Clearer Decisions */}
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#581c87]/30 text-[#c084fc] border border-[#7e22ce]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Clearer Decisions</h4>
                <p className="text-[#8aa0bc] text-xs">Make confident, data-backed decisions</p>
              </div>
            </div>

            {/* Better Customer Experiences */}
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1e3a8a]/30 text-[#60a5fa] border border-[#2563eb]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Better Customer Experiences</h4>
                <p className="text-[#8aa0bc] text-xs">Design solutions that truly meet customer needs.</p>
              </div>
            </div>

            {/* Faster Delivery */}
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#4c1d95]/30 text-[#a78bfa] border border-[#6d28d9]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Faster Delivery</h4>
                <p className="text-[#8aa0bc] text-xs">Improve speed and execution across teams.</p>
              </div>
            </div>

            {/* Smarter Technology Investments */}
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#064e3b]/50 text-[#34d399] border border-[#059669]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Smarter Technology Investments</h4>
                <p className="text-[#8aa0bc] text-xs">Invest in the right technology for long-term value.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvWhy;