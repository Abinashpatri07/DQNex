import React from "react";

import compareBg from "../../../assets/platform/erpwhychooseerpnex.png";

const COMPARE_BG = compareBg;

const ic = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-[15px] w-[15px]",
};

const Icons = {
  doc: (
    <svg {...ic}>
      <path d="M14 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7z" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  ),
  calendar: (
    <svg {...ic}>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01" />
    </svg>
  ),
  boxes: (
    <svg {...ic}>
      <path d="M12 3 4 7v6l8 4 8-4V7z" />
      <path d="M4 7l8 4 8-4M12 11v6" />
    </svg>
  ),
  clock: (
    <svg {...ic}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  chat: (
    <svg {...ic}>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
      <path d="M9 11h.01M12 11h.01M15 11h.01" />
    </svg>
  ),
  box: (
    <svg {...ic}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M3 12h18M10 7V4h4v3" />
    </svg>
  ),
  chart: (
    <svg {...ic}>
      <path d="M5 20V12M12 20V5M19 20v-6" />
    </svg>
  ),
  users: (
    <svg {...ic}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c.5-3.3 3-5 6-5s5.5 1.7 6 5" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M18 15.3c1.7.6 2.7 2 3 4.7" />
    </svg>
  ),
};

const withoutItems = [
  { icon: Icons.doc, label: "Manual Order Tracking", desc: "Orders tracked through calls, emails and spreadsheets, leading to missed updates" },
  { icon: Icons.calendar, label: "Spreadsheet-Based Planning", desc: "Production planning is manual and time-consuming with higher error risks" },
  { icon: Icons.boxes, label: "Stock Visibility Gaps", desc: "Unclear inventory levels cause material shortages or overstocking" },
  { icon: Icons.clock, label: "Delayed Reporting", desc: "Reports prepared manually, taking hours or days to get accurate data" },
  { icon: Icons.chat, label: "Communication Errors", desc: "Miscommunication between sales, production, procurement and dispatch teams" },
];

const withItems = [
  { icon: Icons.doc, label: "Centralized Order Management", desc: "All orders in one place with real-time status and updates" },
  { icon: Icons.calendar, label: "Real-Time Production Planning", desc: "Automated planning with accurate resource allocation" },
  { icon: Icons.box, label: "Live Inventory Visibility", desc: "Track raw materials and finished goods in real time" },
  { icon: Icons.chart, label: "Instant Reports & Analytics", desc: "Get accurate, real-time reports and insights in seconds" },
  { icon: Icons.users, label: "Connected Teams & Dispatch", desc: "Seamless communication across departments with complete traceability" },
];

const Column = ({ variant, subtitle, items }) => {
  const isBad = variant === "bad";
  return (
    <div
      className={`flex w-full flex-col rounded-2xl bg-[rgba(6,12,26,0.88)] px-5 pb-5 pt-6 backdrop-blur-md lg:max-w-[340px] lg:flex-1 ${
        isBad
          ? "border-2 border-[#e2563b]/70 shadow-[0_0_24px_rgba(226,86,59,0.25)]"
          : "border border-[#2c4a86]/60"
      }`}
    >
      <div className="text-center">
        <h3 className="text-[19px] font-medium leading-tight text-white">
          {isBad ? (
            <>
              <span className="text-[#f0623f]">Without</span> ERPNeX
            </>
          ) : (
            <>
              <span className="text-[#8fb6ee]">With</span> ERPNeX
            </>
          )}
        </h3>
        <p className="mx-auto mt-1.5 max-w-[240px] text-[10px] leading-[1.4] text-[#7f8ea3]">
          {subtitle}
        </p>
      </div>

      <ul className="mt-5 flex flex-1 flex-col gap-[14px]">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                isBad
                  ? "border-[#e2563b]/40 bg-[#e2563b]/15 text-[#f0623f]"
                  : "border-[#2c5fb8]/40 bg-[#2c5fb8]/20 text-[#5b9be0]"
              }`}
            >
              {item.icon}
            </span>
            <div>
              <p className="text-[12.5px] font-medium leading-tight text-white">{item.label}</p>
              <p className="mt-1 text-[10px] leading-[1.35] text-[#8497ad]">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ErpCompare = () => {
  return (
    <section className="w-full bg-transparent px-6 py-10 font-sans md:px-10 lg:px-14">
      <div className="relative mx-auto max-w-[1300px] overflow-hidden rounded-[24px] bg-[#07111f]">
        {/* Background image */}
        {COMPARE_BG && (
          <img
            src={COMPARE_BG}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-left"
          />
        )}
        {/* Top fade so badge + heading stay readable over the image */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,12,26,0.85)_0%,rgba(5,12,26,0.35)_28%,rgba(5,12,26,0)_50%)]" />

        <div className="relative px-5 pb-8 pt-6 md:px-8">
          {/* Badge */}
          <div className="flex justify-center">
            <span className="rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)]">
              Why Choose ERPNeX
            </span>
          </div>

          {/* Heading */}
          <div className="mt-6 text-center">
            <h2 className="text-[28px] font-semibold leading-tight text-white md:text-[34px]">
              Why Choose <span className="text-[#5ec4e0]">ERPNeX?</span>
            </h2>
            <p className="mx-auto mt-2 max-w-[760px] text-[12.5px] leading-relaxed text-white/90 md:text-[13px]">
              See the difference between disconnected operations and one connected manufacturing platform.
            </p>
          </div>

          {/* Columns — items-stretch makes both cards the same height */}
          <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-stretch lg:justify-end">
            <div className="hidden lg:block lg:flex-[1.15]" aria-hidden="true" />
            <Column
              variant="bad"
              subtitle="Manual processes create delays, errors and lack of visibility across operations."
              items={withoutItems}
            />
            <Column
              variant="good"
              subtitle="A connected platform that brings clarity, control and efficiency."
              items={withItems}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErpCompare;