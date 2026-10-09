import React from "react";
import PayHero from "../../components/industries/payment/PayHero";
import PoweringTransactions from "../../components/industries/payment/PoweringTransactions";
import PaymentChallenges from "../../components/industries/payment/PaymentChallenges";
import PaymentSolutions from "../../components/industries/payment/PaymentSolutions";
import PaymentInsights from "../../components/industries/payment/PaymentInsights";
import PaymentCTA from "../../components/industries/payment/PaymentCTA";
import Testimonial from "../../components/home/Testimonial";
import ContactSection from "../../components/home/ContactSection";

const Payment = () => {
  return (
    <div className="bg-[#051120] text-white overflow-hidden">
      <PayHero />
      <PoweringTransactions />
      <PaymentChallenges />
      <PaymentSolutions />
      <PaymentInsights />
      <Testimonial />
      <PaymentCTA />
      <ContactSection />
    </div>
  );
};

export default Payment;
