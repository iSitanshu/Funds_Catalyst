import React from "react";
import { Heart } from 'lucide-react';
import Hamburger from 'hamburger-react';
import PaymentButton from "./PaymentButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between px-6 py-1 shadow-sm bg-primary">
      
      {/* Logo or Brand */}
      <div 
        className="flex items-center text-white font-bold text-lg tracking-wide cursor-pointer"
        onClick={() => navigate('/')}
      >
        Fund Catalyst
      </div>      

      {/* Right side: Donate button and Hamburger */}
      <div className="flex items-center gap-4">
        
        {/* Donate Button */}
        <button
          className="flex items-center gap-2 bg-white text-primary font-semibold px-4 py-2 rounded-full cursor-pointer shadow-md hover:bg-pink-100 transition-all duration-300"
          onClick={() => navigate('/api/donate')}
        >
          <Heart className="text-red-500" size={18} />
          Donate
        </button>

        {/* Hamburger Menu */}
        <Hamburger label="Show menu" color="white" size={20} />
      </div>
    </div>
  );
};

export default Navbar;
