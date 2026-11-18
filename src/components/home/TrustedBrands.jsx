import React, { useEffect, useRef, useState } from "react";

import ritikamLogo from "../../assets/ritikam.png";
import hedgeveriflyLogo from "../../assets/hedgeverifly.png";
import climamaxLogo from "../../assets/Climamax.png";
import careerBuilderLogo from "../../assets/career builder.png";

const brands = [
  { name: "Ritikam", logo: ritikamLogo, color: "#d17b2f" },
  { name: "Hedgeverifly", logo: hedgeveriflyLogo, color: "#26b0e2" },
  { name: "Career Builder", logo: careerBuilderLogo, color: "#7e123f" },
  { name: "Climamax", logo: climamaxLogo, color: "#5b6b8c" },
];

const BrandItem = ({ name, logo, color }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="mr-14 flex shrink-0 items-center md:mr-20">
      {!failed && logo ? (
        <img
          src={logo}
          alt={name}
          className="h-9 w-auto max-h-11 max-w-[170px] object-contain opacity-95 transition-all duration-300 hover:opacity-100 hover:scale-105 md:h-11 md:max-w-[200px]"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className="whitespace-nowrap text-[20px] font-bold tracking-tight text-white md:text-[22px]"
          style={{ color }}
        >
          {name}
        </span>
      )}
    </div>
  );
};

// 4 brands repeated for seamless continuous scrolling
const half = [...brands, ...brands, ...brands];

const TrustedBrands = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const anim = el.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      { duration: 28000, iterations: Infinity, easing: "linear" }
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
