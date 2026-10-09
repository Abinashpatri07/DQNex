import React from "react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="about-cta">
      <h2 className="about-cta__title">Let's Build What's Next</h2>
      <p className="about-cta__sub">
        Partner with DQNeX to transform your business with reliable,
        scalable, and innovative IT solutions.
      </p>
      <Link to="/contact" className="about-cta__btn">
        Get In Touch
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </section>
  );
};

export default AboutCTA;



