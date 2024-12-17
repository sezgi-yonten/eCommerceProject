import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExampleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "https://via.placeholder.com/1920x800/23856D/ffffff",
      title: "SUMMER 2024",
      heading: "NEW COLLECTION",
      description: "We know how large objects will act, but things on a small scale just do not act that way.",
      buttonText: "SHOP NOW",
      buttonLink: "/shop"
    },
    {
      image: "https://via.placeholder.com/1920x800/1B6350/ffffff",
      title: "AUTUMN 2024",
      heading: "EXCLUSIVE COLLECTION",
      description: "Discover our latest collection designed for the modern lifestyle.",
      buttonText: "LEARN MORE",
      buttonLink: "/collection"
    },
    {
      image: "https://via.placeholder.com/1920x800/154D3E/ffffff",
      title: "WINTER 2024",
      heading: "SPECIAL EDITION",
      description: "Limited edition pieces that combine style with exceptional quality.",
      buttonText: "VIEW MORE",
      buttonLink: "/special"
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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      <div 
        className="h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${slides.length * 100}%`, display: 'flex' }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-xl space-y-6">
                  <h2 className="text-[#23856D] text-base font-bold bg-white inline-block px-4 py-2">
                    {slide.title}
                  </h2>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    {slide.heading}
                  </h1>
                  <p className="text-white text-xl">
                    {slide.description}
                  </p>
                  <div>
                    <a 
                      href={slide.buttonLink}
                      className="inline-block bg-[#23856D] text-white px-10 py-4 font-bold hover:bg-[#1a6351] transition-colors"
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExampleSlider;
