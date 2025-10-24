import { useState } from "react";
import { Plus, Search, Edit, Trash2, ChevronUp, ChevronDown, Download } from "lucide-react";
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

const mockBlogs = [
  {
    id: 1,
    title: "Getting Started with React",
    shortDescription: "Learn the basics of React development",
    content: "<h2>Introduction to React</h2><p>React is a powerful JavaScript library that enables developers to build dynamic and interactive user interfaces with ease.</p><h3>Key Features</h3><ul><li>Component-based architecture</li><li>Virtual DOM for performance</li><li>Rich ecosystem</li></ul><p>In this comprehensive guide, we'll cover everything you need to know to get started with React development.</p>",
    createdDate: "2025-10-15",
    position: 1,
  },
  {
    id: 2,
    title: "Advanced TypeScript Tips",
    shortDescription: "Master TypeScript with these advanced techniques",
    content: "<h2>TypeScript Advanced Patterns</h2><p>Deep dive into TypeScript features that will take your development to the next level.</p><h3>Topics Covered</h3><ol><li>Generics and type constraints</li><li>Utility types</li><li>Advanced patterns</li></ol><p>TypeScript adds static typing to JavaScript, making your code more maintainable and less error-prone.</p>",
    createdDate: "2025-10-10",
    position: 2,
  },
];

export function BlogManagement() {
  const [blogs, setBlogs] = useState(mockBlogs);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({});

  const filteredBlogs = blogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.position - b.position);

  const handleOpenDialog = (blog) => {
    if (blog) {
      setEditingBlog(blog);
      setFormData(blog);
    } else {
      setEditingBlog(null);
      setFormData({
        position: blogs.length + 1,
        createdDate: new Date().toISOString().split('T')[0],
      });
    }
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (!formData.title || !formData.shortDescription || !formData.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (editingBlog) {
      setBlogs(blogs.map((b) => (b.id === editingBlog.id ? { ...b, ...formData } : b)));
      toast.success("Blog updated successfully");
    } else {
      const newBlog = {
        ...formData,
        id: Math.max(...blogs.map((b) => b.id), 0) + 1,
      };
      setBlogs([...blogs, newBlog]);
      toast.success("Blog created successfully");
    }
    setIsDialogOpen(false);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
    toast.success("Blog deleted successfully");
  };

  const handleMove = (id, direction) => {
    const currentIndex = blogs.findIndex((b) => b.id === id);
    const newBlogs = [...blogs];
    const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex >= 0 && targetIndex < blogs.length) {
      [newBlogs[currentIndex], newBlogs[targetIndex]] = [newBlogs[targetIndex], newBlogs[currentIndex]];
      newBlogs.forEach((blog, idx) => (blog.position = idx + 1));
      setBlogs(newBlogs);
      toast.success("Blog position updated");
    }
  };

  const exportToWord = (blog) => {
    // Create HTML content
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
            <p><strong>Created:</strong> ${blog.createdDate}</p>
          </div>
          <div class="content">
            ${blog.content}
          </div>
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${blog.title.replace(/\s+/g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Blog exported successfully");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Blog Management
          </h1>
          <p className="text-muted-foreground mt-1">Create, edit, and organize your blog posts</p>
        </div>
        <Button onClick={() => handleOpenDialog()} className="gap-2 shadow-lg hover:shadow-xl transition-all">
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
                <TableRow key={blog.id} className="hover:bg-muted/10 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{blog.position}</span>
                      <div className="flex flex-col">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-5 w-5"
                          onClick={() => handleMove(blog.id, "up")}
                          disabled={index === 0}
                        >
                          <ChevronUp className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-5 w-5"
                          onClick={() => handleMove(blog.id, "down")}
                          disabled={index === filteredBlogs.length - 1}
                        >
                          <ChevronDown className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{blog.title}</TableCell>
                  <TableCell className="max-w-xs truncate">{blog.shortDescription}</TableCell>
                  <TableCell>{blog.createdDate}</TableCell>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {editingBlog ? "Edit Blog" : "Create New Blog"}
            </DialogTitle>
            <DialogDescription>
              {editingBlog ? "Update your blog post details" : "Add a new blog post to your website"}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title *</Label>
              <Input
                id="title"
                value={formData.title || ""}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter blog title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shortDesc">Short Description *</Label>
              <Textarea
                id="shortDesc"
                value={formData.shortDescription || ""}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                placeholder="Brief description for preview"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Blog Content *</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Write your blog content below. Use the toolbar to format text, add headings, lists, images, and links.
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
