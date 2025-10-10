import { CheckCircle } from "lucide-react";
import { capabilities } from './../content.js'

const IntroSection = () => {
  

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="./src/assets/meeting_about.jpeg" 
              alt="Funds Catalyst team in strategic meeting" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold">700+</div>
              <div className="text-sm">NGOs Supported</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Simplifying the Social Sector Landscape
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Funds Catalyst bridges the gap between intent and impact. We empower NGOs, 
              corporates, and social enterprises to navigate complex regulatory frameworks, 
              unlock sustainable funding, and execute high-impact projects across India.
            </p>

            <div className="space-y-3 mb-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-blue-800">8+</div>
                <div className="text-sm text-muted-foreground">Years Expertise</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-800">100+</div>
                <div className="text-sm text-muted-foreground">Professionals</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-800">20</div>
                <div className="text-sm text-muted-foreground">States Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
