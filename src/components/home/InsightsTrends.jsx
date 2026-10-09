import React, { useState, useEffect } from "react";

/* ── LAYOUT SETTINGS (yahan se size/gap badlo) ───────────────── */
const CARD_H = 290;       // har card ki height (px)
const GAP = 14;           // golden aur white card ke beech ka gap (px)
const TOP_BACK = 0;       // peeche wale (dark) card ka top
const TOP_ACTIVE = 58;    // aage wale (golden) card ka top
const TOP_BOTTOM = TOP_ACTIVE + CARD_H + GAP; // neeche wala (white) card: poora dikhega
const STACK_H = TOP_BOTTOM + CARD_H + 8;      // poore stack ki height

const InsightsTrends = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fit, setFit] = useState(1); // chhoti screen height par stack apne aap chhota ho jata hai

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 1024) return setFit(1);
      setFit(Math.min(1, Math.max(0.65, (window.innerHeight - 80) / STACK_H)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cards = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
      title: "AI & INNOVATION",
      description: "Discover how intelligent technologies are helping organizations automate processes, improve decision-making, and create better customer experiences.",
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security in an AI-Driven World",
      description: "Explore the latest ideas, emerging technologies, and industry trends shaping the future. Discover expert perspectives, practical knowledge, and innovative thinking designed to help businesses navigate change.",
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Future of Technology",
      description: "Stay ahead of the curve with our comprehensive analysis of upcoming technological breakthroughs and their potential impact on global markets and daily life.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="mx-auto flex w-full max-w-[1500px] flex-col items-start justify-between overflow-hidden bg-transparent px-7 py-16 text-white sm:px-8 md:px-10 lg:min-h-[100svh] lg:flex-row lg:items-center lg:px-12 xl:px-14">
      {/* Left Content (thoda right side me shift) */}
      <div className="z-10 mb-12 flex w-full flex-col items-start gap-8 lg:mb-0 lg:w-1/2 lg:pl-12 xl:pl-24">
        <div className="rounded-full bg-[#4774B8] px-6 py-2 text-sm font-medium text-white shadow-lg">
          Insights & Trends
        </div>

        <h2 className="max-w-lg text-3xl font-semibold leading-tight md:text-4xl lg:text-[42px]">
          Ideas shaping the future of technology.
        </h2>

        <button className="mt-4 flex items-center gap-2 rounded-full bg-[#4774B8] px-8 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#355d96]">
          Featured Insight <span className="text-lg leading-none">&rarr;</span>
        </button>
      </div>

      {/* Right Content - Cards (teeno cards poore dikhte hain) */}
      <div className="relative w-full lg:w-1/2" style={{ height: STACK_H * fit }}>
       <div
        className="absolute left-0 top-0 flex w-full justify-center"
        style={{ height: STACK_H, transform: `scale(${fit})`, transformOrigin: "top center" }}
       >
        {cards.map((card, index) => {
          const pos = (index - activeIndex + cards.length) % cards.length;

          let styles = { transition: "all 0.7s ease-in-out" };
          let textColor = "";
          let iconBg = "";

          // Active/Front Card (Golden)
          if (pos === 0) {
            styles = { ...styles, top: `${TOP_ACTIVE}px`, transform: "scale(1)", zIndex: 30, opacity: 1, backgroundColor: "#FFC444" };
            textColor = "#000000";
            iconBg = "#1C2333";
          }
          // Bottom Card (White)
          else if (pos === 1) {
            styles = { ...styles, top: `${TOP_BOTTOM}px`, transform: "scale(0.98)", zIndex: 20, opacity: 1, backgroundColor: "#FFFFFF" };
            textColor = "#111827";
            iconBg = "#1C2333";
          }
          // Top Card (Dark)
          else if (pos === 2) {
            styles = { ...styles, top: `${TOP_BACK}px`, transform: "scale(0.95)", zIndex: 10, opacity: 1, backgroundColor: "#5B5A51" };
            textColor = "#D1D5DB";
            iconBg = "#45443D";
          }

          return (
            <div
              key={card.id}
              className="absolute flex w-full max-w-[400px] cursor-pointer flex-col rounded-[22px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              style={{ ...styles, height: CARD_H, color: textColor }}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: iconBg, color: pos === 0 || pos === 1 ? "#FFFFFF" : "#D1D5DB" }}
              >
                {card.icon}
              </div>

              <h3 className="mb-2 text-xl font-semibold leading-snug">{card.title}</h3>

              <p
                className="text-[14px] leading-relaxed"
                style={{ color: pos === 0 ? "#111827" : pos === 1 ? "#4B5563" : "#9CA3AF" }}
              >
                {card.description}
              </p>

              <div className="mt-auto flex justify-end pt-2">
                <button
                  className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: pos === 0 || pos === 1 ? "#000000" : "#FFFFFF" }}
                >
                  Read the Insight &rarr;
                </button>
              </div>
            </div>
          );
        })}
       </div>
      </div>
    </section>
  );
};

export default InsightsTrends;


