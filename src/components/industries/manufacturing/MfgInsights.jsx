import React from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";

// 👉 Extension (.png/.jpg/.webp) aur path apni files ke hisaab se check kar lena
import insight1 from "../../../assets/Industry/manufactureInsight1.png";
import insight2 from "../../../assets/Industry/manufactureInsight2.png";
import insight3 from "../../../assets/Industry/manufactureInsight3.png";

const insights = [
  {
    title: "Building Resilient Manufacturing Supply Chains",
    description:
      "How digital supply chain and real-time visibility help manufacturers stay ahead.",
    date: "Apr 12, 2026",
    readTime: "5 min read",
    image: insight1,
  },
  {
    title: "Modernizing Legacy Manufacturing Systems",
    description:
      "A practical guide to upgrading old systems for a smarter, more connected factory.",
    date: "Mar 28, 2026",
    readTime: "6 min read",
    image: insight2,
  },
  {
    title: "Industry 4.0 in Manufacturing",
    description:
      "How IoT, AI and automation are reshaping the future of manufacturing.",
    date: "Feb 14, 2026",
    readTime: "7 min read",
    image: insight3,
  },
];

const MfgInsights = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#050d1c] via-[#061426] to-[#071a33] px-6 py-16 font-sans md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 inline-block rounded-full border border-blue-400/40 bg-gradient-to-b from-[#4a7fc1] to-[#2f5a96] px-6 py-2 text-[12px] font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]">
              Insight
            </div>

            <h2 className="text-[28px] font-semibold leading-[1.15] text-white md:text-[34px]">
              Latest Manufacturing{" "}
              <span className="text-[#5ec4e0]">Insights</span>
            </h2>
          </div>

          <button className="flex w-max items-center gap-2 rounded-full border border-white/20 bg-[#050d1c]/60 px-6 py-3 text-[14px] font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((item) => (
            <div
              key={item.title}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#1f3c8a]/70 bg-[#050f20] transition-colors hover:border-blue-400/60"
            >
              <div className="h-[165px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-3 line-clamp-2 text-[19px] font-medium leading-[1.3] text-white transition-colors group-hover:text-[#5ec4e0]">
                  {item.title}
                </h3>

                <p className="mb-6 line-clamp-2 text-[12.5px] leading-[1.5] text-white/75">
                  {item.description}
                </p>

                <div className="mt-auto flex items-center gap-6 text-[11.5px] text-white/65">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MfgInsights;