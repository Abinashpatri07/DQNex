import React from "react";

/*
  GLOBE IMAGE (Our Mission box ka background): apni image yahan rakho -> public/assets/about-globe.png
  (path badalna ho to neeche GLOBE_IMAGE change karo)
  Image poore box me cover hoti hai (bottom se aligned). Jab tak image nahi hai, box sirf dark rahega.
*/
const GLOBE_IMAGE = "/assets/aboutmission.png";

/* ── inline SVG icons ── */
const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-full w-full",
};

const IconMonitor = () => (
  <svg {...svg}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const IconUsers = () => (
  <svg {...svg}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconShieldCheck = () => (
  <svg {...svg}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const IconTarget = () => (
  <svg {...svg}>
    <circle cx="12" cy="12" r="10" />
    <path d="m8 12.5 3 3 5-6" />
  </svg>
);
const IconBulb = () => (
  <svg {...svg}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M8.5 14.5C7.5 13.6 6 12 6 9.5a6 6 0 0 1 12 0c0 2.5-1.5 4.1-2.5 5" />
  </svg>
);
const IconLink = () => (
  <svg {...svg}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const IconUser = () => (
  <svg {...svg}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const visionCards = [
  { icon: <IconMonitor />, title: "Deliver Innovation", desc: "Build modern solutions that solve real business challenges." },
  { icon: <IconUsers />, title: "Empower People", desc: "Create opportunities for our clients and teams to grow." },
  { icon: <IconShieldCheck />, title: "Ensure Quality", desc: "Maintain the highest standards in everything we do." },
  { icon: <IconTarget />, title: "Drive Long-Term Value", desc: "Build lasting partnerships through trust and results." },
];

/* pos = desktop (lg) par tag ki jagah (box ke andar) */
const tags = [
  { icon: <IconBulb />, label: "Smart Business", pos: "lg:left-[62%] lg:top-[81px]" },
  { icon: <IconLink />, label: "Connect Opportunity", pos: "lg:left-[66.4%] lg:top-[142px]" },
  { icon: <IconUser />, label: "Better Tomorrow", pos: "lg:left-[71.3%] lg:top-[201px]" },
];

const Badge = ({ children }) => (
  <span className="relative z-10 inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] font-['Poppins'] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)]">
    {children}
  </span>
);

const MissionVision = () => {
  return (
    <section className="relative w-full bg-transparent px-7 py-10 sm:px-8 md:px-10 lg:px-12 xl:px-14">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-7">
        {/* ═════════ OUR VISION ═════════ */}
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-[24px] bg-gradient-to-b from-[#071b36] to-[#06172e] px-6 pb-8 pt-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] lg:min-h-[331px] lg:flex-row lg:items-start lg:justify-between lg:px-8 lg:pb-[33px]">
          {/* subtle glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_75%_40%,rgba(30,110,220,0.05),transparent_70%)]" />

          {/* left: badge + text */}
          <div className="relative z-10 flex flex-col items-start">
            <Badge>Our Vision</Badge>
            <p className="m-0 mt-10 max-w-[440px] text-[17px] leading-[1.25] text-white/90">
              To be a trusted global partner in IT consulting and back-office
              services, recognized for operational excellence, trusted
              partnerships, and sustained value creation for our clients.
            </p>
          </div>

          {/* right: 2x2 cards */}
          <div className="relative z-10 grid w-full max-w-[512px] grid-cols-1 gap-4 sm:grid-cols-2 lg:mr-20 lg:mt-[38px] lg:w-[512px]">
            {visionCards.map((c) => (
              <div
                key={c.title}
                className="rounded-[10px] border border-white/10 bg-gradient-to-b from-[#0a2850]/50 to-[#071a36]/45 px-2.5 pb-3 pt-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:h-[108px]"
              >
                <div className="flex items-center gap-[9px]">
                  <span className="h-[18px] w-[18px] shrink-0 text-[#cfe2ff]">{c.icon}</span>
                  <p className="m-0 text-[16px] font-medium leading-[22px] text-white">{c.title}</p>
                </div>
                <p className="m-0 mt-4 pl-[54px] text-[12px] leading-[14px] text-white/80">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═════════ OUR MISSION ═════════ */}
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-[24px] bg-[#040c1b] px-6 pb-8 pt-7 lg:h-[331px] lg:px-8">
          {/* GLOBE BACKGROUND IMAGE: poore box me (bottom se aligned) */}
          <img
            src={GLOBE_IMAGE}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          {/* left side halka dark, taaki text saaf padhe (image ke upar) */}
          <div className="pointer-events-none absolute inset-0 bg-[#040c1b]/45 lg:bg-[linear-gradient(90deg,rgba(4,12,27,0.85)_0%,rgba(4,12,27,0.55)_30%,transparent_58%)]" />

          {/* left: badge + text */}
          <div className="relative z-10 flex flex-col items-start">
            <Badge>Our Mission</Badge>
            <p className="m-0 mt-10 max-w-[450px] text-[17px] leading-[1.25] text-white/90">
              To deliver reliable, secure, and scalable IT and operational
              solutions that help our clients optimize performance and achieve
              sustainable growth.
            </p>
          </div>

          {/* floating tags (desktop: box ke andar alag-alag jagah, mobile: row me).
              lg:contents zaroori hai, warna tags apne wrapper ke hisaab se position hote hain, box ke hisaab se nahi */}
          <div className="relative z-10 flex flex-wrap gap-3 lg:contents">
            {tags.map((t) => (
              <span
                key={t.label}
                className={`inline-flex items-center gap-2.5 rounded-[10px] border border-white/10 bg-[#0a1c36]/70 px-4 py-3 text-[15px] leading-6 text-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md lg:absolute lg:z-10 ${t.pos}`}
              >
                <span className="h-4 w-4 shrink-0 text-[#cfe2ff]">{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;


