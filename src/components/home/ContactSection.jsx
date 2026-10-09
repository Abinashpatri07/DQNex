import React, { useState } from "react";

import GlobeHero from "./GlobeHero";
import newsletterImg from "/src/assets/homesubscribe.png";

const ContactSection = () => {
  // Newsletter globe ka mouse-tilt (degrees)
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 28, y: -py * 20 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="w-full bg-[#040e1a]">
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
        <div className="relative flex flex-col border border-gray-800/60 rounded-[32px] p-8 lg:p-12 bg-[#08101E] backdrop-blur-sm shadow-2xl overflow-hidden">

          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-[26px] md:text-[30px] lg:text-[36px] font-semibold leading-tight">
              Let's Build What's Next
            </h2>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">

            {/* Left: real 3D globe */}
            <div className="w-full lg:w-1/2 h-[300px] lg:h-[450px]">
              <GlobeHero />
            </div>

            {/* Right Form */}
            <div className="relative w-full lg:w-1/2 bg-[#121E31] rounded-2xl p-6 lg:p-8 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.15)]">

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

              <form className="relative z-10 flex flex-col gap-2">

                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700/50 focus:border-blue-500 placeholder-gray-500"
                  />

                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700/50 focus:border-blue-500 placeholder-gray-500"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Work Email *"
                    className="w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700/50 focus:border-blue-500 placeholder-gray-500"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700/50 focus:border-blue-500 placeholder-gray-500"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Company Name *"
                    className="w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700/50 focus:border-blue-500 placeholder-gray-500"
                  />

                  <input
                    type="text"
                    placeholder="Job Title *"
                    className="w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700/50 focus:border-blue-500 placeholder-gray-500"
                  />
                </div>

                <textarea
                  placeholder="Tell us about your project, goals or any specific requirements."
                  rows="4"
                  className="w-full bg-[#1b273d] text-gray-300 text-xs rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700/50 focus:border-blue-500 placeholder-gray-500 resize-none mt-1"
                />

                <div className="flex items-center gap-2 mt-2 mb-3">
                  <input
                    type="checkbox"
                    id="terms"
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

                <div>
                  <button
                    type="button"
                    className="bg-[#4682D3] hover:bg-[#346bb3] transition-colors text-white font-medium py-2 px-5 rounded text-xs shadow-lg"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

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

            <h3 className="text-[26px] md:text-[30px] lg:text-[36px] font-semibold leading-tight text-white">
              Subscribe to our Newsletter
            </h3>

            <p className="mt-3 text-[13px] text-gray-300/90">
              Stay ahead with the latest From DQNeX.
            </p>

            <div className="mt-10 flex w-full max-w-[470px] flex-col gap-1.5 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-[42px] flex-1 rounded-lg bg-[#f7f6ff] px-4 text-[13px] text-gray-900 placeholder:text-[12px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="h-[42px] whitespace-nowrap rounded-lg bg-[#3b68ad] px-6 font-['Poppins'] text-[13px] font-medium tracking-wider text-white shadow-lg transition-colors hover:bg-[#4a7ac2]">
                Get Started
              </button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ContactSection;