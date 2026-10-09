import React, { useState } from "react";

const faqs = [
  {
    question: "What does DQNeX do?",
    answer:
      "DQNeX provides technology and digital solutions that help businesses simplify complex challenges, improve operations, accelerate growth, and create meaningful digital experiences through innovative, scalable, and business-focused solutions.",
  },
  {
    question: "What industries does DQNeX serve?",
    answer:
      "We serve a wide range of industries including healthcare, finance, retail, manufacturing, and technology, providing tailored solutions to meet specific industry needs.",
  },
  {
    question: "What services does DQNeX offer?",
    answer:
      "Our services include custom software development, AI & machine learning solutions, cloud infrastructure, IT consulting, and digital transformation strategy.",
  },
  {
    question: "How does DQNeX approach each project?",
    answer:
      "We follow an agile methodology, collaborating closely with our clients from ideation to deployment to ensure transparency, flexibility, and successful outcomes.",
  },
  {
    question: "How can I start a project with DQNeX?",
    answer:
      "You can start by reaching out through our contact form. Our team will schedule an initial consultation to discuss your requirements, goals, and how we can help.",
  },
];

const Chevron = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto w-full max-w-[1200px] bg-transparent px-6 py-16 font-sans text-white md:px-10 lg:px-14">
      {/* Heading */}
      <div className="mb-14 md:mb-16">
        <h2 className="text-[32px] font-normal leading-[1.2] md:text-[42px]">
          You got questions?
        </h2>
        <h2 className="text-[32px] font-normal leading-[1.2] text-[#FFC76A] md:text-[42px]">
          We got answers.
        </h2>
      </div>

      {/* Accordion */}
      <div className="w-full">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between py-[22px] text-left text-[14px] font-normal text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 md:text-[16px]"
              >
                <span>{faq.question}</span>
                <span className="ml-6 shrink-0 text-white/80">
                  <Chevron open={isOpen} />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[88%] pb-6 text-[11.5px] leading-[1.7] text-[#9aa4b2] md:text-[12.5px]">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Gradient divider */}
              <div className="h-px w-full bg-gradient-to-r from-white/50 via-white/30 to-white/50" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;