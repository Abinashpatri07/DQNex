import React from "react";
import optCTABg from "../../../assets/serviceOpt-readytoOptimize.png";

const OptCTA = () => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-24 px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 font-sans">
      <div className="mx-auto max-w-[1500px] rounded-[32px] overflow-hidden relative bg-[#081525]">

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={optCTABg}
            alt="Let's Build a More Reliable Tomorrow"
            className="w-full h-full object-cover object-right"
          />
          {/* Mobile: flat dark overlay */}
          <div className="absolute inset-0 bg-[#061423]/70 lg:hidden" />
          {/* Desktop: left side fade, right side image clear */}
          <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,#061423_0%,rgba(6,20,35,0.92)_28%,rgba(6,20,35,0.4)_45%,transparent_60%)]" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center p-10 lg:p-16 gap-12 min-h-[400px]">
          {/* Left Text Area */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#8aa0bc] text-sm font-medium mb-3">Ready to Optimize?</p>
            <h2 className="text-[26px] md:text-[30px] lg:text-[36px] font-semibold text-white mb-6 leading-tight">
              Let's Build a More <br className="hidden md:block" />
              Reliable Tomorrow
            </h2>
            <p className="text-[13px] text-[#c8d1dc] mb-10 max-w-[500px]">
              Partner with DQNeX for proactive support, managed services and quality engineering and keep your digital business running at its best.
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

          {/* Right area empty, background image fills it */}
          <div className="w-full lg:w-1/2 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default OptCTA;