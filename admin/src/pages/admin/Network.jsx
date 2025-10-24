import { useState } from "react";
import { Plus, Search, Trash2, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const mockImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
    description: "Modern workspace with laptop and coffee",
    uploadDate: "2025-10-20",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    description: "Creative coding environment",
    uploadDate: "2025-10-18",
  },
];

export function Network() {
  const [images, setImages] = useState(mockImages);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [previewUrl, setPreviewUrl] = useState("");

  const filteredImages = images.filter((img) =>
    img.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setFormData({ ...formData, url: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!formData.url || !formData.description) {
      toast.error("Please provide both image and description");
      return;
    }

    const newImage = {
      ...formData,
      id: Math.max(...images.map((img) => img.id), 0) + 1,
      uploadDate: new Date().toISOString().split('T')[0],
    };
    setImages([...images, newImage]);
    toast.success("Image uploaded successfully");
    setIsDialogOpen(false);
    setFormData({});
    setPreviewUrl("");
  };

  const handleDelete = (id) => {
    setImages(images.filter((img) => img.id !== id));
    toast.success("Image deleted successfully");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">
            Update the Network Section
          </h1>
          <p className="text-muted-foreground mt-1">Upload and manage your gallery images</p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)} className="gap-2 shadow-lg hover:shadow-xl transition-all">
          <Plus className="h-4 w-4" />
          Upload Image
        </Button>
      </div>

      <Card className="p-6 shadow-lg border-border/50">
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search images..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-all border-border/50">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={image.url}
                  alt={image.description}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-2">{image.uploadDate}</p>
                <p className="font-medium mb-3 line-clamp-2">{image.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(image.id)}
                  className="w-full hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Upload New Image
            </DialogTitle>
            <DialogDescription>
              Add a new image to your gallery with a description
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="image">Image File *</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="image" className="cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </label>
              </div>
              {previewUrl && (
                <div className="mt-4 rounded-lg overflow-hidden border border-border">
                  <img src={previewUrl} alt="Preview" className="w-full aspect-video object-cover" />
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the image..."
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsDialogOpen(false);
              setFormData({});
              setPreviewUrl("");
            }}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="shadow-lg">
              Upload Image
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
