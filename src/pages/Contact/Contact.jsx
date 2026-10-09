import React, { useEffect } from "react";
import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactLocation from "../../components/contact/ContactLocation";
import ContactSection from "../../components/home/ContactSection";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex w-full flex-col font-sans bg-[#050d1c]">
      <ContactHero />
      <ContactForm />
      <ContactLocation />
      <ContactSection />
    </div>
  );
};

export default Contact;
