import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  ShoppingCart,
  Boxes,
  Settings,
} from "lucide-react";

const challenges = [
  {
    icon: Users,
    title: "Customer Acquisition",
    desc: "Rising ad costs and increasing competition make it harder to attract new customers.",
    tile: "bg-[#c9d9ee] text-[#3b6fd4]",
  },
  {
    icon: ShoppingCart,
    title: "Cart Abandonment",
    desc: "Customers drop off due to complex checkout processes and lack of trust.",
    tile: "bg-[#c9d9ee] text-[#3b6fd4]",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    desc: "Make ownership, pending actions, reviewer decisions, and case status visible to the appropriate people.",
    tile: "bg-[#bfe5d3] text-[#1f8a5b]",
  },
  {
    icon: Settings,
    title: "Personalization at Scale",
    desc: "Delivering relevant experiences across millions of users is challenging.",
    tile: "bg-[#bfe5d3] text-[#1f8a5b]",
  },
];

const KeyChallenges = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#050d1c] via-[#061426] to-[#071a33] px-6 py-16 font-sans md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        {/* Badge (card ke bahar, upar) */}
        <div className="mb-6 inline-block rounded-full border border-blue-400/40 bg-gradient-to-b from-[#4a7fc1] to-[#2f5a96] px-6 py-2 text-[12px] font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]">
          E-Commerce Industry
        </div>

        <div className="flex flex-col gap-10 rounded-[28px] bg-gradient-to-br from-[#0a1e3a] to-[#0b2447]/70 p-8 md:p-10 lg:flex-row lg:gap-12 lg:p-12">
          {/* Left Side */}
          <div className="flex flex-col justify-between lg:w-[42%]">
            <div>
              <h2 className="mb-6 text-[28px] font-semibold leading-[1.15] text-white md:text-[34px]">
                Key Challenges in <br />
                <span className="text-[#5ec4e0]">E-Commerce</span>
              </h2>

              <p className="max-w-md text-[14px] leading-[1.6] text-white/90">
                The e-commerce landscape is dynamic and highly competitive.
                Businesses face multiple challenges that impact growth,
                customer satisfaction, and profitability.
              </p>
            </div>

            <div className="mt-10 lg:mt-0">
              <p className="mb-4 text-[13px] font-medium text-[#5b9be0]">
                01/05
              </p>

              <div className="flex gap-3">
                <button
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e3a63] bg-[#08172d] text-white/80 transition-colors hover:border-blue-400/60 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>

                <button
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e3a63] bg-[#08172d] text-white/80 transition-colors hover:border-blue-400/60 hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-4 sm:grid-cols-2 lg:w-[58%]">
            {challenges.map(({ icon: Icon, title, desc, tile }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#1f3c8a]/70 bg-[#050f20] p-5 transition-colors hover:border-blue-400/60"
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${tile}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mb-2 text-[15px] font-medium text-white">
                  {title}
                </h3>

                <p className="text-[11.5px] leading-[1.5] text-white/65">
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

export default KeyChallenges;