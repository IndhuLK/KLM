import React, { useEffect, useState, useRef } from "react";
// Removed AOS imports as they cause compilation errors in this environment
import { Send, ChevronRight, ChevronLeft } from "lucide-react";

const SchoolShoes = () => {
  // Removed AOS initialization useEffect
  
  const PRIMARY_BLUE = "#2563eb";
  const TEXT_COLOR = "#2C2C2C";

  // ============================
  //  ⭐ SLIDER STATE + LOGIC
  // ============================
  // NOTE: These image paths are placeholders. Ensure they resolve correctly in your environment.
  const slides = [
    { img: "/src/assets/red-shoe.png" },
    {img: "/src/assets/yellow1.png" },
    { img: "/src/assets/shoe2.png" },
    { img: "/src/assets/running-shoe.png" },
  ];

  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5000);
  };

  const stopAutoplay = () => clearInterval(intervalRef.current);

  const nextSlide = () => {
    stopAutoplay(); // Stop on manual interaction
    setActive((p) => (p + 1) % slides.length);
    startAutoplay(); // Resume autoplay
  };
  const prevSlide = () => {
    stopAutoplay(); // Stop on manual interaction
    setActive((p) => (p - 1 + slides.length) % slides.length);
    startAutoplay(); // Resume autoplay
  };
  

  return (
    <section className="relative overflow-hidden pt-5 pb-1 font-inter">
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none z-0"
        style={{
          backgroundColor: PRIMARY_BLUE,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%)",
        }}
      ></div>
      {/* ======================== */}
      {/* CUSTOM CLIP-PATH STYLE  */}
      {/* ======================== */}
      <style>{`
        .clip-path-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 65%, 0% 35%);
        }
      `}</style>

      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #f1f5ff 0%, #fff 40%, #f4ead0 100%)",
        }}
      ></div>

      {/* Decorative Glows */}
      <div className="absolute -top-24 -left-10 w-52 h-52 sm:w-80 sm:h-80 bg-[#2563eb]/15 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-[28rem] sm:h-[28rem] bg-[#c9a759]/20 blur-3xl rounded-full"></div>

      {/* Heading Section */}
      <div className="px-5 sm:px-10 md:px-16 text-left"> {/* Removed data-aos="fade-right" */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight font-poppins text-black">
          <span className="bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text text-transparent">
            School Shoes
          </span>{" "}
          — Trusted Quality,
          <br className="hidden md:block" />
          <span className="text-black"> Bulk Distribution</span>
        </h2>

        <div
          className="mt-3 w-20 sm:w-24 h-[4px] rounded-full"
          style={{ backgroundColor: PRIMARY_BLUE }}
        ></div>
      </div>

      {/* ======================== */}
      {/* MAIN CONTENT + SLIDER    */}
      {/* ======================== */}
      <div
        className="relative mx-4 sm:mx-6 md:mx-16 py-5 sm:py-5 "
      > {/* Removed data-aos="fade-up" */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          {/* LEFT CONTENT */}
          <div
            className="md:w-1/2 space-y-4 text-center md:text-left"
          > {/* Removed data-aos="fade-right" */}
            <h3
              className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug font-poppins"
              style={{ color: TEXT_COLOR }}
            >
              Bulk Bridge — Authorized Distributor for Premium School Shoes
            </h3>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-inter max-w-md mx-auto md:mx-0">
              Designed for all-day comfort and durability. Each pair ensures
              breathability, cushioned soles, and a reliable grip — keeping
              students confident from the first bell to the last.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-2">
              {[
                { id: 1, title: "Comfortable All-Day Wear" },
                { id: 2, title: "Durable & Size Inclusive" },
                { id: 3, title: "Bulk Supply & Fast Delivery" },
              ].map((point, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center md:items-start relative"
                  // Removed data-aos="zoom-in" and data-aos-delay
                >
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text text-transparent">
                    {point.id}.
                  </span>

                  <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-700 font-inter group-hover:text-black transition-colors">
                    {point.title}
                  </p>

                  <div className="absolute bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 h-[2px] w-0 bg-[#2563eb] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              ))}
            </div>

            <button
              className="relative mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white bg-black hover:bg-black/90 shadow-xl transition-all duration-300 group font-inter"
            > {/* Removed data-aos="fade-up" */}
              Learn More
              <Send className="w-5 h-5 text-white rotate-45 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* ======================== */}
          {/* RIGHT — SLIDER MERGED (UPDATED) */}
          {/* ======================== */}
          
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            
            {/* SLIDER BOX */}
            <div className="relative 
              w-full 
              max-w-full
              min-h-[35vh] 
              sm:min-h-[50vh] 
              md:min-h-[85vh] 
              overflow-hidden 
              flex items-center justify-center"> {/* Added flex centering here */}
              
              {slides.map((slide, index) => (
                <div
                  key={index}
                  // Added w-full h-full and flex centering to the wrapper
                  className={`
                    absolute w-full h-full flex justify-center items-center
                    transition-all duration-500
                    ${
                      active === index
                        ? "scale-100 opacity-100 z-20"
                        : "scale-75 opacity-0 z-0" // Using scale-75 for a better transition effect
                    }
                `}
                  // Removed inline transform style, flex takes over centering
                >
                  <img
                    src={slide.img}
                    // 🌟 CRITICAL CHANGES FOR SIZE 🌟
                    className="
                      w-[300px] 
                      sm:w-[450px]
                      md:w-[650px] 
                      lg:w-[600px] 
                      max-w-none 
                      rotate-[-10deg]
                      hover:rotate-[-20deg]
                      transition-all
                    "
                    // max-w-none ensures the image can grow past container limits
                  />
                </div>
              ))}

              {/* Buttons 
              <button
                onClick={nextSlide}
                // Adjusted position for better clearance from large image
                className="absolute right-0 sm:right-10 top-1/2 -translate-y-1/2 p-3 sm:p-2 bg-white/40 rounded-full hover:bg-white/70 z-30" 
              >
                <ChevronRight className="md:w-5 md:h-5 w-3 h-3 text-gray-700" />
              </button>

              <button
                onClick={prevSlide}
                // Adjusted position for better clearance from large image
                className="absolute left-0 sm:left-10 top-1/2 -translate-y-1/2 p-3 sm:p-2 bg-white/40 rounded-full hover:bg-white/70 z-30"
              >
                <ChevronLeft className="md:w-5 md:h-5 w-3 h-3 text-gray-700" />
              </button>*/}
              
              {/* Pagination Dots (Optional, but good practice) */}
              <div className="absolute  bottom-3 z-30 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      active === index
                        ? "w-6 bg-[#2563eb] shadow-md"
                        : "w-2 bg-gray-400 hover:bg-[#c9a759]"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Arrow */}
      <div
        className="flex justify-end mt-8 sm:mt-10 pr-6 sm:pr-10"
      > {/* Removed data-aos="fade-right" */}
        <Send className="w-6 h-6 sm:w-8 sm:h-8 rotate-45 text-[#2563eb] hover:translate-x-2 transition-transform" />
      </div>
    </section>
  );
};

export default SchoolShoes;