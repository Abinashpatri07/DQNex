import React from "react";

/*
  BACKGROUND IMAGE (mountains): apni image yahan rakho -> public/assets/journey-bg.jpg
  (path badalna ho to neeche BG_IMAGE change karo)
*/
const BG_IMAGE = "/assets/aboutjourney.png";

const milestones = [
  {
    year: "2023",
    label: "Business was founded",
    desc: "Our company was established on 2nd December, 2023.",
    dot: "h-5 w-5", // bada dot
    // line jo is dot se agle dot tak jaati hai (dot ke paas gap ke saath)
    line: "left-[calc(50%+19px)] w-[calc(100%-43px)]",
  },
  {
    year: "2024",
    label: "First Success",
    desc: "Secured our first client engagement in 2024.",
    dot: "h-3.5 w-3.5", // chhota dot
    line: "left-[calc(50%+22px)] w-[calc(100%-40px)]",
  },
  {
    year: "2025",
    label: "Driving Innovation",
    desc: "Introduced innovative solutions and delivery frameworks for multiple industries.",
    dot: "h-5 w-5",
    line: null, // last dot ke baad line nahi
  },
];

const OurJourney = () => {
  return (
    <section className="relative w-full bg-transparent px-7 py-16 sm:px-8 md:px-10 lg:px-12 xl:px-14">
      {/* ── EK HI BOX: upar se fade (border dikhta nahi), neeche rounded kinara ── */}
      <div className="relative mx-auto flex max-w-[1500px] flex-col items-center overflow-hidden rounded-[24px] px-6 pb-12 pt-5 text-center">
        {/* BACKGROUND LAYER (upar se transparent -> poora) */}
        <div className="pointer-events-none absolute inset-0 bg-[#071a33] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0px,rgba(0,0,0,0.35)_90px,#000_200px)] [mask-image:linear-gradient(to_bottom,transparent_0px,rgba(0,0,0,0.35)_90px,#000_200px)]">
          <img
            src={BG_IMAGE}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          {/* image na ho tab bhi halka blue glow, aur text ke liye halka dark overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(40,100,200,0.25),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#041120]/60 via-transparent to-[#041120]/25" />
        </div>

        {/* ── BADGE ── */}
        <span className="relative z-10 inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] font-['Poppins'] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)]">
          Our Journey
        </span>

        {/* ── TITLE ── */}
        <h2 className="relative z-10 mt-8 text-[24px] font-normal leading-tight text-white">
          Mile Stone That Matter
        </h2>

        {/* ── TIMELINE ── */}
        <div className="relative z-10 mt-14 grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
          {milestones.map((m) => (
            <div key={m.year} className="relative flex flex-col items-center">
              {/* dot + (agle dot tak) line */}
              <div className="relative flex h-5 w-full items-center justify-center">
                <span
                  className={`${m.dot} rounded-full bg-[radial-gradient(circle,#e2fffe_0%,#7bf3ee_55%,#35cfd0_100%)] shadow-[0_0_14px_rgba(70,240,240,0.9),0_0_4px_rgba(190,255,252,0.9)]`}
                />
                {m.line && (
                  <span
                    className={`absolute top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-[#3cc8d4]/70 via-[#4fd8e4] to-[#3cc8d4]/70 shadow-[0_0_6px_rgba(79,216,228,0.5)] md:block ${m.line}`}
                  />
                )}
              </div>

              <p className="m-0 mt-6 text-[26px] font-medium leading-9 text-white">{m.year}</p>
              <p className="m-0 mt-0.5 text-[20px] font-semibold leading-7 text-white">{m.label}</p>
              <p className="m-0 mx-auto mt-3.5 max-w-[230px] text-[14px] leading-[18px] text-white/90">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;


