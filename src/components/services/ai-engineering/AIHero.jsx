import React from "react";
import aiEngineeringBg from "../../../assets/serviceai-engineering.png";
import aiDevIcon from "../../../assets/aiengineering-aidevelopment-removebg-preview.png";
import aiIntegrationIcon from "../../../assets/aiengineering-Aiintegration-removebg-preview.png";
import aiAutoIcon from "../../../assets/aiengineering-aiautomation-removebg-preview.png";
import aiAgenticIcon from "../../../assets/aiengineering-agenticAI-removebg-preview.png";

const capabilities = [
  {
    icon: aiDevIcon,
    glow: "bg-[#3182e0]/30",
    title: "AI Development",
    desc: "Build custom AI solutions tailored to your business goals.",
    items: ["Custom AI models", "Predictive analytics", "Natural language processing", "Computer vision solutions"],
  },
  {
    icon: aiIntegrationIcon,
    glow: "bg-[#f59e0b]/30",
    title: "AI Integration",
    desc: "Integrate AI seamlessly into your existing systems and workflows.",
    items: ["API & platform integration", "Data pipeline setup", "Third-party AI model integration", "Seamless system connectivity"],
  },
  {
    icon: aiAutoIcon,
    glow: "bg-[#3cc8d4]/30",
    title: "AI Automation",
    desc: "Automate repetitive processes and improve operational efficiency with AI.",
    items: ["Intelligent process automation", "Document & data automation", "Workflow orchestration", "Robotic process automation"],
  },
  {
    icon: aiAgenticIcon,
    glow: "bg-[#a855f7]/30",
    title: "Agentic AI",
    desc: "Build autonomous AI agents that can plan, reason and take action.",
    items: ["AI agents for business tasks", "Multi-agent systems", "Autonomous decision making", "Agent integration & monitoring"],
  },
];

const AIHero = () => {
  return (
    <>
      {/* ─── HERO SECTION (image header ke peeche tak, clear) ─── */}
      <section className="relative w-full overflow-hidden px-7 pb-24 pt-[130px] font-sans sm:px-8 md:px-10 md:pb-28 md:pt-[150px] lg:px-12 xl:px-14">
        {/* Background image — clear, top: 0 se (header ke peeche bhi) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#061423]" />
          <img
            src={aiEngineeringBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.85]"
          />
          {/* text ke peeche dark spot (glow dab jaye) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_42%,rgba(5,13,28,0.7)_0%,rgba(5,13,28,0.4)_55%,transparent_100%)]" />
          {/* poore hero par dark overlay + neeche page ke background me fade */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,13,28,0.4)_0%,rgba(5,13,28,0.3)_50%,rgba(4,14,27,0.7)_80%,#040e1b_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] text-center">
          <h1 className="mb-6 text-[28px] font-semibold leading-tight text-white md:text-[34px] lg:text-[44px]">
            Build Intelligent Systems for a <br className="hidden md:block" />
            <span className="text-[#3cc8d4]">Smarter Tomorrow</span>
          </h1>
          <p className="mx-auto mb-10 max-w-[700px] text-[14px] leading-relaxed text-[#c8d1dc]">
            From custom AI development to seamless integration and autonomous agents, we help businesses unlock real value with practical, scalable AI solutions.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#3182e0] px-8 py-3.5 font-medium text-white transition-colors hover:bg-[#2877d8]">
              Talk Our AI Expert
            </button>
            <button className="rounded-full border border-white/20 bg-[#050d1c]/50 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/5">
              Explore our Work
            </button>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES SECTION (clean dark background, NO image) ─── */}
      <section className="relative w-full bg-[#040e1b] px-7 pb-10 pt-6 font-sans sm:px-8 md:px-10 md:pb-16 lg:px-12 lg:pb-24 xl:px-14">
        <div className="mx-auto max-w-[1500px] text-center">
          <span className="mb-6 inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)]">
            Our Capabilities
          </span>
          <h2 className="mb-4 text-[26px] font-medium text-white md:text-[32px] lg:text-[36px]">
            End-to-End <br className="hidden md:block" />
            <span className="text-[#3cc8d4]">AI Engineering</span> Services
          </h2>
          <p className="mx-auto mb-16 max-w-[650px] text-[14px] text-[#c8d1dc]">
            We combine deep technical expertise with real-world business understanding to deliver AI solutions that are secure, scalable, and impactful.
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
      </section>
    </>
  );
};

export default AIHero;