import React from "react";

const EngProcess = () => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-24 px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 font-sans">
      <div className="mx-auto max-w-[1500px]">
        
        {/* Process Section */}
        <div className="mb-20">
          <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)] mb-6">
            Our Approach
          </span>
          <h2 className="text-[26px] md:text-[32px] font-medium text-white mb-10">
            From <span className="text-[#3cc8d4]">Idea</span> to Impact
          </h2>

          <div className="flex flex-col xl:flex-row bg-[#081525] border border-white/5 rounded-2xl p-6 md:p-8 gap-6 md:gap-4 relative overflow-hidden">
            {/* Subtle glow background inside process container */}
            <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[#3182e0]/10 to-transparent pointer-events-none" />
            
            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#1e3a8a] text-white flex justify-center items-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 mb-0.5">01</p>
                <h4 className="text-white font-semibold text-[15px] mb-1">Discover</h4>
                <p className="text-[#8aa0bc] text-xs">Understand your goals and user needs.</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#312e81] text-white flex justify-center items-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 mb-0.5">02</p>
                <h4 className="text-white font-semibold text-[15px] mb-1">Design</h4>
                <p className="text-[#8aa0bc] text-xs">Create intuitive and scalable solutions.</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#581c87] text-white flex justify-center items-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 mb-0.5">03</p>
                <h4 className="text-white font-semibold text-[15px] mb-1">Develop</h4>
                <p className="text-[#8aa0bc] text-xs">Build with modern technologies and best practices.</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#a16207] text-white flex justify-center items-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><path d="M13.5 2h-3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM4.5 10a2 2 0 0 1 2-2h1m11 2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1M6.5 22h11M12 16v6"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 mb-0.5">04</p>
                <h4 className="text-white font-semibold text-[15px] mb-1">Deploy</h4>
                <p className="text-[#8aa0bc] text-xs">Launch with confidence and ensure smooth adoption.</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#064e3b] text-white flex justify-center items-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 mb-0.5">05</p>
                <h4 className="text-white font-semibold text-[15px] mb-1">Scale</h4>
                <p className="text-[#8aa0bc] text-xs">Continuously optimize and support your growth.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div className="max-w-[450px]">
            <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)] mb-6">
              Our Impact
            </span>
            <h2 className="text-[26px] md:text-[32px] font-medium text-white mb-4">
              Creating Real Business Outcomes
            </h2>
            <p className="text-[13px] text-[#c8d1dc]">
              Helping businesses across industries achieve measurable results through engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto flex-1">
            <div className="bg-[#111c2a] border border-white/5 rounded-xl p-5 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#60a5fa] mb-2">3+</h3>
              <p className="text-xs text-[#8aa0bc] leading-snug">Years of Experience</p>
            </div>
            <div className="bg-[#111c2a] border border-white/5 rounded-xl p-5 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#c084fc] mb-2">50+</h3>
              <p className="text-xs text-[#8aa0bc] leading-snug">Projects Delivered</p>
            </div>
            <div className="bg-[#111c2a] border border-white/5 rounded-xl p-5 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#3cc8d4] mb-2">60%</h3>
              <p className="text-xs text-[#8aa0bc] leading-snug">Faster Time to Market</p>
            </div>
            <div className="bg-[#111c2a] border border-white/5 rounded-xl p-5 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#93c5fd] mb-2">98%</h3>
              <p className="text-xs text-[#8aa0bc] leading-snug">Client Satisfaction</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default EngProcess;



