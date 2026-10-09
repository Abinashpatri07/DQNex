import React from "react";
import { BarChart3, CreditCard, Network, Sparkles } from "lucide-react";

import heroBg from "../../../assets/Industry/EcommerceHero.png";

const EcommerceHero = () => {
  return (
    <section className="relative flex w-full min-h-[calc(100vh-64px)] items-center overflow-hidden bg-[#050d1c] pt-[64px] font-sans lg:min-h-[600px] lg:aspect-[2.55/1]">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full origin-bottom-right scale-95 object-cover object-right"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 12%), linear-gradient(to bottom, transparent 0%, #000 8%)",
          WebkitMaskComposite: "source-in",
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 12%), linear-gradient(to bottom, transparent 0%, #000 8%)",
          maskComposite: "intersect",
        }}
      />

      {/* Left gradient - lighter */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050d1c]/80 via-[#050d1c]/50 to-transparent md:from-[#050d1c]/75 md:via-[#050d1c]/40 md:to-transparent" />

      {/* Bottom gradient - lighter */}
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-[#050d1c]/60 to-transparent" />

      {/* Text area glow - lighter */}
      <div className="absolute left-0 top-1/2 h-[120%] w-[65%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_left,rgba(5,13,28,0.65),transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Left Content */}
        <div className="pl-2 md:pl-4 lg:pl-6 xl:pl-8">
          <div className="max-w-xl">
            <p className="mb-3 text-[14px] font-medium text-[#7db4ec]">
              E-Commerce Industry
            </p>

            <h1 className="mb-5 text-[30px] font-semibold leading-[1.15] text-white md:text-[38px] lg:text-[44px]">
              Smarter E-Commerce
              <br />
              <span className="text-[#5ec4e0]">for Tomorrow</span>
            </h1>

            <p className="mb-9 max-w-[500px] text-[14px] leading-[1.6] text-white [text-shadow:0_1px_8px_rgba(5,13,28,0.9)]">
              We build connected commerce experiences with AI, automation and
              data-driven solutions to help e-commerce businesses scale faster,
              engage more customers and drive long-term growth.
            </p>

            <div className="mb-12 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#4a7fc1] px-8 py-3 text-[14px] font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:bg-[#5a8fd1]">
                Talk to an Expert
              </button>

              <button className="rounded-full border border-white/25 bg-[#050d1c]/50 px-8 py-3 text-[14px] font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 text-[12px] text-white/75 md:flex-nowrap md:whitespace-nowrap xl:gap-x-8 xl:text-[12.5px]">
              <div className="flex shrink-0 items-center gap-2">
                <Network className="h-5 w-5 text-[#5b9be0]" />
                <span>Omnichannel commerce</span>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#5b9be0]" />
                <span>AI-Powered Personalization</span>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <CreditCard className="h-5 w-5 text-[#5b9be0]" />
                <span>Secure Payments</span>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[#5b9be0]" />
                <span>Data-Driven Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceHero;