import React from "react";
import AIHero from "../../components/services/ai-engineering/AIHero";
import AIWhy from "../../components/services/ai-engineering/AIWhy";
import AIProcess from "../../components/services/ai-engineering/AIProcess";
import AICTA from "../../components/services/ai-engineering/AICTA";
import ContactSection from "../../components/home/ContactSection";

const AIEngineering = () => {
  return (
    <div className="bg-transparent min-h-screen">
      <AIHero />
      <AIWhy />
      <AIProcess />
      <AICTA />
      <ContactSection />
    </div>
  );
};

export default AIEngineering;



