import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const ComingSoon = ({ title }) => {
  const [searchParams] = useSearchParams();
  const pageTitle = title || searchParams.get("page") || "This Page";

  return (
    <section className="relative flex min-h-[82vh] w-full flex-col items-center justify-center overflow-hidden bg-[#050d1c] px-6 pb-16 pt-[120px] text-center font-sans">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(59,130,246,0.16),rgba(139,92,246,0.08)_45%,transparent_75%)] blur-[50px]" />

      <div className="relative z-10 mx-auto flex max-w-[680px] flex-col items-center">
        <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-blue-300">
          <Sparkles className="h-3.5 w-3.5" />
          Coming Soon
        </span>

        <h1 className="mt-5 text-[32px] font-semibold leading-[1.15] tracking-tight text-white md:text-[42px] lg:text-[48px]">
          {pageTitle} is{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        <p className="mt-5 max-w-[520px] text-[14px] leading-relaxed text-[#c8d1dc]">
          We&apos;re currently building this page to bring you a better experience.
          In the meantime, feel free to explore our solutions or reach out to our
          team directly.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-[13px] font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <Link
            to="/contact#contact-form"
            className="inline-flex items-center gap-2 rounded-full bg-[#3b6fb5] px-6 py-3 text-[13px] font-medium text-white shadow-lg transition-colors hover:bg-[#4a7fc1]"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
