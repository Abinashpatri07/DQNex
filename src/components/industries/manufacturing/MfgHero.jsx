import React from "react";
import { BrainCircuit, Network, BarChart3, Boxes } from "lucide-react";

// 👉 Extension (.png/.jpg/.webp) aur path apne project ke hisaab se check kar lena
import heroBg from "../../../assets/Industry/ManufacturingHome.png";

const MfgHero = () => {
  return (
    <section className="relative flex w-full min-h-[calc(100vh-64px)] items-center overflow-hidden bg-[#050d1c] px-6 pt-[64px] font-sans md:px-10 lg:min-h-[600px] lg:aspect-[2.55/1] lg:px-14">
      {/* Background image (robot arm, factory, dashboard sab image me hain) */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full origin-bottom-right scale-90 object-cover object-right"
        style={{
          // Kinaare soft fade taaki shrink hone par edge na dikhe
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 18%), linear-gradient(to bottom, transparent 0%, #000 12%)",
          WebkitMaskComposite: "source-in",
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 18%), linear-gradient(to bottom, transparent 0%, #000 12%)",
          maskComposite: "intersect",
        }}
      />

      {/* Left side readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050d1c]/95 via-[#050d1c]/80 to-[#050d1c]/10 md:via-[#050d1c]/65 md:to-transparent" />
      <div className="absolute left-0 top-1/2 h-[120%] w-[65%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_left,rgba(5,13,28,0.8),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-[#050d1c]/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1300px]">
        <div className="max-w-xl lg:max-w-[640px]">
          <p className="mb-3 text-[14px] font-medium text-[#7db4ec]">
            Manufacturing Industry
          </p>

          <h1 className="mb-5 text-[30px] font-semibold leading-[1.15] text-white md:text-[38px] lg:text-[44px]">
            Smarter Manufacturing
            <br />
            <span className="text-[#5ec4e0]">Built for the Future</span>
          </h1>

          <p className="mb-9 max-w-[470px] text-[14px] leading-[1.6] text-white/90 [text-shadow:0_1px_8px_rgba(5,13,28,0.9)]">
            Drive digital transformation across your manufacturing operations
            with automation, connected systems and intelligent supply chains
            for greater efficiency, quality and growth.
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

        {/* Features row max-w se bahar hai taaki ek hi line me aaye */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-4 text-[12px] text-white/75 md:flex-nowrap md:whitespace-nowrap xl:gap-x-8 xl:text-[12.5px]">
          <div className="flex shrink-0 items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-[#5b9be0]" />
            <span>Smart Automation</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Network className="h-5 w-5 text-[#5b9be0]" />
            <span>Connected Operations</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <BarChart3 className="h-5 w-5 text-[#5b9be0]" />
            <span>Predictive Analytics</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Boxes className="h-5 w-5 text-[#5b9be0]" />
            <span>Intelligent Supply Chain</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MfgHero;