import React from "react";
import AdvHero from "../../components/services/advisory/AdvHero";
import AdvWhy from "../../components/services/advisory/AdvWhy";
import AdvProcess from "../../components/services/advisory/AdvProcess";
import AdvCTA from "../../components/services/advisory/AdvCTA";
import ContactSection from "../../components/home/ContactSection";

const Advisory = () => {
  return (
    <div className="bg-transparent min-h-screen">
      <AdvHero />
      <AdvWhy />
      <AdvProcess />
      <AdvCTA />
      <ContactSection />
    </div>
  );
};

export default Advisory;



