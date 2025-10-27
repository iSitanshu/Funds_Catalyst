import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Newspaper, PenLine } from "lucide-react";
import { useDispatch } from "react-redux";
import { changeBlogId } from "@/features/blogs/blogSlice";

const BlogSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Generate URL slug from title
  const generateSlug = (title) =>
    title
      ?.toLowerCase()
      .split(" ")
      .slice(0, 10)
      .join("_")
      .replace(/[^\w_]+/g, "");

  // Pick a random icon per blog
  const icons = [BookOpen, Newspaper, PenLine];
  const getIcon = (index) => icons[index % icons.length];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/blogs/fetch_blogs`
        );
        const data = await res.json();
        if (data.success) {
          const sorted = data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setBlogs(sorted.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights & Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest articles, insights, and stories shaping our
            impact.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader>
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-6 w-3/4 mt-4" />
                  </CardHeader>
                  <CardContent className="space-y-3 p-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </CardContent>
                </Card>
              ))
            : blogs.map((blog, index) => {
                const slug = generateSlug(blog.title);
                const Icon = getIcon(index);

                return (
                  <Card
                    key={index}
                    onClick={() => {
                      dispatch(changeBlogId(blog.id));
                      navigate(`/api/blogs/${slug}`)
                    }}
                    className="group cursor-pointer hover:shadow-lg hover:border-yellow-400/70 border border-gray-200 transition-all duration-300"
                  >
                    <CardHeader className="flex flex-col items-start space-y-3">
                      <div className="bg-yellow-100 text-yellow-700 p-3 rounded-full group-hover:bg-yellow-200 transition-colors">
                        <Icon className="w-6 h-6" strokeWidth={1.6} />
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors">
                        {blog.title}
                      </CardTitle>
                      <p className="text-gray-500 text-sm">
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {blog.excerpt || blog.shortDescription?.slice(0, 130) + "..."}
                      </p>
                    </CardContent>

                    <CardFooter>
                      <button className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                        Read More →
                      </button>
                    </CardFooter>
                  </Card>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
