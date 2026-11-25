import React from "react";
import { Factory, Cog, Wrench, PackageOpen } from "lucide-react";

// 👉 Extension (.png/.jpg/.webp) aur path apne project ke hisaab se check kar lena
import expertiseImg from "../../../assets/Industry/manufacturingExpertise.png";

const features = [
  {
    icon: Factory,
    title: "Digital Manufacturing",
    desc: "End-to-end visibility across production",
  },
  {
    icon: Cog,
    title: "Process Automation",
    desc: "Reduce manual work and improve efficiency",
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance",
    desc: "Minimize downtime and maximize uptime",
  },
  {
    icon: PackageOpen,
    title: "Supply Chain Visibility",
    desc: "Real-time tracking from source to delivery",
  },
];

const MfgExpertise = () => {
  return (
    <section className="w-full bg-transparent px-6 py-16 font-sans md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        {/* Top row: image + content */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src={expertiseImg}
              alt="Manufacturing Expertise"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-8 inline-block text-[13px] font-medium tracking-wide text-blue-300">
              Our Manufacturing Expertise
            </div>

            <h2 className="mb-6 text-[28px] font-semibold leading-[1.15] text-white md:text-[34px]">
              Powering the Future of <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">Manufacturing</span>
            </h2>

            <p className="max-w-[600px] text-[14px] leading-[1.6] text-white/85">
              We help manufacturing businesses modernize operations, streamline
              production, improve product quality and build resilient supply
              chains with innovative digital solutions.
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

export default MfgExpertise;