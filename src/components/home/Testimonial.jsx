import React, { useEffect, useRef } from "react";

/* ── Quote text: hl:true wala hissa gold me reveal hoga ───────── */
const SEGMENTS = [
  { text: "Partnering with DQNeX has elevated our technology and operations at Jigsan.", hl: false },
  {
    text: "Their technical depth, precise execution, and collaborative approach consistently deliver scalable",
    hl: true,
  },
  { text: ", practical solutions-making DQNeX a trusted partner in our growth and operational efficiency.", hl: false },
];

// segments ko words me todna (comma jaise punctuation pichle word se chipka rahega)
const WORDS = SEGMENTS.flatMap((seg) =>
  seg.text
    .split(" ")
    .filter(Boolean)
    .map((w) => ({ text: w, hl: seg.hl, glue: /^[,.;:!?]/.test(w) }))
);

/* ── Colors: [r, g, b]  (pehle dim -> scroll par final) ───────── */
const NORMAL = { from: [100, 110, 135], to: [226, 232, 240] }; // grey-neela -> safed
const GOLD = { from: [107, 114, 64], to: [251, 191, 36] };     // dim olive -> gold

/* ── Scroll range: paragraph ka top viewport ke kis % par ho ─── */
const START = 0.9;  // yahan se coloring shuru
const END = 0.3;    // yahan tak poori ho jaye (range bada = words dheere-dheere aayenge)
const SOFT = 1.5;   // kitne words ek saath fade honge (1 = ek-ek word, bada = line jaisa)

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const mix = (c, t) =>
  `rgb(${Math.round(c.from[0] + (c.to[0] - c.from[0]) * t)}, ${Math.round(
    c.from[1] + (c.to[1] - c.from[1]) * t
  )}, ${Math.round(c.from[2] + (c.to[2] - c.from[2]) * t)})`;

const Testimonial = () => {
  const pRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    const p = pRef.current;
    const els = wordRefs.current;
    if (!p || !els.length) return;

    const n = els.length;
    const paint = (progress) => {
      els.forEach((el, i) => {
        if (!el) return;
        const t = clamp((progress * (n + SOFT) - i) / SOFT);
        el.style.color = mix(WORDS[i].hl ? GOLD : NORMAL, t);
      });
    };

    // reduced-motion: seedha final color
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      paint(1);
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const top = p.getBoundingClientRect().top;
      paint(clamp((vh * START - top) / (vh * (START - END))));
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
    <section className="relative w-full bg-transparent py-16">
      <div className="mx-auto max-w-[1500px] px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* === TESTIMONIAL BOX === */}
        <div className="relative flex flex-col items-center overflow-hidden rounded-[28px] border border-gray-700/50 bg-gradient-to-b from-[#0d1a30] to-[#080e1a] px-8 py-14 text-center shadow-[0_0_60px_rgba(30,64,120,0.15)]">
          {/* Subtle top glow inside box */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/8 blur-[80px]" />

          {/* Label */}
          <div className="relative z-10 mb-8">
            <span className="inline-block rounded-full border border-blue-400/50 bg-[#4774B8] px-5 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(71,116,184,0.5)]">
              What Our Customers Are Saying
            </span>
          </div>

          {/* Opening quote */}
          <div className="relative z-10 mb-6 select-none font-serif text-6xl leading-none text-blue-400/50">❝</div>

          {/* Heading */}
          <h2 className="relative z-10 mb-6 text-2xl font-semibold text-white md:text-3xl">
            Trusted Partner In Our Growth Journey
          </h2>

          {/* Quote paragraph: scroll par word-by-word color aata hai */}
          <p
            ref={pRef}
            className="relative z-10 mb-10 max-w-[780px] text-lg italic leading-relaxed md:text-xl"
            aria-label={SEGMENTS.map((s) => s.text).join(" ")}
          >
            {WORDS.map((w, i) => (
              <React.Fragment key={i}>
                <span
                  aria-hidden="true"
                  ref={(el) => (wordRefs.current[i] = el)}
                  style={{ color: mix(w.hl ? GOLD : NORMAL, 0) }}
                >
                  {w.text}
                </span>
                {WORDS[i + 1]?.glue ? null : " "}
              </React.Fragment>
            ))}
          </p>

          {/* Closing quote */}
          <div className="relative z-10 mb-10 select-none font-serif text-6xl leading-none text-blue-400/50">❞</div>

          {/* Author pill */}
          <div className="relative z-10 flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-xl">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 ring-2 ring-blue-200/40">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Mr. Ranjan Kumar Swain"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-900">Mr. Ranjan Kumar Swain</p>
              <p className="text-xs text-slate-500">Director, Ritikam</p>
            </div>
            <div className="ml-4 border-l border-gray-200 pl-4">
              <div className="flex h-12 w-12 items-center justify-center text-orange-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
                  <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* === END BOX === */}
      </div>
    </section>
  );
};

export default Testimonial;


