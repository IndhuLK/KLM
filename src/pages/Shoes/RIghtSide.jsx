import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// SLIDES
const slides = [
  { img: "/src/assets/red-shoe.png" },
  { img: "/src/assets/shoe2.png" },
  { img: "/src/assets/shoe.png" },
];

const RightSide = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoplay = () => clearInterval(intervalRef.current);

  const nextSlide = () => setActive((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* ⭐ CUSTOM DIAGONAL CLIP PATH (NO SEPARATE CSS FILE) */}
      <style>{`
        .clip-path-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 65%, 0% 35%);
        }
      `}</style> 

      <div
        className="
          relative w-full overflow-hidden
          h-[55vh] sm:h-[45vh] md:h-[90vh]
          
          flex items-center justify-center
        "
      >
        {/* 🔵 RESPONSIVE DIAGONAL BLUE SHAPE */}
        <div
          className="
            absolute inset-0 
            bg-[#1e5fff]
            clip-path-diagonal
          "
        ></div>

        {/* SLIDES */}
        {slides.map((slide, index) => (
          <div
            key={index}
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
            className={`
              absolute top-1/2 left-1/2 
              flex items-center justify-center
              transition-all duration-500
              ${
                active === index
                  ? "scale-100 opacity-100 z-20"
                  : "scale-50 opacity-0 z-0"
              }
            `}
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <img
              src={slide.img}
              alt="shoe"
              className="
                transition-all duration-500 rotate-[-10deg]
                w-[260px]
                sm:w-[320px]
                md:w-[420px]
                lg:w-[600px]
                hover:rotate-[-20deg]
              "
            />
          </div>
        ))}

        {/* NEXT BUTTON */}
        <button
          onClick={nextSlide}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          className="
            absolute p-3 text-gray-600 rounded-full transition hover:bg-gray-200
            right-10 top-1/2 -translate-y-1/2
            sm:right-4 sm:p-2
          "
        >
          <ChevronRight className="w-8 h-8 sm:w-6 sm:h-6" />
        </button>

        {/* PREV BUTTON */}
        <button
          onClick={prevSlide}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          className="
            absolute p-3 text-gray-600 rounded-full transition hover:bg-gray-200
            left-10 top-1/2 -translate-y-1/2
            sm:left-4 sm:p-2
          "
        >
          <ChevronLeft className="w-8 h-8 sm:w-6 sm:h-6" />
        </button>
      </div>
    </>
  );
};

export default RightSide;
