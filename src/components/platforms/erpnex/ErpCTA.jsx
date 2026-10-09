import React from "react";

import ctaBg from "../../../assets/platform/erpreadytobuild.png";

// 👉 Factory wali background image yahan daalo
// e.g. import ctaBg from "../assets/cta-bg.png";
const CTA_BG = ctaBg; // e.g. "/images/cta-bg.png"

const ErpCTA = () => {
  return (
    <section className="w-full bg-transparent px-6 py-10 font-sans md:px-10 md:py-16 lg:px-14">
      <div className="relative mx-auto min-h-[380px] max-w-[1300px] overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#06101f]">
        {/* Background image */}
        {CTA_BG && (
          <img
            src={CTA_BG}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right"
          />
        )}

        {/* Left fade so the text stays readable and the image blends in */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#06101f_0%,rgba(6,16,31,0.96)_30%,rgba(6,16,31,0.6)_48%,rgba(6,16,31,0)_68%)]" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[380px] items-center px-8 py-12 md:px-12 lg:px-16">
          <div className="w-full max-w-[520px]">
            <p className="mb-4 text-[13px] text-white/90">Ready to build?</p>

            <h2 className="text-[32px] font-medium leading-[1.25] text-white md:text-[38px]">
  See your plant in
  <br />
  <span className="text-white">CORNeX </span>
  <span className="text-[#6cc4e4]">30 minutes</span>
</h2>

            <p className="mt-5 max-w-[470px] text-[12.5px] leading-[1.55] text-white/90">
              Get your processes, data and team on one platform with a faster,
              simpler and proven ERP implementation method designed for
              manufacturing.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#3f76bf] px-7 py-3 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-[#4f86cf]"
              >
                Get in touch
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <button
                type="button"
                className="flex items-center justify-center rounded-full border border-white/20 bg-[#050d1a]/70 px-7 py-3 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-white/10"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErpCTA;