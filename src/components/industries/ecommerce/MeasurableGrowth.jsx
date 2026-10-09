import React from "react";
import {
  ArrowRight,
  ChevronRight,
  BrainCircuit,
  ShoppingCart,
  Package,
  Settings,
  Users,
  Store,
  User,
  TrendingUp,
} from "lucide-react";

// 👉 Image ka path/name apne project ke hisaab se check kar lena
import solutionsBg from "../../../assets/Industry/EcommerceOurSolutions.png";

const solutions = [
  {
    icon: BrainCircuit,
    title: "AI-Driven Personalization",
    desc: "Recommend the right products to the right customers.",
  },
  {
    icon: ShoppingCart,
    title: "Seamless Checkout",
    desc: "Frictionless, secure, and faster payments.",
  },
  {
    icon: Package,
    title: "Inventory Optimization",
    desc: "Real-time tracking and demand forecasting.",
  },
  {
    icon: Settings,
    title: "Omnichannel Experience",
    desc: "Consistent shopping across web, mobile, and stores.",
  },
];

const stats = [
  { icon: Users, value: "300+", label: "E-Commerce Clients" },
  { icon: Store, value: "1,300+", label: "Stores Launched" },
  { icon: User, value: "8.4M+", label: "End Customers" },
  { icon: TrendingUp, value: "40%+", label: "Avg. Conversion Growth" },
];

const MeasurableGrowth = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#050d1c] via-[#061426] to-[#071a33] px-6 py-16 font-sans md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        {/* Badge (card ke bahar, upar) */}
        <div className="mb-6 inline-block rounded-full border border-blue-400/40 bg-gradient-to-b from-[#4a7fc1] to-[#2f5a96] px-6 py-2 text-[12px] font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]">
          Our Solutions
        </div>

        {/* Main card with background image */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#081a34]">
          <img
            src={solutionsBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />

          {/* Left side readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1c]/90 via-[#050d1c]/60 to-transparent lg:via-[#050d1c]/40" />

          <div className="relative z-10 grid items-center gap-10 p-6 md:p-10 lg:grid-cols-[0.85fr_0.85fr_1.1fr] lg:gap-8 lg:p-12">
            {/* Left Column */}
            <div>
              <h2 className="mb-6 text-[28px] font-semibold leading-[1.15] text-white md:text-[34px]">
                From Challenges to <br />
                <span className="text-[#5ec4e0]">Measurable Growth</span>
              </h2>

              <p className="mb-14 max-w-[360px] text-[13px] leading-[1.6] text-white/90 [text-shadow:0_1px_8px_rgba(5,13,28,0.9)]">
                We combine strategy, technology, and AI to create seamless,
                scalable, and profitable e-commerce experiences.
              </p>

              <button className="flex w-max items-center gap-3 rounded-full bg-[#3b6fb5] px-7 py-3.5 text-[14px] font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[#4a7fc1]">
                View all Solution
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Middle Column: glass cards */}
            <div className="flex flex-col gap-3">
              {solutions.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group flex cursor-pointer items-center gap-4 rounded-xl border border-white/15 bg-[#0a1e3a]/55 p-4 shadow-xl backdrop-blur-md transition-colors hover:border-blue-400/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#050d1c]/70 text-white/90 transition-colors group-hover:bg-blue-500">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-[14px] font-medium text-white">
                      {title}
                    </h4>
                    <p className="text-[12px] leading-[1.45] text-white/70">
                      {desc}
                    </p>
                  </div>

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#050d1c]/70 text-white/80">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: image ka phone/cart dikhne ke liye khali space */}
            <div className="hidden min-h-[380px] lg:block" />
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-4 grid gap-6 rounded-2xl border border-[#1f3c8a]/60 bg-[#0a1e3a]/80 p-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:p-6">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={`flex items-center gap-4 lg:px-6 ${
                i !== 0 ? "lg:border-l lg:border-[#1e3a63]" : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1e3a63] bg-[#050d1c] text-[#7db4ec]">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[20px] font-medium leading-tight text-white">
                  {value}
                </p>
                <p className="text-[12px] text-white/60">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeasurableGrowth;