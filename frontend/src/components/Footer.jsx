import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  // const scrollToSection = (id: string) => {
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Funds Catalyst</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Your strategic partner for NGO consultancy, CSR funding, Project Management and Government Tender support across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                onClick={() => navigate("/api/about-us")} 
                className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button
                // onClick={() => scrollToSection("services")} 
                className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button
                // onClick={() => scrollToSection("impact")} 
                className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Impact Stories
                </button>
              </li>
              <li>
                <button
                // onClick={() => scrollToSection("contact")} 
                className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>NGO Registration</li>
              <li>CSR Consultancy</li>
              <li>Government Tenders</li>
              <li>DPR Writing</li>
              <li>Project Execution</li>
              <li>Compliance Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors group">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">+91 98765 43210</div>
                  <div className="text-sm">Mon-Sat, 9AM-6PM</div>
                </div>
              </a>
              
              <a href="mailto:info@fundscatalyst.in" className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors group">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">info@fundscatalyst.in</div>
                  <div className="text-sm">24/7 Email Support</div>
                </div>
              </a>
              
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">New Delhi, India</div>
                  <div className="text-sm">Serving 20 States Pan-India</div>
                </div>
              </div>

              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:scale-105 transition-transform font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 Funds Catalyst. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
