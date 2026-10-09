import React, { useEffect, useRef, useState } from "react";

/*
  LOGO FILES: public/assets/brands/ folder me ye exact naam (small letters) se rakho:
  tata.png, newsclick.png, pixinsight.png, univest.png, tamuhack.png
  Logo na mile to niche colored text dikhega.
*/
const brands = [
  { name: "TATA", logo: "/assets/brands/tata.png", color: "#2f7fd1" },
  { name: "NewsClick", logo: "/assets/brands/newsclick.png", color: "#e2264d" },
  { name: "PixInsight", logo: "/assets/brands/pixinsight.png", color: "#f97316" },
  { name: "Univest", logo: "/assets/brands/univest.png", color: "#1f9d55" },
  { name: "TamuHack", logo: "/assets/brands/tamuhack.png", color: "#5b6b8c" },
];

const BrandItem = ({ name, logo, color }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="mr-16 flex shrink-0 items-center md:mr-24">
      {!failed ? (
        <img
          src={logo}
          alt={name}
          className="h-7 w-auto max-w-none object-contain md:h-8"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className="whitespace-nowrap text-[22px] font-bold tracking-tight"
          style={{ color }}
        >
          {name}
        </span>
      )}
    </div>
  );
};

// ek "half" me 2 baar brands, taaki wide screen par bhi khali jagah na dikhe
const half = [...brands, ...brands];

const TrustedBrands = () => {
  const trackRef = useRef(null);

  // CSS keyframes pe depend nahi karta, isliye hamesha chalega.
  // Direction: LEFT -> RIGHT. Ulta (right -> left) chahiye to
  // dono transform values aapas me badal do.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const anim = el.animate(
      [{ transform: "translateX(-50%)" }, { transform: "translateX(0)" }],
      { duration: 35000, iterations: Infinity, easing: "linear" }
    );

    const pause = () => anim.pause();
    const play = () => anim.play();
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", play);

    return () => {
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", play);
      anim.cancel();
    };
  }, []);

  return (
    <section className="flex w-full flex-col items-start gap-6 bg-transparent px-6 py-12 font-['Poppins'] md:flex-row md:items-center md:gap-14 md:px-12 md:py-14 lg:px-16">
      <p className="m-0 max-w-[170px] shrink-0 text-[13px] font-medium uppercase leading-normal tracking-wider text-white">
        Trusted by forward-thinking businesses
      </p>

      <div className="w-full min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
        <div ref={trackRef} className="flex w-max items-center will-change-transform">
          {[...half, ...half].map((b, i) => (
            <BrandItem key={i} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;


