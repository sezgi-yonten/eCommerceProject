import React from "react";
import Slider from "react-slick";

const ExampleSlider = () => {
  // Slider ayarları
  const settings = {
    dots: true, // Alt kısımda noktalar (dots) görünür
    infinite: true, // Sonsuz kaydırma
    speed: 300, // Kaydırma hızı (ms)
    slidesToShow: 3, // Ekranda aynı anda gösterilecek slide sayısı
    slidesToScroll: 1, // Her kaydırmada kaç slide geçeceği
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <Slider {...settings}>
        <div>
          <h3>Product 1</h3>
        </div>
        <div>
          <h3>Product 2</h3>
        </div>
        <div>
          <h3>Product 3</h3>
        </div>
        <div>
          <h3>Product 4</h3>
        </div>
      </Slider>
    </div>
  );
};

export default ExampleSlider;
