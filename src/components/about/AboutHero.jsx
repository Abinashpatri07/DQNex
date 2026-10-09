import React from "react";

import aboutUsHero from "../../assets/AboutUsHero.png"; // path/extension adjust kar lena

const AboutHero = () => {
  return (
    <section className="relative flex w-full min-h-[360px] flex-col items-center justify-center overflow-hidden bg-[#061423] px-6 pb-20 pt-[110px] text-center font-sans md:min-h-[420px]">
      {/* Background image */}
      <img
        src={aboutUsHero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#050d1c]/55" />

      {/* Center radial focus behind the text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(5,13,28,0.7)_0%,rgba(5,13,28,0.35)_55%,transparent_100%)]" />

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#061423] to-transparent" />

      <div className="relative z-10 w-full max-w-[900px]">
        <h1 className="mb-5 text-[28px] font-semibold tracking-tight text-white md:text-[34px] lg:text-[44px]">
          About Us
        </h1>
        <p className="mx-auto max-w-[750px] text-[14px] leading-relaxed text-[#d5dce6] [text-shadow:0_1px_8px_rgba(5,13,28,0.9)]">
          We combine strategy, technology, and design to help businesses solve
          complex challenges and move forward with confidence.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;