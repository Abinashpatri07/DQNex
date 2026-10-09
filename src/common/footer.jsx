import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/LOGO.png"; // header jaisa hi path/extension rakhna

const linkClass =
  "w-fit text-sm text-gray-500 transition-colors duration-300 hover:text-white";

const socialClass =
  "text-gray-500 transition-colors duration-300 hover:text-white";

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "19",
  height: "19",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Footer = () => {
  return (
    <div className="w-full bg-[#040e1a]">
      <footer className="mx-auto w-full max-w-[1500px] px-7 pb-8 pt-0 font-sans text-white sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* FOOTER CONTAINER */}
        <div className="relative w-full rounded-[32px] border border-gray-900/50 bg-[#050505] p-8 shadow-2xl lg:p-12">
          {/* MAIN FOOTER CONTENT */}
          <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-7">
            {/* LOGO + ADDRESS */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              <Link to="/" className="w-fit">
                <img
                  src={logo}
                  alt="DQNeX"
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                Begur Road, Second Floor, No. 60,
                <br />
                Rajkumar Road, Nyanapahalli Main Road,
                <br />
                Bengaluru, Karnataka, India
              </p>

              {/* SOCIAL ICONS */}
              <div className="mt-1 flex items-center gap-4">
                {/* LINKEDIN */}
                <a href="#" aria-label="LinkedIn" className={socialClass}>
                  <svg {...svgProps}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* INSTAGRAM */}
                <a href="#" aria-label="Instagram" className={socialClass}>
                  <svg {...svgProps}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* FACEBOOK */}
                <a href="#" aria-label="Facebook" className={socialClass}>
                  <svg {...svgProps}>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                {/* YOUTUBE */}
                <a href="#" aria-label="YouTube" className={socialClass}>
                  <svg {...svgProps}>
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48" />
                  </svg>
                </a>

                {/* X */}
                <a href="#" aria-label="X" className={socialClass}>
                  <svg {...svgProps}>
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="flex flex-col gap-3.5">
              <h4 className="mb-1 font-medium text-gray-300">Quick links</h4>
              <Link to="/about" className={linkClass}>About Us</Link>
              <Link to="/solutions" className={linkClass}>Solutions</Link>
              <Link to="/industries" className={linkClass}>Industry</Link>
              <Link to="/career" className={linkClass}>Career</Link>
              <Link to="/blog" className={linkClass}>Blog</Link>
              <Link to="/contact" className={linkClass}>Contact us</Link>
            </div>

            {/* OUR SERVICE */}
            <div className="flex flex-col gap-3.5">
              <h4 className="mb-1 font-medium text-gray-300">Our service</h4>
              <Link to="#" className={linkClass}>App Development</Link>
              <Link to="#" className={linkClass}>Security Management</Link>
              <Link to="#" className={linkClass}>IT Advisor</Link>
              <Link to="#" className={linkClass}>Back Office Management</Link>
            </div>

            {/* LEGAL */}
            <div className="flex flex-col gap-3.5">
              <h4 className="mb-1 font-medium text-gray-300">Legal</h4>
              <Link to="#" className={linkClass}>Terms of service</Link>
              <Link to="#" className={linkClass}>Privacy policy</Link>
              <Link to="/about" className={linkClass}>About us</Link>
              <Link to="#" className={linkClass}>Cookie policy</Link>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col gap-5">
              {/* PHONE */}
              <div className="flex items-start gap-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 h-5 w-5 shrink-0 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="mb-1 text-xs text-gray-500">Phone number</p>
                  <p className="text-sm text-gray-300">+91 68864321974</p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 h-5 w-5 shrink-0 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="mb-1 text-xs text-gray-500">Email</p>
                  <p className="text-sm text-gray-300">info@dqnex.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="mt-2 border-t border-gray-900 pt-5 text-center">
            <p className="text-xs text-gray-500">
              2026 DQNeX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;