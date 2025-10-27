import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projectsContent";
import { ArrowLeft, ArrowRight, Check, Users, BadgeCheck, Sprout, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProjectRenderDetail = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.keyword === keyword);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Project Not Found</h1>
          <Button variant="default" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  // Get up to 3 related projects excluding current
  const relatedProjects = projects
    .filter((p) => p.keyword !== keyword)
    .slice(0, 3);

  // Helper function to navigate to home and scroll to projects section
  const goToProjectSection = () => {
    navigate("/#projects");
    setTimeout(() => {
      const element = document.querySelector("#projects");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground gap-2 mb-8">
          <Home
            className="w-4 h-4 cursor-pointer hover:text-primary transition-colors"
            onClick={() => navigate("/")}
          />
          <span>/</span>
          <span
            className="cursor-pointer hover:text-primary transition-colors"
            onClick={goToProjectSection}
          >
            Projects
          </span>
          <span>/</span>
          <span className="text-foreground font-medium">{project.title}</span>
        </div>

        {/* Project Image */}
        <Card className="overflow-hidden mb-8">
          <div className="flex justify-center bg-muted/30">
            <img
              src={project.image}
              alt={project.title}
              className="object-contain max-w-full h-auto max-h-[500px] rounded-t-md"
            />
          </div>
        </Card>

        {/* Title and Description */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {project.title}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        <Separator className="my-8" />

        {/* Content Section */}
        <div className="space-y-12">
          {/* Introduction */}
          <Card className="mb-12 p-8 border-border bg-card">
            <h2 className="mb-4 text-2xl font-bold text-card-foreground">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDetails.introduction}
            </p>
          </Card>

          {/* Main Sections */}
          <div className="mb-12 space-y-8">
            {project.fullDetails.sections.map((section, index) => (
              <Card key={index} className="p-8 border-border bg-gradient-to-br from-card to-muted/20">
                <h3 className="mb-4 text-xl font-bold text-card-foreground flex items-center gap-2">
                  <Sprout className="h-5 w-5 text-primary" />
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Three Column Details */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Benefits */}
            <Card className="p-6 border-border bg-gradient-to-br from-primary/5 to-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-card-foreground">Key Benefits</h3>
              <ul className="space-y-2">
                {project.fullDetails.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Eligibility */}
            <Card className="p-6 border-border bg-gradient-to-br from-accent/5 to-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-card-foreground">Who Can Apply</h3>
              <ul className="space-y-2">
                {project.fullDetails.eligibility.map((item, index) => (
                  <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                    <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Support */}
            <Card className="p-6 border-border bg-gradient-to-br from-secondary/5 to-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <Sprout className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-card-foreground">Our Support</h3>
              <ul className="space-y-2">
                {project.fullDetails.support.map((item, index) => (
                  <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="mt-12 p-8 border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="text-center">
              <h3 className="mb-3 text-2xl font-bold text-card-foreground">
                Ready to Start Your Project?
              </h3>
              <p className="mb-6 text-muted-foreground">
                Join us in promoting herbal farming, Ayurveda education, and sustainable rural development
              </p>
              <Button size="lg" onClick={() => navigate("/")} className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started Today
              </Button>
            </div>
          </Card>

          {/* Related Projects Section */}
          {relatedProjects.length > 0 && (
            <div className="mt-16 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">
                  More Projects You May Like
                </h2>
                <button
                  onClick={() => navigate("/projects")}
                  className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition duration-300 cursor-pointer group"
                >
                  View All
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((item) => {
                  const RelatedIcon = item.icon;
                  return (
                    <Card
                      key={item.keyword}
                      className="cursor-pointer group overflow-hidden border-border bg-card hover:shadow-[var(--shadow-hover)] transition-all duration-300"
                      onClick={() => navigate(`/project/${item.keyword}`)}
                    >
                      <div className="w-full h-48 overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-60" />
                        <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-lg">
                          <RelatedIcon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="p-4 bg-card">
                        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectRenderDetail;
