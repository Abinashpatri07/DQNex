import React from "react";

import heroBg from "../../../assets/platform/erphero.png";

// 👉 Background image (poori hero ko cover karti hai, text ke peeche se bhi)
const HERO_BG = heroBg;

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "w-5 h-5 shrink-0",
};

const badges = [
  {
    label: "Wastage Reduction",
    icon: (
      <svg {...iconProps}>
        <path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7l1.5-2.6" />
        <path d="M11 19h6.2a1.8 1.8 0 0 0 1.6-.9l1.3-2.3" />
        <path d="m14 16-3 3 3 3" />
        <path d="M8.3 10.5 6.8 8a1.8 1.8 0 0 1 .7-2.5l1.6-.9" />
        <path d="m9.5 3 3.3 1.2-1.2 3.3" />
        <path d="M15.2 8.8 16 7.5a1.8 1.8 0 0 1 3.1 0l1.8 3" />
        <path d="m17.5 10.5 3.4.3.3-3.5" />
      </svg>
    ),
  },
  {
    label: "Operational Efficiency",
    icon: (
      <svg {...iconProps}>
        <circle cx="10" cy="14" r="2.5" />
        <path d="M10 8.5v1.5M10 18v1.5M4.5 14H6M14 14h1.5M6.1 10.1l1.1 1.1M12.8 16.8l1.1 1.1M6.1 17.9l1.1-1.1M12.8 11.2l1.1-1.1" />
        <circle cx="17" cy="7" r="1.8" />
        <path d="M17 3.5v1M17 9.5v1M13.5 7h1M19.5 7h1" />
      </svg>
    ),
  },
  {
    label: "Smarter Planning",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    label: "Smarter Decisions",
    icon: (
      <svg {...iconProps}>
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2v.1h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
      </svg>
    ),
  },
];

const ErpHero = () => {
  return (
    <section className="relative flex w-full min-h-[calc(100vh-64px)] items-center overflow-hidden bg-[#050d1c] font-sans pt-[64px] lg:min-h-[600px] lg:aspect-[2.55/1]">
      {/* Background image — mobile: full-bleed cover. Desktop: natural size (smaller), edges faded into the bg */}
      {HERO_BG && (
        <img
          src={HERO_BG}
          alt=""
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[70%_center] lg:inset-auto lg:right-0 lg:top-1/2 lg:h-auto lg:w-[88%] lg:-translate-y-1/2 lg:object-contain xl:w-[80%] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_22%),linear-gradient(to_bottom,transparent_0%,#000_12%,#000_88%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_22%),linear-gradient(to_bottom,transparent_0%,#000_12%,#000_88%,transparent_100%)] lg:[mask-composite:intersect] lg:[-webkit-mask-composite:source-in]"
        />
      )}

      {/* Overlay: mobile only (text over image). Desktop needs none — the mask blends the edges */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#050d1c]/65 lg:hidden" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] items-center px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-[700px] py-16">
          <p className="mb-3 text-[14px] font-medium text-[#7db4ec]">CORNeX</p>

          <h1 className="mb-5 text-[30px] font-semibold leading-[1.15] text-white md:text-[38px] lg:text-[44px]">
            Simplify Operations
            <br />
            Scale <span className="text-[#5ec4e0]">Your Business</span>
          </h1>

          <p className="mb-9 max-w-[390px] text-[14px] leading-[1.6] text-white/90">
            A modern, end-to-end ERP platform built for manufacturers to
            streamline operations, improve efficiency, and drive growth — all in
            one place.
          </p>

          {/* Buttons */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-[#4a7fc1] px-8 py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-[#5b90d2]">
              Request a Demo
            </button>
            <button className="rounded-full border border-white/25 bg-[#050d1c]/50 px-8 py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-white/10">
              Explore Features
            </button>
          </div>

          {/* Badges — plain icon + text, single row on desktop */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 lg:flex-nowrap lg:gap-x-7">
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 whitespace-nowrap text-[12.5px] text-white/75"
              >
                <span className="text-[#5b9be0]">{b.icon}</span>
                {b.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ErpHero;