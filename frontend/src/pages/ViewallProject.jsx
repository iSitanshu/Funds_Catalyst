import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/content";
import { Button } from "@/components/ui/button";

const ViewAllProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header with gradient overlay */}
      <header className="relative bg-gradient-to-r from-primary via-primary/90 to-accent py-24 shadow-lg">
        <div className="container mx-auto px-4">
          <Button
            variant="secondary"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">
              Our Project Portfolio
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Discover how we promote herbal farming, Ayurveda education, and sustainable rural development
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">
          Explore Our Projects
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <Card
                key={idx}
                className="border border-border bg-card transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 cursor-pointer overflow-hidden group"
                onClick={() => navigate(`/project/${proj.keyword}`)}
              >
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                  <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardHeader className="px-6 pt-6">
                  <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {proj.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-2 text-muted-foreground text-sm leading-relaxed">
                  {proj.description}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-xl text-foreground mb-6 font-medium">
            Want to learn more about our projects?
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started Today
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default ViewAllProjects;
