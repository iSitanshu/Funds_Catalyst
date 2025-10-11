import React from "react";
import { Scale, Globe, Puzzle, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Expert Legal & Compliance Support",
    description:
      "Navigate complex NGO regulations with confidence through our experienced legal team.",
  },
  {
    icon: Globe,
    title: "Pan-India NGO Network",
    description:
      "Leverage our extensive network across 20 states for partnerships and collaborations.",
  },
  {
    icon: Puzzle,
    title: "End-to-End Project Management",
    description:
      "From proposal to execution, we handle every aspect of your projects professionally.",
  },
  {
    icon: Handshake,
    title: "Direct Access to CSR & Government Funding",
    description:
      "Connect with corporate CSR programs and government schemes through our established relationships.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative py-20 px-6">
      {/* Decorative blurred circle background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Why Choose Funds Catalyst?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          We provide end-to-end consultancy solutions empowering NGOs, startups,
          and institutions to thrive through funding, compliance, and execution
          excellence.
        </p>

        {/* Cards grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white shadow-lg rounded-2xl p-8 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-indigo-200"
              >
                {/* Icon Container */}
                <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-indigo-50 text-indigo-600 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <Icon size={32} />
                  <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Accent glow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
