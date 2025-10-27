import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPopup from "./pages/LoginPopup"
import SignupPopup from "./pages/SignupPopup"

// ✅ Import all pages
import Home from "./pages/Home";
// import PaymentButton from "./components/PaymentButton";
import DonationPage from "./pages/DonatePage";
import DonationSuccessfull from "./pages/DonationSuccessfull";
import ConsultancyBooking from "./pages/ConsultancyBooking";
import ViewallProject from "./pages/ViewallProject";
import AboutUs from "./pages/AboutUs";

import TermsandCondition from "./pages/TermsandCondtition"
import RefundAndCancellation from "./pages/RefundAndCancellation";
import PolicyPrivacy from "./pages/PolicyPrivacy"
import ContactUs from "./pages/ContactInfo";
import ServicesRenderDetail from "./pages/ServicesRenderDetail";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import ProjectRenderDetail from "./pages/ProjectRenderDetail";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ScrollToTop /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<LoginPopup />} />
          <Route path="/sign-up" element={<SignupPopup />} />
          <Route path="/api/about-us" element={<AboutUs />} />
          <Route path="/api/contact-us" element={<ContactUs />} />
          <Route path="/api/terms-and-conditions" element={<TermsandCondition />} />
          <Route path="/api/privacy-policy" element={<PolicyPrivacy />} />
          <Route path="/api/refund-policy" element={<RefundAndCancellation />} />
          {/* <Route path="/api/donate" element={<DonationPage />} /> */}
          {/* <Route path="/api/donation-success" element={<DonationSuccessfull />} /> */}


          <Route path="/api/consultancy-booking" element={<ConsultancyBooking />} />


          <Route path="/api/projects" element={<ViewallProject />} />
          <Route path="/api/projects/:projectId" element={<ProjectRenderDetail />} />
          <Route path="/api/services/:serviceId" element={<ServicesRenderDetail />} />
           <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
