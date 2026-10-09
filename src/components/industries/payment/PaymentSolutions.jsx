import React from "react";
import {
  ChevronRight,
  ArrowRight,
  User,
  ShieldCheck,
  Receipt,
  RefreshCw,
  Store,
  FileCheck,
  Target,
  TrendingUp,
} from "lucide-react";

// 👉 Extension (.png/.jpg/.webp) aur path apne project ke hisaab se check kar lena
import solutionsBg from "../../../assets/Industry/paymentOurSoluions.png";

const solutions = [
  {
    icon: User,
    title: "Payment Gateway Integration",
    desc: "Support for multiple providers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    desc: "End-to-end encryption and fraud protection.",
  },
  {
    icon: Receipt,
    title: "Recurring & Subscription Payments",
    desc: "Automate billing and renewals.",
  },
  {
    icon: RefreshCw,
    title: "Multi-Currency Support",
    desc: "Accept payments globally.",
  },
];

const stats = [
  { icon: Store, value: "500+", label: "Businesses Enabled" },
  { icon: FileCheck, value: "1M+", label: "Transactions Processed" },
  { icon: Target, value: "99.9%", label: "Payment Success Rate" },
  { icon: TrendingUp, value: "30%+", label: "Increase in Revenue" },
];

const PaymentSolutions = () => {
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

          <div className="relative z-10 grid items-center gap-10 p-6 md:p-10 lg:grid-cols-[0.9fr_0.85fr_1fr] lg:gap-8 lg:p-8 lg:pl-8">
            {/* Left Column */}
            <div>
              <h2 className="mb-5 text-[30px] font-semibold leading-[1.15] text-white md:text-[34px]">
                From Payment <br />
                Challenges <span className="text-[#5ec4e0]">to Growth</span>
              </h2>

              <p className="mb-16 max-w-[320px] text-[12px] leading-[1.6] text-white/90 [text-shadow:0_1px_8px_rgba(5,13,28,0.9)]">
                We combine strategy, technology, and innovation to build
                seamless, secure, and future-ready payment solutions.
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
                    <h4 className="text-[14px] font-medium leading-[1.3] text-white">
                      {title}
                    </h4>
                    <p className="mt-0.5 text-[11.5px] leading-[1.4] text-white/70">
                      {desc}
                    </p>
                  </div>

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#050d1c]/70 text-white/80">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: image ka shield/cards dikhne ke liye khali space */}
            <div className="hidden min-h-[340px] lg:block" />
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-14 grid gap-6 rounded-2xl border border-[#1f3c8a]/60 bg-[#0a1e3a]/80 p-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:p-6">
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

export default PaymentSolutions;