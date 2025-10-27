import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects, projectsOverview } from "@/content";

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const visibleProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            {projectsOverview.mainTitle}
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            {projectsOverview.mainDescription}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {projectsOverview.schemes.map((scheme, index) => (
              <span
                key={index}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
              >
                {scheme}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Grid - Same hover style as ServiceSection */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden group cursor-pointer h-[280px]"
                onClick={() => navigate(`/api/projects/${project.keyword}`)}
              >
                {/* Image (always in color, no grayscale) */}
                <div className="relative w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                  />

                  {/* Overlay (darker when not hovered) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                      isHovered ? "opacity-60" : "opacity-80"
                    }`}
                  />
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Icon at top-right */}
                  <div className="flex justify-end">
                    <div
                      className={`transition-all duration-500 ${
                        isHovered
                          ? "opacity-100 translate-y-0"
                          : "opacity-80 translate-y-0"
                      }`}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title + Description */}
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-3">
                      {project.title}
                    </h3>
                    <div
                      className={`transition-all duration-500 mb-4 ${
                        isHovered ? "w-1/2 h-1 bg-primary" : "w-12 h-1 bg-white"
                      }`}
                    />
                    <div
                      className={`text-white text-sm leading-relaxed transition-all duration-500 ${
                        isHovered
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      {project.description}
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

export default ProjectsSection;
