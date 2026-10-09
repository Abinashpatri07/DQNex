import React from "react";
import MfgHero from "../../components/industries/manufacturing/MfgHero";
import MfgExpertise from "../../components/industries/manufacturing/MfgExpertise";
import MfgChallenges from "../../components/industries/manufacturing/MfgChallenges";
import MfgSolutions from "../../components/industries/manufacturing/MfgSolutions";
import MfgInsights from "../../components/industries/manufacturing/MfgInsights";
import MfgCTA from "../../components/industries/manufacturing/MfgCTA";
import Testimonial from "../../components/home/Testimonial";
import ContactSection from "../../components/home/ContactSection";

const Manufacturing = () => {
  return (
    <div className="bg-[#051120] text-white overflow-hidden">
      <MfgHero />
      <MfgExpertise />
      <MfgChallenges />
      <MfgSolutions />
      <MfgInsights />
      <Testimonial />
      <MfgCTA />
      <ContactSection />
    </div>
  );
};

export default Manufacturing;
