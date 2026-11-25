import React, { useLayoutEffect, useMemo, useRef, useState } from "react";

import logo from "../../assets/LOGO.png"; // path/extension adjust kar lena

/*
  BACKGROUND IMAGE: apni image yahan rakho -> public/assets/impacthome.png
  (naam/path badalna ho to neeche BG_IMAGE change karo)
*/
const BG_IMAGE = "/assets/impacthome.png";

/* neon ring colors */
const RING_GLOW =
  "conic-gradient(from 0deg, #8fc0ff 0deg, #3b82f6 35deg, #ff9d1f 80deg, #ff8a00 130deg, #ff7a2a 165deg, #7b5cff 200deg, #2f7bff 250deg, #2f7bff 300deg, #6fb0ff 335deg, #8fc0ff 360deg)";
const RING_CORE =
  "conic-gradient(from 0deg, #f2f8ff 0deg, #d9ecff 40deg, #ffe1a8 70deg, #ffcf7a 100deg, #ffc36e 135deg, #e6d6ff 165deg, #cfe2ff 200deg, #dcecff 260deg, #e8f3ff 320deg, #f2f8ff 360deg)";

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-[18px] w-[18px]",
};

/* scroll animation */
const ENTER_START = 0.9;  // panel top viewport ke 90% par -> cards aana shuru
const ENTER_END = 0.95;   // panel bottom viewport ke 95% par -> sab jagah par
const EXIT_START = 0.12;  // panel top 12% se upar -> cards jaana shuru
const EXIT_LEN = 0.75;    // panel height ka kitna hissa scroll hone tak cards poore chale jaye
const MAX_DELAY = 0.32;   // last card ka delay

/* panel size / fit */
const PANEL_H = 500;
const PANEL_W = 1150;
const MAX_W = 1900;
const V_SPACE = 50;       // kam = panel bada
const MAX_FIT = 1.12;
const SHRINK = 0.9;       // 1 = pehle jitna, 0.8 = aur chhota
const MIN_FIT = 0.6;

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

const bezierPoint = (p0, p1, p2, p3, t) => {
  const mt = 1 - t;
  return {
    x: mt * mt * mt * p0.x + 3 * mt * mt * t * p1.x + 3 * mt * t * t * p2.x + t * t * t * p3.x,
    y: mt * mt * mt * p0.y + 3 * mt * mt * t * p1.y + 3 * mt * t * t * p2.y + t * t * t * p3.y,
  };
};

const cards = [
  {
    title: "Ideas",
    tag: "Strategy & Innovation",
    desc: "We turn complex challenges into clear opportunities",
    pos: "lg:left-[5%] lg:top-[35px] lg:h-[130px]",
    from: [-280, -30], delay: 0,
    box: "border-[#557BA8]/70 from-[#263F5C]/80 to-[#111F32]/90 shadow-[0_4px_18px_rgba(0,0,0,0.18),inset_0_0_14px_rgba(85,123,168,0.08)]",
    tagColor: "text-[#B5C9E2]",
    badge: "border-[#557BA8]/50 bg-[#1C3047]/95 text-[#C9D9EC]",
    icon: (
      <svg {...svgProps}>
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    title: "Technology",
    tag: "AI & Digital Solutions",
    desc: "We connect the right tools, platforms, and systems, to make it possible",
    pos: "lg:right-[5%] lg:top-[35px] lg:h-[130px]",
    from: [280, -30], delay: 0.08,
    box: "border-[#766A9B]/70 from-[#352F4A]/80 to-[#191725]/90 shadow-[0_4px_18px_rgba(0,0,0,0.18),inset_0_0_14px_rgba(118,106,155,0.08)]",
    tagColor: "text-[#C7BDE0]",
    badge: "border-[#766A9B]/50 bg-[#29243A]/95 text-[#D8D0EC]",
    icon: (
      <svg {...svgProps}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "People",
    tag: "Experience & Collaboration",
    desc: "We bring together the right talent, perspectives, and",
    pos: "lg:left-[5%] lg:top-[195px] lg:h-[130px]",
    from: [-320, 40], delay: 0.16,
    box: "border-[#4E8C83]/70 from-[#203F3B]/80 to-[#112522]/90 shadow-[0_4px_18px_rgba(0,0,0,0.18),inset_0_0_14px_rgba(78,140,131,0.08)]",
    tagColor: "text-[#A9D2C9]",
    badge: "border-[#4E8C83]/50 bg-[#19332F]/95 text-[#C4E3DC]",
    icon: (
      <svg {...svgProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Business",
    tag: "Strategy & Innovation",
    desc: "We turn complex challenges into clear opportunities",
    pos: "lg:right-[5%] lg:top-[195px] lg:h-[130px]",
    from: [320, 40], delay: 0.24,
    box: "border-[#9B8154]/70 from-[#453923]/80 to-[#211C13]/90 shadow-[0_4px_18px_rgba(0,0,0,0.18),inset_0_0_14px_rgba(155,129,84,0.08)]",
    tagColor: "text-[#D9C49B]",
    badge: "border-[#9B8154]/50 bg-[#352B1B]/95 text-[#E8D7B5]",
    icon: (
      <svg {...svgProps}>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Impact",
    tag: "Strategy & Innovation",
    desc: "Meaningful Outcomes",
    pos: "lg:top-[350px] lg:h-[115px]",
    center: true,
    from: [0, 170], delay: 0.32,
    box: "border-[#A66F70]/70 from-[#482D32]/80 to-[#24171C]/90 shadow-[0_4px_18px_rgba(0,0,0,0.18),inset_0_0_14px_rgba(166,111,112,0.08)]",
    tagColor: "text-[#DDB5B5]",
    badge: "border-[#A66F70]/50 bg-[#382126]/95 text-[#E8C9C9]",
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const ImpactConnect = () => {
  const panelRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [view, setView] = useState({ desktop: false, fit: 1, dw: PANEL_W });
  const [connected, setConnected] = useState(false);
  const connectedRef = useRef(false);

  /* screen ke hisaab se panel ka size */
  useLayoutEffect(() => {
    const update = () => {
      const vw = document.documentElement.clientWidth;
      if (vw < 1024) return setView({ desktop: false, fit: 1, dw: PANEL_W });

      const headingH = headingRef.current ? headingRef.current.offsetHeight : 120;
      const fitH = (window.innerHeight - headingH - V_SPACE) / PANEL_H;
      const fitW = (vw - 48) / PANEL_W;
      const fit = clamp(Math.min(fitH, fitW) * SHRINK, MIN_FIT, MAX_FIT);
      setView({ desktop: true, fit, dw: clamp((vw - 48) / fit, PANEL_W, MAX_W) });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { desktop, fit, dw } = view;
  const cardW = clamp(dw * 0.28, 320, 390);

  /* Curl lines data connecting center circle to each card */
  const curlData = useMemo(() => {
    if (!desktop) return null;
    const cX = dw / 2;
    const cY = 175.5;
    const R1 = 152;
    const R2 = 164;

    // 1. Ideas (top left)
    const p0_i = { x: cX + R1 * Math.cos(155 * Math.PI / 180), y: cY - R1 * Math.sin(155 * Math.PI / 180) };
    const p3_i = { x: dw * 0.05 + cardW, y: 100 };
    const dx_i = p0_i.x - p3_i.x;
    const p1_i = { x: p0_i.x - dx_i * 0.45, y: p0_i.y - 20 };
    const p2_i = { x: p3_i.x + dx_i * 0.35, y: p3_i.y };
    const mid_i = bezierPoint(p0_i, p1_i, p2_i, p3_i, 0.5);
    const path_i = `M ${p0_i.x.toFixed(1)} ${p0_i.y.toFixed(1)} C ${p1_i.x.toFixed(1)} ${p1_i.y.toFixed(1)}, ${p2_i.x.toFixed(1)} ${p2_i.y.toFixed(1)}, ${p3_i.x.toFixed(1)} ${p3_i.y.toFixed(1)}`;

    // 2. People (bottom left)
    const p0_p = { x: cX + R2 * Math.cos(205 * Math.PI / 180), y: cY - R2 * Math.sin(205 * Math.PI / 180) };
    const p3_p = { x: dw * 0.05 + cardW, y: 260 };
    const dx_p = p0_p.x - p3_p.x;
    const p1_p = { x: p0_p.x - dx_p * 0.4, y: p0_p.y + 22 };
    const p2_p = { x: p3_p.x + dx_p * 0.35, y: p3_p.y };
    const mid_p = bezierPoint(p0_p, p1_p, p2_p, p3_p, 0.45);
    const path_p = `M ${p0_p.x.toFixed(1)} ${p0_p.y.toFixed(1)} C ${p1_p.x.toFixed(1)} ${p1_p.y.toFixed(1)}, ${p2_p.x.toFixed(1)} ${p2_p.y.toFixed(1)}, ${p3_p.x.toFixed(1)} ${p3_p.y.toFixed(1)}`;

    // 3. Technology (top right)
    const p0_t = { x: cX + R1 * Math.cos(25 * Math.PI / 180), y: cY - R1 * Math.sin(25 * Math.PI / 180) };
    const p3_t = { x: dw * 0.95 - cardW, y: 100 };
    const dx_t = p3_t.x - p0_t.x;
    const p1_t = { x: p0_t.x + dx_t * 0.45, y: p0_t.y - 20 };
    const p2_t = { x: p3_t.x - dx_t * 0.35, y: p3_t.y };
    const mid_t = bezierPoint(p0_t, p1_t, p2_t, p3_t, 0.5);
    const path_t = `M ${p0_t.x.toFixed(1)} ${p0_t.y.toFixed(1)} C ${p1_t.x.toFixed(1)} ${p1_t.y.toFixed(1)}, ${p2_t.x.toFixed(1)} ${p2_t.y.toFixed(1)}, ${p3_t.x.toFixed(1)} ${p3_t.y.toFixed(1)}`;

    // 4. Business (bottom right)
    const p0_b = { x: cX + R2 * Math.cos(-25 * Math.PI / 180), y: cY - R2 * Math.sin(-25 * Math.PI / 180) };
    const p3_b = { x: dw * 0.95 - cardW, y: 260 };
    const dx_b = p3_b.x - p0_b.x;
    const p1_b = { x: p0_b.x + dx_b * 0.4, y: p0_b.y + 22 };
    const p2_b = { x: p3_b.x - dx_b * 0.35, y: p3_b.y };
    const mid_b = bezierPoint(p0_b, p1_b, p2_b, p3_b, 0.45);
    const path_b = `M ${p0_b.x.toFixed(1)} ${p0_b.y.toFixed(1)} C ${p1_b.x.toFixed(1)} ${p1_b.y.toFixed(1)}, ${p2_b.x.toFixed(1)} ${p2_b.y.toFixed(1)}, ${p3_b.x.toFixed(1)} ${p3_b.y.toFixed(1)}`;

    // 5. Impact (bottom center)
    const p0_m = { x: cX, y: cY + R1 };
    const p3_m = { x: cX, y: 350 };
    const path_m = `M ${p0_m.x.toFixed(1)} ${p0_m.y.toFixed(1)} C ${cX} ${(p0_m.y + 15).toFixed(1)}, ${cX} ${(p3_m.y - 10).toFixed(1)}, ${p3_m.x.toFixed(1)} ${p3_m.y.toFixed(1)}`;

    return {
      cX,
      cY,
      R1,
      R2,
      ideas: { path: path_i, start: p0_i, end: p3_i, mid: mid_i, color: "#38bdf8", stroke: "url(#grad-ideas)" },
      people: { path: path_p, start: p0_p, end: p3_p, mid: mid_p, color: "#34d399", accentColor: "#f59e0b", stroke: "url(#grad-people)" },
      tech: { path: path_t, start: p0_t, end: p3_t, mid: mid_t, color: "#a78bfa", stroke: "url(#grad-tech)" },
      business: { path: path_b, start: p0_b, end: p3_b, mid: mid_b, color: "#fbbf24", accentColor: "#38bdf8", stroke: "url(#grad-business)" },
      impact: { path: path_m, start: p0_m, end: p3_m, mid: { x: cX, y: 338 }, color: "#f43f5e", stroke: "url(#grad-impact)" },
    };
  }, [desktop, dw, cardW]);

  /* cards: scroll par bahar se aate hain, aage scroll par chale jaate hain */
  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setConnected(true);
      cardRefs.current.forEach((el) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "translate3d(0,0,0) scale(1)";
        }
      });
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const { top, height } = panel.getBoundingClientRect();
      const k = window.innerWidth < 1024 ? 0.35 : 1;

      const enter = clamp((vh * ENTER_START - top) / Math.max(250, height - vh * (1 - ENTER_END)));
      const exit = clamp((vh * EXIT_START - top) / (height * EXIT_LEN));

      // Cards middle position par poora aane par curl line connect ho jati hai
      const isSettled = enter >= 0.82 && exit < 0.22;
      if (isSettled !== connectedRef.current) {
        connectedRef.current = isSettled;
        setConnected(isSettled);
      }

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const c = cards[i];
        const inP = clamp((enter - c.delay) / (1 - MAX_DELAY));
        const outP = clamp((exit - c.delay * 0.5) / (1 - MAX_DELAY * 0.5));
        const e = 1 - Math.pow(1 - Math.min(inP, 1 - outP), 3);

        el.style.opacity = String(e);
        el.style.transform = `translate3d(${c.from[0] * k * (1 - e)}px, ${c.from[1] * k * (1 - e)}px, 0) scale(${0.9 + 0.1 * e})`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-transparent px-6 py-6 font-['Poppins'] lg:pb-2 lg:pt-8">
      {/* HEADING */}
      <div ref={headingRef} className="mx-auto max-w-[1060px] text-center">
        <h2 className="mb-3 text-3xl font-semibold text-white md:text-4xl lg:text-[42px] lg:leading-tight">
          Where Ideas,{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            Technology &amp; Impact Connect.
          </span>
        </h2>
        <p className="mx-auto max-w-[1000px] text-[15px] leading-[1.7] text-[#8a94a8]">
          We bring people, strategy, design, and technology together to turn
          complex challenges into meaningful business outcomes.
        </p>
      </div>

      {/* PANEL: bina dark box ke (sirf layout space) */}
      <div className="relative mt-8 w-full lg:mt-4" style={desktop ? { height: PANEL_H * fit } : undefined}>
        <div
          ref={panelRef}
          className="relative mx-auto flex flex-col items-center gap-6 py-8 lg:absolute lg:left-1/2 lg:top-0 lg:mx-0 lg:block lg:h-[500px] lg:w-[1150px] lg:max-w-none lg:p-0"
          style={desktop ? { width: dw, transform: `translateX(-50%) scale(${fit})`, transformOrigin: "top center" } : undefined}
        >
          {/* BACKGROUND IMAGE: sabse peeche. Kinare fade hote hain, isliye koi box/edge nahi dikhta */}
          <img
            src={BG_IMAGE}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 [-webkit-mask-image:radial-gradient(ellipse_70%_75%_at_50%_50%,#000_45%,transparent_100%)] [mask-image:radial-gradient(ellipse_70%_75%_at_50%_50%,#000_45%,transparent_100%)]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* halka center glow */}
          <div className="pointer-events-none absolute left-1/2 top-[45%] h-[380px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(25,72,180,0.22),rgba(25,72,180,0.08)_40%,transparent_72%)] blur-[45px]" />

          {/* SVG CURL LINES (Center circle se cards tak curl line connection) */}
          {desktop && curlData && (
            <svg
              className="pointer-events-none absolute inset-0 z-15 h-[500px] w-full"
              viewBox={`0 0 ${dw} 500`}
              fill="none"
              style={{ overflow: "visible" }}
            >
              <defs>
                <linearGradient id="grad-ideas" x1="100%" y1="50%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="grad-people" x1="100%" y1="50%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="grad-tech" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="grad-business" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="grad-impact" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.9" />
                </linearGradient>

                <filter id="curl-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Concentric orbital rings around center circle (as in reference image) */}
              <circle
                cx={curlData.cX}
                cy={curlData.cY}
                r={curlData.R1}
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeOpacity={connected ? 0.45 : 0.15}
                strokeDasharray="6 6"
                className="transition-opacity duration-700"
              />
              <circle
                cx={curlData.cX}
                cy={curlData.cY}
                r={curlData.R2}
                stroke="#f59e0b"
                strokeWidth="1.2"
                strokeOpacity={connected ? 0.35 : 0.1}
                strokeDasharray="14 8"
                className="transition-opacity duration-700"
              />

              {/* The 5 Curl Lines */}
              {[curlData.ideas, curlData.people, curlData.tech, curlData.business, curlData.impact].map((item, idx) => (
                <g key={idx}>
                  {/* Glowing background path */}
                  <path
                    d={item.path}
                    stroke={item.color}
                    strokeWidth="3.5"
                    strokeOpacity={connected ? 0.35 : 0}
                    fill="none"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="100"
                    strokeDashoffset={connected ? 0 : 100}
                    filter="url(#curl-glow)"
                    style={{
                      transition: "stroke-dashoffset 0.85s cubic-bezier(0.2, 0.8, 0.2, 1), stroke-opacity 0.4s ease",
                    }}
                  />
                  {/* Crisp foreground path */}
                  <path
                    d={item.path}
                    stroke={item.stroke}
                    strokeWidth="2"
                    strokeOpacity={connected ? 0.95 : 0}
                    fill="none"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="100"
                    strokeDashoffset={connected ? 0 : 100}
                    style={{
                      transition: "stroke-dashoffset 0.85s cubic-bezier(0.2, 0.8, 0.2, 1), stroke-opacity 0.4s ease",
                    }}
                  />

                  {/* Start Node on Ring */}
                  <circle
                    cx={item.start.x}
                    cy={item.start.y}
                    r={3}
                    fill={item.color}
                    opacity={connected ? 0.9 : 0}
                    style={{
                      transition: "opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s",
                      transformOrigin: `${item.start.x}px ${item.start.y}px`,
                      transform: connected ? "scale(1)" : "scale(0)",
                    }}
                  />

                  {/* Terminal Node at Card Edge */}
                  <g
                    style={{
                      transition: "opacity 0.4s ease 0.75s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.75s",
                      transformOrigin: `${item.end.x}px ${item.end.y}px`,
                      transform: connected ? "scale(1)" : "scale(0)",
                      opacity: connected ? 1 : 0,
                    }}
                  >
                    <circle
                      cx={item.end.x}
                      cy={item.end.y}
                      r={8}
                      fill={item.color}
                      fillOpacity="0.35"
                      filter="url(#curl-glow)"
                    />
                    <circle
                      cx={item.end.x}
                      cy={item.end.y}
                      r={4.5}
                      fill={item.color}
                    />
                    <circle
                      cx={item.end.x}
                      cy={item.end.y}
                      r={2}
                      fill="#ffffff"
                    />
                  </g>
                </g>
              ))}
            </svg>
          )}

          {/* CENTER LOGO CIRCLE */}
          <div className="relative z-20 aspect-square w-[230px] lg:absolute lg:left-1/2 lg:top-[38px] lg:w-[275px] lg:-translate-x-1/2">
            <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-[#3f74e0]/60 bg-[radial-gradient(circle,rgba(10,32,110,0.5)_40%,rgba(5,14,50,0.7)_100%)] p-[8%] shadow-[-8px_0_34px_rgba(59,130,246,0.4),8px_0_34px_rgba(255,140,20,0.25),inset_0_0_28px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(190,220,255,0.4)]">
              <div className="relative h-full w-full">
                <div className="pointer-events-none absolute -inset-[3px] rounded-full blur-[10px]" style={{ background: RING_GLOW }} />
                <div
                  className="relative h-full w-full rounded-full p-[3px] shadow-[0_0_16px_rgba(59,130,246,0.75),6px_0_22px_rgba(255,140,20,0.7),0_0_8px_rgba(255,255,255,0.6)]"
                  style={{ background: RING_CORE }}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#040914] shadow-[inset_0_0_30px_rgba(59,130,246,0.75),inset_0_0_10px_rgba(140,190,255,0.6),inset_0_0_4px_rgba(255,255,255,0.5)]">
                    {/* LOGO */}
                    <img
                      src={logo}
                      alt="DQNeX"
                      className="w-[70%] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARDS: bahar wala div = position + scroll animation, andar wala = look + hover */}
          {cards.map((c, i) => (
            <div
              key={c.title}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`relative z-10 w-full max-w-[330px] will-change-transform lg:absolute lg:max-w-none ${c.pos}`}
              style={desktop ? { width: cardW, ...(c.center ? { left: `calc(50% - ${cardW / 2}px)` } : {}) } : undefined}
            >
              <div className={`relative h-full rounded-2xl border bg-gradient-to-br p-5 text-left backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 ${c.box}`}>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(5,11,24,0.45),transparent_78%)]" />

                <div className={`absolute -right-2 -top-2.5 flex h-[42px] w-[42px] items-center justify-center rounded-full border shadow-[0_3px_10px_rgba(0,0,0,0.45),inset_0_0_8px_rgba(255,255,255,0.14)] backdrop-blur-sm ${c.badge}`}>
                  {c.icon}
                </div>

                <h4 className="relative m-0 text-[17px] font-medium leading-snug text-white">{c.title}</h4>
                <p className={`relative m-0 mt-0.5 text-[11px] ${c.tagColor}`}>{c.tag}</p>
                <p className="relative m-0 mt-3 text-[13px] leading-snug text-white">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactConnect;