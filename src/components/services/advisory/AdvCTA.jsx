import React from "react";
// 👉 Image ka naam/extension apne file ke hisaab se check kar lena (maine .png maana hai)
import advCtaBg from "../../../assets/serviceAdvisory-readytoplan.png";

const AdvCTA = () => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-24 px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 font-sans">
      <div className="mx-auto max-w-[1500px] rounded-[32px] overflow-hidden relative bg-[#081525]">

        {/* Background image — poora box cover, right side clear dikhegi */}
        <div className="absolute inset-0 z-0">
          <img
            src={advCtaBg}
            alt="Make Better Technology Decisions"
            className="w-full h-full object-cover object-right"
          />
          {/* Mobile: flat dark overlay (text saaf padhe) */}
          <div className="absolute inset-0 bg-[#061423]/70 lg:hidden" />
          {/* Desktop: sirf left side se fade, right side image clear */}
          <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,#061423_0%,rgba(6,20,35,0.92)_28%,rgba(6,20,35,0.4)_45%,transparent_60%)]" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center p-10 lg:p-16 gap-12 min-h-[400px]">
          {/* Left Text Area */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#8aa0bc] text-sm font-medium mb-3">Ready to plan what Next?</p>
            <h2 className="text-[26px] md:text-[30px] lg:text-[36px] font-semibold text-white mb-6 leading-tight">
              Make Better Technology <br className="hidden md:block" />
              Decisions
            </h2>
            <p className="text-[15px] text-[#c8d1dc] mb-10 max-w-[500px]">
              From strategy to execution, our advisory experts are ready to help you build a clearer, smarter and more successful future.
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

          <div className="w-full lg:w-1/2 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default AdvCTA;