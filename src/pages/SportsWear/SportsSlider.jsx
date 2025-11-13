import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowDown } from "lucide-react";

import sport1 from "/src/assets/red-shoe.png";
import sport2 from "/src/assets/Uni5.png";
import sport3 from "/src/assets/Uni6.png";

// ✅ Custom pagination dots on the right
const CustomDots = ({ currentSlide, slideCount, goToSlide }) => (
  <div
    className="absolute top-1/2 right-6 transform -translate-y-1/2 flex 
  flex-col space-y-3 z-20"
  >
    {Array.from({ length: slideCount }).map((_, i) => (
      <button
        key={i}
        onClick={() => goToSlide(i)}
        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
          currentSlide === i
            ? "bg-[#EC3338] border-[#EC3338] scale-110 shadow-md"
            : "border-white hover:bg-white/50"
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
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #b70b0b 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      ></div>

      {/* Slider Section */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <div
              className="relative w-full h-[500px] md:h-[650px] flex flex-col items-center 
              justify-center text-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "90%", // 100% = no zoom, 120% = slight zoom
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Gradient overlay for readability */}
              <div
                className="absolute inset-0 bg-gradient-to-tl from-black/30 via-black/30 
              to-transparent z-[5]"
              />

              {/* Text Content */}
              <div className="relative z-20 text-[#ffffff] px-6 md:px-16 max-w-4xl">
                <h1
                  className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight 
                  drop-shadow-lg animate-fadeIn"
                  data-aos="fade-up"
                >
                  {slide.title}
                </h1>
                <p
                  className="text-base md:text-2xl font-medium tracking-wide text-white 
                  leading-relaxed animate-slideUp"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <button
                  className="mt-6 bg-black text-white px-6 py-3 rounded-full font-semibold 
                  text-sm md:text-base  hover:bg-[#EC3338] transition-all duration-300 shadow-lg"
                >
                  Explore Our Range
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Right Dots */}
      <CustomDots
        currentSlide={currentSlide}
        slideCount={slides.length}
        goToSlide={(index) => sliderRef.current.slickGoTo(index)}
      />

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/90 
      animate-bounce z-30"
      >
        <ArrowDown className="w-6 h-6 text-[#EC3338]" />
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1.5s ease-out forwards; }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 1.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default SportsSlider;
