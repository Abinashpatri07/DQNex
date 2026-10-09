import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/LOGO.png"; // file ka naam/extension/path adjust kar lena

/* ── Platform dropdown items ── */
const platformItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M6 7h.01M10 7h8M6 11h.01M10 11h8" />
      </svg>
    ),
    title: "ERPNeX",
    desc: "Smart business management.",
    path: "/platforms/erpnex",
    badge: "ERP",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "VerifyNeX",
    desc: "Simple background verification.",
    path: "/platforms/verifynex",
    badge: "Verify",
  },
];

/* ── Service dropdown items ── */
const serviceItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        <path d="M8 12a4 4 0 0 1 4-4" />
      </svg>
    ),
    title: "AI Engineering",
    desc: "Build intelligent, scalable solutions.",
    path: "/services/ai-engineering",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Advisory",
    desc: "Expert guidance. Clearer decisions.",
    path: "/services/advisory",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Engineering",
    desc: "Smart systems. Stronger solutions.",
    path: "/services/engineering",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    title: "Optimization",
    desc: "Smarter processes. Better performance.",
    path: "/services/optimization",
  },
];

/* ── Industry dropdown items ── */
const industryItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
    ),
    title: "E-commerce",
    desc: "Smarter digital commerce solutions.",
    path: "/industries/ecommerce",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h4" />
      </svg>
    ),
    title: "Payment",
    desc: "Secure and seamless payment solutions.",
    path: "/industries/payment",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <path d="M3 21V9l7 4V9l7 4V4h4v17H3z" />
        <path d="M7 21v-4h3v4M14 21v-4h3v4" />
      </svg>
    ),
    title: "Manufacturing",
    desc: "Connected solutions for modern manufacturing.",
    path: "/industries/manufacturing",
  },
];

/* ── Shared nav item styles ── */
const itemBase =
  "relative flex h-[34px] items-center whitespace-nowrap rounded-full px-4 text-[14px] font-medium transition-all duration-300 focus:outline-none";

const itemActive =
  "bg-[linear-gradient(180deg,#1d3d72_0%,#14305c_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]";

const itemIdle =
  "text-[#c8d1dc] hover:bg-white/[0.05] hover:text-white";

/* ── Normal link ── */
const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `${itemBase} ${isActive ? itemActive : itemIdle}`
    }
  >
    {children}
  </NavLink>
);

/* ── Chevron ── */
const Chevron = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""
      }`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/* ── Arrow icon (Contact Us) ── */
const ArrowRight = ({ className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Header = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);

  const serviceRef = useRef(null);
  const platformRef = useRef(null);
  const industryRef = useRef(null);

  /* Close dropdowns when clicking outside */
  useEffect(() => {
    const handleClick = (e) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target)) {
        setServiceOpen(false);
      }

      if (platformRef.current && !platformRef.current.contains(e.target)) {
        setPlatformOpen(false);
      }

      if (industryRef.current && !industryRef.current.contains(e.target)) {
        setIndustryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      {/* ── HEADER BACKGROUND ── */}
      <div
        className="
          relative h-[64px] w-full
          bg-[rgba(8,18,36,0.72)]
          border-b border-white/[0.12]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
          backdrop-blur-[28px]
        "
      >
        <div className="relative mx-auto h-full w-full max-w-[1800px]">

          {/* ── LOGO ── */}
          {/* ── LOGO ── */}
<Link
  to="/"
  onClick={() => {
    setMobileOpen(false);
    setServiceOpen(false);
    setPlatformOpen(false);
    setIndustryOpen(false);
  }}
  className="
    absolute left-6 top-1/2 -translate-y-1/2
    md:left-[65px]
    lg:left-[40px]
    xl:left-[82px]
  "
>
  <img
    src={logo}
    alt="DQNeX"
    className="h-9 w-auto object-contain md:h-10"
  />
</Link>

          {/* ── DESKTOP NAVBAR ── */}
          <nav
            className="
              absolute left-1/2 top-1/2
              hidden h-[48px]
              -translate-x-1/2 -translate-y-1/2
              items-center justify-center gap-1
              rounded-full
              border border-[#728ba4]/25
              bg-[linear-gradient(90deg,rgba(9,26,45,0.75)_0%,rgba(7,20,36,0.55)_100%)]
              px-[10px]
              backdrop-blur-xl
              lg:flex
              xl:gap-3 xl:px-[14px]
            "
          >
            <NavItem to="/about">About Us</NavItem>

            {/* ── SERVICE DROPDOWN ── */}
            <div ref={serviceRef} className="relative flex h-full items-center">
              <button
                onClick={() => {
                  setServiceOpen((p) => !p);
                  setPlatformOpen(false);
                  setIndustryOpen(false);
                }}
                className={`${itemBase} gap-1.5 ${serviceOpen
                  ? "bg-white/[0.06] text-white"
                  : itemIdle
                  }`}
              >
                Service
                <Chevron open={serviceOpen} />
              </button>

              {serviceOpen && (
                <div
                  style={{
                    animation:
                      "dropdownFadeInLeft 0.18s cubic-bezier(0.16,1,0.3,1) both",
                  }}
                  className="
                    absolute left-0 top-[calc(100%+14px)] z-50
                    w-[440px] overflow-hidden rounded-[20px]
                    border border-white/[0.12]
                    bg-[rgba(8,18,36,0.94)]
                    shadow-[0_32px_80px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.08)]
                    backdrop-blur-[28px]
                  "
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18)_0%,transparent_70%)] blur-2xl" />

                  <div className="grid grid-cols-2">
                    {serviceItems.map((item, idx) => (
                      <Link
                        key={item.title}
                        to={item.path}
                        onClick={() => setServiceOpen(false)}
                        className={`
                          group relative flex items-start gap-3.5 p-5
                          transition-all duration-200
                          hover:bg-white/[0.06]
                          ${idx === 0 || idx === 2 ? "border-r border-white/[0.07]" : ""}
                          ${idx === 0 || idx === 1 ? "border-b border-white/[0.07]" : ""}
                        `}
                      >
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(96,165,250,0.07),transparent_70%)]" />

                        <span
                          className="
                            relative z-10 mt-0.5 flex h-9 w-9 shrink-0
                            items-center justify-center rounded-xl
                            border border-white/10
                            bg-white/[0.05]
                            text-[#7eb3f7]
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                            transition-all duration-200
                            group-hover:border-[#3b82f6]/30
                            group-hover:bg-[#3b82f6]/10
                            group-hover:text-[#93c5fd]
                            group-hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]
                          "
                        >
                          {item.icon}
                        </span>

                        <div className="relative z-10">
                          <p className="text-[13.5px] font-semibold leading-tight text-white/90 transition-colors duration-200 group-hover:text-white">
                            {item.title}
                          </p>

                          <p className="mt-1.5 text-[11.5px] leading-snug text-[#7a92ad]">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              )}
            </div>

            {/* ── PLATFORM DROPDOWN ── */}
            <div ref={platformRef} className="relative flex h-full items-center">
              <button
                onClick={() => {
                  setPlatformOpen((p) => !p);
                  setServiceOpen(false);
                  setIndustryOpen(false);
                }}
                className={`${itemBase} gap-1.5 ${platformOpen
                  ? "bg-white/[0.06] text-white"
                  : itemIdle
                  }`}
              >
                Platforms
                <Chevron open={platformOpen} />
              </button>

              {platformOpen && (
                <div
                  style={{
                    animation:
                      "dropdownFadeInLeft 0.18s cubic-bezier(0.16,1,0.3,1) both",
                  }}
                  className="
                    absolute left-0 top-[calc(100%+14px)] z-50
                    w-[480px] overflow-hidden rounded-[20px]
                    border border-white/[0.12]
                    bg-[rgba(8,18,36,0.94)]
                    shadow-[0_32px_80px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.08)]
                    backdrop-blur-[28px]
                  "
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18)_0%,transparent_70%)] blur-2xl" />

                  <div className="grid grid-cols-2">
                    {platformItems.map((item, idx) => (
                      <Link
                        key={item.title}
                        to={item.path}
                        onClick={() => setPlatformOpen(false)}
                        className={`
                          group relative flex items-start gap-4 p-5
                          transition-all duration-200
                          hover:bg-white/[0.06]
                          ${idx === 0 ? "border-r border-white/[0.07]" : ""}
                        `}
                      >
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(96,165,250,0.07),transparent_70%)]" />

                        <span
                          className="
                            relative z-10 flex h-10 w-10 shrink-0
                            items-center justify-center rounded-xl
                            border border-white/10
                            bg-white/[0.05]
                            text-[#7eb3f7]
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                            transition-all duration-200
                            group-hover:border-[#3b82f6]/30
                            group-hover:bg-[#3b82f6]/10
                            group-hover:text-[#93c5fd]
                            group-hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]
                          "
                        >
                          {item.icon}
                        </span>

                        <div className="relative z-10 flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-[13.5px] font-semibold leading-tight text-white/90 transition-colors duration-200 group-hover:text-white">
                              {item.title}
                            </p>

                            <span className="rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-wider text-[#93c5fd]">
                              {item.badge}
                            </span>
                          </div>

                          <p className="mt-1 text-[11.5px] leading-snug text-[#7a92ad]">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              )}
            </div>

            {/* ── INDUSTRIES DROPDOWN ── */}
            <div ref={industryRef} className="relative flex h-full items-center">
              <button
                onClick={() => {
                  setIndustryOpen((p) => !p);
                  setServiceOpen(false);
                  setPlatformOpen(false);
                }}
                className={`${itemBase} gap-1.5 ${industryOpen
                  ? "bg-white/[0.06] text-white"
                  : itemIdle
                  }`}
              >
                Industries
                <Chevron open={industryOpen} />
              </button>

              {industryOpen && (
                <div
                  style={{
                    animation:
                      "dropdownFadeInLeft 0.18s cubic-bezier(0.16,1,0.3,1) both",
                  }}
                  className="
                    absolute left-0 top-[calc(100%+14px)] z-50
                    w-[440px] overflow-hidden rounded-[20px]
                    border border-white/[0.12]
                    bg-[rgba(8,18,36,0.94)]
                    shadow-[0_32px_80px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.08)]
                    backdrop-blur-[28px]
                  "
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18)_0%,transparent_70%)] blur-2xl" />

                  <div className="grid grid-cols-1">
                    {industryItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.path}
                        onClick={() => setIndustryOpen(false)}
                        className="
                          group relative flex items-start gap-3.5 p-5
                          border-b border-white/[0.07]
                          last:border-b-0
                          transition-all duration-200
                          hover:bg-white/[0.06]
                        "
                      >
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(96,165,250,0.07),transparent_70%)]" />

                        <span
                          className="
                            relative z-10 mt-0.5 flex h-9 w-9 shrink-0
                            items-center justify-center rounded-xl
                            border border-white/10
                            bg-white/[0.05]
                            text-[#7eb3f7]
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                            transition-all duration-200
                            group-hover:border-[#3b82f6]/30
                            group-hover:bg-[#3b82f6]/10
                            group-hover:text-[#93c5fd]
                            group-hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]
                          "
                        >
                          {item.icon}
                        </span>

                        <div className="relative z-10">
                          <p className="text-[13.5px] font-semibold leading-tight text-white/90 transition-colors duration-200 group-hover:text-white">
                            {item.title}
                          </p>

                          <p className="mt-1.5 text-[11.5px] leading-snug text-[#7a92ad]">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              )}
            </div>
          </nav>

          {/* ── CONTACT US BUTTON (desktop) ── */}
          <Link
            to="/contact"
            onClick={() => {
              setServiceOpen(false);
              setPlatformOpen(false);
              setIndustryOpen(false);
            }}
            className="
              absolute right-[40px] top-1/2 hidden
              h-[44px] -translate-y-1/2 items-center gap-2.5
              rounded-full
              border border-[#8fb6ee]/30
              bg-[linear-gradient(180deg,#4a7fc1_0%,#3366a8_100%)]
              px-5 text-[14px] font-medium text-white
              shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.35)]
              transition-all duration-300
              hover:brightness-110
              lg:flex
              xl:right-[82px] xl:h-[46px] xl:px-7 xl:text-[15px]
            "
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* ── MOBILE MENU BUTTON ── */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="
              absolute right-6 top-1/2
              flex -translate-y-1/2
              flex-col gap-[5px]
              lg:hidden
            "
          >
            <span
              className={`block h-[2px] w-7 bg-white transition-transform duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
            />

            <span
              className={`block h-[2px] w-7 bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"
                }`}
            />

            <span
              className={`block h-[2px] w-7 bg-white transition-transform duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
            />
          </button>
        </div>

        {/* ── MOBILE NAVIGATION ── */}
        {mobileOpen && (
          <div
            className="
              absolute left-4 right-4 top-[68px]
              rounded-2xl border border-white/10
              bg-[#081a2d]/95 p-3
              shadow-2xl backdrop-blur-xl
              lg:hidden
            "
          >
            {/* About */}
            <NavLink
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3.5 text-[14px] font-medium transition-all duration-300 ${isActive
                  ? "bg-white/5 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              About Us
            </NavLink>

            {/* Mobile Service */}
            <div>
              <button
                onClick={() => setMobileServiceOpen((p) => !p)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[14px] font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                Service

                <Chevron open={mobileServiceOpen} />
              </button>

              {mobileServiceOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileServiceOpen(false);
                      }}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <span className="text-[#7eb3f7]">{item.icon}</span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Platforms */}
            <div>
              <button
                onClick={() => setMobilePlatformOpen((p) => !p)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[14px] font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                Platforms

                <Chevron open={mobilePlatformOpen} />
              </button>

              {mobilePlatformOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {platformItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobilePlatformOpen(false);
                      }}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <span className="text-[#7eb3f7]">{item.icon}</span>

                      <span>{item.title}</span>

                      <span className="ml-auto rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#93c5fd]">
                        {item.badge}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries */}
            <div>
              <button
                onClick={() => setMobileIndustryOpen((p) => !p)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[14px] font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                Industries

                <Chevron open={mobileIndustryOpen} />
              </button>

              {mobileIndustryOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {industryItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileIndustryOpen(false);
                      }}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <span className="text-[#7eb3f7]">
                        {item.icon}
                      </span>

                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Us (mobile) */}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="
                mt-2 flex items-center justify-center gap-2.5
                rounded-full
                bg-[linear-gradient(180deg,#4a7fc1_0%,#3366a8_100%)]
                px-5 py-3 text-[14px] font-medium text-white
                shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.35)]
              "
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;