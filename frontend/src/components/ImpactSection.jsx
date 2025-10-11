import { Users, TrendingUp, MapPin, Award } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    { icon: Users, value: "700+", label: "NGOs Supported" },
    { icon: TrendingUp, value: "₹100 Cr+", label: "Funding Facilitated" },
    { icon: MapPin, value: "20+", label: "States Served" },
    { icon: Award, value: "8+", label: "Years Experience" },
  ];

  return (
    <section className="bg-yellow-500 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="mx-auto mb-3 text-white" size={32} />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-['Poppins']">
                {stat.value}
              </div>
              <div className="text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;