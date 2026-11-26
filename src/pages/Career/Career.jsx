import React, { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Briefcase,
  Clock,
  X,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Sparkles,
  Upload,
} from "lucide-react";
import { submitCareerApplication } from "../../utils/contactApi";

const CAREER_AREAS = [
  "Software Engineering",
  "AI & Data Sciences",
  "IT Engineering & Architecture",
  "Consulting & Advisory",
  "IT Infrastructure & Support",
  "Security, Risk & Compliance",
  "Product & Design",
  "Business Process & Support",
  "Apprentice & Interns",
  "Finance & Operations",
  "Human Resources",
  "Marketing & Communications",
  "Sales & Sales Enablement",
  "Program & Project Management",
  "Administration & Operations",
];

const FEATURED_JOBS = [
  {
    id: "se-fullstack",
    title: "FULL STACK SOFTWARE ENGINEER",
    area: "Software Engineering",
    location: "Bengaluru, Karnataka, IN",
    type: "Full-Time • Hybrid",
    experience: "2–4 Years",
    summary:
      "Build scalable React, Node.js, and cloud-native enterprise applications for global clients.",
  },
  {
    id: "ai-engineer",
    title: "AI & AUTOMATION ENGINEER",
    area: "AI & Data Sciences",
    location: "Bengaluru, Karnataka, IN",
    type: "Full-Time • Hybrid",
    experience: "2–5 Years",
    summary:
      "Design agentic AI workflows, LLM integrations, and intelligent process automation pipelines.",
  },
  {
    id: "erp-consultant",
    title: "ERP IMPLEMENTATION CONSULTANT",
    area: "Consulting & Advisory",
    location: "Bengaluru, Karnataka, IN",
    type: "Full-Time • On-Site",
    experience: "3–6 Years",
    summary:
      "Lead end-to-end ERPNeX deployments, business process mapping, and enterprise client onboarding.",
  },
  {
    id: "cloud-infra",
    title: "CLOUD & IT INFRASTRUCTURE ENGINEER",
    area: "IT Infrastructure & Support",
    location: "Bengaluru, Karnataka, IN",
    type: "Full-Time • Hybrid",
    experience: "2–5 Years",
    summary:
      "Manage containerized deployments, CI/CD pipelines, monitoring, and 99.9% uptime infrastructure.",
  },
  {
    id: "qa-analyst",
    title: "QA & PERFORMANCE ENGINEER",
    area: "IT Engineering & Architecture",
    location: "Bengaluru, Karnataka, IN",
    type: "Full-Time • Hybrid",
    experience: "1–3 Years",
    summary:
      "Ensure rock-solid quality through automated testing, API validation, and load optimization.",
  },
  {
    id: "product-designer",
    title: "UI / UX PRODUCT DESIGNER",
    area: "Product & Design",
    location: "Bengaluru, Karnataka, IN",
    type: "Full-Time • Hybrid",
    experience: "2–4 Years",
    summary:
      "Craft intuitive, high-conversion enterprise interfaces and design systems across web & mobile.",
  },
];

const Career = () => {
  const [selectedArea, setSelectedArea] = useState("All");
  const [activeAreaHover, setActiveAreaHover] = useState(
    "IT Infrastructure & Support"
  );
  const [applyJob, setApplyJob] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const filteredJobs =
    selectedArea === "All"
      ? FEATURED_JOBS
      : FEATURED_JOBS.filter((job) => job.area === selectedArea);

  const handleSelectArea = (area) => {
    setSelectedArea((prev) => (prev === area ? "All" : area));
    setActiveAreaHover(area);
    document
      .getElementById("featured-jobs")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openApplyModal = (job) => {
    setApplyJob(job);
    setForm({ fullName: "", email: "", phone: "", portfolio: "", message: "" });
    setResumeFile(null);
    setErrors({});
    setStatus("idle");
    setStatusMsg("");
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setResumeFile(null);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: "Resume file size must be 5MB or less.",
      }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setResumeFile({
        name: file.name,
        type: file.type,
        base64: reader.result,
      });
      setErrors((prev) => ({ ...prev, resume: "" }));
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: digitsOnly }));
      if (errors.phone && digitsOnly.length === 10) {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateApplication = () => {
    const nextErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = "Full name is required.";
    } else if (/\d/.test(form.fullName)) {
      nextErrors.fullName = "Name cannot contain numbers.";
    }

    const trimmedEmail = form.email.trim();
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail) {
      nextErrors.email = "Email is required.";
    } else if (/^\d/.test(trimmedEmail)) {
      nextErrors.email = "Email cannot start with a number.";
    } else if (!emailRegex.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (form.phone.length !== 10) {
      nextErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = "Please tell us briefly about your experience (min 10 characters).";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    if (!validateApplication() || !applyJob) return;

    setStatus("loading");
    setStatusMsg("");

    try {
      const data = await submitCareerApplication({
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone,
        jobTitle: applyJob.title,
        area: applyJob.area,
        location: applyJob.location,
        portfolio: form.portfolio.trim(),
        message: form.message.trim(),
        resume: resumeFile,
      });

      if (data.success) {
        setStatus("success");
        setStatusMsg(
          data.message ||
            "Application submitted! Our hiring team will review your profile and reach out soon."
        );
      } else {
        setStatus("error");
        setStatusMsg(data.message || "Failed to submit application.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMsg(
        err.message ||
          "Failed to connect to server. Please try again or email info@dqnex.com."
      );
    }
  };

  return (
    <div className="w-full bg-transparent font-sans text-white">
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-12 pt-[128px] md:px-10 lg:px-14">
        <div className="pointer-events-none absolute left-1/2 top-16 h-[340px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(59,130,246,0.16),rgba(168,85,247,0.08)_45%,transparent_75%)] blur-[55px]" />

        <div className="relative z-10 mx-auto max-w-[1300px]">
          <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-blue-300">
            <Sparkles className="h-3.5 w-3.5" />
            Careers at DQNeX
          </span>

          <h1 className="mt-4 max-w-[780px] text-[34px] font-semibold leading-[1.15] tracking-tight text-white md:text-[44px] lg:text-[52px]">
            Build What&apos;s Next{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              With Us.
            </span>
          </h1>

          <p className="mt-5 max-w-[620px] text-[14px] leading-relaxed text-[#c8d1dc] md:text-[15px]">
            Join a team of builders, engineers, and problem-solvers crafting
            high-impact enterprise software, AI systems, and digital platforms
            for forward-thinking businesses.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("featured-jobs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-full bg-[#3b6fb5] px-7 py-3 text-[13px] font-medium text-white shadow-lg transition-colors hover:bg-[#4a7fc1]"
            >
              Explore Open Roles <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("career-areas")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-[13px] font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
            >
              Browse Career Areas
            </button>
          </div>
        </div>
      </section>

      {/* ── CAREER AREAS SECTION ─────────────────────────────────── */}
      <section
        id="career-areas"
        className="scroll-mt-24 px-6 pb-12 pt-10 md:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-[1300px]">
          <span className="text-[13px] font-medium tracking-wide text-blue-300">
            Career Areas
          </span>

          <h2 className="mt-4 max-w-[680px] text-[28px] font-semibold leading-[1.18] text-white md:text-[38px]">
            Find your place at the{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              forefront of innovation.
            </span>
          </h2>

          <p className="mt-4 max-w-[600px] text-[13.5px] leading-relaxed text-[#c8d1dc]">
            Bringing our solutions to our customers requires a team of highly
            skilled individuals across a wide array of disciplines. Explore
            opportunities to contribute to our important work:
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAREER_AREAS.map((area) => {
              const isHighlighted =
                selectedArea === area ||
                (selectedArea === "All" && activeAreaHover === area);

              return (
                <button
                  key={area}
                  type="button"
                  onMouseEnter={() => setActiveAreaHover(area)}
                  onClick={() => handleSelectArea(area)}
                  className={`group flex w-full items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-200 ${
                    isHighlighted
                      ? "border-blue-400/60 bg-[linear-gradient(135deg,#0f274a_0%,#132f59_100%)] text-white shadow-[0_0_24px_rgba(59,130,246,0.22)]"
                      : "border-white/15 bg-[#071326]/75 text-white/90 hover:border-blue-400/45 hover:bg-[#0d203d]"
                  }`}
                >
                  <span className="text-[13.5px] font-medium leading-snug">
                    {area}
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${
                      isHighlighted ? "text-blue-300" : "text-white/50"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED JOBS SECTION ────────────────────────────────── */}
      <section
        id="featured-jobs"
        className="scroll-mt-24 px-6 pb-20 pt-10 md:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[13px] font-medium tracking-wide text-blue-300">
                Open Positions
              </span>
              <h2 className="mt-3 text-[28px] font-semibold leading-tight text-white md:text-[36px]">
                Featured{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Jobs
                </span>
              </h2>
            </div>

            {selectedArea !== "All" && (
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs text-blue-200">
                  Filter: {selectedArea}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedArea("All")}
                  className="text-xs font-medium text-white/70 underline hover:text-white"
                >
                  Show all roles
                </button>
              </div>
            )}
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-white/12 bg-[linear-gradient(145deg,rgba(18,38,70,0.65)_0%,rgba(8,20,40,0.85)_100%)] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/45 hover:shadow-[0_18px_45px_rgba(37,99,235,0.18)]"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/10 blur-2xl transition-opacity duration-300 group-hover:bg-orange-400/15" />

                  <div className="relative z-10">
                    <h3 className="text-[17px] font-semibold tracking-wide text-white">
                      {job.title}
                    </h3>

                    <div className="mt-3 space-y-1.5 text-[12px] text-[#b4c0d0]">
                      <p className="flex items-center gap-2 text-blue-300/90">
                        <Briefcase className="h-3.5 w-3.5 shrink-0" />
                        <span>{job.area}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-white/50" />
                        <span>{job.location}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 shrink-0 text-white/50" />
                        <span>
                          {job.type} &middot; {job.experience}
                        </span>
                      </p>
                    </div>

                    <p className="mt-4 text-[12.5px] leading-relaxed text-white/75">
                      {job.summary}
                    </p>
                  </div>

                  <div className="relative z-10 mt-7 pt-2">
                    <button
                      type="button"
                      onClick={() => openApplyModal(job)}
                      className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/[0.04] px-5 py-2.5 text-[11px] font-semibold tracking-wider text-white transition-all duration-200 group-hover:border-blue-400/60 group-hover:bg-[#3b6fb5]"
                    >
                      APPLY FOR THIS ROLE <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[20px] border border-white/10 bg-[#0a182e]/70 p-8 text-center">
              <p className="text-sm text-[#c8d1dc]">
                No featured openings listed right now for{" "}
                <span className="font-semibold text-white">{selectedArea}</span>.
                You can still send us a general application!
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    openApplyModal({
                      id: `general-${selectedArea}`,
                      title: `${selectedArea.toUpperCase()} — GENERAL APPLICATION`,
                      area: selectedArea,
                      location: "Bengaluru, Karnataka, IN",
                      type: "Full-Time / Internship",
                    })
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-[#3b6fb5] px-5 py-2.5 text-xs font-medium text-white hover:bg-[#4a7fc1]"
                >
                  Apply for {selectedArea} <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedArea("All")}
                  className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium text-white/80 hover:bg-white/10"
                >
                  View All Roles
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── APPLY MODAL ──────────────────────────────────────────── */}
      {applyJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setApplyJob(null)}
        >
          <div
            className="relative w-full max-w-[540px] rounded-2xl border border-white/15 bg-[#09182d] p-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setApplyJob(null)}
              aria-label="Close application form"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="text-[12px] font-medium tracking-wide text-blue-300">
              {applyJob.area}
            </span>
            <h3 className="mt-1 pr-8 text-xl font-semibold text-white">
              Apply for {applyJob.title}
            </h3>
            <p className="mt-1 text-xs text-[#b4c0d0]">
              {applyJob.location} &middot; {applyJob.type}
            </p>

            {status === "success" ? (
              <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
                <p className="mt-3 text-sm font-medium text-emerald-200">
                  {statusMsg}
                </p>
                <button
                  type="button"
                  onClick={() => setApplyJob(null)}
                  className="mt-5 rounded-full bg-[#3b6fb5] px-6 py-2 text-xs font-medium text-white hover:bg-[#4a7fc1]"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="mt-5 space-y-3.5">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name *"
                    className="w-full rounded-lg border border-white/15 bg-[#050e1c] px-3.5 py-2.5 text-xs text-white placeholder:text-white/50 outline-none focus:border-blue-400"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="Email Address *"
                      className="w-full rounded-lg border border-white/15 bg-[#050e1c] px-3.5 py-2.5 text-xs text-white placeholder:text-white/50 outline-none focus:border-blue-400"
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      maxLength={10}
                      inputMode="numeric"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="Phone (10 digits) *"
                      className="w-full rounded-lg border border-white/15 bg-[#050e1c] px-3.5 py-2.5 text-xs text-white placeholder:text-white/50 outline-none focus:border-blue-400"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="url"
                    name="portfolio"
                    value={form.portfolio}
                    onChange={handleInputChange}
                    placeholder="LinkedIn / GitHub / Portfolio Link (optional)"
                    className="w-full rounded-lg border border-white/15 bg-[#050e1c] px-3.5 py-2.5 text-xs text-white placeholder:text-white/50 outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-white/20 bg-[#050e1c] px-3.5 py-2.5 text-xs text-white/75 transition-colors hover:border-blue-400">
                    <span className="flex items-center gap-2 truncate">
                      <Upload className="h-3.5 w-3.5 shrink-0 text-blue-300" />
                      <span className="truncate">
                        {resumeFile
                          ? resumeFile.name
                          : "Upload Resume (PDF, DOC, DOCX — max 5MB)"}
                      </span>
                    </span>
                    <span className="shrink-0 rounded bg-white/10 px-2 py-0.5 text-[10px] text-white">
                      Browse
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      className="hidden"
                    />
                  </label>
                  {errors.resume && (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.resume}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your skills & experience (min 10 characters) *"
                    className="w-full resize-none rounded-lg border border-white/15 bg-[#050e1c] px-3.5 py-2.5 text-xs text-white placeholder:text-white/50 outline-none focus:border-blue-400"
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg border border-rose-500/30 bg-rose-500/15 p-2.5 text-xs text-rose-300">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{statusMsg}</span>
                  </div>
                )}

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setApplyJob(null)}
                    className="rounded-lg border border-white/15 px-4 py-2 text-xs text-white/80 hover:bg-white/5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#3b6fb5] px-5 py-2 text-xs font-medium text-white hover:bg-[#4a7fc1] disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application <ArrowRight className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
