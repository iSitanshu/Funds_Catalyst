import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ExternalLink, LogIn, Mail, Info, Briefcase } from "lucide-react";

const ministries = [
  {
    name: "MIN. OF SKILL DEVELOPMENT & ENTREPRENEURSHIP",
    url: "https://www.msde.gov.in/",
  },
  {
    name: "MINISTRY OF SOCIAL JUSTICE & EMPOWERMENT",
    url: "https://socialjustice.gov.in/",
  },
  {
    name: "MINISTRY OF FISHERIES, ANIMAL HUSBANDRY & DAIRY FARMING",
    url: "https://minfahd.gov.in/",
  },
  {
    name: "MSME",
    url: "https://msme.gov.in/",
  },
  {
    name: "MINISTRY OF TEXTILES",
    url: "https://texmin.nic.in/",
  },
  {
    name: "MINISTRY OF EDUCATION",
    url: "https://www.education.gov.in/",
  },
];

const NavbarLayout = ({ isOpen, onClose, isLoggedIn = false }) => {
  const navigate = useNavigate();
  const [isAssociationOpen, setIsAssociationOpen] = useState(false);

  const handleNavigation = (path) => {
    if (path.startsWith('/#')) {
      onClose();
      const section = path.substring(2);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
      onClose();
    }
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="w-[380px] sm:w-[440px] bg-white border-l-4 border-primary overflow-y-auto"
      >
        <SheetHeader className="border-b border-secondary pb-4 mb-6">
          <SheetTitle className="text-2xl font-bold text-primary">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1">
          {/* Login/Signup */}
          <button
            onClick={() => handleNavigation('/sign-in')}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-left hover:bg-secondary transition-all duration-300 group"
          >
            <LogIn className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
              Login / Signup
            </span>
          </button>

          {/* In Association With */}
          <Collapsible
            open={isAssociationOpen}
            onOpenChange={setIsAssociationOpen}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-secondary transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  Our Partners
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-primary transition-transform duration-300 ${
                  isAssociationOpen ? 'rotate-180' : ''
                }`}
              />
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-1 space-y-1 animate-accordion-down">
              <div className="bg-secondary/30 rounded-lg p-2">
                {ministries.map((ministry, index) => (
                  <button
                    key={index}
                    onClick={() => handleExternalLink(ministry.url)}
                    className="flex items-start gap-2 w-full px-4 py-2.5 text-left hover:bg-secondary rounded-md transition-all duration-300 group"
                  >
                    <ExternalLink className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors leading-relaxed font-medium">
                      {ministry.name}
                    </span>
                  </button>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* About */}
          <button
            onClick={() => handleNavigation('/api/about-us')}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-left hover:bg-secondary transition-all duration-300 group"
          >
            <Info className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
              About
            </span>
          </button>

          {/* Contact Us */}
          <button
            onClick={() => handleNavigation('/api/contact-us')}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-left hover:bg-secondary transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
              Contact Us
            </span>
          </button>

          {/* Services */}
          <button
            onClick={() => handleNavigation('/#services')}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-left hover:bg-secondary transition-all duration-300 group"
          >
            <Briefcase className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
              Services
            </span>
          </button>
        </nav>

        {/* Footer Badge */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
            <p className="text-xs text-center text-muted-foreground">
              Empowering Communities Through Funding
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarLayout;
