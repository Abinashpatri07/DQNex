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
    title: "Candidate Submission",
    desc: "HR creates a case and invites the candidate",
    descW: "max-w-[130px]",
    icon: (
      <svg {...ic}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="12" cy="13" r="2.2" />
        <path d="M8.5 19c.4-1.9 1.8-2.8 3.5-2.8s3.1.9 3.5 2.8" />
      </svg>
    ),
  },
  {
    title: "Document Collection",
    desc: "Candidate uploads details and evidence",
    descW: "max-w-[125px]",
    icon: (
      <svg {...ic}>
        <path d="M8 7V4a1 1 0 0 1 1-1h8l4 4v10a1 1 0 0 1-1 1h-3" />
        <rect x="3" y="7" width="13" height="14" rx="1.5" />
        <path d="M6.5 12h6M6.5 15.5h6" />
      </svg>
    ),
  },
  {
    title: "Verification Checks",
    desc: "Vendors verify multiple data points",
    descW: "max-w-[185px]",
    icon: (
      <svg {...ic}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "HR Review",
    desc: "Review reports, add remarks and make a decision",
    descW: "max-w-[160px]",
    icon: (
      <svg {...ic}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M8 13h6M8 17h3" />
        <circle cx="18" cy="17" r="2" />
        <path d="M15 22c.3-1.6 1.4-2.4 3-2.4s2.7.8 3 2.4" />
      </svg>
    ),
  },
  {
    title: "Verified & Closed",
    desc: "Get the final report and close the case",
    descW: "max-w-[130px]",
    icon: (
      <svg {...ic}>
        <path d="M5 22h14" />
        <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" />
        <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13" />
      </svg>
    ),
  },
];

const VnxFlow = () => {
  return (
    <section className="relative w-full overflow-hidden bg-transparent px-6 py-8 md:py-10 md:px-10 font-sans">
      <div className="mx-auto max-w-[1100px] text-center">
        {/* BADGE */}
        <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)]">
          How Verify NeX Works
        </span>

        {/* HEADING */}
        <h2 className="mt-9 text-[28px] font-semibold leading-tight text-white md:text-[34px] lg:text-[40px]">
          From Candidate to Verified - In{" "}
          <span className="bg-gradient-to-r from-[#5db7ea] to-[#7fd0ee] bg-clip-text text-transparent">
            One Simple Flow
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-[640px] text-[13px] leading-relaxed text-white/90 md:text-[14px]">
          A seamless verification process designed for HR teams, with full visibility at every stage.
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

export default VnxFlow;