import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import GlobeHero from "./GlobeHero";
import newsletterImg from "/src/assets/homesubscribe.png";
import { submitContactForm, submitNewsletter } from "../../utils/contactApi";

const ContactSection = ({ showTop = false }) => {
  // Newsletter globe ka mouse-tilt (degrees)
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Contact Form state (SMTP Nodemailer Backend)
  const [contactStatus, setContactStatus] = useState("idle");
  const [contactMsg, setContactMsg] = useState("");

  // Controlled form state & validation errors
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    message: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  // Newsletter state (SMTP Nodemailer Backend)
  const [newsStatus, setNewsStatus] = useState("idle");
  const [newsMsg, setNewsMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phone") {
      // Strictly allow numbers only (0-9) and max 10 digits
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
      if (errors.phone && digitsOnly.length === 10) {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateContactForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters.";
    } else if (/\d/.test(formData.firstName)) {
      newErrors.firstName = "Name cannot contain numbers.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters.";
    } else if (/\d/.test(formData.lastName)) {
      newErrors.lastName = "Name cannot contain numbers.";
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail) {
      newErrors.email = "Work email is required.";
    } else if (/^\d/.test(trimmedEmail)) {
      newErrors.email = "Email cannot start with a number. Please start with a letter.";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address (e.g. name@company.com).";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    if (!formData.terms) {
      newErrors.terms = "Please accept the Terms & Conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!validateContactForm()) return;

    setContactStatus("loading");
    setContactMsg("");

    try {
      const data = await submitContactForm(formData);
      if (data.success) {
        setContactStatus("success");
        setContactMsg(data.message || "Thank you! Your message has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          jobTitle: "",
          message: "",
          terms: false,
        });
        setErrors({});
      } else {
        setContactStatus("error");
        setContactMsg(
          data.message || "Failed to send message. Please check SMTP backend."
        );
      }
    } catch (err) {
      setContactStatus("error");
      setContactMsg(err.message || "Failed to connect to backend server. Please check SMTP backend.");
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsStatus("idle");
    setNewsMsg("");

    const formData = new FormData(e.target);
    const email = (formData.get("email") || "").trim();

    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setNewsStatus("error");
      setNewsMsg("Email address is required.");
      return;
    }
    if (/^\d/.test(email)) {
      setNewsStatus("error");
      setNewsMsg("Email cannot start with a number. Please start with a letter.");
      return;
    }
    if (!emailRegex.test(email)) {
      setNewsStatus("error");
      setNewsMsg("Please enter a valid email address.");
      return;
    }

    setNewsStatus("loading");

    try {
      const data = await submitNewsletter(email);
      if (data.success) {
        setNewsStatus("success");
        setNewsMsg(data.message || "Subscribed! Thank you for joining our newsletter.");
        e.target.reset();
      } else {
        setNewsStatus("error");
        setNewsMsg(
          data.message || "Subscription failed. Please try again."
        );
      }
    } catch (err) {
      setNewsStatus("error");
      setNewsMsg(err.message || "Failed to connect to backend server. Please try again later.");
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 28, y: -py * 20 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="w-full bg-transparent">
      {/* Newsletter globe float animation */}
      <style>{`
        @keyframes globeFloat {
          0%, 100% { transform: translateY(0) rotateY(-8deg) rotateZ(-1deg); }
          50%      { transform: translateY(-14px) rotateY(8deg) rotateZ(1deg); }
        }
        .globe-float { animation: globeFloat 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .globe-float { animation: none; }
        }
      `}</style>

      <section className="w-full max-w-[1500px] mx-auto pt-16 pb-8 px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 text-white font-sans flex flex-col gap-8">

        {/* Top Section */}
        {showTop && (
          <div className="relative flex flex-col border border-gray-800/60 rounded-[32px] p-8 lg:p-12 bg-[#08101E] backdrop-blur-sm shadow-2xl overflow-hidden">

            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center mb-10">
              <h2 className="text-[26px] font-semibold leading-tight text-white md:text-[30px] lg:text-[36px]">
                Let's Build{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-400 to-orange-500 bg-clip-text text-transparent">
                  What's Next
                </span>
              </h2>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-8">

              {/* Left: real 3D globe (height matches right box exactly) */}
              <div className="w-full lg:w-1/2 min-h-[380px] lg:min-h-0 flex flex-col self-stretch">
                <GlobeHero />
              </div>

              {/* Right Form */}
              <div className="relative w-full lg:w-1/2 bg-[#121E31] rounded-2xl p-6 lg:p-8 border border-blue-500/20 shadow-none">

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl pointer-events-none" />

                <div className="relative z-10 text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    Get in Touch
                  </h3>

                  <p className="text-gray-400 text-xs max-w-[280px] mx-auto leading-relaxed">
                    We're here to help. Fill out the form and our team will get
                    back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="relative z-10 flex flex-col gap-2.5">
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                  <input type="hidden" name="from_name" value="DQNex Get in Touch" />

                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="w-full">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name *"
                        className={`w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none transition-colors border ${
                          errors.firstName
                            ? "border-red-500/80 focus:border-red-500"
                            : "border-gray-700/50 focus:border-blue-500"
                        } placeholder-gray-500`}
                      />
                      {errors.firstName && (
                        <span className="text-[10px] text-red-400 mt-0.5 ml-1 block">
                          {errors.firstName}
                        </span>
                      )}
                    </div>

                    <div className="w-full">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name *"
                        className={`w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none transition-colors border ${
                          errors.lastName
                            ? "border-red-500/80 focus:border-red-500"
                            : "border-gray-700/50 focus:border-blue-500"
                        } placeholder-gray-500`}
                      />
                      {errors.lastName && (
                        <span className="text-[10px] text-red-400 mt-0.5 ml-1 block">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="w-full">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Work Email *"
                        className={`w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none transition-colors border ${
                          errors.email
                            ? "border-red-500/80 focus:border-red-500"
                            : "border-gray-700/50 focus:border-blue-500"
                        } placeholder-gray-500`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-400 mt-0.5 ml-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="w-full">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        maxLength={10}
                        placeholder="Phone Number (10 digits) *"
                        className={`w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none transition-colors border ${
                          errors.phone
                            ? "border-red-500/80 focus:border-red-500"
                            : "border-gray-700/50 focus:border-blue-500"
                        } placeholder-gray-500`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-400 mt-0.5 ml-1 block">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="w-full">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        className="w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700/50 focus:border-blue-500 placeholder-gray-500"
                      />
                    </div>

                    <div className="w-full">
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        placeholder="Job Title"
                        className="w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700/50 focus:border-blue-500 placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals or any specific requirements. *"
                      rows="4"
                      className={`w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none transition-colors border ${
                        errors.message
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-gray-700/50 focus:border-blue-500"
                      } placeholder-gray-500 resize-none mt-1`}
                    />
                    {errors.message && (
                      <span className="text-[10px] text-red-400 ml-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 rounded border-gray-600 bg-[#1b273d] focus:ring-blue-500 focus:ring-offset-0"
                      />

                      <label
                        htmlFor="terms"
                        className="text-gray-400 text-[10px]"
                      >
                        Confirm our Term & Conditions{" "}
                        <span className="font-semibold text-white cursor-pointer hover:underline">
                          Read More...
                        </span>
                      </label>
                    </div>
                    {errors.terms && (
                      <span className="text-[10px] text-red-400 mt-1 ml-1 block">
                        {errors.terms}
                      </span>
                    )}
                  </div>

                  {contactStatus === "success" && (
                    <div className="flex items-center gap-2 rounded-md bg-emerald-500/15 border border-emerald-500/30 px-3 py-2 text-xs text-emerald-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{contactMsg}</span>
                    </div>
                  )}

                  {contactStatus === "error" && (
                    <div className="flex items-center gap-2 rounded-md bg-rose-500/15 border border-rose-500/30 px-3 py-2 text-xs text-rose-300">
                      <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                      <span>{contactMsg}</span>
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={contactStatus === "loading"}
                      className="flex items-center justify-center gap-2 bg-[#4682D3] hover:bg-[#346bb3] disabled:opacity-60 transition-colors text-white font-medium py-2 px-5 rounded text-xs shadow-lg"
                    >
                      {contactStatus === "loading" ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          className="relative w-full overflow-hidden rounded-[30px] border border-[#2a62b0]/50 bg-gradient-to-r from-[#10213c] via-[#0c1a33] to-[#030a18] shadow-2xl md:min-h-[290px]"
        >

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_90%_at_0%_15%,rgba(80,105,140,0.5),transparent_70%)]" />

          {/* Globe (3D float + mouse tilt) */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-[140px] opacity-80 mix-blend-screen md:h-[94%] md:opacity-100"
            style={{ perspective: "1000px" }}
          >
            <div className="globe-float h-full" style={{ transformStyle: "preserve-3d" }}>
              <img
                src={newsletterImg}
                alt="Subscribe to DQNeX newsletter"
                className="h-full w-auto max-w-none will-change-transform"
                style={{
                  transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                  transition: "transform 0.2s ease-out",
                }}
              />
            </div>
          </div>

          {/* Newsletter Content */}
          <div className="relative z-10 flex flex-col items-start px-7 pb-40 pt-9 md:max-w-[62%] md:px-12 md:pb-14 lg:pl-[68px]">

            <h3 className="text-[26px] font-semibold leading-tight text-white md:text-[30px] lg:text-[36px]">
              Subscribe to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-400 to-orange-500 bg-clip-text text-transparent">
                our Newsletter
              </span>
            </h3>

            <p className="mt-3 text-[13px] text-gray-300/90">
              Stay ahead with the latest From DQNeX.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="mt-10 flex w-full max-w-[470px] flex-col gap-1.5 sm:flex-row">
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
              <input type="hidden" name="from_name" value="DQNex Newsletter Subscriber" />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="h-[42px] flex-1 rounded-lg bg-[#f7f6ff] px-4 text-[13px] text-gray-900 placeholder:text-[12px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={newsStatus === "loading"}
                className="flex items-center justify-center gap-2 h-[42px] whitespace-nowrap rounded-lg bg-[#3b68ad] px-6 font-['Poppins'] text-[13px] font-medium tracking-wider text-white shadow-lg transition-colors hover:bg-[#4a7ac2] disabled:opacity-60"
              >
                {newsStatus === "loading" ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Get Started"
                )}
              </button>
            </form>

            {newsStatus === "success" && (
              <div className="mt-3 flex items-center gap-2 rounded-md bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 text-xs text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{newsMsg}</span>
              </div>
            )}

            {newsStatus === "error" && (
              <div className="mt-3 flex items-center gap-2 rounded-md bg-rose-500/15 border border-rose-500/30 px-3 py-1.5 text-xs text-rose-300">
                <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                <span>{newsMsg}</span>
              </div>
            )}
          </div>
        </div>

      </section>
    </div>
  );
};

export default ContactSection;