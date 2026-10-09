import React from "react";
import { ArrowRight } from "lucide-react";

import manufactureInsight1 from "../../../assets/industry/manufactureInsight1.png"; // adjust extension if needed

const MfgCTA = () => {
  return (
    <section className="w-full bg-[#020b1a] px-6 py-10 font-sans md:px-10 md:py-16 lg:px-14">
      <div className="relative mx-auto flex min-h-[400px] max-w-[1190px] items-center overflow-hidden rounded-[20px] bg-[#030f1d]">
        {/* Background image: right side, full opacity */}
        <img
          src={manufactureInsight1}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 h-full w-full object-cover object-right md:w-[65%]"
        />

        {/* Fade from card background into the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030f1d] via-[#030f1d]/90 to-[#030f1d]/40 md:from-[#030f1d] md:from-35% md:via-[#030f1d]/60 md:via-50% md:to-transparent md:to-75%" />

        {/* Content */}
        <div className="relative z-10 w-full p-8 md:w-3/5 md:p-12 lg:w-1/2 lg:pl-12">
          <p className="mb-3 text-[14px] font-normal text-white/80">
            Let's Talk
          </p>

          <h2 className="mb-5 text-[30px] font-medium leading-[1.2] text-white md:text-[38px]">
            Ready to Build a Smarter <br />
            <span className="text-[#7cc4e0]">Manufacturing Operation?</span>
          </h2>

          <p className="mb-14 max-w-[420px] text-[14px] leading-[1.35] text-white/90">
            Let's discuss how DQNeX can help you modernize your manufacturing
            operations with innovative and scalable solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 rounded-full bg-[#3b6fb5] px-6 py-3 text-[15px] font-medium text-white transition-all hover:bg-[#4a7fc1]">
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </button>

            <button className="rounded-full border border-white/15 bg-[#030f1d]/70 px-8 py-3 text-[15px] font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MfgCTA;