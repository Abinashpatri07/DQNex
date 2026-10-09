import React from "react";
import ErpHero from "../../components/platforms/erpnex/ErpHero";
import ErpFlow from "../../components/platforms/erpnex/ErpFlow";
import ErpCompare from "../../components/platforms/erpnex/ErpCompare";
import ErpConnected from "../../components/platforms/erpnex/ErpConnected";
import ErpCTA from "../../components/platforms/erpnex/ErpCTA";
import FAQSection from "../../components/home/FAQSection";
import ContactSection from "../../components/home/ContactSection";

const ERPNeX = () => {
  return (
    <div className="bg-[#040e1a] min-h-screen">
      <ErpHero />
      <ErpFlow />
      <ErpCompare />
      <ErpConnected />
      <ErpCTA />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default ERPNeX;



