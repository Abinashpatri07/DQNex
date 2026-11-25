import { Routes, Route } from "react-router-dom";
import "./App.css";

import ScrollToTop from "./common/ScrollToTop";
import Header from "./common/header";
import Footer from "./common/footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AIEngineering from "./pages/Services/AIEngineering";
import Advisory from "./pages/Services/Advisory";
import Engineering from "./pages/Services/Engineering";
import Optimization from "./pages/Services/Optimization";
import ERPNeX from "./pages/Platforms/ERPNeX";
import VerifyNeX from "./pages/Platforms/VerifyNeX";
import ECommerce from "./pages/Industries/ECommerce";
import Payment from "./pages/Industries/Payment";
import Manufacturing from "./pages/Industries/Manufacturing";
import Contact from "./pages/Contact/Contact";
import ComingSoon from "./pages/ComingSoon/ComingSoon";

const App = () => {
  return (
    <div className="app bg-transparent">
      {/* SCROLL TO TOP ON ROUTE CHANGE */}
      <ScrollToTop />

      {/* HEADER */}
      <Header />

      {/* PAGES */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* SERVICE AI ENGINEERING */}
        <Route path="/services/ai-engineering" element={<AIEngineering />} />

        {/* SERVICE ADVISORY */}
        <Route path="/services/advisory" element={<Advisory />} />

        {/* SERVICE ENGINEERING */}
        <Route path="/services/engineering" element={<Engineering />} />

        {/* SERVICE OPTIMIZATION */}
        <Route path="/services/optimization" element={<Optimization />} />

        {/* SERVICE (Fallback) */}
        <Route path="/services" element={<ComingSoon title="Services" />} />

        {/* PLATFORMS */}
        <Route path="/platforms" element={<ComingSoon title="Platforms" />} />

        {/* PLATFORM ERPNEX */}
        <Route path="/platforms/erpnex" element={<ERPNeX />} />

        {/* PLATFORM VERIFYNEX */}
        <Route path="/platforms/verifynex" element={<VerifyNeX />} />

        {/* INDUSTRIES E-COMMERCE */}
        <Route path="/industries/ecommerce" element={<ECommerce />} />

        {/* INDUSTRIES PAYMENT */}
        <Route path="/industries/payment" element={<Payment />} />

        {/* INDUSTRIES MANUFACTURING */}
        <Route path="/industries/manufacturing" element={<Manufacturing />} />

        {/* INDUSTRIES (Fallback) */}
        <Route path="/industries" element={<ComingSoon title="Industries" />} />

        {/* CAREER, SOLUTIONS & BLOG */}
        <Route path="/career" element={<ComingSoon title="Career" />} />
        <Route path="/solutions" element={<ComingSoon title="Solutions" />} />
        <Route path="/blog" element={<ComingSoon title="Blog" />} />

        {/* FOOTER SERVICE & LEGAL PAGES */}
        <Route
          path="/app-development"
          element={<ComingSoon title="App Development" />}
        />
        <Route
          path="/security-management"
          element={<ComingSoon title="Security Management" />}
        />
        <Route path="/it-advisor" element={<ComingSoon title="IT Advisor" />} />
        <Route
          path="/back-office-management"
          element={<ComingSoon title="Back Office Management" />}
        />
        <Route
          path="/terms-of-service"
          element={<ComingSoon title="Terms of Service" />}
        />
        <Route
          path="/privacy-policy"
          element={<ComingSoon title="Privacy Policy" />}
        />
        <Route
          path="/cookie-policy"
          element={<ComingSoon title="Cookie Policy" />}
        />
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* CATCH-ALL FOR UNBUILT ROUTES */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
