import React, { useLayoutEffect, useRef, useState } from "react";

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

const cards = [
  {
    title: "Ideas",
    tag: "Strategy & Innovation",
    desc: "We turn complex challenges into clear opportunities",
    pos: "lg:left-[5%] lg:top-[35px] lg:h-[130px]",
    from: [-280, -30], delay: 0,
    box: "border-[#3fa2ff] from-[#1461f0]/70 to-[#0a2f8f]/60 shadow-[0_0_26px_rgba(63,162,255,0.55),inset_0_0_26px_rgba(90,180,255,0.6),inset_0_0_6px_rgba(150,210,255,0.9)]",
    tagColor: "text-[#a9d4ff]",
    badge: "border-[#5aa9e8]/60 bg-[#0d2a4f]/90 text-[#cfe6ff]",
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
    box: "border-[#a78bfa] from-[#6d43f5]/65 to-[#2f1c7d]/60 shadow-[0_0_26px_rgba(167,139,250,0.5),inset_0_0_26px_rgba(180,155,255,0.55),inset_0_0_6px_rgba(210,195,255,0.9)]",
    tagColor: "text-[#d3c4ff]",
    badge: "border-[#a58af0]/60 bg-[#2a2058]/90 text-[#e2d8ff]",
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
    box: "border-[#2ee6c5] from-[#12b8a0]/65 to-[#0a5a55]/60 shadow-[0_0_26px_rgba(46,230,197,0.5),inset_0_0_26px_rgba(60,240,205,0.55),inset_0_0_6px_rgba(160,255,238,0.9)]",
    tagColor: "text-[#9df5e6]",
    badge: "border-[#4ad9bf]/55 bg-[#0d4a48]/90 text-[#d3fff6]",
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
    box: "border-[#fbbf24] from-[#c98a1e]/60 to-[#6e4712]/60 shadow-[0_0_26px_rgba(251,191,36,0.5),inset_0_0_26px_rgba(255,200,60,0.6),inset_0_0_6px_rgba(255,225,140,0.9)]",
    tagColor: "text-[#fcd86b]",
    badge: "border-[#e2b04a]/60 bg-[#4a3512]/90 text-[#ffeeb8]",
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
    box: "border-[#ff6b5b] from-[#e2452f]/70 to-[#8a2219]/60 shadow-[0_0_26px_rgba(255,107,91,0.5),inset_0_0_26px_rgba(255,120,100,0.55),inset_0_0_6px_rgba(255,190,180,0.9)]",
    tagColor: "text-[#ffb3a8]",
    badge: "border-[#ff8577]/60 bg-[#5a201c]/90 text-[#ffd9d3]",
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

  /* cards: scroll par bahar se aate hain, aage scroll par chale jaate hain */
  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
          Where Ideas, Technology &amp; Impact Connect.
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