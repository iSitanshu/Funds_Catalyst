import React, { useState } from "react";
import { Heart, Menu, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import NavbarLayout from "./NavbarLayout";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // TODO: Replace with actual auth state
  const isLoggedIn = false; // This should come from your auth context/state

  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-40">
        
        {/* Logo or Brand */}
        <div 
          className="flex items-center text-black gap-6 font-bold text-xl tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => navigate('/')}
        >
          <img src="./src/assets/logofunds.png" alt="" width={40} height={10}/>
          Funds Catalyst
        </div>      

        {/* Right side: Donate button and Hamburger */}
        <div className="flex items-center gap-4">
          
          {/* Donate Button */}
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
            className="p-2 hover:bg-black/50 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="text-black" size={24} />
            ) : (
              <Menu className="text-black" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <NavbarLayout 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
};

export default Navbar;
