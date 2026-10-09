import React from "react";
import { MapPin, Clock, Building2, ArrowRight } from "lucide-react";

import contactMap from "../../assets/DQNeX Bengaluru Night Map.png"; // path adjust kar lena

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-[#8fb6ee]/50 bg-gradient-to-b from-[#4b80c6] to-[#2f5c9c] px-6 py-[10px] text-[12px] font-medium leading-none text-white shadow-[0_6px_20px_rgba(59,109,176,0.3),inset_0_1px_0_rgba(190,215,255,0.45)]">
    {children}
  </span>
);

const ContactLocation = () => {
  return (
    <section className="relative w-full bg-[#030b18] px-6 py-10 font-sans md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1190px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
        {/* ── Left: Details ── */}
        <div className="w-full lg:w-[400px] lg:shrink-0">
          <Pill>Our Office Location</Pill>

          <h2 className="mb-3 mt-5 text-[30px] font-medium leading-tight text-white md:text-[36px]">
            Visit Our <span className="text-[#8fd3ee]">Office</span>
          </h2>

          <p className="mb-5 max-w-[400px] text-[13px] leading-[1.35] text-white/90">
            We'd love to meet you in person. Our office is located in the heart
            of the city, easily accessible and well connected.
          </p>

          <div className="flex flex-col gap-3">
            {/* Head Office */}
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#050f1e]/80 p-3.5 backdrop-blur-md">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#6366f1]/40 bg-gradient-to-b from-[#312e81] to-[#1e1b4b] text-[#c7d2fe]">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </span>

                <div>
                  <h3 className="text-[14px] font-normal text-[#8fd3ee]">Head Office</h3>
                  <p className="mt-2 text-[9.5px] leading-[1.45] text-[#b4c0d0]">
                    Second Floor, Building No: 60,
                    <br />
                    Rajkumar Road, Nyanapahalli
                    <br />
                    Main Rd, Bengaluru, Karnataka
                    <br />
                    560068
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Rajkumar+Road+Nyanapahalli+Bengaluru+560068"
                target="_blank"
                rel="noreferrer"
                className="flex shrink-0 items-center gap-2 rounded-md bg-[#3b6fb5] px-5 py-2.5 text-[11px] font-medium text-white transition-colors hover:bg-[#4a7fc1]"
              >
                Get Direction <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            {/* Minor cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#050f1e]/80 p-3 backdrop-blur-md">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#a855f7]/40 bg-gradient-to-b from-[#7e22ce] to-[#3b0764] text-white">
                  <Clock className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="leading-tight">
                  <h3 className="text-[13px] font-normal text-[#8fd3ee]">Working Hours</h3>
                  <p className="mt-1.5 text-[10.5px] font-semibold text-white">Mon - Fri</p>
                  <p className="mt-0.5 text-[9.5px] text-[#b4c0d0]">10:00 AM – 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#050f1e]/80 p-3 backdrop-blur-md">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#10b981]/40 bg-gradient-to-b from-[#065f46] to-[#022c22] text-[#6ee7b7]">
                  <Building2 className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="leading-tight">
                  <h3 className="text-[13px] font-normal text-[#8fd3ee]">Office Type</h3>
                  <p className="mt-1.5 text-[10.5px] font-semibold text-white">Corporate Office</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Map image (blue border crop) ── */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative aspect-[1777/885] w-full max-w-[560px] overflow-hidden rounded-[20px] lg:max-w-[600px]">
            <img
              src={contactMap}
              alt="DQNeX office location, Bengaluru"
              className="absolute inset-0 h-full w-full scale-[1.04] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;