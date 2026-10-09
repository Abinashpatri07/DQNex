import React from "react";
import EngHero from "../../components/services/engineering/EngHero";
import EngWhy from "../../components/services/engineering/EngWhy";
import EngProcess from "../../components/services/engineering/EngProcess";
import EngCTA from "../../components/services/engineering/EngCTA";
import ContactSection from "../../components/home/ContactSection";

const Engineering = () => {
  return (
    <div className="bg-transparent min-h-screen">
      <EngHero />
      <EngWhy />
      <EngProcess />
      <EngCTA />
      <ContactSection />
    </div>
  );
};

export default Engineering;



