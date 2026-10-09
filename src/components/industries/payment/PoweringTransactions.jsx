import React from "react";
import { Banknote, Monitor, Receipt, ShieldCheck } from "lucide-react";

// 👉 Extension (.png/.jpg/.webp) aur path apne project ke hisaab se check kar lena
import paymentImg from "../../../assets/Industry/paymentIndustry.png";

const features = [
  {
    icon: Banknote,
    title: "Online Payments",
    desc: "Accept payments across web, mobile and apps",
  },
  {
    icon: Monitor,
    title: "Payment Gateway",
    desc: "Secure and scalable infrastructure",
  },
  {
    icon: Receipt,
    title: "Subscription Billing",
    desc: "Automate recurring payments",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Prevention",
    desc: "AI-driven risk detection and transaction security",
  },
];

const PoweringTransactions = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#050d1c] via-[#061426] to-[#071a33] px-6 py-16 font-sans md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        {/* Top row: image + content */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src={paymentImg}
              alt="Digital Payments"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-8 inline-block rounded-full border border-blue-400/40 bg-gradient-to-b from-[#4a7fc1] to-[#2f5a96] px-6 py-2 text-[12px] font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]">
              Payment Industry
            </div>

            <h2 className="mb-6 text-[28px] font-semibold leading-[1.15] text-white md:text-[34px]">
              Powering Transactions <br />
              for <span className="text-[#5ec4e0]">Modern Businesses</span>
            </h2>

            <p className="max-w-[600px] text-[14px] leading-[1.6] text-white/85">
              We help businesses build secure, reliable, and scalable payment
              systems with the right mix of technology, automation, and
              compliance to deliver smooth and trusted payment experiences
              across every channel.
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

export default PoweringTransactions;