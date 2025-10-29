
import React, { useState } from "react";
import { Heart, Menu, X, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarLayout from "./NavbarLayout";
import { logo } from "@/assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const usertoken = useSelector((state) => state?.user?.usertoken ?? null);
  const isLoggedIn = !!usertoken;

  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 bg-primary/95 backdrop-blur-md shadow-lg sticky top-0 z-50 font-sans font-medium tracking-wide">
        
        {/* Logo / Brand */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 text-white text-2xl font-semibold cursor-pointer hover:opacity-90 transition-all duration-300"
        >
          <img
            src={logo}
            alt="Funds Catalyst Logo"
            className="w-15 h-12 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          />
          <span className="text-white select-none">Funds Catalyst</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          
          {/* Profile Icon */}
          {isLoggedIn && (
            <button
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              aria-label="Profile"
              onClick={() => navigate("/profile")}
            >
              <User className="text-white" size={22} />
            </button>
          )}

          {/* Donate Button (optional) */}
          {/* <button
            onClick={() => navigate("/donate")}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-primary font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Heart className="text-red-500" size={18} fill="currentColor" />
            <span className="hidden sm:inline">Donate</span>
          </button> */}

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="text-white" size={22} />
            ) : (
              <Menu className="text-white" size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <NavbarLayout
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
};

export default Navbar;
