import { useEffect, useState } from "react";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  ChevronUp,
  ChevronDown,
  Download,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RichTextEditor } from "@/components/RichTextEditor";
import { Textarea } from "@/components/ui/textarea";

export function BlogManagement() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  // ✅ Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/blogs/fetch_blogs`);
        const data = await response.json();
        if (data.success) {
          setBlogs(data.data.sort((a, b) => a.position - b.position));
        } else {
          toast.error("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast.error("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [BACKEND_URL]);

  // ✅ Filter and sort blogs
  const filteredBlogs = blogs
    .filter(
      (blog) =>
        blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.position - b.position);

  // ✅ Dialog open handler
  const handleOpenDialog = (blog) => {
    if (blog) {
      setEditingBlog(blog);
      setFormData(blog);
    } else {
      setEditingBlog(null);
      setFormData({
        title: "",
        shortDescription: "",
        content: "",
      });
    }
    setIsDialogOpen(true);
  };

  // ✅ Create or Update Blog
  const handleSave = async () => {
    if (!formData.title || !formData.shortDescription || !formData.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      if (editingBlog) {
        // Update blog
        const res = await fetch(
          `${BACKEND_URL}/api/blogs/edit_blog/${editingBlog.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: formData.title,
              shortDescription: formData.shortDescription,
              content: formData.content,
            }),
          }
        );

        const data = await res.json();

        if (res.ok) {
          toast.success("Blog updated successfully");
          setBlogs((prev) =>
            prev.map((b) => (b.id === editingBlog.id ? data.updatedBlog : b))
          );
          setIsDialogOpen(false);
        } else {
          toast.error(data.message || "Failed to update blog");
        }
      } else {
        // Create blog
        const res = await fetch(`${BACKEND_URL}/api/blogs/add_blogs`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
          toast.success("Blog created successfully");
          setBlogs((prev) => [...prev, data.data]);
          setIsDialogOpen(false);
        } else {
          toast.error(data.message || "Failed to create blog");
        }
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      toast.error("Error saving blog");
    }
  };

  // ✅ Delete blog
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/blogs/delete_blog/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        setBlogs((prev) => prev.filter((b) => b.id !== id));
        toast.success("Blog deleted successfully");
      } else {
        toast.error(data.message || "Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Error deleting blog");
    }
  };

  // ✅ Export as HTML
  const exportToWord = (blog) => {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${blog.title}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; max-width: 800px; margin: 0 auto; }
            h1 { color: #333; }
            .meta { color: #666; font-size: 0.9em; margin-bottom: 20px; }
            img { max-width: 100%; height: auto; }
          </style>
        </head>
        <body>
          <h1>${blog.title}</h1>
          <div class="meta">
            <p><strong>Description:</strong> ${blog.shortDescription}</p>
            <p><strong>Created:</strong> ${new Date(
              blog.createdAt
            ).toLocaleDateString()}</p>
          </div>
          <div class="content">
            ${blog.content}
          </div>
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${blog.title.replace(/\s+/g, "-")}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Blog exported successfully");
  };

  // ✅ Loading & Empty states
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-muted-foreground animate-pulse">Loading blogs...</p>
      </div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">No blogs found.</p>
      </div>
    );
  }

  // ✅ UI
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Blog Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Create, edit, and organize your blog posts
          </p>
        </div>
        <Button
          onClick={() => handleOpenDialog()}
          className="gap-2 shadow-lg hover:shadow-xl transition-all"
        >
          <Plus className="h-4 w-4" />
          Add Blog
        </Button>
      </div>

      <Card className="p-6 shadow-lg border-border/50">
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="rounded-md border border-border/50 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead className="w-20">Position</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Short Description</TableHead>
                <TableHead>Created Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBlogs.map((blog, index) => (
                <TableRow
                  key={blog.id}
                  className="hover:bg-muted/10 transition-colors"
                >
                  {/* ✅ Serial number instead of arrows */}
                  <TableCell className="font-medium">{index + 1}</TableCell>

                  <TableCell className="font-medium">{blog.title}</TableCell>

                  <TableCell className="max-w-xs truncate">
                    {blog.shortDescription}
                  </TableCell>

                  <TableCell>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => exportToWord(blog)}
                        className="hover:bg-accent/10 hover:text-accent"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleOpenDialog(blog)}
                        className="hover:bg-primary/10 hover:text-primary"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(blog.id)}
                        className="hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* ✅ Create / Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {editingBlog ? "Edit Blog" : "Create New Blog"}
            </DialogTitle>
            <DialogDescription>
              {editingBlog
                ? "Update your blog post details"
                : "Add a new blog post to your website"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title *</Label>
              <Input
                id="title"
                value={formData.title || ""}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Enter blog title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shortDesc">Short Description *</Label>
              <Textarea
                id="shortDesc"
                value={formData.shortDescription || ""}
                onChange={(e) =>
                  setFormData({ ...formData, shortDescription: e.target.value })
                }
                placeholder="Brief description for preview"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Blog Content *</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Write your blog content below. Use the toolbar to format text,
                add headings, lists, images, and links.
              </p>
              <RichTextEditor
                content={formData.content || ""}
                onChange={(html) => setFormData({ ...formData, content: html })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="shadow-lg">
              {editingBlog ? "Update Blog" : "Create Blog"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
