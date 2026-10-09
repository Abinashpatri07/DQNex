import React, { useRef } from "react";
import {
  Settings,
  Network,
  XCircle,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const challenges = [
  {
    id: "01",
    icon: Settings,
    title: "Operational Inefficiency",
    desc: "Reduce waste, improve productivity and optimize resources",
  },
  {
    id: "02",
    icon: Network,
    title: "Legacy Systems",
    desc: "Modernize outdated systems for better performance and scalability",
  },
  {
    id: "03",
    icon: XCircle,
    title: "Production Downtime",
    desc: "Prevent unplanned downtime with predictive insights",
  },
  {
    id: "04",
    icon: AlertTriangle,
    title: "Quality Assurance",
    desc: "Ensure consistent quality and meet stringent industry standards",
  },
];

const MfgChallenges = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 230, behavior: "smooth" });
  };

  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-[#050d1c] via-[#061426] to-[#071a33] px-6 py-16 font-sans md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        {/* Badge (panel ke bahar, upar) */}
        <div className="mb-6 inline-block rounded-full border border-blue-400/40 bg-gradient-to-b from-[#4a7fc1] to-[#2f5a96] px-6 py-2 text-[12px] font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]">
          Challenges
        </div>

        {/* Panel */}
        <div className="flex flex-col gap-10 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0a1e3a] to-[#0b2447]/70 py-8 pl-8 pr-8 lg:flex-row lg:gap-8 lg:pr-0">
          {/* Left Text */}
          <div className="flex flex-col justify-between lg:w-[40%] lg:shrink-0">
            <div>
              <h2 className="mb-5 text-[30px] font-semibold leading-[1.15] text-white md:text-[36px]">
                Manufacturing <br />
                Challenges <span className="text-[#5ec4e0]">We Solve</span>
              </h2>

              <p className="max-w-[420px] text-[14px] leading-[1.45] text-white/90">
                Manufacturing businesses face increasing pressure to improve
                efficiency, maintain quality and respond faster to market
                demands. We help you overcome these challenges with innovative
                technology and industry expertise.
              </p>
            </div>

            <div className="mt-8 flex gap-4 lg:ml-4">
              <button
                onClick={() => scroll(-1)}
                aria-label="Previous"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e3a63] bg-[#08172d] text-white/90 transition-colors hover:border-blue-400/60 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e3a63] bg-[#08172d] text-white/90 transition-colors hover:border-blue-400/60 hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Cards (carousel, right edge par cut hota hai) */}
          <div
            ref={scrollRef}
            className="flex min-w-0 flex-1 snap-x gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {challenges.map(({ id, icon: Icon, title, desc }) => (
              <div
                key={id}
                className="flex w-[200px] shrink-0 snap-start flex-col rounded-2xl border border-[#1f3c8a]/70 bg-[#050f20] p-5 transition-colors hover:border-blue-400/60"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#c9d9ee] text-[#3b6fd4]">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mb-2 text-[11px] font-medium text-white/80">
                  {id}
                </p>

                <h4 className="mb-3 min-h-[44px] text-[15px] font-medium leading-[1.3] text-white">
                  {title}
                </h4>

                <p className="mt-auto text-[11.5px] leading-[1.45] text-white/80">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MfgChallenges;