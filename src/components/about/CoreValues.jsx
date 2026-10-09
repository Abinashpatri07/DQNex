import React, { useLayoutEffect, useRef, useState } from "react";

import BG_IMAGE from "../../assets/aboutusFuturestickimg.png"; // path/extension apne project ke hisaab se adjust kar lena
import logo from "../../assets/LOGO.png"; // header/footer jaisa hi file, path adjust kar lena

/* Desktop (lg+) par diagram is design size par bana hai, screen ke hisaab se scale hota hai */
const CANVAS_W = 1200;
const TOP = 70;               // box ke andar upar ki jagah (subtitle ke liye)
const CANVAS_H = 430 + TOP;   // 500 (neeche panel ki class lg:h-[500px] se match rakho)
const MAX_SCALE = 1.25;

const svgIcon = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-6 w-6",
};

/* x, y, w, h = card ki jagah (design canvas me, px) */
const values = [
  {
    name: "Purpose",
    text: "Solutions that drive growth and better experiences.",
    color: "blue",
    box: { x: 378, y: 80, w: 210, h: 126 },
    icon: (
      <svg {...svgIcon}>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="8" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
      </svg>
    ),
  },
  {
    name: "Integrity",
    text: "Doing the right thing with honesty, fairness, and transparency.",
    color: "gold",
    box: { x: 651, y: 80, w: 210, h: 126 },
    icon: (
      <svg {...svgIcon}>
        <path d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Excellence",
    text: "Exceeding expectations through continuous improvement and consistency.",
    color: "cyan",
    box: { x: 927, y: 80, w: 225, h: 126 },
    icon: (
      <svg {...svgIcon}>
        <path d="m12 3 2.7 5.5 6.3.9-4.6 4.4 1.1 6.2-5.5-2.9-5.5 2.9 1.1-6.2L3 9.4l6.3-.9L12 3z" />
      </svg>
    ),
  },
  {
    name: "Innovation",
    text: "Encouraging creativity, adaptability, and better solutions.",
    color: "blue",
    box: { x: 545, y: 222, w: 236, h: 124 },
    icon: (
      <svg {...svgIcon}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5C7.5 13.6 6 12 6 9.5a6 6 0 0 1 12 0c0 2.5-1.5 4.1-2.5 5" />
        <path d="M12 2v2" />
        <path d="M4.9 4.9l1.4 1.4" />
        <path d="M19.1 4.9l-1.4 1.4" />
      </svg>
    ),
  },
  {
    name: "Humanity",
    text: "Leading with empathy, respect, trust, and collaboration.",
    color: "gold",
    box: { x: 870, y: 222, w: 220, h: 124 },
    icon: (
      <svg {...svgIcon}>
        <path d="M8 12h8" />
        <path d="M12 8v8" />
        <path d="M4 8.5 7.5 5H11l2 2h4.5L21 10.5 18.5 13l-3.2-2.3" />
        <path d="m3 13 4 4 4-4" />
      </svg>
    ),
  },
];

const cardStyles = (color) => {
  if (color === "gold") {
    return {
      border: "border-[#e8b923]",
      bg: "bg-gradient-to-br from-[#6b4a14]/75 via-[#43320f]/70 to-[#241a0c]/75",
      shadow:
        "shadow-[0_0_22px_rgba(251,191,36,0.35),inset_0_0_22px_rgba(255,193,7,0.2),inset_0_0_5px_rgba(255,225,140,0.55)]",
      icon: "border-[#efc736] bg-[#2c2210] text-[#ffe269] shadow-[0_0_14px_rgba(251,191,36,0.45)]",
      line: "bg-[#f4cb2e] shadow-[0_0_7px_#f4cb2e]",
    };
  }
  if (color === "cyan") {
    return {
      border: "border-[#1fd0f0]",
      bg: "bg-gradient-to-br from-[#06607f]/75 via-[#05405f]/70 to-[#061d33]/75",
      shadow:
        "shadow-[0_0_22px_rgba(24,214,250,0.35),inset_0_0_22px_rgba(34,216,255,0.2),inset_0_0_5px_rgba(150,240,255,0.55)]",
      icon: "border-[#27ddff] bg-[#05303f] text-[#75eaff] shadow-[0_0_14px_rgba(34,216,255,0.45)]",
      line: "bg-[#67ebff] shadow-[0_0_7px_#67ebff]",
    };
  }
  return {
    border: "border-[#2f9bff]",
    bg: "bg-gradient-to-br from-[#0a55b0]/75 via-[#073a82]/70 to-[#071e50]/75",
    shadow:
      "shadow-[0_0_22px_rgba(34,156,255,0.4),inset_0_0_22px_rgba(50,160,255,0.22),inset_0_0_5px_rgba(150,210,255,0.55)]",
    icon: "border-[#3eafff] bg-[#062f5c] text-[#8cd6ff] shadow-[0_0_14px_rgba(36,154,255,0.5)]",
    line: "bg-[#67caff] shadow-[0_0_7px_#67caff]",
  };
};

const glow = (c) => ({ filter: `drop-shadow(0 0 6px ${c})` });

const CoreValues = () => {
  const wrapRef = useRef(null);
  const [view, setView] = useState({ desktop: false, s: 1 });

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const update = () => {
      if (document.documentElement.clientWidth < 1024) return setView({ desktop: false, s: 1 });
      setView({ desktop: true, s: Math.min(el.clientWidth / CANVAS_W, MAX_SCALE) });
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const { desktop, s } = view;

  return (
    <section className="relative w-full overflow-hidden bg-[#041120] px-7 py-16 font-['Poppins'] sm:px-8 md:px-10 lg:px-12 lg:py-20 xl:px-14">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-[18%] top-[38%] h-[400px] w-[400px] rounded-full bg-[#1262c7]/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-[8%] top-[35%] h-[350px] w-[350px] rounded-full bg-[#087cff]/10 blur-[100px]" />

      {/* HEADING */}
      <div className="relative z-10 mx-auto max-w-[1500px] text-center">
        <span className="relative z-10 inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] font-['Poppins'] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)]">
          Core Values
        </span>

        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-1px] text-white md:text-[42px]">
          The principles behind everything we build.
        </h2>
      </div>

      {/* DIAGRAM */}
      <div
        ref={wrapRef}
        className="relative z-10 mx-auto mt-4 w-full max-w-[1500px]"
        style={desktop ? { height: CANVAS_H * s } : undefined}
      >
        <div
          className="relative flex flex-col items-center gap-5 overflow-hidden rounded-[28px] px-4 py-8 lg:absolute lg:left-1/2 lg:top-0 lg:block lg:h-[500px] lg:w-[1200px] lg:p-0"
          style={
            desktop
              ? { transform: `translateX(-50%) scale(${s})`, transformOrigin: "top center" }
              : undefined
          }
        >
          {/* BACKGROUND LAYER: upar se fade hota hai, isliye box ka upar ka border/edge dikhta nahi,
              neeche ka kinara rounded dikhta hai */}
          <div className="pointer-events-none absolute inset-0 bg-[#030a17] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0px,rgba(0,0,0,0.55)_70px,#000_150px)] [mask-image:linear-gradient(to_bottom,transparent_0px,rgba(0,0,0,0.55)_70px,#000_150px)]">
            <img
              src={BG_IMAGE}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            {/* halka tech-glow image ke upar */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_14%_60%,rgba(20,90,220,0.28),transparent_70%),radial-gradient(ellipse_60%_40%_at_60%_100%,rgba(20,110,255,0.18),transparent_70%)]" />
          </div>

          {/* SUBTITLE */}
          <p className="relative z-30 m-0 text-center text-[15px] font-normal text-white md:text-[17px] lg:absolute lg:inset-x-0 lg:top-[28px]">
            Our values shape the way we build what&apos;s next.
          </p>

          {/* CONNECTOR LINES (sirf desktop) */}
          <svg
            className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full lg:block"
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
            fill="none"
          >
            <defs>
              <radialGradient id="cvHalo">
                <stop offset="0.55" stopColor="rgba(30,120,255,0.38)" />
                <stop offset="1" stopColor="rgba(30,120,255,0)" />
              </radialGradient>
              {/* userSpaceOnUse zaroori hai: seedhi (horizontal) lines par bounding-box gradient dikhta nahi */}
              <linearGradient id="cvStreak" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="92" y2="0">
                <stop offset="0" stopColor="rgba(30,144,255,0)" />
                <stop offset="0.7" stopColor="#2f8bff" />
                <stop offset="1" stopColor="#8fd0ff" />
              </linearGradient>
              <linearGradient id="cvStreakC" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="92" y2="0">
                <stop offset="0" stopColor="rgba(32,214,232,0)" />
                <stop offset="1" stopColor="#20d6e8" />
              </linearGradient>
              <linearGradient id="cvA" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#ffb347" />
                <stop offset="1" stopColor="#35e6c0" />
              </linearGradient>
              <linearGradient id="cvB" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#ffb347" />
                <stop offset="0.35" stopColor="#22b8ff" />
                <stop offset="1" stopColor="#22d6ff" />
              </linearGradient>
              <linearGradient id="cvC" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#ffb347" />
                <stop offset="0.4" stopColor="#1fc8f0" />
                <stop offset="1" stopColor="#22d6ff" />
              </linearGradient>
              <linearGradient id="cvPI" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#22b8ff" />
                <stop offset="1" stopColor="#ffb830" />
              </linearGradient>
              <linearGradient id="cvIE" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#ffb830" />
                <stop offset="1" stopColor="#22d6ff" />
              </linearGradient>
              <linearGradient id="cvIH" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#22b8ff" />
                <stop offset="1" stopColor="#ffb830" />
              </linearGradient>
            </defs>

            <g transform={`translate(0 ${TOP})`}>
              {/* ── LOGO ke aas-paas tech rings (center 166,160) ── */}
              <circle cx="166" cy="160" r="132" fill="url(#cvHalo)" />

              {/* sabse bahar: halki dotted ring, bahut dheere ghoomti hai */}
              <circle cx="166" cy="160" r="152" stroke="#3aa0ff" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 7">
                <animateTransform attributeName="transform" type="rotate" from="0 166 160" to="360 166 160" dur="90s" repeatCount="indefinite" />
              </circle>
              {/* patli cyan ring */}
              <circle cx="166" cy="160" r="134" stroke="#1ec8f0" strokeOpacity="0.5" strokeWidth="1" />
              {/* teal adha-ring (ulti disha me ghoomta hai) */}
              <circle cx="166" cy="160" r="116" stroke="#19d3c5" strokeOpacity="0.85" strokeWidth="1.5" strokeDasharray="430 299" style={glow("rgba(25,211,197,0.6)")}>
                <animateTransform attributeName="transform" type="rotate" from="360 166 160" to="0 166 160" dur="60s" repeatCount="indefinite" />
              </circle>
              {/* right me orange arc, left me blue arc */}
              <path d="M238 74.2 A112 112 0 0 1 238 245.8" stroke="#ff9a2a" strokeWidth="2.5" strokeLinecap="round" style={glow("rgba(255,154,42,0.9)")} />
              <path d="M94 245.8 A112 112 0 0 1 94 74.2" stroke="#2f8bff" strokeWidth="2.5" strokeLinecap="round" style={glow("rgba(47,139,255,0.9)")} />
              <circle cx="52" cy="180" r="3.5" fill="#ffb347" style={glow("#ffb347")} />

              {/* ── left side ki light streaks (box ke kinare se logo tak) ── */}
              <path d="M0 146 H92" stroke="url(#cvStreak)" strokeWidth="14" opacity="0.3" style={{ filter: "blur(6px)" }} />
              <path d="M0 146 H92" stroke="url(#cvStreak)" strokeWidth="2.5" style={glow("rgba(47,139,255,0.9)")} />
              <path d="M0 160 H92" stroke="url(#cvStreakC)" strokeWidth="1.2" />
              <path d="M0 172 H92" stroke="url(#cvStreakC)" strokeWidth="1.2" />
              <path d="M0 184 H92" stroke="url(#cvStreakC)" strokeWidth="1.2" />

              {/* logo -> Purpose */}
              <path d="M249 145 C300 145 320 93 371 93" stroke="url(#cvA)" strokeWidth="1.6" style={glow("rgba(53,230,192,0.7)")} />
              {/* logo -> Innovation (upar) */}
              <path d="M249 162 C330 162 360 253 450 253 L539 253" stroke="url(#cvB)" strokeWidth="1.6" style={glow("rgba(34,184,255,0.7)")} />
              {/* logo -> Innovation (neeche) */}
              <path d="M249 180 C330 180 330 300 420 300 L536 300" stroke="url(#cvC)" strokeWidth="1.6" style={glow("rgba(31,200,240,0.7)")} />
              {/* Purpose -> Integrity */}
              <path d="M588 147 C615 147 620 119 649 119" stroke="url(#cvPI)" strokeWidth="1.6" style={glow("rgba(34,184,255,0.6)")} />
              {/* Integrity -> Excellence */}
              <path d="M861 180 C890 180 895 144 924 144" stroke="url(#cvIE)" strokeWidth="1.6" style={glow("rgba(255,184,48,0.6)")} />
              {/* Innovation -> Humanity */}
              <path d="M711 217 C780 205 830 267 866 267" stroke="url(#cvIH)" strokeWidth="1.6" style={glow("rgba(34,184,255,0.6)")} />

              {/* orange dots (logo ke paas) */}
              <circle cx="249" cy="145" r="3.5" fill="#ffb347" style={glow("#ffb347")} />
              <circle cx="249" cy="162" r="3.5" fill="#ffb347" style={glow("#ffb347")} />
              <circle cx="249" cy="180" r="3.5" fill="#ffb347" style={glow("#ffb347")} />
              <circle cx="331" cy="240" r="5" fill="#ffb347" style={glow("#ffb347")} />

              {/* end dots */}
              <circle cx="371" cy="93" r="5" fill="#35e6c0" style={glow("#35e6c0")} />
              <circle cx="539" cy="253" r="5.5" fill="#22b8ff" style={glow("#22b8ff")} />
              <circle cx="536" cy="300" r="5.5" fill="#22b8ff" style={glow("#22b8ff")} />
              <circle cx="588" cy="147" r="5.5" fill="#22d6ff" style={glow("#22d6ff")} />
              <circle cx="649" cy="119" r="5" fill="#ffb830" style={glow("#ffb830")} />
              <circle cx="861" cy="180" r="5" fill="#ffb830" style={glow("#ffb830")} />
              <circle cx="924" cy="144" r="5.5" fill="#22d6ff" style={glow("#22d6ff")} />
              <circle cx="866" cy="267" r="5" fill="#ffb830" style={glow("#ffb830")} />
            </g>
          </svg>

          {/* LOGO (left side) */}
          <div className="relative z-20 h-[210px] w-[210px] shrink-0 lg:absolute lg:left-[61px] lg:top-[125px]">
            {/* outer blue ring */}
            <div className="absolute inset-0 rounded-full border border-[#2685ff] shadow-[0_0_22px_rgba(25,115,255,0.8),inset_0_0_20px_rgba(25,115,255,0.35)]" />

            {/* dark band */}
            <div className="absolute inset-[9px] rounded-full border-[9px] border-[#0a2f69] bg-[#030914] shadow-[inset_0_0_35px_rgba(29,108,255,0.45)]" />

            {/* neon ring */}
            <div className="absolute inset-[24px] rounded-full bg-[conic-gradient(from_220deg,#14aaff_0deg,#bde1ff_48deg,#ffffff_82deg,#ffd487_125deg,#ff9822_165deg,#ba82ff_205deg,#578fff_255deg,#16c0ff_320deg,#14aaff_360deg)] p-[3px] shadow-[0_0_12px_rgba(49,155,255,0.95),0_0_26px_rgba(40,130,255,0.7),7px_0_22px_rgba(255,151,30,0.6)]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#030914] shadow-[inset_0_0_26px_rgba(29,125,255,0.7),inset_0_0_8px_rgba(150,200,255,0.5)]">
                {/* LOGO */}
                <img
                  src={logo}
                  alt="DQNeX"
                  className="w-[75%] object-contain"
                />
              </div>
            </div>
          </div>

          {/* VALUE CARDS */}
          {values.map((v) => {
            const st = cardStyles(v.color);
            return (
              <div
                key={v.name}
                className={`relative z-30 w-full max-w-[340px] rounded-[16px] border p-3.5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 lg:absolute lg:max-w-none ${st.border} ${st.bg} ${st.shadow}`}
                style={
                  desktop
                    ? { left: v.box.x, top: v.box.y + TOP, width: v.box.w, height: v.box.h }
                    : undefined
                }
              >
                <div className="relative flex h-full gap-2.5">
                  {/* icon (card ke andar, left) */}
                  <div
                    className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border ${st.icon}`}
                  >
                    {v.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="m-0 flex h-[52px] items-center text-[17px] font-medium leading-none text-white">
                      {v.name}
                    </h3>
                    <p className="m-0 mt-0.5 text-[11px] leading-[1.35] text-[#c4d2e3]">{v.text}</p>
                  </div>
                </div>

                {/* bottom accent */}
                <div className={`absolute bottom-3 left-4 h-1 w-[26px] rounded-full ${st.line}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;