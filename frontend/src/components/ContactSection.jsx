import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Ready to Grow Your <span className="">NGO or CSR Impact?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how Funds Catalyst can help your organization access funding, ensure compliance, and scale impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div className="bg-card rounded-xl p-4 shadow-card border border-border hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-2">Our Office</h3>
                    <p className="text-muted-foreground">Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-4 shadow-card border border-border hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-2">Email Us</h3>
                    <a href="mailto:info@fundscatalyst.in" className="text-primary hover:text-primary-light transition-colors">
                      info@fundscatalyst.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-4 shadow-card border border-border hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-2">Call Us</h3>
                    <a href="tel:+919876543210" className="text-primary hover:text-primary-light transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6 animate-fade-in flex flex-col justify-center">
              <div className="bg-gradient-to-br from-blue-700 to-green-500 rounded-2xl p-8 text-center space-y-6 shadow-hover">
                <h3 className="text-2xl font-heading font-bold text-primary-foreground">
                  Get Started Today
                </h3>
                <p className="text-primary-foreground/90">
                  Schedule a free consultation to discuss your NGO's needs and discover how we can help you achieve your goals.
                </p>
                <div className="space-y-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full bg-primary-foreground text-blue-900 hover:bg-primary-foreground/90"
                  >
                    <Phone className="w-5 h-5" />
                    Request a Callback
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-primary-foreground bg-blue text-primary-foreground hover:bg-primary-foreground hover:text-blue-900"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  We typically respond within 24 hours
                </p>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-500">24h</p>
                    <p className="text-xs text-muted-foreground">Response Time</p>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-500">100%</p>
                    <p className="text-xs text-muted-foreground">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;