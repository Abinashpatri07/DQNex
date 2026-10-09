import React from "react";
import {
  Store,
  Megaphone,
  PackageSearch,
  Building2,
  Rocket,
  Users,
} from "lucide-react";

// 👉 Image ka path/name apne project ke hisaab se check kar lena
import commerceImg from "../../../assets/Industry/E-Commerce Industry.png";

const features = [
  {
    icon: Store,
    title: "D2C Platforms",
    desc: "Build high-performing online stores",
  },
  {
    icon: Megaphone,
    title: "Marketplace Solutions",
    desc: "Multi-vendor and scalable ecosystems",
  },
  {
    icon: PackageSearch,
    title: "Omnichannel Retail",
    desc: "Unified shopping across all channels",
  },
  {
    icon: Building2,
    title: "Enterprise Commerce",
    desc: "Tailored solutions for large-scale businesses",
  },
];

const DigitalCommerce = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#050d1c] via-[#061426] to-[#071a33] px-6 py-16 font-sans md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        {/* Top row: image + content */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* Left Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={commerceImg}
                alt="Digital Commerce"
                className="h-auto w-full object-cover"
              />

              {/* Widget 1 */}
              <div className="absolute left-4 top-4 flex items-center gap-3 rounded-xl border border-white/20 bg-[#0a1931]/50 p-3 shadow-xl backdrop-blur-md md:left-5 md:top-5">
                <div className="rounded-lg bg-green-500/20 p-2 text-green-400">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[15px] font-bold leading-tight text-white">
                    8.4M+
                  </p>
                  <p className="text-[10px] text-gray-300">Happy Customers</p>
                </div>
              </div>

              {/* Widget 2 */}
              <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl border border-blue-400/40 bg-[#0a1931]/60 p-3 shadow-xl backdrop-blur-md md:bottom-5 md:right-5">
                <div className="rounded-lg bg-blue-600 p-2 text-white">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[15px] font-bold leading-tight text-white">
                    1300+
                  </p>
                  <p className="text-[10px] text-blue-100">
                    Orders Items Launched
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-8 inline-block rounded-full border border-blue-400/40 bg-gradient-to-b from-[#4a7fc1] to-[#2f5a96] px-6 py-2 text-[12px] font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]">
              E-Commerce Industry
            </div>

            <h2 className="mb-6 text-[28px] font-semibold leading-[1.15] text-white md:text-[34px]">
              Digital Commerce for a <br />
              <span className="text-[#5ec4e0]">Connected World</span>
            </h2>

            <p className="max-w-[600px] text-[14px] leading-[1.6] text-white/85">
              We help e-commerce businesses design, build, and scale digital
              platforms with the right mix of technology, automation, and data
              to deliver exceptional customer experiences across every channel.
            </p>
          </div>
        </div>

        {/* Bottom row: 4 features */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#1e3a63] bg-[#08172d] text-[#5b9be0]">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <h4 className="mb-1 text-[14px] font-semibold text-white">
                  {title}
                </h4>
                <p className="text-[13px] leading-[1.5] text-white/70">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalCommerce;