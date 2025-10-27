import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
const navigate = useNavigate()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./src/assets/background_for_header.jpeg"
          alt="Professional team collaboration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight max-w-1xl mx-auto">
          Your Bridge to Government & CSR Support
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-4xl mx-auto leading-relaxed">
          Government Project Sanctioning Made Easy for <span className="font-bold text-accent">NGOs</span>, <span className="font-bold text-accent">Startups</span>,  
          and <span className="font-bold text-accent">Corporate Organizations</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            // onClick={() => scrollToSection("contact")}
            className="bg-yellow-400 hover:bg-yellow-600 cursor-pointer"
            onClick={() => navigate('/api/consultancy-booking')}
          >
            Get a Free Consultation
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="hero-outline" 
            size="xl"
            className="cursor-pointer"
            onClick={() => scrollToSection("services")}
          >
            View Our Services
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 text-primary-foreground">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">8+</div>
            <div className="text-sm md:text-base opacity-90">Years Expertise</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">21+</div>
            <div className="text-sm md:text-base opacity-90">Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">19</div>
            <div className="text-sm md:text-base opacity-90">States Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;