import React from "react";

const WhoWeAre = () => {
  return (
    <section className="w-full bg-[#061321] px-7 py-14 sm:px-8 md:px-10 lg:px-12 lg:py-16 xl:px-14">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
        {/* =====================================================
            LEFT : IMAGE (right column ki height ke barabar)
        ====================================================== */}
        <div className="relative h-[320px] w-full overflow-hidden rounded-[14px] bg-[#0d223b] sm:h-[380px] lg:h-auto">
          <img
            src="/assets/aboutoverview.png"
            alt="DQNeX team"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* =====================================================
            RIGHT : CONTENT (height content se decide hoti hai)
        ====================================================== */}
        <div className="flex w-full flex-col">
          {/* BADGE */}
          <div className="shrink-0">
            <span className="inline-block text-[13px] font-medium tracking-wide text-blue-300">
              Our Overview
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mt-4 shrink-0 text-[26px] font-medium leading-none tracking-[-1.5px] text-white md:text-[32px] lg:text-[36px]">
            Who{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              We Are
            </span>
          </h2>

          {/* PARAGRAPHS */}
          <div className="mt-4 flex flex-col gap-3">
            <p className="text-[13px] font-normal leading-relaxed text-[#c8d1dc]">
              DQNeX is a global IT consulting and services company delivering
              technology-driven solutions that help organizations improve
              performance, manage risk, and achieve sustainable growth. We
              partner with enterprises to modernize their IT landscapes,
              optimize operations, and enable digital transformation across
              business functions.
            </p>

            <p className="text-[13px] font-normal leading-relaxed text-[#c8d1dc]">
              Our service portfolio spans IT consulting, application and
              infrastructure management, managed services, and business
              process support. With a strong focus on reliability, security,
              and scalability, DQNeX helps clients build resilient systems
              and agile operating models to meet evolving market demands.
            </p>

            <p className="text-[13px] font-normal leading-relaxed text-[#c8d1dc]">
              At DQNeX, we combine deep technical expertise with a structured,
              outcome-oriented approach to problem solving. We work closely
              with stakeholders to understand strategic priorities and deliver
              solutions that are aligned with business objectives and industry
              best practices.
            </p>

            <p className="text-[13px] font-normal leading-relaxed text-[#c8d1dc]">
              Committed to long-term partnerships, DQNeX serves as a trusted
              advisor to clients, enabling them to navigate complexity,
              enhance efficiency, and realize the full potential of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;