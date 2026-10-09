import React from "react";
import deployBg from "../../../assets/platform/vnxdeploye.png";

const BG_IMAGE = deployBg;

const ic = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-full w-full",
};

const steps = [
  {
    id: "01",
    week: "WEEK 1",
    title: "Setup &\nConfiguration",
    badge: "from-[#2f7bff] to-[#0b4de0] shadow-[0_0_16px_rgba(47,123,255,0.55)]",
    card: "border-[#2f6fe0]/70 shadow-[0_0_18px_rgba(47,111,224,0.15)]",
    weekColor: "text-[#9fb4cf]",
    iconColor: "text-[#3b82f6]",
    dot: "bg-[#4a8cff]",
    icon: (
      <svg {...ic}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "02",
    week: "WEEK 2",
    title: "Vendor\nOnboarding",
    badge: "from-[#5b4ff0] to-[#2c20b8] shadow-[0_0_16px_rgba(91,79,240,0.55)]",
    card: "border-[#6a5ae0]/70 shadow-[0_0_18px_rgba(106,90,224,0.15)]",
    weekColor: "text-[#9fb4cf]",
    iconColor: "text-[#5b52d8]",
    dot: "bg-[#7c6cf0]",
    icon: (
      <svg {...ic}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6" />
        <path d="M14 2h2a2 2 0 0 1 2 2v6" />
        <path d="M8 8h6M8 12h4" />
        <circle cx="17.5" cy="16" r="2.2" />
        <path d="M14 22c.4-2 1.7-3 3.5-3s3.1 1 3.5 3" />
      </svg>
    ),
  },
  {
    id: "03",
    week: "WEEK 3",
    title: "Data &\nWorkflow Setup",
    badge: "from-[#12a8a0] to-[#0a6f78] shadow-[0_0_16px_rgba(18,168,160,0.5)]",
    card: "border-[#18a8a0]/70 shadow-[0_0_18px_rgba(24,168,160,0.15)]",
    weekColor: "text-[#9fb4cf]",
    iconColor: "text-[#16b8b0]",
    dot: "bg-[#2fd0c6]",
    icon: (
      <svg {...ic}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
  },
  {
    id: "04",
    week: "WEEK 4",
    title: "Training &\nCo-Use",
    badge: "from-[#b88a3c] to-[#6d4d1d] shadow-[0_0_16px_rgba(200,150,46,0.4)]",
    card: "border-[#c8962e]/70 shadow-[0_0_18px_rgba(200,150,46,0.12)]",
    weekColor: "text-[#d9a441]",
    iconColor: "text-[#d9a441]",
    dot: "bg-[#e0a63a]",
    icon: (
      <svg {...ic}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

const VnxDeploy = () => {
  return (
    <section className="relative w-full bg-transparent px-6 py-8 md:py-10 md:px-10">
      {/* EK HI BOX: background image + header + steps */}
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[24px] border border-white/[0.05] bg-[#061426] px-4 pb-10 pt-9 lg:pb-12">
        {/* background image (right side zyada dikhti hai) */}
        <img
          src={BG_IMAGE}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,26,0.92)_0%,rgba(4,12,26,0.75)_35%,rgba(4,12,26,0.25)_70%,rgba(4,12,26,0.15)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_0%_100%,rgba(20,100,100,0.18),transparent_70%)]" />

        {/* HEADER */}
        <div className="relative z-10 flex flex-col gap-6 px-2 lg:flex-row lg:items-start lg:justify-between lg:pl-8 lg:pr-2">
          <div>
            <p className="m-0 text-[12px] font-medium text-[#7fb0f0]">Fast to Deploy</p>
            <h2 className="m-0 mt-1 text-[28px] font-medium leading-[1.35] text-white md:text-[32px] lg:text-[34px] lg:leading-[56px]">
              Live in{" "}
              <span className="bg-gradient-to-r from-[#5db7ea] to-[#7fd0ee] bg-clip-text text-transparent">
                15 Days
              </span>
              <br />
              Not a Long Verification Project
            </h2>
          </div>
          <p className="m-0 max-w-[520px] text-[13px] leading-[1.35] text-white/90 md:text-[14px] lg:mt-[54px]">
            Get up and running quickly with a guided implementation, so you can start verifying candidates without delays.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative z-10 mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className={`relative flex items-center gap-7 rounded-2xl border bg-[#050b1a]/90 px-5 py-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 lg:h-[106px] ${s.card}`}
            >
              {/* number badge */}
              <div
                className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-[15px] font-medium text-white ${s.badge}`}
              >
                {s.id}
              </div>

              <div className="min-w-0 flex-1">
                <p className={`m-0 text-[12px] font-medium tracking-wide ${s.weekColor}`}>{s.week}</p>
                <h3 className="m-0 mt-1 whitespace-pre-line text-[15px] font-semibold leading-[1.2] text-white">
                  {s.title}
                </h3>
              </div>

              {/* right icon */}
              <span className={`h-[34px] w-[34px] shrink-0 ${s.iconColor}`}>{s.icon}</span>

              {/* agle card tak chhota connector (sirf desktop) */}
              {i < steps.length - 1 && (
                <>
                  <span className="pointer-events-none absolute -right-6 top-1/2 hidden h-px w-6 bg-[#3b6fb8]/60 lg:block" />
                  <span
                    className={`pointer-events-none absolute -right-[15px] top-1/2 hidden h-[5px] w-[5px] -translate-y-1/2 rounded-full lg:block ${s.dot}`}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VnxDeploy;