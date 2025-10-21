import { useState } from "react";
import { Plus, Search, Edit, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
import { Textarea } from "../../components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const mockBlogs = [
  {
    id: 1,
    title: "Getting Started with React",
    shortDescription: "Learn the basics of React development",
    longDescription: "A comprehensive guide to getting started with React...",
    question1: "What is React?",
    answer1: "React is a JavaScript library for building user interfaces.",
    createdDate: "2025-10-15",
    position: 1,
  },
  {
    id: 2,
    title: "Advanced TypeScript Tips",
    shortDescription: "Master TypeScript with these advanced techniques",
    longDescription: "Deep dive into TypeScript features...",
    question1: "Why use TypeScript?",
    answer1: "TypeScript adds static typing to JavaScript for better development.",
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
    if (editingBlog) {
      setBlogs(blogs.map((b) => (b.id === editingBlog.id ? { ...b, ...formData } : b)));
      toast.success("Blog updated successfully");
    } else {
      const newBlog = {
        ...formData,
        id: Math.max(...blogs.map((b) => b.id)) + 1,
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

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <p className="text-muted-foreground mt-1">Create, edit, and organize your blog posts</p>
        </div>
        <Button onClick={() => handleOpenDialog()} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Blog
        </Button>
      </div>

      <Card className="p-6">
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">Position</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Short Description</TableHead>
                <TableHead>Created Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBlogs.map((blog, index) => (
                <TableRow key={blog.id}>
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
                        onClick={() => handleOpenDialog(blog)}
                        className="hover:bg-primary/10"
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
            <DialogTitle>{editingBlog ? "Edit Blog" : "Create New Blog"}</DialogTitle>
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
              <Label htmlFor="longDesc">Long Description *</Label>
              <Textarea
                id="longDesc"
                value={formData.longDescription || ""}
                onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                placeholder="Full blog content"
                rows={6}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="q1">Question 1 (Optional)</Label>
                <Input
                  id="q1"
                  value={formData.question1 || ""}
                  onChange={(e) => setFormData({ ...formData, question1: e.target.value })}
                  placeholder="FAQ question"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="a1">Answer 1</Label>
                <Input
                  id="a1"
                  value={formData.answer1 || ""}
                  onChange={(e) => setFormData({ ...formData, answer1: e.target.value })}
                  placeholder="FAQ answer"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="q2">Question 2 (Optional)</Label>
                <Input
                  id="q2"
                  value={formData.question2 || ""}
                  onChange={(e) => setFormData({ ...formData, question2: e.target.value })}
                  placeholder="FAQ question"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="a2">Answer 2</Label>
                <Input
                  id="a2"
                  value={formData.answer2 || ""}
                  onChange={(e) => setFormData({ ...formData, answer2: e.target.value })}
                  placeholder="FAQ answer"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              {editingBlog ? "Update Blog" : "Create Blog"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
