import React, { useState } from "react";
import { Heart, Menu, X, User } from "lucide-react"; // Added User icon
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // ✅ import Redux hook
import NavbarLayout from "./NavbarLayout";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Get login state from Redux
  const usertoken = useSelector((state) => state?.user?.usertoken ?? null);
  const isLoggedIn = !!usertoken; // true if token exists

  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 shadow-md bg-primary sticky top-0 z-40">
        
        {/* Logo or Brand */}
        <div 
          className="flex items-center text-primary-foreground gap-6 font-bold text-xl tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => navigate('/')}
        >
          <img src="../../src/assets/logofunds.png" alt="logo image" width={40} height={10}/>
          Fund Catalyst
        </div>      

        {/* Right side: Donate/Profile and Hamburger */}
        <div className="flex items-center gap-4">
          
          {/* Profile Icon if logged in */}
          {isLoggedIn && (
            <button
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
              aria-label="Profile"
            >
              <User className="text-white" size={24} />
            </button>
          )}

          {/* Donate Button (optional) */}
          {/* <button
            className="flex items-center gap-2 bg-white text-primary font-semibold px-5 py-2.5 rounded-full cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/api/donate')}
          >
            <Heart className="text-red-500" size={18} fill="currentColor" />
            <span className="hidden sm:inline">Donate</span>
          </button> */}

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="text-white" size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <NavbarLayout 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        isLoggedIn={isLoggedIn} // pass login state to NavbarLayout
      />
    </>
  );
};

export default Navbar;
