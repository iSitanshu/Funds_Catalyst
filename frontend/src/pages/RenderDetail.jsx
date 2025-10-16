import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { project } from "../content";
import { ArrowRight } from "lucide-react";

const RenderDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const data = project.find((item) => item.keyword === projectId);
  if (!data) return <h1 className="text-center text-red-500">Project not found</h1>;

  // Get up to 3 related articles excluding current
  const relatedArticles = project
    .filter((item) => item.keyword !== projectId)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Project Detail */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex justify-center bg-gray-100">
            <img
              src={data.image}
              alt={data.title}
              className="object-contain max-w-full h-auto rounded-t-md"
            />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{data.title}</h1>
        <p className="text-muted-foreground text-lg">{data.description}</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam provident aut laudantium. Perferendis accusantium quis ratione deleniti eum eaque dolores non, natus corporis inventore dignissimos animi harum at, cum incidunt id recusandae porro placeat, odio quos! Autem, veritatis iste praesentium error voluptatum omnis ut asperiores cumque sed sapiente repudiandae at magnam eum quibusdam unde facere hic reprehenderit ducimus expedita beatae. Necessitatibus similique modi at quae, dolor reiciendis laudantium minima et, asperiores enim vel atque sapiente ipsa pariatur? Doloribus minima illum, rem repellat consequuntur ab maiores molestiae, laborum quasi architecto obcaecati distinctio incidunt explicabo fugiat optio veritatis, nesciunt mollitia facilis quidem.
      </div>

      <Separator />

      <p className="text-base leading-relaxed text-gray-700">{data.largeDescription}</p>

      {/* Related Projects Section */}
      {relatedArticles.length > 0 && (
        <div className="mt-12 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">More Projects You May Like</h2>
          </div>

          {/* View All Button - Right aligned */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => navigate("/api/projects")}
              className="flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-800 transition duration-300 cursor-pointer group"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Static 3 Related Articles */}
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((item) => (
              <div
                key={item.keyword}
                className="cursor-pointer group rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
                onClick={() => navigate(`/projects/${item.keyword}`)}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderDetail;
