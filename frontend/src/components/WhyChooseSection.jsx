import { Scale, Globe, Puzzle, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Expert Legal & Compliance Support",
    description: "Navigate complex NGO regulations with confidence through our experienced legal team.",
  },
  {
    icon: Globe,
    title: "Pan-India NGO Network",
    description: "Leverage our extensive network across 20 states for partnerships and collaborations.",
  },
  {
    icon: Puzzle,
    title: "End-to-End Project Management",
    description: "From proposal to execution, we handle every aspect of your projects professionally.",
  },
  {
    icon: Handshake,
    title: "Direct Access to CSR & Government Funding",
    description: "Connect with corporate CSR programs and government schemes through our established relationships.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient-primary">Funds Catalyst</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for NGO growth and sustainable social impact
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border group hover-lift"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;