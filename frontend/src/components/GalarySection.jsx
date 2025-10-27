import React, { useEffect, useState } from "react";

export default function GallerySection() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/network/fetch_network`);
        if (!res.ok) throw new Error("Failed to fetch images");
        const data = await res.json();
        setImages(data.network_info.slice(0, 8));  // max 8 images
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  if (loading) return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center text-gray-500">
      Loading gallery...
    </section>
  );

  if (error) return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center text-red-500">
      {error}
    </section>
  );

  if (images.length === 0) return null; // optionally hide section if no images

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Our Network Gallery
      </h2>
      <div
        className={`grid gap-6 ${
          images.length === 1
            ? "grid-cols-1"
            : images.length === 2
            ? "grid-cols-2"
            : images.length === 3
            ? "grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        }`}
      >
        {images.map(({ id, imageUrl, description }) => (
          <div
            key={id}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
            title={description}
          >
            <img
              src={imageUrl}
              alt={description || "Network Image"}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
