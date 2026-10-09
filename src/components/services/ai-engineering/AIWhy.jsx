import React from "react";
import whyAIBg from "../../../assets/servicewhyaiengineer.png";

const AIWhy = () => {
  return (
    <section className="relative w-full py-10 md:py-16 lg:py-24 px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 font-sans">
      <div className="mx-auto max-w-[1500px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
        {/* Left Image Area */}
        <div className="relative w-full lg:w-1/2 h-[450px] rounded-2xl overflow-hidden border border-white/10">
          <img src={whyAIBg} alt="Why AI Engineering" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#061423]/40" />
          

        </div>

        {/* Right Content Area */}
        <div className="w-full lg:w-1/2">
          <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)] mb-6">
            Why AI Engineering
          </span>
          <h2 className="text-[26px] md:text-[32px] font-medium text-white leading-tight mb-4">
            Turn Possibilities Into <br />
            <span className="text-[#3cc8d4]">Real Business</span> Value
          </h2>
          <p className="text-[13px] text-[#c8d1dc] mb-10 max-w-[500px]">
            Our AI engineering services are designed to solve real business challenges, drive measurable outcomes, and help you stay ahead in an AI-driven world.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#581c87]/30 text-[#c084fc] border border-[#7e22ce]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Faster Decision Making</h4>
                <p className="text-[#8aa0bc] text-xs">Get insights from data in real time.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1e3a8a]/30 text-[#60a5fa] border border-[#2563eb]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Scalable Solutions</h4>
                <p className="text-[#8aa0bc] text-xs">From pilot to enterprise scale.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#4c1d95]/30 text-[#a78bfa] border border-[#6d28d9]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Improved Efficiency</h4>
                <p className="text-[#8aa0bc] text-xs">Automate and optimize operations.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#064e3b]/50 text-[#34d399] border border-[#059669]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Measurable ROI</h4>
                <p className="text-[#8aa0bc] text-xs">Turn AI investments into business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWhy;



