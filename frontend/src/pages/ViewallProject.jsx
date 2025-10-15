import React from "react";
import { useNavigate } from "react-router-dom";
import { project } from "../content";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

const ViewallProject = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header with background image */}
      <header className="relative bg-cover bg-center py-24 shadow-sm" style={{ backgroundImage: "url('/images/portfolio-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white">Our Project Portfolio</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Discover how we bring ideas to life with our expert consulting services
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
          Explore Our Projects
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {project.map((proj, idx) => (
            <Card
              key={idx}
              className="border border-gray-200 bg-white transition-all duration-200 hover:shadow-xl cursor-pointer"
              onClick={() => navigate(`/api/project/${proj.keyword}`)}
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-xl font-semibold">
                  {proj.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-2 text-gray-600 text-sm leading-relaxed">
                {proj.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-xl text-gray-800 mb-6 font-medium">
            Want to discuss a project tailored for your business?
          </p>
          <button
            onClick={() => navigate.push("/api/contact")}
            className=
              "px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ViewallProject;
