import React from "react";

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
const services = [
  {
    iconBox: "bg-[#cfe0f5] text-[#3b6fb8]",
    title: "Identity Verification",
    desc: "Matches candidate identity details against submitted proof for confident identity assurance.",
    icon: (
      <svg {...ic}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="8.5" cy="11" r="2" />
        <path d="M5.5 16c.5-1.5 1.7-2.2 3-2.2s2.5.7 3 2.2" />
        <path d="M14 10h4M14 14h3" />
      </svg>
    ),
  },
  {
    iconBox: "bg-[#f0dcc5] text-[#d8772b]",
    title: "Employment",
    desc: "Confirm work history, role, tenure, and any material gaps across the candidate timeline.",
    icon: (
      <svg {...ic}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 12v4M10 14h4" />
      </svg>
    ),
  },
  {
    iconBox: "bg-[#e0d6f2] text-[#7c4dd6]",
    title: "Education",
    desc: "Audit academic credentials and review unexplained gaps across the candidate's education timeline.",
    icon: (
      <svg {...ic}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    iconBox: "bg-[#cfeede] text-[#2f9d68]",
    title: "Court / Police Clearance",
    desc: "Searches relevant civil and criminal court records and validates police-clearance documentation.",
    icon: (
      <svg {...ic}>
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    ),
  },
  {
    iconBox: "bg-[#d5ddf0] text-[#4a5fd0]",
    title: "Reference Verification",
    desc: "Collects professional feedback from references to assess capability and conduct.",
    icon: (
      <svg {...ic}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6.2 18.6c.8-2.2 3-3.6 5.8-3.6s5 1.4 5.8 3.6" />
      </svg>
    ),
  },
];

const VnxConnected = () => {
  return (
    <section className="relative w-full bg-transparent px-6 py-8 md:py-10 md:px-10">
      {/* BADGE (box ke upar) */}
      <div className="flex justify-center">
        <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)]">
          What VerifyNeX Does
        </span>
      </div>

      {/* EK HI BOX: heading + subtitle + cards andar. Upar se fade, neeche rounded kinara */}
      <div className="relative mx-auto mt-8 max-w-[1200px] overflow-hidden rounded-[22px] px-5 pb-6 pt-2 text-center xl:pr-7">
        {/* background layer (upar se transparent -> poora) */}
        <div className="pointer-events-none absolute inset-0 bg-[#07142a] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0px,rgba(0,0,0,0.4)_50px,#000_120px)] [mask-image:linear-gradient(to_bottom,transparent_0px,rgba(0,0,0,0.4)_50px,#000_120px)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_10%_100%,rgba(30,90,200,0.25),transparent_70%)]" />
        </div>

        {/* HEADING */}
        <h2 className="relative z-10 text-[26px] font-semibold leading-tight text-white md:text-[32px] lg:text-[36px]">
          Verification designed as one{" "}
          <span className="bg-gradient-to-r from-[#5db7ea] to-[#7fd0ee] bg-clip-text text-transparent">
            connected system
          </span>
        </h2>

        <p className="relative z-10 mx-auto mt-3.5 max-w-[620px] text-[13px] leading-[1.55] text-white/90 md:text-[13.5px]">
          Bring identity, employment, education, court records, police clearance, and references into
          a controlled, evidence-led workflow built for confident hiring decisions.
        </p>

        {/* CARDS */}
        <div className="relative z-10 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-[17px]">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center rounded-2xl border border-[#2d3f8a]/70 bg-[#050e20]/90 px-4 pb-4 pt-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4a62c4]/80 xl:h-[185px]"
            >
              <div className={`flex h-[47px] w-[47px] items-center justify-center rounded-[11px] ${s.iconBox}`}>
                {s.icon}
              </div>
              <h3 className="m-0 mt-5 text-[14px] font-medium leading-tight text-white">{s.title}</h3>
              <p className="m-0 mt-3.5 text-[10.5px] leading-[1.45] text-[#b9c6d9]/90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VnxConnected;