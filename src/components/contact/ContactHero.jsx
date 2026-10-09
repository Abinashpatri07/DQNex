import React from "react";
import { BrainCircuit, Database, BarChart3, Boxes } from "lucide-react";

import contactusHero from "../../assets/contactusHero.png"; // adjust path/extension if needed

const features = [
  { icon: BrainCircuit, label: "Quick Response" },
  { icon: Database, label: "Expert Consultation" },
  { icon: BarChart3, label: "Tailored Solutions" },
  { icon: Boxes, label: "Secure Your Data" },
];

const ContactHero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] w-full items-center overflow-hidden bg-[#050d1c] px-6 pt-[64px] font-sans md:px-10 lg:min-h-[600px] lg:px-14">
      {/* Background image: poore section me, koi gap nahi */}
      <img
        src={contactusHero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />

      {/* Left side readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050d1c]/95 via-[#050d1c]/80 to-[#050d1c]/10 md:via-[#050d1c]/65 md:to-transparent" />
      <div className="absolute left-0 top-1/2 h-[120%] w-[65%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_left,rgba(5,13,28,0.8),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-[#050d1c]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1300px]">
        <div className="max-w-xl lg:max-w-[640px]">
          <p className="mb-3 text-[14px] font-medium text-[#7db4ec]">
            Inquiry Now
          </p>

          <h1 className="mb-5 text-[30px] font-semibold leading-[1.15] text-white md:text-[38px] lg:text-[44px]">
            Let's Build What's Next
            <br />
            <span className="text-[#7cc4e0]">Together</span>
          </h1>

          <p className="mb-12 max-w-[470px] text-[14px] leading-[1.6] text-white/90 [text-shadow:0_1px_8px_rgba(5,13,28,0.9)]">
            Have a project in mind or want to explore how DQNeX can help your
            business? Share your requirements and our team will get back to
            you shortly.
          </p>
        </div>

        {/* Feature row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-4 text-[12px] text-white/75 md:flex-nowrap md:whitespace-nowrap xl:gap-x-8 xl:text-[12.5px]">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex shrink-0 items-center gap-2">
              <Icon className="h-5 w-5 text-[#5b9be0]" strokeWidth={1.4} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;