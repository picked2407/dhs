import { useState, useEffect } from "react";
import { ApplyForm } from "@/components/ApplyForm";
import luxuryYacht from "@/assets/luxury-yacht-branded.jpg";
import beachLifestyle from "@/assets/beach-lifestyle-branded.jpg";
import luxuryCar from "@/assets/luxury-car-branded.jpg";

const Apply = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    luxuryYacht,
    beachLifestyle,
    luxuryCar
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Sliding Image Gallery */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden min-h-[40vh] lg:min-h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'translate-x-0' 
                : index < currentImageIndex 
                ? '-translate-x-full' 
                : 'translate-x-full'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
        ))}
        
        {/* Image Navigation Dots */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 flex space-x-2 sm:space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Application Form */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-4 sm:p-6 lg:p-12 min-h-screen">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <ApplyForm />
        </div>
      </div>
    </div>
  );
};

export default Apply;