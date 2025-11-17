import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowDown } from "lucide-react";

import sport1 from "/src/assets/red-shoe.png";
import sport2 from "/src/assets/boysport.png";
import sport3 from "/src/assets/cap.png";
// ----------------- DESKTOP DOTS -----------------
const DesktopDots = ({ currentSlide, slideCount, goToSlide }) => (
  <div
    className="
      absolute top-1/2 right-6 -translate-y-1/2
      hidden md:flex flex-col space-y-3
      z-30
    "
  >
    {Array.from({ length: slideCount }).map((_, i) => (
      <button
        key={i}
        onClick={() => goToSlide(i)}
        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
          currentSlide === i
            ? "bg-[#2563eb] border-[#2563eb] scale-110 shadow-md"
            : "border-gray-500 bg-white/40"
        }`}
      />
    ))}
  </div>
);

// ----------------- MOBILE DOTS -----------------
const MobileDots = ({ currentSlide, slideCount, goToSlide }) => (
  <div
    className="
      absolute bottom-4 right-4
      flex md:hidden flex-row space-x-3
      z-30
    "
  >
    {Array.from({ length: slideCount }).map((_, i) => (
      <button
        key={i}
        onClick={() => goToSlide(i)}
        className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
          currentSlide === i
            ? "bg-[#2563eb] border-[#2563eb]"
            : "border-gray-500 bg-white/40"
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
  title: "Premium Sports Wear for Every Student.",
  subtitle:
    "Lightweight, stretchable, and sweat-friendly sports uniforms crafted for daily practice, workouts, and athletic performance.",
},

// ✅ ID 3 → SPORTS CAP & BELT CONTENT
{
  image: sport3,
  title: "Complete Sports Accessories — Cap & Belt Collection.",
  subtitle:
    "Durable school sports caps and belts designed for comfort, style, and match-day confidence.",
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
      {/* BACKGROUND SLIDES */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <div
              className="w-full h-[500px] md:h-[650px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                backgroundColor: "#fff",
              }}
            ></div>
          </div>
        ))}
      </Slider>

      {/* ----------- OVERLAY TEXT (Desktop + Mobile) ----------- */}
      <div
        className="
          absolute inset-0 z-20
          flex items-start
          pt-10 md:pt-0 md:items-center
          bg-gradient-to-r from-black/60 via-black/40 to-transparent
        "
      >
        <div className="px-6 md:px-16 max-w-3xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {slides[currentSlide].title}
          </h1>

          <p className="text-sm sm:text-base md:text-2xl text-gray-200 leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          <button className="mt-6 bg-[#c9a759] text-black px-6 py-3 rounded-full 
          font-semibold text-sm md:text-base shadow-lg">
            Explore Our Range
          </button>
        </div>
      </div>

      {/* DESKTOP DOTS */}
      <DesktopDots
        currentSlide={currentSlide}
        slideCount={slides.length}
        goToSlide={(i) => sliderRef.current.slickGoTo(i)}
      />

      {/* MOBILE DOTS */}
      <MobileDots
        currentSlide={currentSlide}
        slideCount={slides.length}
        goToSlide={(i) => sliderRef.current.slickGoTo(i)}
      />

      {/* SCROLL ARROW */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <ArrowDown className="w-6 h-6 text-white opacity-80 animate-bounce" />
      </div>
    </section>
  );
};

export default SportsSlider;
