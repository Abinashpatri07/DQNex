import React from "react";
// 👉 Image ka naam/extension apne file ke hisaab se check kar lena (maine .png maana hai)
import engHeroBg from "../../../assets/serviceEngineering-Readyto build.png";
import engAppDevIcon from "../../../assets/serviceengineering-Application_development-removebg-preview.png";
import engMobileIcon from "../../../assets/serviceengineering-mobile_app_development-removebg-preview.png";
import engWebIcon from "../../../assets/serviceengineering-website_development-removebg-preview.png";
import engEnterpriseIcon from "../../../assets/serviceengineering-Enterprice_Application-removebg-preview.png";

const capabilities = [
  {
    icon: engAppDevIcon,
    glow: "bg-[#3182e0]/30",
    title: "Application Development",
    desc: "Build custom web applications that are secure, scalable and performance-driven.",
    items: ["Custom business applications", "Scalable architecture", "Cloud-native development", "API development & integration"],
  },
  {
    icon: engMobileIcon,
    glow: "bg-[#f59e0b]/30",
    title: "Mobile App Development",
    desc: "Create high-performance mobile apps that deliver seamless experiences across platforms.",
    items: ["iOS & Android app development", "Cross-platform solutions", "User-centric UI/UX", "App maintenance & support"],
  },
  {
    icon: engWebIcon,
    glow: "bg-[#3cc8d4]/30",
    title: "Website Development",
    desc: "Design and develop modern, high-performing websites that elevate your brand and drive growth.",
    items: ["Corporate & business websites", "E-commerce development", "CMS implementation", "SEO-ready, responsive design"],
  },
  {
    icon: engEnterpriseIcon,
    glow: "bg-[#a855f7]/30",
    title: "Enterprise Applications",
    desc: "Build powerful enterprise solutions to streamline operations and enable digital transformation.",
    items: ["Enterprise software development", "System integration", "Custom ERP/CRM solutions", "Secure and scalable architecture"],
  },
];

const EngHero = () => {
  return (
    <>
      {/* ─── HERO SECTION (image header ke peeche tak, clear) ─── */}
      <section className="relative w-full overflow-hidden px-7 pb-24 pt-[130px] font-sans sm:px-8 md:px-10 md:pb-28 md:pt-[150px] lg:px-12 xl:px-14">
        {/* Background image — clear, top: 0 se (header ke peeche bhi) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#061423]" />
          <img
            src={engHeroBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.85]"
          />
          {/* text ke peeche dark spot (glow dab jaye) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_42%,rgba(5,13,28,0.7)_0%,rgba(5,13,28,0.4)_55%,transparent_100%)]" />
          {/* poore hero par dark overlay + neeche capabilities section ke rang me fade (seam nahi dikhega) */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,13,28,0.4)_0%,rgba(5,13,28,0.3)_50%,rgba(4,14,27,0.7)_80%,#040e1b_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] text-center">
          <h1 className="mb-6 text-[28px] font-semibold leading-tight text-white md:text-[34px] lg:text-[44px]">
            Building Scalable Digital Products <br className="hidden md:block" />
            for a <span className="text-[#3cc8d4]">Smarter Tomorrow</span>
          </h1>
          <p className="mx-auto mb-10 max-w-[750px] text-[14px] leading-relaxed text-[#c8d1dc]">
            From modern web and mobile applications to enterprise platforms and legacy modernization, we engineer robust, secure and future-ready solutions that drive business growth.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#3182e0] px-8 py-3.5 font-medium text-white transition-colors hover:bg-[#2877d8]">
              Talk Our Expert
            </button>
            <button className="rounded-full border border-white/20 bg-[#050d1c]/50 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/5">
              Explore our Work
            </button>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES SECTION (clean dark background, NO image) ─── */}
      <section className="relative w-full bg-[#040e1b] px-7 pb-10 pt-6 font-sans sm:px-8 md:px-10 md:pb-16 lg:px-12 lg:pb-24 xl:px-14">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-7 py-[11px] text-[13px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.35),inset_0_1px_0_rgba(190,215,255,0.45)]">
            Our Engineering Service
          </span>
          <h2 className="mb-4 text-[26px] font-medium text-white md:text-[32px] lg:text-[36px]">
            End-to-End <span className="text-[#3cc8d4]">Engineering</span> <br className="hidden md:block" />
            Capabilities
          </h2>
          <p className="mx-auto mb-16 max-w-[650px] text-[14px] text-[#c8d1dc]">
            We design, develop and modernize digital solutions that solve real business problems, enhance user experiences and scale with your growth.
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

export default EngHero;