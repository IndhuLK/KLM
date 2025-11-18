import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// ADD BG COLOR for each slide
const slides = [
  {
    img: "/src/assets/red-shoe.png",
    bg: "#e8f0ff", // light blue
  },
  {
    img: "/src/assets/shoe2.png",
    bg: "#e3ffe3", // light green
  },
  {
    img: "/src/assets/shoe.png",
    bg: "#fff4e6", // light orange
  },
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
    <div
      className="relative w-full flex items-center justify-center overflow-hidden
      h-[55vh] sm:h-[45vh] md:h-[90vh] transition-colors duration-700 rounded-4xl
      "
      
    >
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          className={`
            absolute top-1/2 left-1/2 rounded-full  
            flex items-center justify-center
            transition-all duration-500

            ${active === index ? "scale-100 opacity-100 z-20" : "scale-50 opacity-0 z-0"}

            
            w-[260px] h-[260px]
           sm:w-[300px] sm:h-[300px]
           md:w-[380px] md:h-[380px]
           lg:w-[460px] lg:h-[460px]

          bg-[#1e5fff] 
          border-b-[10px] border-orange-500
          `}
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {/* Blue Glow Shadow */}
          <div
            className="
              absolute blur-3xl rounded-full bg-blue-500/40 
              -translate-x-1/2 -translate-y-1/2

              /* Desktop */
              w-[120px] h-[120px] top-[55%] left-1/2

              /* Tablet */
              md:w-[90px] md:h-[90px]

              /* Mobile */
              sm:w-[70px] sm:h-[70px]
            "
          ></div>

          {/* Shoe Image */}
          <img
  src={slide.img}
  alt="shoe"
  className="
    absolute transition-all duration-500 rotate-[-10deg]

    w-[260px] top-[12%] left-[%]         /* MOBILE */
    sm:w-[320px] sm:left-[-12%]             /* Small */
    md:w-[420px] md:left-[-16%]             /* Tablet */
    lg:w-[540px] lg:left-[-18%]             /* Desktop */

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
          absolute p-3 text-gray-400 rounded-full transition hover:bg-gray-200

          /* Desktop */
          right-10 top-1/2 -translate-y-1/2

          /* Mobile */
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
          absolute p-3 text-gray-400 rounded-full transition hover:bg-gray-200

          /* Desktop */
          left-10 top-1/2 -translate-y-1/2

          /* Mobile */
          sm:left-4 sm:p-2
        "
      >
        <ChevronLeft className="w-8 h-8 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};

export default RightSide;
