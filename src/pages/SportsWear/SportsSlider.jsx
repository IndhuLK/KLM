import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import sport1 from "/src/assets/red-shoe.png";
import sport2 from "/src/assets/Uni5.png";
import sport3 from "/src/assets/Uni6.png";

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

const SportsSlider = () => {
  const slides = [
    {
  image: sport1,
  title: "Move with Confidence.",
  subtitle: "Premium sportswear designed for comfort, agility, and all-day energy.",
},
{
  image: sport2,
  title: "Play. Perform. Shine.",
  subtitle: "Lightweight, durable uniforms that help every student give their best.",
},
{
  image: sport3,
  title: "Built for Every Game Day.",
  subtitle: "Breathable designs crafted for speed, strength, and school pride.",
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
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    // 🟢 Initialize AOS animations
    AOS.init({
      duration: 1000,
      once: true, // animation runs only once
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      className="relative w-full h-[500px] md:h-[650px] overflow-hidden"
      style={{
        background:
          "radial-gradient(circle, rgba(255,233,214,1) 0%, rgba(255,240,220,1) 100%)",
      }}
    >
      {/* 🟡 Subtle Fabric Dots Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #b70b0b 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* 🔴 Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <div
              className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* ✨ Overlay gradient per slide */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30"></div>

              {/* 🩶 Text Content with AOS */}
              <div
                className="relative z-30 text-center text-white px-6 md:px-16"
                data-aos="fade-up"
              >
                <h1 className="text-3xl md:text-6xl font-extrabold mb-3 tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-base md:text-2xl font-light tracking-wide text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] animate-slideUp">
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
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/90 animate-bounce z-40">
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
          animation: slideUp 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default SportsSlider;
