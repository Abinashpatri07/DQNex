import React from "react";

const ic = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-6 w-6",
};

/* descW = description ki max width (taaki line wahi jagah toote jaise design me hai) */
const steps = [
  {
    title: "Create & Manage Orders",
    desc: "Capture customer requirements and create sales orders",
    descW: "max-w-[135px]",
    icon: (
      <svg {...ic}>
        <path d="M14 3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h5l6-6V6a3 3 0 0 0-3-3h-2z" />
        <path d="M13 21v-3a2 2 0 0 1 2-2h4" />
        <path d="M9 8h6M9 12h4" />
      </svg>
    ),
  },
  {
    title: "Plan Production",
    desc: "Generate work orders and schedule production",
    descW: "max-w-[125px]",
    icon: (
      <svg {...ic}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Track & Manage",
    desc: "Monitor raw materials, inventory and machine operations in real time",
    descW: "max-w-[185px]",
    icon: (
      <svg {...ic}>
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0" />
        <polyline points="3.3 7 12 12 20.7 7" />
        <path d="M12 22V12" />
        <path d="M19 22s3-2.6 3-5a3 3 0 0 0-6 0c0 2.4 3 5 3 5z" />
        <circle cx="19" cy="17" r="1" />
      </svg>
    ),
  },
  {
    title: "Dispatch & Deliver",
    desc: "Manage dispatch and ensure on-time delivery to customers",
    descW: "max-w-[150px]",
    icon: (
      <svg {...ic}>
        <path d="M14 17V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11h2" />
        <path d="M14 8h4l3 4v5h-2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M9 17h6" />
        <path d="M5 9h4M5 12h3" />
      </svg>
    ),
  },
  {
    title: "Analyze & Grow",
    desc: "Get reports and insights to make better decisions",
    descW: "max-w-[125px]",
    icon: (
      <svg {...ic}>
        <rect x="4" y="12" width="5" height="8" rx="1" />
        <rect x="10.5" y="4" width="5" height="16" rx="1" />
        <path d="M15.5 10H19a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3.5" />
      </svg>
    ),
  },
];

const ErpFlow = () => {
  return (
    <section className="relative w-full overflow-hidden bg-transparent px-6 py-20 font-sans md:px-10">
      <div className="mx-auto max-w-[1100px] text-center">
        {/* BADGE */}
        <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)]">
          How ERPNeX Works
        </span>

        {/* HEADING */}
        <h2 className="mt-9 text-[28px] font-semibold leading-tight text-white md:text-[34px] lg:text-[40px]">
          From Order to Delivery - In a{" "}
          <span className="bg-gradient-to-r from-[#5db7ea] to-[#7fd0ee] bg-clip-text text-transparent">
            Simple Flow
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-[640px] text-[13px] leading-relaxed text-white/90 md:text-[14px]">
          ERPNeX connects every stage of your manufacturing process, giving you complete control and real-time insights.
        </p>

        {/* STEPS */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between">
          {steps.map((s) => (
            <div key={s.title} className="group flex flex-col items-center text-center">
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-[#2a5fb0]/50 bg-[#0c1a33]/80 text-[#d4e6ff] shadow-[0_0_18px_rgba(40,110,230,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 group-hover:border-[#4a8ae0]/70 group-hover:shadow-[0_0_28px_rgba(60,130,240,0.4)]">
                {s.icon}
              </div>

              <h3 className="m-0 mt-4 text-[15px] font-medium leading-tight text-white">{s.title}</h3>
              <p className={`m-0 mt-1.5 text-[11px] leading-[1.4] text-[#8497ad] ${s.descW}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErpFlow;