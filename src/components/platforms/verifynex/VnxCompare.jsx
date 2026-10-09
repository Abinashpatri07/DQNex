import React from "react";
import compareBg from "../../../assets/platform/vnxcompare.png";

const BG_IMAGE = compareBg;

const ic = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-[22px] w-[22px]",
};

/* iconBox = icon ke square ka pastel background + icon ka color */
const features = [
  {
    iconBox: "bg-[#d3e2ff] text-[#3b6fe0]",
    title: "Fewer manual handoffs",
    desc: "Keep candidates, reviewers, verification activity, and follow-ups connected within one workflow.",
    icon: (
      <svg {...ic}>
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
      </svg>
    ),
  },
  {
    iconBox: "bg-[#e4d5f6] text-[#7c4dd6]",
    title: "Consistent screening",
    desc: "Apply defined check packages and review processes across comparable roles and locations.",
    icon: (
      <svg {...ic}>
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <path d="M7 8h8M7 12h10M7 16h6" />
      </svg>
    ),
  },
  {
    iconBox: "bg-[#f3dec8] text-[#d8772b]",
    title: "Earlier visibility of risk",
    desc: "Surface discrepancies, delays, and incomplete evidence before they become last-minute hiring problems.",
    icon: (
      <svg {...ic}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    iconBox: "bg-[#cdeedb] text-[#2f9d68]",
    title: "Clearer accountability",
    desc: "Make ownership, pending actions, reviewer decisions, and case status visible to the appropriate people.",
    icon: (
      <svg {...ic}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    iconBox: "bg-[#ecd0f3] text-[#a24bd0]",
    title: "Stronger auditability",
    desc: "Preserve the information and decision trail needed to understand how an outcome was reached.",
    icon: (
      <svg {...ic}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    iconBox: "bg-[#d3e4f6] text-[#3f7fc4]",
    title: "Better candidate journey",
    desc: "Give candidates a clear way to provide information, consent, documents, and clarifications.",
    icon: (
      <svg {...ic}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const VnxCompare = () => {
  return (
    <section className="relative w-full bg-transparent px-6 py-8 md:py-10 md:px-10">
      {/* HEADING */}
      <h2 className="mx-auto mb-8 max-w-[760px] text-center text-[28px] font-semibold leading-[1.2] text-white md:text-[34px] lg:text-[36px]">
        Less verification administration. More{" "}
        <span className="bg-gradient-to-r from-[#5db7ea] to-[#7fd0ee] bg-clip-text text-transparent">
          confidence
        </span>{" "}
        in every decision.
      </h2>

      {/* EK HI BOX: left me image, right me cards */}
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[24px] border border-white/[0.04] bg-[#07142a] px-5 pb-5 pt-[250px] sm:pt-[290px] lg:h-[477px] lg:p-0">
        {/* background image */}
        <img
          src={BG_IMAGE}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-[240px] w-full object-cover object-left sm:h-[280px] lg:inset-0 lg:h-full"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* right side halka dark, taaki cards saaf dikhe */}
        <div className="pointer-events-none absolute inset-0 lg:bg-[linear-gradient(270deg,rgba(4,10,24,0.55)_0%,transparent_62%)]" />

        {/* cards: desktop par right side me 3x2 */}
        <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:absolute lg:right-5 lg:top-[25px] lg:w-[679px] lg:grid-cols-3 lg:gap-[17px]">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[#2d3f8a]/70 bg-[#050e20]/90 p-[17px] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4a62c4]/80 lg:h-[205px]"
            >
              <div className={`flex h-[47px] w-[47px] items-center justify-center rounded-[11px] ${f.iconBox}`}>
                {f.icon}
              </div>
              <h3 className="m-0 mt-5 text-[15px] font-medium leading-tight text-white">{f.title}</h3>
              <p className="m-0 mt-2 text-[11px] leading-[1.45] text-[#b9c6d9]/90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VnxCompare;