import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  "/src/assets/red-shoe.png",
  "/src/assets/shoe2.png",
  "/src/assets/shoe.png",
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
    <div className="relative w-full sm:h-[40vh] md:h-[90vh] flex items-center 
    justify-center overflow-hidden">

      {/* SLIDES */}
      {slides.map((src, index) => (
        <div
          key={index}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          className={`
            absolute top-1/2 left-1/2
            rounded-full bg-white border-b-[10px] border-blue-600
            flex items-center justify-center
            transition-all duration-500

            /* DESKTOP */
            w-[460px] h-[460px]

            /* TABLET */
            md:w-[380px] md:h-[380px]

            /* MOBILE */
            sm:w-[280px] sm:h-[280px] w-[220px] h-[220px]

            ${active === index ? "scale-100 opacity-100 z-20" : "scale-50 opacity-0 z-0"}
          `}
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {/* Blue Glow Shadow */}
          <div
            className="
              absolute 
              blur-3xl rounded-full 
              -translate-x-1/2 -translate-y-1/2
              bg-blue-500/40 

              /* Desktop shadow */
              w-[120px] h-[120px] top-[55%] left-1/2

              /* Tablet */
              md:w-[90px] md:h-[90px] md:top-[60%]

              /* Mobile */
              sm:w-[70px] sm:h-[70px] sm:top-[65%]
            "
          />

          {/* Shoe Image */}
          <img
            src={src}
            alt="shoe"
            className={`
              absolute transition-all duration-300
              rotate-[-10deg]
              hover:rotate-[-20deg]

              /* Desktop */
              w-[620px] top-[10%] left-[-20%]

              /* Tablet */
              md:w-[460px] md:left-[-10%]

              /* Mobile */
              sm:w-[300px] sm:top-[15%] sm:left-[-5%]
              w-[230px] 
            `}
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
          sm:right-5 sm:p-2
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
          sm:left-5 sm:p-2
        "
      >
        <ChevronLeft className="w-8 h-8 sm:w-6 sm:h-6" />
      </button>

    </div>
  );
};

export default RightSide;
