import React from "react";

const OptProcess = () => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-24 px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 font-sans">
      <div className="mx-auto max-w-[1500px]">

        {/* Process Section */}
        <div className="mb-20">
          <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)] mb-6">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            A Proven Path to Real Results
          </h2>

          <div className="flex flex-col xl:flex-row bg-[#081525] border border-white/5 rounded-2xl p-6 md:p-8 gap-6 md:gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[#3182e0]/10 to-transparent pointer-events-none" />

            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#1e3a8a] text-white flex justify-center items-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 mb-0.5">01</p>
                <h4 className="text-white font-semibold text-[15px] mb-1">Assess</h4>
                <p className="text-[#8aa0bc] text-xs">Understand your current environment and challenges</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#312e81] text-white flex justify-center items-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 mb-0.5">02</p>
                <h4 className="text-white font-semibold text-[15px] mb-1">Monitor</h4>
                <p className="text-[#8aa0bc] text-xs">Gain real-time visibility across systems and applications</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#581c87] text-white flex justify-center items-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 mb-0.5">03</p>
                <h4 className="text-white font-semibold text-[15px] mb-1">Optimize</h4>
                <p className="text-[#8aa0bc] text-xs">Implement improvements for performance, security and cost</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#a16207] text-white flex justify-center items-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 mb-0.5">04</p>
                <h4 className="text-white font-semibold text-[15px] mb-1">Validate</h4>
                <p className="text-[#8aa0bc] text-xs">Ensure stability through testing, monitoring, and feedback</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#064e3b] text-white flex justify-center items-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 mb-0.5">05</p>
                <h4 className="text-white font-semibold text-[15px] mb-1">Evolve</h4>
                <p className="text-[#8aa0bc] text-xs">Continuously improve and adapt to future needs</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Delivering Measurable Results
            </h2>
            <p className="text-[14px] text-[#c8d1dc]">
              Helping businesses across industries achieve greater reliability, better performance and long-term value
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto flex-1">
            <div className="bg-[#111c2a] border border-white/5 rounded-xl p-5 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#a78bfa] mb-2">99.9%</h3>
              <p className="text-xs text-[#8aa0bc] leading-snug">Service Availability</p>
            </div>
            <div className="bg-[#111c2a] border border-white/5 rounded-xl p-5 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#c084fc] mb-2">40%</h3>
              <p className="text-xs text-[#8aa0bc] leading-snug">Faster Issue Resolution</p>
            </div>
            <div className="bg-[#111c2a] border border-white/5 rounded-xl p-5 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#3cc8d4] mb-2">35%</h3>
              <p className="text-xs text-[#8aa0bc] leading-snug">Reduction in Operational Costs</p>
            </div>
            <div className="bg-[#111c2a] border border-white/5 rounded-xl p-5 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#93c5fd] mb-2">50+</h3>
              <p className="text-xs text-[#8aa0bc] leading-snug">Applications Supported</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OptProcess;



