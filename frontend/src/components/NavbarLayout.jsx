import { useState } from "react";
import {
  X,
  ChevronRight,
  ChevronLeft,
  LogIn,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearuserData } from "@/features/user/userSlice";

const sections = [
  { title: "Services", key: "services" },
  { title: "About", key: "about" },
  { title: "Contact Us", key: "contact" },
  { title: "In Association With", key: "association" },
];

const services = [
  {
    title: "NGO Registration & Compliance",
    keyword: "ngo-registration-&-compliance",
  },
  { title: "CSR Consultancy", keyword: "csr-consultancy" },
  { title: "Government Tender Support", keyword: "government-tender-support" },
  { title: "Fundraising Strategy", keyword: "fundraising-strategy" },
  { title: "Project Execution and Management", keyword: "project-execution" },
  { title: "Impact Assessment", keyword: "impact-assessment" },
  {
    title: "Legal & Regulatory Guidance",
    keyword: "legal-&-regulatory-guidance",
  },
];

const ministries = [
  {
    name: "Ministry of Skill Development & Entrepreneurship",
    url: "https://www.msde.gov.in/",
  },
  {
    name: "Ministry of Social Justice & Empowerment",
    url: "https://socialjustice.gov.in/",
  },
  {
    name: "Ministry of Fisheries, Animal Husbandry & Dairy Farming",
    url: "https://minfahd.gov.in/",
  },
  { name: "MSME", url: "https://msme.gov.in/" },
  { name: "Ministry of Textiles", url: "https://texmin.nic.in/" },
  { name: "Ministry of Education", url: "https://www.education.gov.in/" },
];

export default function NavbarLayout({ isOpen, onClose, isLoggedIn }) {
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSectionClick = (key) => {
    if (key === "services" || key === "association") {
      setActiveSection(key);
    } else if (key === "about") {
      navigate("/api/about-us");
      onClose();
    } else if (key === "contact") {
      navigate("/api/contact-us");
      onClose();
    } else {
      navigate(`/${key}`);
      onClose();
    }
  };

  const handleLogout = () => {
    // ✅ Replace with your actual Redux logout action if available
    dispatch(clearuserData());
    onClose();
    navigate("/");
  };

  const handleBack = () => setActiveSection(null);

  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Main Sidebar */}
          <motion.aside
            className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-2xl z-50 flex flex-col"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-200 transition-all"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Main Menu Items */}
            <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-gray-100">
              <nav className="space-y-3">
                {sections.map((section) => (
                  <button
                    key={section.key}
                    onClick={() => handleSectionClick(section.key)}
                    className="group w-full flex justify-between items-center text-left px-5 py-3.5 
                   rounded-xl font-medium text-gray-800 
                   bg-white shadow-sm hover:shadow-md 
                   border border-gray-200 hover:border-gray-300
                   hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 
                   transition-all duration-200 ease-out"
                  >
                    <span className="group-hover:text-yellow-700 transition-colors duration-200">
                      {section.title}
                    </span>

                    {(section.key === "services" ||
                      section.key === "association") && (
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-500 transition-colors duration-200" />
                    )}
                  </button>
                ))}

                {/* Login / Logout Button */}
                <button
                  onClick={() => {
                    if (isLoggedIn) {
                      handleLogout();
                    } else {
                      navigate("/sign-in");
                      onClose();
                    }
                  }}
                  className="flex items-center justify-center gap-3 w-full px-5 py-3.5 
                 font-semibold rounded-xl 
                 bg-gradient-to-r from-yellow-700 to-yellow-600 
                 text-white shadow-md hover:shadow-lg 
                 hover:scale-[1.02] active:scale-[0.98]
                 transition-all duration-200 ease-out"
                >
                  {isLoggedIn ? (
                    <>
                      <LogOut className="h-5 w-5 text-white/90" />
                      Logout
                    </>
                  ) : (
                    <>
                      <LogIn className="h-5 w-5 text-white/90" />
                      Login / Signup
                    </>
                  )}
                </button>
              </nav>
            </div>

            {/* Footer */}
            <div className="p-4 border-t text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Funds Catalyst
            </div>
          </motion.aside>

          {/* Nested Sidebar */}
          <AnimatePresence>
            {activeSection && (
              <motion.aside
                className="fixed top-0 right-full sm:right-96 w-full sm:w-96 h-full bg-gray-50 shadow-2xl z-50 flex flex-col border-l"
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Nested Header */}
                <div className="flex items-center gap-3 p-5 border-b bg-gray-100">
                  <button
                    onClick={handleBack}
                    className="p-2 rounded-full hover:bg-gray-200 transition-all"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {activeSection === "services"
                      ? "Our Services"
                      : "In Association With"}
                  </h2>
                </div>

                {/* Nested Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  {activeSection === "services" &&
                    services.map((service) => (
                      <button
                        key={service.keyword}
                        onClick={() => {
                          navigate(`/api/services/${service.keyword}`);
                          onClose();
                        }}
                        className="w-full text-left p-4 rounded-lg hover:bg-white border hover:border-blue-100 hover:shadow-sm transition-all"
                      >
                        <div className="font-semibold text-gray-800">
                          {service.title}
                        </div>
                      </button>
                    ))}

                  {activeSection === "association" &&
                    ministries.map((ministry) => (
                      <a
                        key={ministry.name}
                        href={ministry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center p-4 rounded-lg hover:bg-white border hover:border-blue-100 hover:shadow-sm transition-all"
                      >
                        <span className="text-gray-800 font-medium">
                          {ministry.name}
                        </span>
                        <ExternalLink className="h-4 w-4 text-gray-500" />
                      </a>
                    ))}
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}