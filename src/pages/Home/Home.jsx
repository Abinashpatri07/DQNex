import React from "react";
import HeroSection from "../../components/home/HeroSection";
import TrustedBrands from "../../components/home/TrustedBrands";
import WhyDQNeX from "../../components/home/WhyDQNeX";
import InsightsTrends from "../../components/home/InsightsTrends";
import ImpactConnect from "../../components/home/ImpactConnect";
import Testimonial from "../../components/home/Testimonial";
import CustomerStats from "../../components/home/CustomerStats";
import FAQSection from "../../components/home/FAQSection";
import ContactSection from "../../components/home/ContactSection";
import "../../components/home/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <TrustedBrands />
      <WhyDQNeX />
      <ImpactConnect />
      <Testimonial />
      <CustomerStats />
      <InsightsTrends />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Home;



