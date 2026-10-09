import React from "react";
import OptHero from "../../components/services/optimization/OptHero";
import OptWhy from "../../components/services/optimization/OptWhy";
import OptProcess from "../../components/services/optimization/OptProcess";
import OptCTA from "../../components/services/optimization/OptCTA";
import ContactSection from "../../components/home/ContactSection";

const Optimization = () => {
  return (
    <div className="bg-transparent min-h-screen">
      <OptHero />
      <OptWhy />
      <OptProcess />
      <OptCTA />
      <ContactSection />
    </div>
  );
};

export default Optimization;



