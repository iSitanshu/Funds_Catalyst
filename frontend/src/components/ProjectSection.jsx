import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // ✅ Icon import
import { project } from "../content";

const ProjectSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const visibleProjects = project.slice(0, 3);

  return (
    <section id="services" className="py-26 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blogs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We use our expertise, deep domain knowledge and the experience garnered over the last five
            decades in our articles and posts about leadership hiring and our HR Consulting services.
          </p>
        </div>

        {/* View All Button - Left aligned */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => navigate("/api/all-projects")}
            className="flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-800 transition duration-300 cursor-pointer group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleProjects.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden group cursor-pointer h-70"
                onClick={() => navigate(`/api/project/${service.uuid()}`)}
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isHovered ? "grayscale-0 scale-110" : "grayscale scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                      isHovered ? "opacity-30" : "opacity-50"
                    }`}
                  />
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
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

export default ProjectSection;
