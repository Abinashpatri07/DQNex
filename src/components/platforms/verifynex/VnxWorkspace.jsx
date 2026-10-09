import React from "react";
import workspaceBg from "../../../assets/platform/vnxworkspace.png";
import workflowsImg from "../../../assets/platform/configurable-removebg-preview.png";
import visibilityImg from "../../../assets/platform/livecasevisibility-removebg-preview.png";
import evidenceImg from "../../../assets/platform/evidence-removebg-preview.png";
import discrepancyImg from "../../../assets/platform/discrepence-removebg-preview.png";
import reportingImg from "../../../assets/platform/operational-removebg-preview.png";
import connectedImg from "../../../assets/platform/connected-removebg-preview.png";

const BG_IMAGE = workspaceBg;

/* bg = card ka gradient, glow = upar-left kone ki chamak ka color */
const features = [
  {
    title: "Configurable workflows",
    desc: "Define check packages, responsibilities, review stages, reminders, and escalation paths around your hiring policies.",
    img: workflowsImg,
    bg: "from-[#1b45a8] to-[#0b1a47]",
    glow: "rgba(90,170,255,0.55)",
  },
  {
    title: "Live case visibility",
    desc: "See every candidate, check, owner, status, ageing item, and required action from one operational view.",
    img: visibilityImg,
    bg: "from-[#4a2b20] to-[#2d1913]",
    glow: "rgba(255,150,80,0.5)",
  },
  {
    title: "Evidence-led case records",
    desc: "Keep submitted documents, source responses, reviewer notes, discrepancies, and decisions together.",
    img: evidenceImg,
    bg: "from-[#3b2a8c] to-[#1e1456]",
    glow: "rgba(190,100,240,0.55)",
  },
  {
    title: "Discrepancy resolution",
    desc: "Identify conflicting information, assign follow-up actions, record explanations, and preserve the final resolution.",
    img: discrepancyImg,
    bg: "from-[#0e5a45] to-[#082e28]",
    glow: "rgba(60,230,190,0.5)",
  },
  {
    title: "Operational reporting",
    desc: "Understand volumes, progress, outcomes, ageing cases, and turnaround performance across verification activity.",
    img: reportingImg,
    bg: "from-[#5e1c2e] to-[#341018]",
    glow: "rgba(255,110,100,0.5)",
  },
  {
    title: "Connected hiring workflows",
    desc: "Exchange case information with the ATS, HRMS, HRIS, or internal tools already used by your team.",
    img: connectedImg,
    bg: "from-[#1c2a78] to-[#0e1642]",
    glow: "rgba(60,190,255,0.5)",
  },
];

const VnxWorkspace = () => {
  return (
    <section className="relative w-full bg-transparent px-6 py-8 md:py-10 md:px-10">
      {/* EK HI BOX: background image + heading + cards */}
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[24px] border border-white/[0.05] bg-[#06101f] px-5 pb-6 pt-4 text-center lg:px-10">
        {/* background image (dim) */}
        <img
          src={BG_IMAGE}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#040b1a]/80 via-[#040b1a]/45 to-[#040b1a]/60" />

        {/* HEADING */}
        <h2 className="relative z-10 text-[26px] font-medium leading-tight text-white md:text-[32px] lg:text-[38px]">
          Manage every verification in{" "}
          <span className="bg-gradient-to-r from-[#5db7ea] to-[#7fd0ee] bg-clip-text text-transparent">
            one workspace
          </span>
        </h2>

        <p className="relative z-10 mx-auto mt-3 max-w-[640px] text-[13px] leading-[1.25] text-white/90 md:text-[14px]">
          Standardise how checks are initiated, monitor progress as it happens, keep evidence
          organised, and give reviewers the context they need to act confidently.
        </p>

        {/* CARDS */}
        <div className="relative z-10 mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-[17px]">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group relative overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-br p-4 pt-6 text-left transition-transform duration-300 hover:-translate-y-1 lg:h-[146px] ${f.bg}`}
            >
              {/* upar-left kone ki chamak */}
              <div
                className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full blur-[30px]"
                style={{ background: f.glow }}
              />

              {/* 3D illustration (right side) */}
              <img
                src={f.img}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-[48px] hidden h-[84px] w-[92px] object-contain transition-transform duration-300 group-hover:scale-105 sm:block"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <h3 className="relative z-10 m-0 text-[17px] font-medium leading-snug text-white lg:text-[19px]">
                {f.title}
              </h3>
              <p className="relative z-10 m-0 mt-2.5 text-[12.5px] leading-[1.4] text-white/85 sm:max-w-[64%]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VnxWorkspace;