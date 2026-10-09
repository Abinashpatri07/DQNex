import React from "react";
import VnxHero from "../../components/platforms/verifynex/VnxHero";
import VnxFlow from "../../components/platforms/verifynex/VnxFlow";
import VnxCompare from "../../components/platforms/verifynex/VnxCompare";
import VnxConnected from "../../components/platforms/verifynex/VnxConnected";
import VnxWorkspace from "../../components/platforms/verifynex/VnxWorkspace";
import VnxDeploy from "../../components/platforms/verifynex/VnxDeploy";
import VnxCTA from "../../components/platforms/verifynex/VnxCTA";
import ContactSection from "../../components/home/ContactSection";
import FAQSection from "../../components/home/FAQSection";

const VerifyNeX = () => {
  return (
    <div className="bg-[#040e1a] min-h-screen">
      <VnxHero />
      <VnxFlow />
      <VnxCompare />
      <VnxConnected />
      <VnxWorkspace />
      <VnxDeploy />
      <VnxCTA />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default VerifyNeX;
