import React from "react";
import EcoHero from "../../components/industries/ecommerce/EcoHero";
import DigitalCommerce from "../../components/industries/ecommerce/DigitalCommerce";
import KeyChallenges from "../../components/industries/ecommerce/KeyChallenges";
import MeasurableGrowth from "../../components/industries/ecommerce/MeasurableGrowth";
import LatestInsights from "../../components/industries/ecommerce/LatestInsights";
import Testimonial from "../../components/home/Testimonial";
import EcommerceCTA from "../../components/industries/ecommerce/EcommerceCTA";
import ContactSection from "../../components/home/ContactSection";

const ECommerce = () => {
  return (
    <div className="bg-[#051120] text-white overflow-hidden">
      <EcoHero />
      <DigitalCommerce />
      <KeyChallenges />
      <MeasurableGrowth />
      <LatestInsights />
      <Testimonial />
      <EcommerceCTA />
      <ContactSection />
    </div>
  );
};

export default ECommerce;
