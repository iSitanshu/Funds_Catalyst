import React from "react";
import { Menu } from 'lucide-react';
import Hamburger from 'hamburger-react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-1 shadow-sm bg-primary">
      <div className="flex items-center text-white">
        {/* <img 
        src="./src/assets/logo_fund_cataylst.png" 
        alt="Company Logo"
        className="w-20 h-auto"
        /> */}
        Fund Catalyst
      </div>      
      <div>
        {/* <Menu className="text-white" /> */}
        <Hamburger label="Show menu" color="white" size={20}/>
      </div>
    </div>
  );
};

export default Navbar;
