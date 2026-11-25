import React from "react";
import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactLocation from "../../components/contact/ContactLocation";
import ContactSection from "../../components/home/ContactSection";

const Contact = () => {
  return (
    <div className="flex w-full flex-col font-sans bg-transparent">
      <ContactHero />
      <ContactForm />
      <ContactLocation />
      <ContactSection />
    </div>
  );
};

export default Contact;
