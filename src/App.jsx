import { Routes, Route } from "react-router-dom";
import "./App.css";

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

const SimplePage = ({ title }) => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-transparent px-6 pt-[130px]">
      <h1 className="text-4xl font-semibold text-white md:text-6xl">
        {title}
      </h1>
    </section>
  );
};

const App = () => {
  return (
    <div className="app bg-transparent">

      {/* HEADER */}
      <Header />

      {/* PAGES */}
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* SERVICE AI ENGINEERING */}
        <Route
          path="/services/ai-engineering"
          element={<AIEngineering />}
        />

        {/* SERVICE ADVISORY */}
        <Route
          path="/services/advisory"
          element={<Advisory />}
        />

        {/* SERVICE ENGINEERING */}
        <Route
          path="/services/engineering"
          element={<Engineering />}
        />

        {/* SERVICE OPTIMIZATION */}
        <Route
          path="/services/optimization"
          element={<Optimization />}
        />

        {/* SERVICE (Fallback) */}
        <Route
          path="/services"
          element={<SimplePage title="Services" />}
        />

        {/* PLATFORMS */}
        <Route
          path="/platforms"
          element={<SimplePage title="Platforms" />}
        />

        {/* PLATFORM ERPNEX */}
        <Route
          path="/platforms/erpnex"
          element={<ERPNeX />}
        />

        {/* PLATFORM VERIFYNEX */}
        <Route
          path="/platforms/verifynex"
          element={<VerifyNeX />}
        />

        {/* INDUSTRIES E-COMMERCE */}
        <Route
          path="/industries/ecommerce"
          element={<ECommerce />}
        />

        {/* INDUSTRIES PAYMENT */}
        <Route
          path="/industries/payment"
          element={<Payment />}
        />

        {/* INDUSTRIES MANUFACTURING */}
        <Route
          path="/industries/manufacturing"
          element={<Manufacturing />}
        />

        {/* INDUSTRIES (Fallback) */}
        <Route
          path="/industries"
          element={<SimplePage title="Industries" />}
        />

        {/* CAREER */}
        <Route
          path="/career"
          element={<SimplePage title="Career" />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;



