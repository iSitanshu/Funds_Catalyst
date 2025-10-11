import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Funds Catalyst helped us secure our first government tender worth ₹45 lakhs. Their DPR writing and bid management expertise was instrumental. We couldn't have done it without them.",
      name: "Rajesh Kumar",
      designation: "Founder & Director",
      organization: "Samaj Vikas Foundation, Rajasthan",
    },
    {
      quote: "As a CSR manager, finding the right NGO partners and ensuring compliance was always challenging. Funds Catalyst streamlined the entire process and helped us achieve 30% more impact with the same budget.",
      name: "Priya Sharma",
      designation: "CSR Head",
      organization: "Leading Manufacturing Corporation",
    },
    {
      quote: "The team's pan-India network and local expertise made our multi-state health project seamless. Their project execution support was exceptional, delivering results on time and within budget.",
      name: "Dr. Anand Menon",
      designation: "Executive Director",
      organization: "Health First NGO, Kerala",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by NGOs, corporates, and social enterprises across India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="pt-8 pb-6 relative z-10">
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.designation}</div>
                  <div className="text-sm text-green-500 font-medium mt-1">{testimonial.organization}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
