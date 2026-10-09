import React from "react";
import heroBg from "../../../assets/platform/vnxhero.png";

// 👉 Background image: mobile par full-bleed, desktop par natural size (edges fade hote hain)
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

const trustBadges = [
  {
    label: "Faster Hiring",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2.5 2" />
        <path d="M9.5 2.5h5" />
      </svg>
    ),
  },
  {
    label: "Reduced Risk",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    label: "Compliance Ready",
    icon: (
      <svg {...iconProps}>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="14 3 14 9 20 9" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
  {
    label: "Trusted & Secure",
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
  },
];

const VnxHero = () => {
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
          {/* Label — plain text, no pill */}
          <p className="mb-3 text-[14px] font-medium text-[#7db4ec]">VerifyNeX</p>

          <h1 className="mb-5 text-[30px] font-semibold leading-[1.15] text-white md:text-[38px] lg:text-[44px]">
            Verify Every Profile
            <br />
            Hire With <span className="text-[#5ec4e0]">Confidence</span>
          </h1>

          <p className="mb-9 max-w-[390px] text-[14px] leading-[1.6] text-white/90">
            A unified background verification platform to onboard candidates,
            verify identities, validate credentials and reduce hiring risks all
            in one place.
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

          {/* Trust badges — plain icon + text, single row on desktop */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 lg:flex-nowrap lg:gap-x-7">
            {trustBadges.map((b) => (
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

export default VnxHero;