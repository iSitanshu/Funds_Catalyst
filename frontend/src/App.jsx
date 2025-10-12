import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPopup from "./pages/LoginPopup"
import SignupPopup from "./pages/SignupPopup"

// ✅ Import all pages
import Home from "./pages/Home";
// import ConsultancyBooking from "./pages/ConsultancyBooking";
// import Services from "./pages/Services";
// import ServiceDetail from "./pages/ServiceDetail";
// import Projects from "./pages/Projects";
// import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<LoginPopup />} />
          <Route path="/sign-up" element={<SignupPopup />} />
          {/* <Route path="/consultancy-booking" element={<ConsultancyBooking />}/>

          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} /> */}

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
