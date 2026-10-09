import React, { useEffect, useRef, useState } from "react";

const CustomerStats = () => {
  const stats = [
    {
      title: "Years of Expertise",
      target: 3,
      suffix: "+",
      description: "Building innovative solutions since 2023.",
    },
    {
      title: "Faster Delivery",
      target: 60,
      suffix: "%",
      description: "Accelerating time from idea to launch.",
    },
    {
      title: "Trusted Clients",
      target: 53,
      suffix: "",
      description: "Growing with forward-thinking businesses.",
    },
    {
      title: "Projects Delivered",
      target: 1000,
      suffix: "+",
      description: "Across industries and geographies.",
    },
  ];

  return (
    <section className="relative w-full bg-transparent py-16">
      <div className="mx-auto max-w-[1500px] px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14">

        {/* =========================
            SECTION LABEL
        ========================== */}
        <div className="mb-10 text-left">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#68a2de]
              bg-[#3979c6]
              px-4
              py-1.5
              text-[11px]
              font-medium
              text-white
              shadow-[0_0_10px_rgba(66,140,220,0.20)]
            "
          >
            What Customers Achieve
          </span>
        </div>

        {/* =========================
            STATS GRID
        ========================== */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              target={stat.target}
              suffix={stat.suffix}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   INDIVIDUAL STAT CARD
============================================ */
const StatCard = ({ title, target, suffix, description }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (
          entry.isIntersecting &&
          !animationStarted.current
        ) {
          animationStarted.current = true;

          startCounter();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const startCounter = () => {
    const startValue = 1;

    // Small delay so the card becomes visible
    // before counting begins.
    setTimeout(() => {
      const duration = 1600;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;

        const progress = Math.min(
          elapsed / duration,
          1
        );

        /*
          Ease-out effect:
          fast at beginning,
          slow near the final number.
        */
        const easedProgress =
          1 - Math.pow(1 - progress, 3);

        const currentValue = Math.floor(
          startValue +
            (target - startValue) *
              easedProgress
        );

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    }, 150);
  };

  /* ============================================
     FORMAT NUMBER
  ============================================ */
  const formatValue = () => {
    if (target >= 1000) {
      if (count >= 1000) {
        return "1k";
      }

      return count.toString();
    }

    return count.toString();
  };

  return (
    <div
      ref={cardRef}
      className="
        group
        relative
        min-h-[196px]
        overflow-hidden
        rounded-[14px]
        px-7
        py-6
        bg-[#112a49]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1

        hover:shadow-[0_0_8px_rgba(43,143,255,0.65),0_0_22px_rgba(43,143,255,0.28),0_0_42px_rgba(43,143,255,0.12)]
      "
      style={{
        background:
          "linear-gradient(#112a49,#112a49) padding-box, linear-gradient(110deg, rgba(66,135,200,0) 0%, rgba(66,135,200,0.03) 15%, rgba(66,135,200,0.12) 35%, rgba(62,127,191,0.30) 58%, rgba(67,139,207,0.62) 78%, rgba(74,149,220,0.95) 100%) border-box",
        border: "1.5px solid transparent",
      }}
    >

      {/* =========================
          HOVER INNER GLOW
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[14px]
          bg-[radial-gradient(ellipse_at_right,rgba(35,132,255,0.13),transparent_55%)]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* =========================
          RIGHT SIDE HOVER LIGHT
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-35px]
          top-1/2
          h-[160px]
          w-[50px]
          -translate-y-1/2
          rounded-full
          bg-[#1785ff]/0
          blur-[28px]
          transition-all
          duration-300
          group-hover:bg-[#1785ff]/25
        "
      />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-10">

        {/* TITLE */}
        <h3
          className="
            text-[17px]
            font-medium
            leading-none
            text-[#f5f7fb]
          "
        >
          {title}
        </h3>

        {/* NUMBER */}
        <div
          className="
            mt-[25px]
            bg-gradient-to-b
            from-[#4f86ce]
            via-[#77a6dd]
            to-[#aac3e5]
            bg-clip-text
            text-[88px]
            font-light
            leading-[0.85]
            tracking-[-4px]
            text-transparent
          "
        >
          {formatValue()}
          {suffix}
        </div>
      </div>

      {/* =========================
          DESCRIPTION
      ========================== */}
      <p
        className="
          absolute
          bottom-[23px]
          left-7
          right-6
          z-10
          text-[12px]
          leading-[1.4]
          text-[#8499b0]
        "
      >
        {description}
      </p>
    </div>
  );
};

export default CustomerStats;


