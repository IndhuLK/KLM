import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowDown } from "lucide-react";

import fabric1 from "/src/assets/Uni1.jpg";
import fabric2 from "/src/assets/Uni2.jpg";
import fabric3 from "/src/assets/Uni3.jpg";


// Custom Dots
const CustomDots = ({ currentSlide, slideCount, goToSlide }) => (
  <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex flex-col space-y-3 z-30">
    {Array.from({ length: slideCount }).map((_, i) => (
      <button
        key={i}
        onClick={() => goToSlide(i)}
        className={`w-4 h-4 rounded-full border-2 transition-all duration-300  ${
          currentSlide === i
            ? "bg-[#EC3338] border-[#EC3338] scale-110 shadow-md"
            : " hover:bg-white/50 border-gray-500"
        }`}
      />
    ))}
  </div>
);

const FabricSlider = () => {
  const slides = [
    {
      image: fabric1,
      title: "Sourcing the Finest Fabrics",
      subtitle:
        "Delivering certified, skin-friendly textiles for school uniforms.",
    },
    {
      image: fabric2,
      title: "Quality in Every Thread",
      subtitle:
        "Premium woven materials crafted for durability, comfort, and style.",
    },
    {
      image: fabric3,
      title: "Sustainable & Trusted Craftsmanship",
      subtitle:
        "Ethically sourced fabrics meeting global safety and performance standards.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden">

      {/* Slider Background (FULL IMAGE) */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <div
              className="w-full h-[500px] md:h-[650px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
               backgroundSize: "90%", 
               backgroundPosition: "center", backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        ))}
      </Slider>

      {/* 🔥 LEFT SIDE RED OVERLAY CONTENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-400/80 via-red-300/30
       to-transparent z-20 
      flex items-center">

        <div className="pl-8 md:pl-16 max-w-3xl text-black">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight">
            {slides[currentSlide].title}
          </h1>

          <p className="text-base md:text-2xl font-medium tracking-wide leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full font-semibold 
            text-sm md:text-base hover:bg-[#EC3338] transition-all duration-300 shadow-lg">
            Explore Our Range
          </button>
        </div>

      </div>

      {/* Custom Right Dots */}
      <CustomDots
        currentSlide={currentSlide}
        slideCount={slides.length}
        goToSlide={(index) => sliderRef.current.slickGoTo(index)}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <ArrowDown className="w-6 h-6 text-red-600 animate-bounce" />
      </div>
    </section>
  );
};

export default FabricSlider;
