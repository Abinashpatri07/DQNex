import React, { useState } from "react";
import {
  PhoneCall,
  MessageCircle,
  Mail,
  Calendar,
  ArrowRight,
  ChevronRight,
  User,
  Building2,
  Briefcase,
  MessageSquare,
  Lock,
  ChevronDown,
} from "lucide-react";

const inputBase =
  "w-full rounded-lg border border-white/10 bg-[#0a1a30]/80 py-[9px] pl-10 pr-3 text-[11px] text-white placeholder:text-white/60 outline-none transition-colors focus:border-[#3b82f6]/70";

const iconWrap =
  "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/60";

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-6 py-[9px] text-[12px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.3),inset_0_1px_0_rgba(190,215,255,0.45)]">
    {children}
  </span>
);

const contactItems = [
  {
    title: "Call Us",
    highlight: "+91 8553529594",
    desc: "Mon - Sat, 10:00 AM - 7:00 PM",
    icon: PhoneCall,
    circle:
      "bg-[#3a2f1c] border border-[#f59e0b]/30 text-[#f59e0b]",
  },
  {
    title: "Chat on WhatsApp",
    highlight: "+91 8553529594",
    desc: "Get quick support on WhatsApp",
    icon: MessageCircle,
    circle:
      "bg-gradient-to-b from-[#22c55e] to-[#15803d] text-white shadow-[0_0_14px_rgba(34,197,94,0.35)]",
  },
  {
    title: "Email Us",
    highlight: "info@dqnex.com",
    desc: "We usually respond within 24 hours",
    icon: Mail,
    circle:
      "bg-gradient-to-b from-[#1d4ed8] to-[#1e3a8a] border border-[#60a5fa]/40 text-[#bfdbfe] shadow-[0_0_14px_rgba(59,130,246,0.35)]",
  },
  {
    title: "Schedule a Meeting",
    highlight: null,
    desc: "Book a free consultation with our experts",
    icon: Calendar,
    circle:
      "bg-gradient-to-b from-[#8b5cf6] to-[#4c1d95] border border-[#c4b5fd]/30 text-white shadow-[0_0_14px_rgba(139,92,246,0.35)]",
  },
];

const ContactForm = () => {
  const [message, setMessage] = useState("");

  return (
    <section className="relative w-full bg-gradient-to-b from-[#050d1c] to-[#071a33] px-6 py-10 font-sans md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1190px] flex-col gap-5 lg:flex-row lg:items-stretch">
        {/* ── Left: Form ── */}
        <div className="flex-1 rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,55,110,0.55)_0%,rgba(8,20,40,0.85)_55%,rgba(8,18,36,0.9)_100%)] p-5 backdrop-blur-md md:p-6">
          <Pill>Get in Touch</Pill>

          <h2 className="mb-6 mt-5 text-[28px] font-medium leading-tight text-white md:text-[34px]">
            Send Us a <span className="text-[#8fd3ee]">Message</span>
          </h2>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative">
                <div className={iconWrap}>
                  <User className="h-[14px] w-[14px]" strokeWidth={1.5} />
                </div>
                <input type="text" placeholder="Full Name *" className={inputBase} />
              </div>

              <div className="relative">
                <div className={iconWrap}>
                  <Building2 className="h-[14px] w-[14px]" strokeWidth={1.5} />
                </div>
                <input type="text" placeholder="Company Name *" className={inputBase} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative">
                <div className={iconWrap}>
                  <Mail className="h-[14px] w-[14px]" strokeWidth={1.5} />
                </div>
                <input type="email" placeholder="Work Email *" className={inputBase} />
              </div>

              <div className="relative">
                <div className={iconWrap}>
                  <PhoneCall className="h-[14px] w-[14px]" strokeWidth={1.5} />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className={`${inputBase} pr-[72px]`}
                />
                <div className="absolute inset-y-0 right-0 flex items-center gap-1.5 border-l border-white/10 px-3">
                  <span className="text-[13px] leading-none">🇮🇳</span>
                  <span className="text-[10px] font-medium text-white/80">+91</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className={iconWrap}>
                <Briefcase className="h-[14px] w-[14px]" strokeWidth={1.5} />
              </div>
              <select
                defaultValue=""
                className={`${inputBase} appearance-none pr-10 text-white/60`}
              >
                <option value="" disabled>
                  What are you looking for? *
                </option>
                <option value="ai">AI Engineering</option>
                <option value="advisory">Advisory</option>
                <option value="engineering">Engineering</option>
                <option value="optimization">Optimization</option>
                <option value="erpnex">ERPNeX</option>
                <option value="verifynex">VerifyNeX</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-white/60">
                <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-3.5 top-3.5 text-white/60">
                <MessageSquare className="h-[14px] w-[14px]" strokeWidth={1.5} />
              </div>
              <textarea
                rows={5}
                maxLength={500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project *"
                className="min-h-[120px] w-full resize-none rounded-lg border border-white/10 bg-[#0a1a30]/80 py-3 pl-10 pr-3 text-[11px] text-white placeholder:text-white/60 outline-none transition-colors focus:border-[#3b82f6]/70"
              />
              <div className="pointer-events-none absolute bottom-3 right-4 text-[10px] text-white/50">
                {message.length}/500
              </div>
            </div>

            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#3b6fb5] py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#4a7fc1]"
            >
              Let's Talk <ArrowRight className="h-4 w-4" />
            </button>

            <p className="flex items-center gap-2 text-[10px] text-[#b4c0d0]">
              <Lock className="h-3 w-3 shrink-0" strokeWidth={1.6} />
              Your information is safe with us. We never share your data with third parties.
            </p>
          </form>
        </div>

        {/* ── Right: Contact options ── */}
        <div className="w-full rounded-[20px] border border-white/10 bg-[rgba(20,30,46,0.7)] p-5 backdrop-blur-md md:p-6 lg:w-[370px] lg:shrink-0">
          <Pill>Way to Reach Us</Pill>

          <h2 className="mb-6 mt-5 text-[28px] font-medium leading-tight text-white md:text-[34px]">
            We're Here to <span className="text-[#8fd3ee]">Help</span>
          </h2>

          <div className="flex flex-col gap-4">
            {contactItems.map(({ title, highlight, desc, icon: Icon, circle }) => (
              <div
                key={title}
                className="group flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#0a1424]/60 px-4 py-3.5 transition-colors hover:border-[#3b82f6]/50"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${circle}`}
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                  </span>

                  <div className="leading-tight">
                    <p className="text-[14px] font-normal text-white">{title}</p>
                    {highlight && (
                      <p className="mt-1 text-[11px] font-semibold text-white">{highlight}</p>
                    )}
                    <p className="mt-1 max-w-[190px] text-[10px] leading-[1.35] text-[#b4c0d0]">
                      {desc}
                    </p>
                  </div>
                </div>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/70 transition-colors group-hover:border-[#3b82f6]/60 group-hover:text-white">
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;