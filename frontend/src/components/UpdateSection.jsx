import React, { useEffect, useState } from 'react';

const UpdateSection = () => {
  const [updates, setUpdates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch updates from backend
  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/network/fetch_network`);
        if (!res.ok) throw new Error('Failed to fetch updates');
        const data = await res.json();
        setUpdates(data.network_info || []); // assuming the API returns { network_info: [...] }
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchUpdates();
  }, []);

  // Slideshow interval
  useEffect(() => {
    if (!updates.length) return; // don't start interval if no updates

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, [updates]);

  if (!updates.length) {
    return (
      <div className="h-[600px] flex items-center justify-center bg-gray-200">
        <p className="text-gray-700">Loading updates...</p>
      </div>
    );
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Current image */}
      <img
        src={updates[currentIndex].imageUrl}
        alt={`Update ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Overlay with description */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-900/30 flex items-center justify-center">
        <p className="text-white text-2xl text-center max-w-3xl px-6">
          {updates[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

export default UpdateSection;