import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import DOMPurify from "dompurify";

const BlogRenderDetail = () => {
  const blogId = useSelector((state) => state.blog.currentblogId);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/blogs/particular_blog?blogId=${blogId}`
        );
        if (response.data.success) {
          setBlog(response.data.particular_blog);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blog details");
      } finally {
        setLoading(false);
      }
    };

    if (blogId) fetchBlog();
  }, [blogId]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Loading blog...
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-3">
        <p className="text-red-500 text-lg font-medium">{error}</p>
        <Button variant="outline" onClick={() => navigate("/")}>
          Go Back Home
        </Button>
      </div>
    );

  if (!blog)
    return (
      <h1 className="text-center text-red-500 mt-20">Blog not found</h1>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground gap-2">
        <Home
          className="w-4 h-4 cursor-pointer hover:text-yellow-500"
          onClick={() => navigate("/")}
        />
        <span>/</span>
        <span
          className="cursor-pointer hover:text-yellow-500"
          onClick={() => navigate("/#blogs")}
        >
          Blogs
        </span>
        <span>/</span>
        <span className="text-foreground font-medium">{blog.title}</span>
      </div>

      {/* Blog Detail */}
      <Card className="border-none shadow-sm">
        <CardHeader className="pb-0">
          <CardTitle className="text-3xl font-bold tracking-tight text-gray-900">
            {blog.title}
          </CardTitle>
          <p className="text-muted-foreground text-lg mt-2">
            {blog.shortDescription}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Published on{" "}
            <span className="font-medium text-gray-500">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
        </CardHeader>

        <CardContent className="mt-6 space-y-6">
          <Separator />

          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog.content),
            }}
          />
        </CardContent>
      </Card>

      {/* Back Button */}
      <div className="flex justify-start mt-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/blogs")}
          className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Button>
      </div>
    </div>
  );
};

export default BlogRenderDetail;
