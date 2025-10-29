import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Users,
  BadgeCheck,
  Sprout,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/content";

const ProjectRenderDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.keyword === projectId);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-foreground tracking-tight">
            Project Not Found
          </h1>
          <Button variant="default" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = project.icon;
  const relatedProjects = projects
    .filter((p) => p.keyword !== projectId)
    .slice(0, 3);

  const goToProjectSection = () => {
    navigate("/#projects");
    setTimeout(() => {
      const element = document.querySelector("#projects");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground gap-2 mb-10">
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
          <span className="text-foreground font-semibold">{project.title}</span>
        </div>

        {/* Project Header */}
        <Card className="overflow-hidden mb-10 shadow-lg border-border bg-card/80 backdrop-blur-sm">
          <div className="relative flex justify-center bg-black/70">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full max-h-[480px] opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 backdrop-blur-md shadow-md">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
                  {project.title}
                </h1>
                <p className="text-gray-200 mt-2 text-lg max-w-2xl">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Introduction */}
        <Card className="mb-12 p-8 border-border bg-gradient-to-br from-card to-muted/10 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="text-3xl font-bold text-card-foreground tracking-tight">
              Introduction
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {project.fullDetails.introduction}
          </p>
        </Card>

        {/* Key Sections */}
        <div className="mb-16 space-y-8">
          {project.fullDetails.sections.map((section, index) => (
            <Card
              key={index}
              className="p-8 border-border bg-gradient-to-br from-card via-muted/10 to-card shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="mb-4 text-2xl font-semibold text-card-foreground flex items-center gap-2">
                <Sprout className="h-6 w-6 text-primary" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-base">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Three Columns: Benefits / Eligibility / Support */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Benefits */}
          <Card className="p-8 border-border bg-gradient-to-br from-primary/5 to-card shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-card-foreground border-b border-primary/20 pb-2">
              Key Benefits
            </h3>
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
          <Card className="p-8 border-border bg-gradient-to-br from-accent/5 to-card shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <Users className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-card-foreground border-b border-accent/20 pb-2">
              Who Can Apply
            </h3>
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
          <Card className="p-8 border-border bg-gradient-to-br from-secondary/5 to-card shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
              <Sprout className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-card-foreground border-b border-secondary/20 pb-2">
              Our Support
            </h3>
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

        {/* CTA */}
        <Card className="mt-16 p-10 border-primary/30 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 shadow-lg text-center rounded-xl">
          <h3 className="mb-3 text-3xl font-extrabold text-card-foreground">
            Ready to Start Your Project?
          </h3>
          <p className="mb-8 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Join us in promoting herbal farming, Ayurveda education, and
            sustainable rural development.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-full transition-transform duration-300 hover:scale-105"
          >
            Get Started Today
          </Button>
        </Card>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-20 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
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
                    className="cursor-pointer group overflow-hidden border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-lg"
                    onClick={() => navigate(`/api/projects/${item.keyword}`)}
                  >
                    <div className="w-full h-52 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-lg">
                        <RelatedIcon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="p-5 bg-card">
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
  );
};

export default ProjectRenderDetail;
