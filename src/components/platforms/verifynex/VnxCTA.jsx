import React from "react";
import ctaBg from "../../../assets/platform/vnxcta.png";

const BG_IMAGE = ctaBg;

const VnxCTA = () => {
  return (
    <section className="relative w-full bg-transparent px-6 py-8 md:py-10 md:px-10">
      {/* EK HI BOX: background image + text + buttons */}
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[24px] border border-white/[0.05] bg-[#06101f] px-6 py-12 lg:min-h-[405px] lg:pl-12 lg:pr-12 lg:pt-[59px]">
        {/* background image — poora box cover, full & clear */}
        <img
          src={BG_IMAGE}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Overlay: mobile = flat dark (text saaf padhe) */}
        <div className="pointer-events-none absolute inset-0 bg-[#050e1e]/70 lg:hidden" />
        {/* Overlay: desktop = sirf left side halka fade, baaki image bilkul clear */}
        <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(5,14,30,0.8)_0%,rgba(5,14,30,0.45)_28%,rgba(5,14,30,0)_50%)] lg:block" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[500px]">
          <p className="m-0 text-[14px] text-white/90">Ready to build?</p>

          <h2 className="m-0 mt-5 text-[28px] font-medium leading-[1.4] text-white md:text-[32px] lg:text-[34px] lg:leading-[50px]">
            Explore verification
            <br />
            workflow in{" "}
            <span className="bg-gradient-to-r from-[#5db7ea] to-[#7fd0ee] bg-clip-text text-transparent">
              30 minutes
            </span>
          </h2>

          <p className="m-0 mt-3 max-w-[430px] text-[13.5px] leading-[1.35] text-white/90 md:text-[14.5px]">
            Discover how <span className="font-semibold text-[#5db7ea]">VerifyNeX</span> can streamline
            your background verification process and help you hire with confidence.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6 lg:mt-[72px]">
            <button className="flex h-[47px] items-center justify-center gap-2.5 rounded-full bg-[#3b6db0] px-8 font-sans text-[14px] font-medium text-white shadow-[0_6px_20px_rgba(59,109,176,0.3)] transition-colors hover:bg-[#4a7ac2]">
              Get in touch
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button className="flex h-[47px] items-center justify-center rounded-full border border-white/20 bg-[#07101f]/80 px-8 font-sans text-[14px] font-medium text-white transition-colors hover:bg-white/[0.06]">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VnxCTA;