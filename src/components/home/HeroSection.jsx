import React from "react";
import { Link } from "react-router-dom";

import heroScroll1 from "../../assets/HeroScroll1.png"; // path/extension adjust kar lena
import heroScroll2 from "../../assets/HeroScroll2.png";
import heroScroll3 from "../../assets/HeroScroll3.png";
import heroScroll4 from "../../assets/HeroScroll4.png";
import heroScroll5 from "../../assets/HeroScroll5.png";

/* Upar wali row (left me chalegi) */
const rowTop = [heroScroll1, heroScroll2, heroScroll3, heroScroll4, heroScroll5];

/* Neeche wali row (right me chalegi): order alag hai taaki dono rows same na dikhein */
const rowBottom = [heroScroll3, heroScroll4, heroScroll5, heroScroll1, heroScroll2];

/* Ek row: list 2 baar render hoti hai taaki -50% par seamless loop ho */
const MarqueeRow = ({ images, direction = "left" }) => {
  const loop = [...images, ...images];

  return (
    <div
      className="flex w-max hover:[animation-play-state:paused]"
      style={{
        animation: `${direction === "left" ? "marqueeLeft" : "marqueeRight"} 45s linear infinite`,
      }}
    >
      {loop.map((src, i) => (
        <div
          key={i}
          className="mr-5 aspect-[16/10] w-[260px] shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-[#1b2c4d] to-[#101c33] shadow-[0_8px_30px_rgba(0,0,0,0.35)] sm:w-[300px] lg:w-[360px]"
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            draggable="false"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-start overflow-hidden pb-20 pt-[130px] text-center font-sans"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% 75%, #22345a 0%, #16233f 40%, #0d172b 75%, #0a1220 100%)",
      }}
    >
      {/* Marquee keyframes */}
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-wrap > div > div > div { animation: none !important; }
        }
      `}</style>

      {/* TEXT CONTENT */}
      <div className="relative z-10 w-full max-w-[900px] px-6">
        <h1 className="mb-6 text-[28px] font-semibold tracking-tight text-white md:text-[34px] lg:text-[44px] lg:leading-[1.15]">
          Turning Digital Change Into <br className="hidden md:block" />
          Real-World Impact.
        </h1>

        <p className="mx-auto mb-12 max-w-[650px] text-[14px] leading-relaxed text-[#c8d1dc]">
          We combine strategy, technology, and design to help businesses solve
          complex challenges and move forward with confidence.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <Link
            to="/contact"
            className="flex h-[52px] w-full items-center justify-center rounded-full bg-[#3182e0] px-14 text-[14px] font-medium text-white transition hover:bg-[#2877d8] sm:w-auto"
          >
            Lets Talk
          </Link>
          <Link
            to="/service"
            className="flex h-[52px] w-full items-center justify-center rounded-full border border-[#2c4a78] bg-[#060f1d] px-14 text-[14px] font-medium text-white transition hover:bg-[#0c1a2e] sm:w-auto"
          >
            Explore Our Work
          </Link>
        </div>
      </div>

      {/* SCROLLING IMAGE ROWS */}
      <div className="marquee-wrap relative mt-16 w-full overflow-hidden">
        {/* Soft glow behind the rows */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[60%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_70%)]" />

        <div className="relative flex flex-col gap-5">
          {/* Upar wali row: left ki taraf */}
          <div className="overflow-hidden">
            <MarqueeRow images={rowTop} direction="left" />
          </div>

          {/* Neeche wali row: right ki taraf */}
          <div className="overflow-hidden">
            <MarqueeRow images={rowBottom} direction="right" />
          </div>
        </div>

        {/* Left / right edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0d172b] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0d172b] to-transparent sm:w-28" />
      </div>
    </section>
  );
};

export default HeroSection;