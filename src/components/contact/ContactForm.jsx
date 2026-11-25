import React, { useRef, useState } from "react";
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
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { submitContactForm } from "../../utils/contactApi";
import ScheduleMeetingModal from "./ScheduleMeetingModal";

const inputBase =
  "w-full rounded-lg border border-white/10 bg-[#0a1a30]/80 py-[9px] pl-10 pr-3 text-[11px] text-white placeholder:text-white/60 outline-none transition-colors focus:border-[#3b82f6]/70";

const iconWrap =
  "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/60";

const Pill = ({ children }) => (
  <span className="text-[13px] font-medium tracking-wide text-blue-300">
    {children}
  </span>
);

const contactItems = [
  {
    title: "Call Us",
    highlight: "+91 8971560101",
    desc: "Mon - Sat, 10:00 AM - 7:00 PM",
    icon: PhoneCall,
    href: "tel:+918971560101",
    circle:
      "bg-[#3a2f1c] border border-[#f59e0b]/30 text-[#f59e0b]",
  },
  {
    title: "Chat on WhatsApp",
    highlight: "+91 8971560101",
    desc: "Get quick support on WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/918971560101",
    external: true,
    circle:
      "bg-gradient-to-b from-[#22c55e] to-[#15803d] text-white shadow-[0_0_14px_rgba(34,197,94,0.35)]",
  },
  {
    title: "Email Us",
    highlight: "info@dqnex.com",
    desc: "We usually respond within 24 hours",
    icon: Mail,
    href: "mailto:info@dqnex.com",
    circle:
      "bg-gradient-to-b from-[#1d4ed8] to-[#1e3a8a] border border-[#60a5fa]/40 text-[#bfdbfe] shadow-[0_0_14px_rgba(59,130,246,0.35)]",
  },
  {
    title: "Schedule a Meeting",
    highlight: null,
    desc: "Book a free consultation with our experts",
    icon: Calendar,
    action: "schedule",
    circle:
      "bg-gradient-to-b from-[#8b5cf6] to-[#4c1d95] border border-[#c4b5fd]/30 text-white shadow-[0_0_14px_rgba(139,92,246,0.35)]",
  },
];

const ContactForm = () => {
  const nameInputRef = useRef(null);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [statusMsg, setStatusMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Strictly allow numbers only (0-9) and max 10 digits
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
      if (errors.phone && digitsOnly.length === 10) {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    } else if (/\d/.test(formData.fullName)) {
      newErrors.fullName = "Name cannot contain numbers.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required.";
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail) {
      newErrors.email = "Work email is required.";
    } else if (/^\d/.test(trimmedEmail)) {
      newErrors.email = "Email cannot start with a number. Please start with a letter.";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid work email address (e.g. name@company.com).";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!formData.service) {
      newErrors.service = "Please select what you are looking for.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");
    setStatusMsg("");

    try {
      const data = await submitContactForm(formData);
      if (data.success) {
        setStatus("success");
        setStatusMsg(
          data.message ||
            "Thank you! Your message has been sent successfully. We will get back to you shortly."
        );
        setFormData({
          fullName: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus("error");
        setStatusMsg(
          data.message || "Failed to send message. Please check SMTP backend."
        );
      }
    } catch (err) {
      setStatus("error");
      setStatusMsg(
        err.message ||
          "Failed to connect to backend server. Please verify SMTP backend is running."
      );
    }
  };

  return (
    <section id="contact-form" className="relative w-full scroll-mt-24 bg-gradient-to-b from-[#050d1c] to-[#071a33] px-6 py-10 font-sans md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1190px] flex-col gap-5 lg:flex-row lg:items-stretch">
        {/* ── Left: Form ── */}
        <div className="flex-1 rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,55,110,0.55)_0%,rgba(8,20,40,0.85)_55%,rgba(8,18,36,0.9)_100%)] p-5 backdrop-blur-md md:p-6">
          <Pill>Get in Touch</Pill>

          <h2 className="mb-6 mt-5 text-[28px] font-medium leading-tight text-white md:text-[34px]">
            Send Us a{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Message
            </span>
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
            <input type="hidden" name="from_name" value="DQNex Contact Page Form" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative">
                <div className={iconWrap}>
                  <User className="h-[14px] w-[14px]" strokeWidth={1.5} />
                </div>
                <input
                  ref={nameInputRef}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Full Name *"
                  className={`w-full rounded-lg border bg-[#0a1a30]/80 py-[9px] pl-10 pr-3 text-[11px] text-white placeholder:text-white/60 outline-none transition-colors ${
                    errors.fullName
                      ? "border-red-500/80 focus:border-red-500 ring-1 ring-red-500/20"
                      : "border-white/10 focus:border-[#3b82f6]/70"
                  }`}
                />
                {errors.fullName && (
                  <span className="text-[10px] text-red-400 mt-1 ml-1 block">
                    {errors.fullName}
                  </span>
                )}
              </div>

              <div className="relative">
                <div className={iconWrap}>
                  <Building2 className="h-[14px] w-[14px]" strokeWidth={1.5} />
                </div>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Company Name *"
                  className={`w-full rounded-lg border bg-[#0a1a30]/80 py-[9px] pl-10 pr-3 text-[11px] text-white placeholder:text-white/60 outline-none transition-colors ${
                    errors.company
                      ? "border-red-500/80 focus:border-red-500 ring-1 ring-red-500/20"
                      : "border-white/10 focus:border-[#3b82f6]/70"
                  }`}
                />
                {errors.company && (
                  <span className="text-[10px] text-red-400 mt-1 ml-1 block">
                    {errors.company}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative">
                <div className={iconWrap}>
                  <Mail className="h-[14px] w-[14px]" strokeWidth={1.5} />
                </div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Work Email *"
                  className={`w-full rounded-lg border bg-[#0a1a30]/80 py-[9px] pl-10 pr-3 text-[11px] text-white placeholder:text-white/60 outline-none transition-colors ${
                    errors.email
                      ? "border-red-500/80 focus:border-red-500 ring-1 ring-red-500/20"
                      : "border-white/10 focus:border-[#3b82f6]/70"
                  }`}
                />
                {errors.email && (
                  <span className="text-[10px] text-red-400 mt-1 ml-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="relative">
                <div className={iconWrap}>
                  <PhoneCall className="h-[14px] w-[14px]" strokeWidth={1.5} />
                </div>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel"
                  maxLength={10}
                  placeholder="Phone Number (10 digits) *"
                  className={`w-full rounded-lg border bg-[#0a1a30]/80 py-[9px] pl-10 pr-[72px] text-[11px] text-white placeholder:text-white/60 outline-none transition-colors ${
                    errors.phone
                      ? "border-red-500/80 focus:border-red-500 ring-1 ring-red-500/20"
                      : "border-white/10 focus:border-[#3b82f6]/70"
                  }`}
                />
                <div className="absolute inset-y-0 right-0 flex items-center gap-1.5 border-l border-white/10 px-3">
                  <span className="text-[13px] leading-none">🇮🇳</span>
                  <span className="text-[10px] font-medium text-white/80">+91</span>
                </div>
                {errors.phone && (
                  <span className="text-[10px] text-red-400 mt-1 ml-1 block">
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            <div className="relative">
              <div className={iconWrap}>
                <Briefcase className="h-[14px] w-[14px]" strokeWidth={1.5} />
              </div>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`w-full appearance-none rounded-lg border bg-[#0a1a30]/80 py-[9px] pl-10 pr-10 text-[11px] ${
                  formData.service ? "text-white" : "text-white/60"
                } outline-none transition-colors ${
                  errors.service
                    ? "border-red-500/80 focus:border-red-500 ring-1 ring-red-500/20"
                    : "border-white/10 focus:border-[#3b82f6]/70"
                }`}
              >
                <option value="" disabled>
                  What are you looking for? *
                </option>
                <option value="AI Engineering">AI Engineering</option>
                <option value="Advisory">Advisory</option>
                <option value="Engineering">Engineering</option>
                <option value="Optimization">Optimization</option>
                <option value="ERPNeX">ERPNeX</option>
                <option value="VerifyNeX">VerifyNeX</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-white/60">
                <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
              </div>
              {errors.service && (
                <span className="text-[10px] text-red-400 mt-1 ml-1 block">
                  {errors.service}
                </span>
              )}
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-3.5 top-3.5 text-white/60">
                <MessageSquare className="h-[14px] w-[14px]" strokeWidth={1.5} />
              </div>
              <textarea
                name="message"
                rows={5}
                maxLength={500}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project (min 10 characters) *"
                className={`min-h-[120px] w-full resize-none rounded-lg border bg-[#0a1a30]/80 py-3 pl-10 pr-3 text-[11px] text-white placeholder:text-white/60 outline-none transition-colors ${
                  errors.message
                    ? "border-red-500/80 focus:border-red-500 ring-1 ring-red-500/20"
                    : "border-white/10 focus:border-[#3b82f6]/70"
                }`}
              />
              <div className="pointer-events-none absolute bottom-3 right-4 text-[10px] text-white/50">
                {formData.message.length}/500
              </div>
              {errors.message && (
                <span className="text-[10px] text-red-400 mt-1 ml-1 block">
                  {errors.message}
                </span>
              )}
            </div>

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 p-3 text-xs text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{statusMsg}</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg bg-rose-500/15 border border-rose-500/30 p-3 text-xs text-rose-300">
                <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                <span>{statusMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-1 flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#3b6fb5] py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#4a7fc1] disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <ArrowRight className="h-4 w-4" />
                </>
              )}
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
            We're Here to{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Help
            </span>
          </h2>

          <div className="flex flex-col gap-4">
            {contactItems.map(({ title, highlight, desc, icon: Icon, circle, href, external, action }) => {
              const cardClasses =
                "group flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#0a1424]/60 px-4 py-3.5 text-left transition-colors hover:border-[#3b82f6]/50";

              const cardContent = (
                <>
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
                </>
              );

              if (href) {
                return (
                  <a
                    key={title}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className={cardClasses}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => {
                    if (action === "schedule") {
                      setIsSchedulerOpen(true);
                    }
                  }}
                  className={cardClasses}
                >
                  {cardContent}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <ScheduleMeetingModal
        isOpen={isSchedulerOpen}
        onClose={() => setIsSchedulerOpen(false)}
      />
    </section>
  );
};

export default ContactForm;