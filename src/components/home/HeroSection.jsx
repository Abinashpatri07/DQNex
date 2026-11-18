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

  // Auto-play timer: Har 5 seconds me aaram se aur smoothly agla card scroll hoga
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
  // Offset 0 expands in the center (middle me bada ho jayega).
  // Offset -1 & -2 exit towards top-left corner.
  const getCardStyle = (offset) => {
    switch (offset) {
      case 0:
        return {
          transform: "translate3d(-50%, -50%, 0px) scale(1.08) rotate(0deg)",
          opacity: 1,
          zIndex: 30,
          boxShadow:
            "0 25px 60px -12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(59, 130, 246, 0.35)",
          borderColor: "rgba(96, 165, 250, 0.65)",
          pointerEvents: "auto",
        };
      case 1:
        // Enters from bottom-right corner
        return {
          transform: "translate3d(-18%, -32%, -90px) scale(0.82) rotate(3.5deg)",
          opacity: 0.55,
          zIndex: 20,
          filter: "brightness(0.7)",
          borderColor: "rgba(255, 255, 255, 0.15)",
          pointerEvents: "auto",
        };
      case 2:
        // Far in bottom-right corner
        return {
          transform: "translate3d(14%, -14%, -180px) scale(0.66) rotate(7deg)",
          opacity: 0.22,
          zIndex: 10,
          filter: "brightness(0.4)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          pointerEvents: "none",
        };
      case -1:
        // Exits towards top-left corner
        return {
          transform: "translate3d(-82%, -68%, -90px) scale(0.82) rotate(-3.5deg)",
          opacity: 0.55,
          zIndex: 20,
          filter: "brightness(0.7)",
          borderColor: "rgba(255, 255, 255, 0.15)",
          pointerEvents: "auto",
        };
      case -2:
        // Far out in top-left corner
        return {
          transform: "translate3d(-114%, -86%, -180px) scale(0.66) rotate(-7deg)",
          opacity: 0.22,
          zIndex: 10,
          filter: "brightness(0.4)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          pointerEvents: "none",
        };
      default:
        return {
          transform: "translate3d(-50%, -50%, -220px) scale(0.5)",
          opacity: 0,
          zIndex: 0,
          pointerEvents: "none",
        };
    }
  };

  const currentSlide = slides[activeIdx];

  return (
    <section
      className="relative flex min-h-[92vh] w-full flex-col items-center justify-start overflow-hidden pb-20 pt-[125px] font-sans md:pt-[135px]"
      style={{
        background:
          "radial-gradient(ellipse 95% 75% at 50% 50%, #1e3052 0%, #121e36 42%, #0a1322 75%, #050b14 100%)",
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
          BOTTOM SECTION: Dynamic 3D Corner-to-Corner Showcase (Ab niche)
      ════════════════════════════════════════════ */}
      <div className="relative z-10 mt-14 flex w-full max-w-[1200px] flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* 3D Stage Container */}
        <div
          className="relative h-[280px] w-full sm:h-[350px] md:h-[400px] lg:h-[430px]"
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
                }}
                className={`absolute left-1/2 top-1/2 aspect-[16/10] w-[88%] max-w-[620px] overflow-hidden rounded-2xl border transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  offset === 0 ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                {/* Ambient Sheen & Gradient Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081224]/85 via-transparent to-white/10" />

                {/* Active Card Badge Tag (top-right of active card) */}
                {offset === 0 && (
                  <div className="pointer-events-none absolute right-3.5 top-3.5 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                    <span
                      className="h-2 w-2 rounded-full animate-pulse"
                      style={{ backgroundColor: slide.color }}
                    />
                    <span>Active View</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Dynamic Text & Information Card (Niche centered card jo active slide ke saath change hoga) ── */}
        <div
          key={activeIdx}
          className="animate-heroFade relative mt-4 w-full max-w-[780px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(18,36,66,0.75)_0%,rgba(8,18,36,0.9)_100%)] p-5 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.45)] sm:p-6"
        >
          {/* Top auto-progress line timer */}
          <div
            key={`progress-${activeIdx}`}
            className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400"
            style={{
              animation: "timerProgress 5s linear forwards",
            }}
          />

          {/* Category pill & counter */}
          <div className="mb-3 flex items-center justify-between gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-sm"
              style={{
                backgroundColor: `${currentSlide.color}25`,
                borderColor: `${currentSlide.color}55`,
                borderWidth: "1px",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: currentSlide.color }}
              />
              {currentSlide.badge}
            </span>

            <span className="font-mono text-[12px] tracking-wider text-white/50">
              0{activeIdx + 1} / 0{slides.length}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="mb-2 text-[20px] font-bold text-white sm:text-[23px]">
            {currentSlide.title}
          </h3>

          <p className="mb-4 text-[13px] leading-relaxed text-[#c8d1dc] sm:text-[14px]">
            {currentSlide.tagline}
          </p>

          {/* Footer row: Metrics and Navigation Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3.5">
            <div className="flex items-center gap-2.5">
              <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-blue-300">
                {currentSlide.highlight}
              </span>
              <span className="text-[12px] font-semibold text-emerald-400">
                {currentSlide.stats}
              </span>
            </div>

            {/* Arrow Controls & Dots */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/15 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
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
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/15 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
