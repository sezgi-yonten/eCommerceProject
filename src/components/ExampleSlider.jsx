import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExampleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "https://via.placeholder.com/1920x800",
      alt: "Summer Collection 2024"
    },
    {
      image: "https://via.placeholder.com/1920x800",
      alt: "Autumn Collection 2024"
    },
    {
      image: "https://via.placeholder.com/1920x800",
      alt: "Winter Collection 2024"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        {/* Slides Container */}
        <div 
          className="flex transition-transform duration-500 ease-out w-full"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${slides.length * 100}%`
          }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index}
              className="w-full h-[600px]"
              style={{ width: `${100 / slides.length}%` }}
            >
              <img 
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-10">
          <button 
            onClick={prevSlide}
            className="group bg-white/80 hover:bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} className="text-gray-800 group-hover:text-[#23856D] transition-colors" />
          </button>

          <button 
            onClick={nextSlide}
            className="group bg-white/80 hover:bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={32} className="text-gray-800 group-hover:text-[#23856D] transition-colors" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === currentIndex 
                  ? 'bg-[#23856D] w-6' 
                  : 'bg-white/80 hover:bg-white'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExampleSlider;
