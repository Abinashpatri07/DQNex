import React from "react";
import aiCTABg from "../../../assets/serviceAICTA.png";

const AICTA = () => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-24 px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 font-sans">
      <div className="mx-auto max-w-[1500px] rounded-[32px] overflow-hidden relative border border-[#3182e0]/20 bg-[#081525] flex items-center min-h-[420px]">

        {/* Background image — poora box cover, left side clear + glow dikhegi */}
        <div className="absolute inset-0 z-0">
          <img
            src={aiCTABg}
            alt="AI Solutions"
            className="w-full h-full object-cover object-left"
          />
          {/* Mobile: flat dark overlay (text saaf padhe) */}
          <div className="absolute inset-0 bg-[#081525]/70 lg:hidden" />
          {/* Desktop: sirf text wali right side se fade, left side image clear */}
          <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(270deg,#081525_0%,rgba(8,21,37,0.92)_28%,rgba(8,21,37,0.4)_45%,transparent_60%)]" />
        </div>

        {/* Right — Text Content */}
        <div className="relative z-10 flex flex-col justify-center p-10 lg:p-16 w-full lg:w-1/2 lg:ml-auto">
          <p className="text-[#8aa0bc] text-sm font-medium mb-3">Ready to builds with AI?</p>
          <h2 className="text-[26px] md:text-[30px] lg:text-[36px] font-semibold text-white mb-6 leading-tight">
            Let's Create Intelligent <br className="hidden md:block" />
            Solutions Together.
          </h2>
          <p className="text-[13px] text-[#c8d1dc] mb-10 max-w-[480px]">
            From idea to execution, our team is ready to help you design, build and scale AI solutions for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 rounded-full bg-[#3182e0] text-white font-medium hover:bg-[#2877d8] transition-colors flex items-center justify-center gap-2">
              Get in touch
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <button className="px-8 py-3.5 rounded-full border border-white/20 bg-[#050d1c]/50 text-white font-medium hover:bg-white/5 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AICTA;