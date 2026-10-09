import React, { useLayoutEffect, useRef, useState } from "react";

const iconCls = "h-5 w-5";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconCls}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "IT Application Management",
    desc: "Delivers end-to-end IT application services to help organizations design, build, modernize, and manage business-critical applications.",
    pos: "lg:left-[12%] lg:top-0",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconCls}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="12" y2="15" />
      </svg>
    ),
    title: "Mobile App Development",
    desc: "Develop intuitive native and cross-platform mobile applications for iOS and Android, with seamless API integration and app store deployment.",
    pos: "lg:left-[52%] lg:top-[6%]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconCls}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Application Support & Maintenance",
    desc: "Round-the-clock monitoring, bug fixes, and performance tuning to keep your applications stable, secure, and up to date.",
    pos: "lg:left-0 lg:top-[34.5%]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconCls}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Privilege Drift",
    desc: "Access grows. Ownership disappears. Permissions accumulate long after the original need is gone.",
    pos: "lg:left-[42.5%] lg:top-[41.5%]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconCls}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Application Governance",
    desc: "No one owns how access works inside applications. Apps are onboarded, forgotten, and rarely governed over time.",
    pos: "lg:left-[8%] lg:top-[73.5%]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconCls}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Local User Activity",
    desc: "Identity actions happen without leaving IAM logs. Local users and in-app actions stay invisible.",
    pos: "lg:left-[72%] lg:top-[74.5%]",
  },
];

const WhyDQNeX = () => {
  const headingRef = useRef(null);
  // cards ke neeche itni extra jagah chahiye ki last card bhi
  // pinned heading ke upar se poora nikal jaye, uske baad hi next section aaye
  const [bottomSpace, setBottomSpace] = useState(112);

  useLayoutEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const update = () => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      // desktop: heading ki height + buffer | mobile: normal padding (heading sticky nahi hai)
      setBottomSpace(isDesktop ? Math.ceil(el.offsetHeight) + 40 : 112);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="relative bg-transparent font-sans">
      {/* ── PINNED HEADING (sirf desktop par sticky) ───────────── */}
      <div
        ref={headingRef}
        className="z-10 flex flex-col items-center px-6 pb-16 pt-28 text-center lg:sticky lg:top-0"
      >
        <span className="inline-block rounded-full bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-[22px] py-2 text-[13px] font-medium text-white shadow-[0_6px_24px_rgba(59,109,176,0.35)]">
          Why DQNeX Exists
        </span>

        <h2 className="mt-7 text-[26px] font-medium leading-tight text-white md:text-[32px] lg:text-[36px]">
          Turning Complexity Into Simple Solutions
        </h2>

        <p className="mx-auto mt-5 max-w-[760px] text-[13px] leading-[1.7] text-[#c8d1dc]">
          DQNeX is a global IT consulting and services company delivering
          technology-driven solutions that help organizations improve performance,
          manage risk, and achieve sustainable growth. We partner with enterprises
          to modernize their IT landscapes, optimize operations, and enable digital
          transformation across business functions.
        </p>
      </div>

      {/* ── SCROLLING CARDS ────────────────────────────────────── */}
      <div
        className="relative z-20 px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14"
        style={{ paddingBottom: bottomSpace }}
      >
        <div className="mx-auto mt-16 grid max-w-[940px] grid-cols-1 gap-6 sm:grid-cols-2 lg:relative lg:mt-24 lg:block lg:aspect-[925/1020]">
          {services.map((svc) => (
            <div key={svc.title} className={`lg:absolute lg:w-[28%] ${svc.pos}`}>
              <div className="group relative h-full cursor-pointer overflow-hidden rounded-[24px] border border-white/[0.12] bg-[linear-gradient(145deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.05)_100%)] p-6 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_1px_0_0_rgba(255,255,255,0.08),inset_-1px_0_0_rgba(255,255,255,0.12),0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-[border-color,box-shadow,background-image] duration-300 hover:border-[rgba(255,205,110,0.55)] hover:bg-[linear-gradient(145deg,rgba(120,85,25,0.8)_0%,rgba(70,50,20,0.65)_100%)] hover:shadow-[inset_0_1px_0_rgba(255,220,150,0.3),0_0_70px_rgba(255,180,60,0.25)] lg:min-h-[250px]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_105%_35%,rgba(255,255,255,0.13),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(150,190,255,0.28),transparent_38%)] transition-opacity duration-300 group-hover:opacity-0" />

                <div className="relative mb-9 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/25 bg-[#101c30] text-[#e6efff] shadow-[0_0_28px_rgba(255,255,255,0.28),inset_0_0_14px_rgba(255,255,255,0.14)] transition-all duration-300 group-hover:border-[#ffd27a] group-hover:bg-[#ffb938] group-hover:text-[#3b2600] group-hover:shadow-[0_0_30px_rgba(255,170,50,0.65)]">
                  {svc.icon}
                </div>

                <h3 className="relative mb-2.5 text-[15px] font-medium leading-snug text-white">
                  {svc.title}
                </h3>

                <p className="relative m-0 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_24%,#8b95a9_48%)] bg-clip-text text-[13px] leading-relaxed text-transparent group-hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0.8))]">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDQNeX;


