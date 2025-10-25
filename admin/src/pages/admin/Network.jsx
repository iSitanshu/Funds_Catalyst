import { useEffect, useState } from "react";
import { Plus, Search, Trash2, Upload, Loader2 } from "lucide-react";
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

export function Network() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ image: null, description: "" });
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // ✅ Fetch all images from backend
  useEffect(() => {
    const fetchNetwork = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BACKEND_URL}/api/network/fetch_network`);
        const data = await res.json();
        if (res.ok && data.network_info) {
          setImages(data.network_info);
        } else {
          toast.error("Failed to fetch network images");
        }
      } catch (error) {
        console.error("Error fetching network images:", error);
        toast.error("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchNetwork();
  }, [BACKEND_URL]);

  const filteredImages = images.filter((img) =>
    img.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ✅ Handle file preview
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // ✅ Upload image to backend (multipart/form-data)
  const handleSave = async () => {
    if (!formData.image || !formData.description) {
      toast.error("Please provide both image and description");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("image", formData.image);
    uploadData.append("description", formData.description);

    setUploading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/network/add_network`, {
        method: "POST",
        body: uploadData,
      });

      const data = await res.json();

      if (res.ok && data.network) {
        setImages((prev) => [data.network, ...prev]);
        toast.success("Image uploaded successfully!");
        setIsDialogOpen(false);
        setFormData({ image: null, description: "" });
        setPreviewUrl("");
      } else {
        toast.error(data.error || "Failed to upload image");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  // ⚙️ (Optional placeholder delete)
  const handleDelete = (id) => {
    setImages(images.filter((img) => img.id !== id));
    toast.success("Image deleted locally (implement backend delete if needed)");
  };

  // ⏳ Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-muted-foreground animate-pulse">Loading network images...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">Update the Network Section</h1>
          <p className="text-muted-foreground mt-1">
            Upload and manage your gallery images
          </p>
        </div>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="gap-2 shadow-lg hover:shadow-xl transition-all"
          disabled={uploading}
        >
          <Plus className="h-4 w-4" />
          Upload Image
        </Button>
      </div>

      {/* Search + Gallery */}
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

        {filteredImages.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No images found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden hover:shadow-lg transition-all border-border/50"
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={image.imageUrl}
                    alt={image.description}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    {new Date(image.createdAt).toLocaleDateString()}
                  </p>
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
        )}
      </Card>

      {/* Upload Dialog */}
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
            {/* File input */}
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
                <label htmlFor="image" className="cursor-pointer block">
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
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full aspect-video object-cover"
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description || ""}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Describe the image..."
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsDialogOpen(false);
                setFormData({ image: null, description: "" });
                setPreviewUrl("");
              }}
            >
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={uploading}>
              {uploading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Uploading...
                </>
              ) : (
                "Upload Image"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
