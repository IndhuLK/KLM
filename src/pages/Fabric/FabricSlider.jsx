import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowDown } from "lucide-react";

import fabric1 from "/src/assets/Uni1.jpg";
import fabric2 from "/src/assets/Uni2.jpg";
import fabric3 from "/src/assets/Uni3.jpg";

// ✅ Custom Dots (Right side vertical)
const CustomDots = ({ currentSlide, slideCount, goToSlide }) => (
  <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex flex-col space-y-3 z-20">
    {Array.from({ length: slideCount }).map((_, i) => (
      <button
        key={i}
        onClick={() => goToSlide(i)}
        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
          currentSlide === i
            ? "bg-[#EC3338] border-[#EC3338] scale-110 shadow-md"
            : "border-white hover:bg-white/40"
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
      subtitle: "Delivering certified, skin-friendly textiles for school uniforms.",
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
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <section
      className="relative w-full h-[500px] md:h-[650px] overflow-hidden"
      style={{
        background: "radial-gradient(circle, #fff8ef 0%, #ffe7d2 100%)",
      }}
    >
      {/* 🔴 Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <div
              className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* ✨ Light Overlay (on image only) */}
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply z-[5]" />

              {/* 🩶 Text Content (no overlay on text) */}
              <div className="relative z-20 text-center text-white px-6 md:px-16">
                <h1
                  className="text-3xl md:text-6xl font-extrabold mb-3 tracking-tight drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)] animate-fadeIn"
                  data-aos="fade-up"
                >
                  {slide.title}
                </h1>
                <p
                  className="text-base md:text-2xl font-light tracking-wide text-white/90 animate-slideUp max-w-3xl mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Dots (Right side) */}
      <CustomDots
        currentSlide={currentSlide}
        slideCount={slides.length}
        goToSlide={(index) => sliderRef.current.slickGoTo(index)}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/90 animate-bounce z-20">
        <ArrowDown className="w-6 h-6 text-[#EC3338]" />
      </div>

      {/* ✨ Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 1.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FabricSlider;
