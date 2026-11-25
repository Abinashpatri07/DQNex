import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import heroScroll1 from "../../assets/HeroScroll1.png";
import heroScroll2 from "../../assets/HeroScroll2.png";
import heroScroll3 from "../../assets/HeroScroll3.png";
import heroScroll4 from "../../assets/HeroScroll4.png";
import heroScroll5 from "../../assets/HeroScroll5.png";

const slides = [
  {
    id: 1,
    image: heroScroll1,
    badge: "Verification & Compliance",
    title: "VerifyNeX Platform",
    tagline:
      "Automated candidate credential verification, real-time status tracking, and compliance management.",
    stats: "1,240+ Verified",
    highlight: "Real-time Verification",
    color: "#3b82f6",
  },
  {
    id: 2,
    image: heroScroll2,
    badge: "Enterprise ERP",
    title: "CORRNeX Operations",
    tagline:
      "Unified ERP operations, automated sales pipelines, real-time inventory visibility, and financials.",
    stats: "₹1.2M+ Volume",
    highlight: "Automated Workflows",
    color: "#6366f1",
  },
  {
    id: 3,
    image: heroScroll3,
    badge: "Smart Manufacturing",
    title: "Factory Intelligence Suite",
    tagline:
      "End-to-end plant telemetry, real-time production schedules, batch management, and dispatch control.",
    stats: "8.4k Units / Day",
    highlight: "Factory Telemetry",
    color: "#ec4899",
  },
  {
    id: 4,
    image: heroScroll4,
    badge: "Industrial IoT",
    title: "Shop Floor & Machine Intelligence",
    tagline:
      "Live machine health diagnostics, uptime optimization, predictive maintenance, and job-card tracking.",
    stats: "92.6% Efficiency",
    highlight: "Predictive Health",
    color: "#10b981",
  },
  {
    id: 5,
    image: heroScroll5,
    badge: "Commerce & Logistics",
    title: "Omnichannel Commerce Hub",
    tagline:
      "Multi-store order orchestration, instant stock reconciliation, and low-latency digital operations.",
    stats: "99.9% Fulfillment",
    highlight: "Multi-Store Sync",
    color: "#f59e0b",
  },
];

const HeroSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [displayIdx, setDisplayIdx] = useState(0);

  // Auto-play timer: 3.2 seconds me agla card smoothly change hoga
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  // Text smooth cross-fade on slide change (hatath change hone se rokta hai)
  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => {
      setDisplayIdx(activeIdx);
      setFade(true);
    }, 180);

    return () => clearTimeout(timer);
  }, [activeIdx]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % slides.length);
  };

  // Symmetric offset calculation: -2, -1, 0, 1, 2
  const getOffset = (index) => {
    let diff = index - activeIdx;
    if (diff > slides.length / 2) diff -= slides.length;
    if (diff < -slides.length / 2) diff += slides.length;
    return diff;
  };

  // Corner-to-corner trajectory:
  // Offset 1 & 2 enter from bottom-right corner.
  // Offset 0 expands in the center (middle me thoda focused rahega).
  // Offset -1 & -2 exit towards top-left corner.
  const getCardStyle = (offset) => {
    switch (offset) {
      case 0:
        return {
          transform: "translate3d(-50%, -50%, 0px) scale(1.0) rotate(0deg)",
          opacity: 1,
          zIndex: 30,
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 25px rgba(59, 130, 246, 0.25)",
          borderColor: "rgba(96, 165, 250, 0.75)",
          pointerEvents: "auto",
          filter: "contrast(1.05) brightness(1.02)",
        };
      case 1:
        // Enters from bottom-right corner
        return {
          transform: "translate3d(-20%, -34%, -80px) scale(0.78) rotate(3deg)",
          opacity: 0.55,
          zIndex: 20,
          filter: "brightness(0.7)",
          borderColor: "rgba(255, 255, 255, 0.15)",
          pointerEvents: "auto",
        };
      case 2:
        // Far in bottom-right corner
        return {
          transform: "translate3d(10%, -18%, -160px) scale(0.62) rotate(6deg)",
          opacity: 0.22,
          zIndex: 10,
          filter: "brightness(0.4)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          pointerEvents: "none",
        };
      case -1:
        // Exits towards top-left corner
        return {
          transform: "translate3d(-80%, -66%, -80px) scale(0.78) rotate(-3deg)",
          opacity: 0.55,
          zIndex: 20,
          filter: "brightness(0.7)",
          borderColor: "rgba(255, 255, 255, 0.15)",
          pointerEvents: "auto",
        };
      case -2:
        // Far out in top-left corner
        return {
          transform: "translate3d(-110%, -82%, -160px) scale(0.62) rotate(-6deg)",
          opacity: 0.22,
          zIndex: 10,
          filter: "brightness(0.4)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          pointerEvents: "none",
        };
      default:
        return {
          transform: "translate3d(-50%, -50%, -200px) scale(0.45)",
          opacity: 0,
          zIndex: 0,
          pointerEvents: "none",
        };
    }
  };

  const currentSlide = slides[displayIdx];

  return (
    <section
      className="relative flex min-h-[82vh] w-full flex-col items-center justify-start overflow-hidden pb-10 pt-[120px] font-sans md:pt-[130px]"
      style={{
        background:
          "radial-gradient(ellipse 95% 75% at 50% 45%, #1e3052 0%, #121e36 42%, #0a1322 75%, transparent 100%)",
      }}
    >
      {/* Dynamic Keyframe Style */}
      <style>{`
        @keyframes heroTextFade {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes timerProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-heroFade {
          animation: heroTextFade 0.65s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 top-2/3 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/12 blur-[160px]" />

      {/* ════════════════════════════════════════════
          TOP SECTION: Centered Text & Actions (Original exact sizing)
      ════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 text-center">
        {/* Main Headline */}
        <h1 className="mb-6 text-[28px] font-semibold tracking-tight text-white md:text-[34px] lg:text-[44px] lg:leading-[1.15]">
          Turning Digital Change Into
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            Real-World Impact.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-[650px] text-[14px] leading-relaxed text-[#c8d1dc]">
          We combine strategy, technology, and design to help businesses solve
          complex challenges and move forward with confidence.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            to="/contact#contact-form"
            className="group inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-[#3182e0] px-12 text-[14px] font-medium text-white shadow-[0_4px_20px_rgba(49,130,224,0.35)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#2877d8] hover:shadow-[0_6px_25px_rgba(49,130,224,0.5)] sm:w-auto"
          >
            <span>Lets Talk</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          BOTTOM SECTION: Dynamic 3D Corner-to-Corner Showcase (Ab thoda compact)
      ════════════════════════════════════════════ */}
      <div className="relative z-10 mt-10 flex w-full max-w-[1050px] flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* 3D Stage Container */}
        <div
          className="relative h-[240px] w-full sm:h-[300px] md:h-[340px] lg:h-[370px]"
          style={{ perspective: "1300px" }}
        >
          {slides.map((slide, idx) => {
            const offset = getOffset(idx);
            const style = getCardStyle(offset);

            return (
              <div
                key={slide.id}
                onClick={() => {
                  if (offset === 1) handleNext();
                  if (offset === -1) handlePrev();
                }}
                style={{
                  ...style,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                className={`absolute left-1/2 top-1/2 aspect-[16/10] w-[84%] max-w-[510px] overflow-hidden rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  offset === 0 ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading={offset === 0 ? "eager" : "lazy"}
                  decoding="async"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                  }}
                  className="h-full w-full object-cover object-top select-none"
                />

                {/* Depth overlay: Only on side background cards; active card stays clean and bright */}
                {offset !== 0 && (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081224]/80 via-[#081224]/30 to-transparent" />
                )}

                {/* Subtle border sheen for active card */}
                {offset === 0 && (
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15 rounded-2xl" />
                )}

                {/* Active Card Badge Tag (top-right of active card) */}
                {offset === 0 && (
                  <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[10.5px] font-medium text-white backdrop-blur-md shadow-md">
                    <span
                      className="h-1.5 w-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: slide.color }}
                    />
                    <span>Active View</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Dynamic Text (Smooth Cross-fade & Zero Jitter) ── */}
        <div className="relative mt-5 flex w-full max-w-[680px] flex-col items-center px-4 text-center">
          <div
            className={`flex min-h-[110px] w-full flex-col items-center transition-all duration-300 ease-out sm:min-h-[115px] ${
              fade
                ? "translate-y-0 opacity-100"
                : "-translate-y-1.5 opacity-0"
            }`}
          >
            {/* Category text */}
            <span className="mb-2 text-[12px] font-semibold tracking-wider text-blue-300">
              {currentSlide.badge}
            </span>

            {/* Title */}
            <h3 className="mb-2 text-[20px] font-bold text-white sm:text-[23px]">
              {currentSlide.title}
            </h3>

            {/* Tagline */}
            <p className="mx-auto max-w-[600px] text-[13px] leading-relaxed text-[#c8d1dc] sm:text-[14px]">
              {currentSlide.tagline}
            </p>
          </div>

          {/* Navigation Controls: Sleek Dots & Arrows (Stable, no flicker) */}
          <div className="mt-2 flex items-center justify-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>

            <div className="flex items-center gap-1.5 px-1">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-6 bg-blue-400"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
