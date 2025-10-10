import { Icon } from "lucide-react";
import React, { useState } from "react";
import { services } from "../content";

const ServiceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our End-to-End Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for NGOs, corporates, and social enterprises
            to maximize impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden group cursor-pointer h-70"
              >
                {/* Image with grayscale filter */}
                <div className="relative w-full h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isHovered
                        ? "grayscale-0 scale-110"
                        : "grayscale scale-100"
                    }`}
                  />

                  {/* Dark overlay */}
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                      isHovered ? "opacity-30" : "opacity-50"
                    }`}
                  />
                </div>

                {/* Content container */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Icon at bottom */}
                  <div className="flex justify-end">
                    <div
                      className={`transition-all duration-500 ${
                        isHovered
                          ? "opacity-100 translate-y-0"
                          : "opacity-60 translate-y-0"
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title and description */}
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <div
                    className={`${
                        isHovered
                          ? "w-1/2 h-0.5 bg-yellow-500 mb-4"
                          : "w-12 h-0.5 bg-white mb-4"
                      }`}
                      />

                    {/* Description appears on hover */}
                    <div
                      className={`text-white text-sm leading-relaxed transition-all duration-500 ${
                        isHovered
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      {service.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
