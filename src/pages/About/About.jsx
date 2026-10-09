import React from "react";
import AboutHero from "../../components/about/AboutHero";
import WhoWeAre from "../../components/about/WhoWeAre";
import MissionVision from "../../components/about/MissionVision";
import CoreValues from "../../components/about/CoreValues";
import OurJourney from "../../components/about/OurJourney";
// import AboutCTA from "../../components/about/AboutCTA";
import FAQSection from "../../components/home/FAQSection";
import ContactSection from "../../components/home/ContactSection";
import "../../components/about/about.css";

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <OurJourney />
      {/* <AboutCTA /> */}
      {/* <FAQSection /> */}
      <ContactSection showTop={true} />
    </div>
  );
};

export default About;



