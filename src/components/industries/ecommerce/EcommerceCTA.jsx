import React from "react";
import { ArrowRight } from "lucide-react";

// 👉 Extension (.png/.jpg/.webp) aur path apne project ke hisaab se check kar lena
import ctaBg from "../../../assets/Industry/EcommerseLetsTalk.png";

const EcommerceCTA = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#050d1c] via-[#061426] to-[#071a33] px-6 py-10 font-sans md:px-10 md:py-16 lg:px-14">
      <div className="relative mx-auto flex min-h-[340px] max-w-[1300px] items-center overflow-hidden rounded-[28px] border border-white/10 bg-[#050d1c] shadow-2xl md:min-h-[360px]">
        {/* Background image (cart, icons, glow sab image me hain) */}
        <img
          src={ctaBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />

        {/* Left side readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1c]/95 via-[#050d1c]/75 to-transparent md:via-[#050d1c]/55 lg:via-[#050d1c]/30" />

        {/* Content */}
        <div className="relative z-10 w-full p-8 md:w-3/5 md:p-12 lg:w-1/2 lg:p-14">
          <p className="mb-3 text-[13px] font-medium text-[#7db4ec]">
            Let's Talk
          </p>

          <h2 className="mb-5 text-[28px] font-semibold leading-[1.15] text-white md:text-[34px]">
            Ready to Build Your <br />
            <span className="text-[#5ec4e0]">E-Commerce Success?</span>
          </h2>

          <p className="mb-12 max-w-[360px] text-[13px] leading-[1.6] text-white/90 [text-shadow:0_1px_8px_rgba(5,13,28,0.9)]">
            Let's discuss how DQNex can help you design, build, and scale your
            e-commerce business with the right technology and strategy.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 rounded-full bg-[#3b6fb5] px-7 py-3.5 text-[14px] font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:bg-[#4a7fc1]">
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </button>

            <button className="rounded-full border border-white/20 bg-[#050d1c]/60 px-7 py-3.5 text-[14px] font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceCTA;