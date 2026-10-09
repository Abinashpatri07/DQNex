import React from "react";
import whyEngBg from "../../../assets/whyengineering-engineering.png";

const EngWhy = () => {
  return (
    <section className="relative w-full py-10 md:py-16 lg:py-24 px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 font-sans">
      <div className="mx-auto max-w-[1500px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
        
        {/* Left Image Area */}
        <div className="relative w-full lg:w-1/2 h-[500px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex justify-center items-center p-8">
          <img src={whyEngBg} alt="Why Engineering" className="absolute inset-0 w-full h-full object-cover opacity-80" />
          
          {/* We can use CSS or layered images for the 3D laptop and floating tags */}
          <div className="absolute left-6 top-1/4 p-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center gap-2 shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth={2} className="w-5 h-5"><path d="M17.5 19C19.985 19 22 16.985 22 14.5 22 12.164 20.218 10.245 17.95 10.035 17.473 6.643 14.53 4 11 4 7.134 4 4 7.134 4 11c0 .244.013.486.037.724C1.724 12.17 0 13.923 0 16.5 0 19.015 2.015 21 4.5 21h13z" fill="#3b82f6" fillOpacity={0.2}/></svg>
            <span className="text-white text-xs font-semibold">Cloud</span>
          </div>
          
          <div className="absolute left-10 top-1/2 -translate-y-1/2 p-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center gap-2 shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth={2} className="w-5 h-5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <span className="text-white text-xs font-semibold">API</span>
          </div>

          <div className="absolute right-6 top-1/4 p-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center gap-2 shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth={2} className="w-5 h-5"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="M2 15h10"/><path d="M5 12l-3 3 3 3"/></svg>
            <span className="text-white text-xs font-semibold">Applications</span>
          </div>

          <div className="absolute right-10 top-1/2 -translate-y-1/2 p-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center gap-2 shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth={2} className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span className="text-white text-xs font-semibold">Security</span>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="w-full lg:w-1/2">
          <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)] mb-6">
            Why Engineering
          </span>
          <h2 className="text-[26px] md:text-[32px] font-medium text-white leading-tight mb-4">
            Engineering Built for <br />
            <span className="text-[#3cc8d4]">Real-World Growth</span>
          </h2>
          <p className="text-[13px] text-[#c8d1dc] mb-10 max-w-[550px]">
            We combine product thinking, modern engineering and scalable architecture to build digital solutions that perform today and evolve with your business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#581c87]/30 text-[#c084fc] border border-[#7e22ce]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Scalable by Design</h4>
                <p className="text-[#8aa0bc] text-xs">Build flexible solutions that grow with you</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1e3a8a]/30 text-[#60a5fa] border border-[#2563eb]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Secure & Reliable</h4>
                <p className="text-[#8aa0bc] text-xs">Enterprise-grade security and high availability</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#4c1d95]/30 text-[#a78bfa] border border-[#6d28d9]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Future-Ready Technology</h4>
                <p className="text-[#8aa0bc] text-xs">Leverage modern tools and architectures</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#064e3b]/50 text-[#34d399] border border-[#059669]/50 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-[15px] mb-1">Built Around Your Business</h4>
                <p className="text-[#8aa0bc] text-xs">Tailored solutions for your unique goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngWhy;



