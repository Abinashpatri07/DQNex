import React from "react";

import ownerImg from "../../../assets/platform/owner-removebg-preview.png";
import purchasingHeadImg from "../../../assets/platform/purchasinghead-removebg-preview.png";
import storeManagerImg from "../../../assets/platform/storemanager-removebg-preview.png";
import accountsImg from "../../../assets/platform/accounts-removebg-preview.png";
import dispatchImg from "../../../assets/platform/dispatch-removebg-preview.png";
import goLiveBg from "../../../assets/platform/erpgolive.png";

/* Role cards ke neeche wali 5 images (order: Owner, Purchasing Head, Store Manager, Accounts, Dispatch) */
const ROLE_IMAGES = [ownerImg, purchasingHeadImg, storeManagerImg, accountsImg, dispatchImg];

/* Kisi image ki png me padding alag ho to yahan us role ka offset set karo.
   Purchasing Head upar baith raha tha, isliye neeche shift + thoda scale.
   Value ko 12px se 22px ke beech adjust kar sakte ho. */
const ROLE_IMG_FIX = {
  "Purchasing Head": "translate-y-[16px] scale-[1.04]",
  Accounts: "translate-y-[14px]",
};

/* "Live in 30 days" panel ki background image */
const GO_LIVE_BG = goLiveBg;

const S = ({ children, size = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={size}>
    {children}
  </svg>
);

const flowSteps = [
  { num: "01", label: "Customer Order", bg: "#2b3f6e", icon: <S><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></S> },
  { num: "02", label: "Inventory", bg: "#3a3f8f", icon: <S><path d="M12 3 4 7v6l8 4 8-4V7z" /><path d="M4 7l8 4 8-4M12 11v6" /></S> },
  { num: "03", label: "Planning", bg: "#4a1fc0", icon: <S><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2v.1h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" /></S> },
  { num: "04", label: "Production", bg: "#a9852a", icon: <S><rect x="4" y="7" width="16" height="13" rx="2" /><path d="M4 11h16M10 15h4" /><path d="M7 7V4h10v3" /></S> },
  { num: "05", label: "Quality", bg: "#1c4a4a", icon: <S><path d="M12 3l2.4 1.6 2.9-.1 1.2 2.6 2.3 1.8-.8 2.8.8 2.8-2.3 1.8-1.2 2.6-2.9-.1L12 21l-2.4-1.6-2.9.1-1.2-2.6L3.2 15l.8-2.8L3.2 9.4 5.5 7.6l1.2-2.6 2.9.1z" /><path d="m9 12 2 2 4-4" /></S> },
  { num: "06", label: "Dispatch", bg: "#1d4a8c", icon: <S><path d="M14 17V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11h2" /><path d="M14 8h4l3 4v5h-2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></S> },
  { num: "07", label: "Billing", bg: "#6a1f8f", icon: <S><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" /><path d="M9 8h6M9 12h6" /></S> },
];

const roles = [
  { role: "Owner", desc: "Track business status and approvals", iconBg: "#cfd9ec", color: "#3b5b99",
    icon: <S size="h-[18px] w-[18px]"><circle cx="12" cy="8" r="4" /><path d="M4 21c.6-4 4-6 8-6s7.4 2 8 6" /></S> },
  { role: "Purchasing Head", desc: "Manage purchase requirements", iconBg: "#dccdf3", color: "#7a4cc0",
    icon: <S size="h-[18px] w-[18px]"><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 7H6" /></S> },
  { role: "Store Manager", desc: "Confirm stock & manage materials", iconBg: "#c9eadf", color: "#2f8a6e",
    icon: <S size="h-[18px] w-[18px]"><path d="M3 9l1.5-5h15L21 9" /><path d="M4 9v11h16V9" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /><path d="M9 15c.8 1 2 1 3 1s2.2 0 3-1" /></S> },
  { role: "Accounts", desc: "Verify billing & payments", iconBg: "#f2dcc0", color: "#b87a2c",
    icon: <S size="h-[18px] w-[18px]"><path d="M14 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7z" /><path d="M9 11h6M9 15h3" /></S> },
  { role: "Dispatch", desc: "Schedule and complete delivery", iconBg: "#d3dbe8", color: "#41639c",
    icon: <S size="h-[18px] w-[18px]"><path d="M14 17V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11h2" /><path d="M14 8h4l3 4v5h-2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></S> },
];

const weekSteps = [
  { week: "WEEK 1", label: "Setup", num: "01", circle: "linear-gradient(180deg,#2f7bff,#1b4fd8)", border: "rgba(59,130,246,0.55)", color: "#3b82f6", labelColor: "#9fb3cc",
    icon: <S size="h-6 w-6"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></S> },
  { week: "WEEK 2", label: "Data move", num: "02", circle: "linear-gradient(180deg,#5a4ff0,#3a2fc0)", border: "rgba(99,102,241,0.55)", color: "#6d6ff5", labelColor: "#9fb3cc",
    icon: <S size="h-6 w-6"><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M20 5v14c0 1.7-3.6 3-8 3s-8-1.3-8-3V5" /><path d="M20 12c0 1.7-3.6 3-8 3s-8-1.3-8-3" /></S> },
  { week: "WEEK 3", label: "Floor training", num: "03", circle: "linear-gradient(180deg,#14a3a3,#0b6f78)", border: "rgba(45,212,191,0.5)", color: "#2dd4bf", labelColor: "#9fb3cc",
    icon: <S size="h-6 w-6"><circle cx="12" cy="8" r="3" /><path d="M7 20c.4-3 2.4-4.5 5-4.5s4.6 1.5 5 4.5" /><path d="M4 11.5a2.5 2.5 0 0 1 2-4M20 11.5a2.5 2.5 0 0 0-2-4M3 17c.4-1.6 1.2-2.6 2.5-3M21 17c-.4-1.6-1.2-2.6-2.5-3" /></S> },
  { week: "WEEK 4", label: "Parallel run & go-live", num: "04", circle: "linear-gradient(180deg,#9a7a35,#6b4f1c)", border: "rgba(217,164,65,0.55)", color: "#f59e0b", labelColor: "#d9a441",
    icon: <S size="h-6 w-6"><path d="M5 15c-1.5 1.5-2 4-2 5 1 0 3.5-.5 5-2" /><path d="M14 4c3.5-.5 6 0 6 0s.5 2.5 0 6c-1 3-4 6-7 7l-5-5c1-3 4-6 6-8z" /><circle cx="15" cy="9" r="1.5" /></S> },
];

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)]">
    {children}
  </span>
);

const Accent = ({ children }) => <span className="text-[#6cc4e4]">{children}</span>;

const ErpConnected = () => {
  return (
    <section className="w-full bg-transparent px-6 py-16 font-sans md:px-10 md:py-20 lg:px-14">
      <div className="mx-auto max-w-[1300px] space-y-16">
        {/* ── BLOCK 1: Order to Billing flow ── */}
        <div>
          <Pill>Our Flow</Pill>
          <h2 className="mt-7 text-[26px] font-medium leading-tight text-white md:text-[34px] lg:text-[38px]">
            From Order to Billing — <Accent>One Connected Flow</Accent>
          </h2>

          <div className="mt-7 overflow-x-auto rounded-2xl border border-[#1f3358] bg-gradient-to-b from-[#0b1a33] to-[#081326] p-3.5">
            <div className="flex min-w-[900px] items-center justify-between gap-2">
              {flowSteps.map((s, idx) => (
                <React.Fragment key={s.label}>
                  <div className="flex shrink-0 items-center gap-2.5">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                      style={{ background: s.bg }}
                    >
                      {s.icon}
                    </span>
                    <div className="leading-tight">
                      <p className="text-[10px] text-white/80">{s.num}</p>
                      <p className="mt-1 text-[11px] text-white/90">{s.label}</p>
                    </div>
                  </div>
                  {idx < flowSteps.length - 1 && (
                    <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-3 w-5 shrink-0 text-[#4a7fc1]">
                      <path d="M2 6h18M16 2l4 4-4 4" />
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── BLOCK 2: Everyone works from the same number ── */}
        <div className="rounded-[24px] bg-gradient-to-b from-[#0a1830]/60 to-transparent px-2 pb-6 pt-2 md:px-6">
          <div className="text-center">
            <Pill>One Connected Flow</Pill>
            <h2 className="mt-8 text-[26px] font-medium leading-tight text-white md:text-[34px] lg:text-[38px]">
              Everyone Works From the <Accent>Same Number</Accent>
            </h2>
            <p className="mx-auto mt-2 max-w-[600px] text-[12.5px] text-white/90 md:text-[13px]">
              One shared order record keeps every team aligned from purchase to dispatch.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {roles.map((r, i) => (
              <div key={r.role} className="flex flex-col rounded-xl border border-[#2a4a86]/60 bg-[#050d1c]/80 px-3.5 pb-6 pt-3.5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: r.iconBg, color: r.color }}>
                    {r.icon}
                  </span>
                  <p className="text-[12.5px] font-medium leading-tight text-white">{r.role}</p>
                </div>
                <p className="mt-3 max-w-[140px] text-[10px] leading-[1.4] text-[#b4c0d0]">{r.desc}</p>

                {/* Image slot */}
                <div className="mt-4 flex aspect-[2/1] w-full items-center justify-center rounded-lg">
                  {ROLE_IMAGES[i] ? (
                    <img
                      src={ROLE_IMAGES[i]}
                      alt={r.role}
                      className={`h-full w-full object-contain object-center ${ROLE_IMG_FIX[r.role] || ""}`}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-[#2a4a86]/60 text-[10px] text-white/30">
                      Image
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BLOCK 3: Live in 30 days ── */}
        <div className="relative overflow-hidden rounded-[24px] border border-[#1f3358] bg-[#07111f]">
          {GO_LIVE_BG && (
            <img src={GO_LIVE_BG} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,13,28,0.95)_0%,rgba(5,13,28,0.75)_45%,rgba(5,13,28,0.25)_100%),linear-gradient(0deg,rgba(5,13,28,0.9)_0%,rgba(5,13,28,0)_45%)]" />

          <div className="relative px-6 py-9 md:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-[11px] text-[#7db4ec]">The ERPNeX Go-LIVE Method</p>
                <h2 className="mt-4 text-[28px] font-medium leading-[1.3] text-white md:text-[34px]">
                  Live in <Accent>30 days</Accent>
                  <br />
                  Not a year-long ERP Project
                </h2>
              </div>
              <p className="max-w-[300px] text-[11px] leading-[1.5] text-white/90 lg:mt-14">
                Most ERP horror stories are implementation stories. We run setup, data and training ourselves, on your floor, until your team runs it without us.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-stretch gap-4 lg:flex-row lg:gap-0">
              {weekSteps.map((w, idx) => (
                <React.Fragment key={w.label}>
                  <div
                    className="flex flex-1 items-center gap-4 rounded-xl bg-[#060f20]/85 px-5 py-4 backdrop-blur-sm"
                    style={{ border: `1px solid ${w.border}` }}
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
                      style={{ background: w.circle }}
                    >
                      {w.num}
                    </span>
                    <div className="min-w-0 flex-1 leading-tight">
                      <p className="text-[9.5px] tracking-wide" style={{ color: w.labelColor }}>{w.week}</p>
                      <p className="mt-1 text-[13px] font-medium text-white">{w.label}</p>
                    </div>
                    <span className="shrink-0" style={{ color: w.color }}>{w.icon}</span>
                  </div>
                  {idx < weekSteps.length - 1 && (
                    <span className="hidden w-5 shrink-0 items-center lg:flex" aria-hidden="true">
                      <span className="h-px flex-1 bg-[#3a5a96]" />
                      <span className="h-1 w-1 rounded-full bg-[#5b9be0]" />
                      <span className="h-px flex-1 bg-[#3a5a96]" />
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErpConnected;