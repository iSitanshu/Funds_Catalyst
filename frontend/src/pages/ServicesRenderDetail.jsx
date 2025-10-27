import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { services } from "../content";
import { ArrowRight, Home } from "lucide-react";

const ServicesRenderDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const data = services.find((item) => item.keyword === serviceId);
  if (!data)
    return <h1 className="text-center text-red-500 mt-20">Service not found</h1>;

  const relatedArticles = services
    .filter((item) => item.keyword !== serviceId)
    .slice(0, 3);

  // ✅ Helper function to navigate to / and scroll to #services
  const goToServicesSection = () => {
    navigate("/#services");
    // Wait for route change, then smooth-scroll
    setTimeout(() => {
      const element = document.querySelector("#services");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground gap-2">
        <Home
          className="w-4 h-4 cursor-pointer hover:text-yellow-500"
          onClick={() => navigate("/")}
        />
        <span>/</span>
        <span
          className="cursor-pointer hover:text-yellow-500"
          onClick={goToServicesSection}
        >
          Services
        </span>
        <span>/</span>
      <span className="text-foreground font-medium">{data.title}</span>
      </div>

      {/* Service Detail Section */}
      <Card className="border-none shadow-sm">
        <CardHeader className="pb-0">
          <CardTitle className="text-3xl font-bold tracking-tight text-gray-900">
            {data.title}
          </CardTitle>
          <p className="text-muted-foreground text-lg mt-2">{data.description}</p>
        </CardHeader>

        <CardContent className="mt-6 space-y-8">
          <div className="rounded-lg overflow-hidden bg-gray-100 aspect-[16/9]">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <Separator />

          <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
            {data.largeDescription}
          </p>
        </CardContent>
      </Card>

      {/* Related Services */}
      {relatedArticles.length > 0 && (
        <div className="mt-14 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              More Services You May Like
            </h2>
            <Button
              variant="link"
              onClick={goToServicesSection}
              className="text-yellow-600 hover:text-yellow-700 flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {relatedArticles.map((item) => (
              <Card
                key={item.keyword}
                onClick={() => navigate(`/api/services/${item.keyword}`)}
                className="cursor-pointer group border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesRenderDetail;
