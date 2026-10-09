import React from "react";
import serviceAdvisoryHero from "../../../assets/serviceAdvisoryhero.png";
import advProductIcon from "../../../assets/serviceAdvisory-product_and_service_design-removebg-preview.png";
import advAgileIcon from "../../../assets/serviceAdvisory-agile-removebg-preview.png";
import advAIConsultIcon from "../../../assets/serviceAdvisory-AI_consulting-removebg-preview.png";
import advTechIcon from "../../../assets/serviceAdvisory-technology_consulting-removebg-preview.png";

const capabilities = [
  {
    icon: advProductIcon,
    glow: "bg-[#3182e0]/30",
    title: "Product & Service Design",
    desc: "Design customer-centric products and services that create real business value.",
    items: ["User research & product strategy", "UI/UX & experience design", "Product roadmap & MVP planning", "Service design & innovation"],
  },
  {
    icon: advAgileIcon,
    glow: "bg-[#f59e0b]/30",
    title: "Agile Transformation",
    desc: "Help organizations adopt agile ways of working to improve speed, collaboration and value.",
    items: ["Agile strategy & coaching", "Team & process transformation", "Scaled agile frameworks", "Change management"],
  },
  {
    icon: advAIConsultIcon,
    glow: "bg-[#3cc8d4]/30",
    title: "AI Consulting",
    desc: "Provide strategic guidance to identify, plan and implement high-impact AI initiatives.",
    items: ["AI opportunity assessment", "Use case prioritization", "AI strategy & roadmap", "Responsible AI & governance"],
  },
  {
    icon: advTechIcon,
    glow: "bg-[#a855f7]/30",
    title: "Technology Consulting",
    desc: "Advise on the right technologies, architecture and processes to scale with confidence.",
    items: ["Technology assessment", "Architecture advisory", "Cloud & infrastructure strategy", "Digital transformation planning"],
  },
];

const AdvHero = () => {
  return (
    <section className="w-full font-sans">
      {/* ───────── HERO (image sirf yahin, header ke peeche tak) ───────── */}
      <div className="relative w-full overflow-hidden px-7 pb-24 pt-[130px] sm:px-8 md:px-10 md:pb-28 md:pt-[150px] lg:px-12 xl:px-14">
        {/* Background image — clear, poore hero me, top: 0 se (header ke peeche bhi) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#061423]" />
          <img
            src={serviceAdvisoryHero}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.85]"
          />
          {/* text ke peeche gehra dark spot (glow dab jaye) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_42%,rgba(5,13,28,0.7)_0%,rgba(5,13,28,0.4)_55%,transparent_100%)]" />
          {/* poore hero par dark overlay + neeche page ke background me fade */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,13,28,0.4)_0%,rgba(5,13,28,0.35)_60%,rgba(6,20,35,0.88)_88%,#061423_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] text-center">
          <h1 className="mb-6 text-[28px] font-semibold leading-tight text-white md:text-[34px] lg:text-[44px]">
            Turn Technology Into <br className="hidden md:block" />
            <span className="text-[#3cc8d4]">Strategic Advantage</span>
          </h1>

          <p className="mx-auto mb-10 max-w-[750px] text-[14px] leading-relaxed text-[#c8d1dc]">
            We help leaders align product, people, process and technology to create clearer decisions, stronger delivery and measurable business outcomes.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#3182e0] px-8 py-3.5 font-medium text-white transition-colors hover:bg-[#2877d8]">
              Talk Our Advisor
            </button>
            <button className="rounded-full border border-white/20 bg-[#050d1c]/50 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/5">
              Explore our approach
            </button>
          </div>
        </div>
      </div>

      {/* ───────── CAPABILITIES (plain background, image nahi) ───────── */}
      <div className="w-full bg-gradient-to-b from-[#061423] via-[#040e1b] to-[#0a1828] px-7 pb-10 pt-6 sm:px-8 md:px-10 md:pb-16 lg:px-12 lg:pb-24 xl:px-14">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center">
          <span className="mb-6 inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)]">
            Our Advisory Service
          </span>

          <h2 className="mb-4 text-center text-[26px] font-medium text-white md:text-[32px] lg:text-[36px]">
            Strategic <span className="text-[#3cc8d4]">Advisory</span> <br className="hidden md:block" />
            Capabilities
          </h2>

          <p className="mx-auto mb-16 max-w-[650px] text-center text-[13px] text-[#c8d1dc]">
            We combine industry expertise and practical frameworks to help you make the right technology decisions and turn them into real business outcomes.
          </p>

          <div className="grid w-full grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="group relative cursor-pointer rounded-2xl border border-white/10 bg-[#0a1828]/80 p-6 backdrop-blur-sm transition-colors hover:border-[#3182e0]/50"
              >
                <div className={`absolute left-1/2 top-0 h-[120px] w-[120px] -translate-x-1/2 rounded-full blur-2xl ${c.glow}`} />
                <div className="relative z-10 mb-6 mt-4 flex justify-center">
                  <img src={c.icon} alt={c.title} className="h-24 object-contain transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="relative z-10 mb-2 text-center text-[15px] font-medium text-white">{c.title}</h3>
                <p className="relative z-10 mb-6 text-center text-xs text-[#8aa0bc]">{c.desc}</p>
                <ul className="relative z-10 space-y-3">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#c8d1dc]">
                      <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#3182e0] text-[8px] text-white">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvHero;