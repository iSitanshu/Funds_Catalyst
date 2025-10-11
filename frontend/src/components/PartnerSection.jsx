import React, { useState, useEffect, useRef } from "react";

const partnerLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
];

const PartnerSection = () => {
  const [visibleLogos, setVisibleLogos] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Animate two logos at a time
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setVisibleLogos((prev) => {
        const remaining = partnerLogos
          .map((_, i) => i)
          .filter((i) => !prev.includes(i));
        if (remaining.length === 0) {
          clearInterval(interval);
          return prev;
        }

        // ✅ Pick up to two new random logos each time
        const shuffled = remaining.sort(() => Math.random() - 0.5);
        const newOnes = shuffled.slice(0, 2);
        return [...prev, ...newOnes];
      });
    }, 800);

    return () => clearInterval(interval);
  }, [isInView]);

  const positions = [
    { top: 22, left: 40 },
    { top: 52, left: 35 },
    { top: 52, left: 75 },
    { top: 72, left: 45 },
    { top: 47, left: 25 },
    { top: 40, left: 65 },
    { top: 70, left: 60 },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative h-[300px] bg-gray-100 overflow-hidden flex items-center justify-center"
    >
      <h2 className="text-3xl font-bold text-gray-800 z-10">Our Partners</h2>

      <div className="absolute inset-0">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out ${
              visibleLogos.includes(index)
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
            style={{
              top: `${positions[index].top}%`,
              left: `${positions[index].left}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="w-20 h-20 object-contain rounded-md shadow-md hover:shadow-xl hover:scale-110 transition-all duration-500 bg-white p-2"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/80?text=Logo";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;