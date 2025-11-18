import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Send } from "lucide-react";
import RightSide from "./RIghtSide.jsx";

const SchoolShoes = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const PRIMARY_BLUE = "#2563eb";
  const TEXT_COLOR = "#2C2C2C";

  return (
    <section className="relative overflow-hidden pt-5 pb-1">

      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #f1f5ff 0%, #fff 40%, #f4ead0 100%)",
        }}
      ></div>

      {/* Decorative Glows */}
      <div className="absolute -top-24 -left-10 w-52 h-52 sm:w-80 sm:h-80 bg-[#2563eb]/15 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-[28rem] sm:h-[28rem] bg-[#c9a759]/20 blur-3xl rounded-full"></div>

      {/* Heading Section */}
      <div className="px-5 sm:px-10 md:px-16 text-left" data-aos="fade-right">
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

      {/* Main Content Box */}
      <div
        className="relative mt-6 sm:mt-10 mx-4 sm:mx-6 md:mx-16 py-5 sm:py-5 px-5 sm:px-8 
                   rounded-2xl bg-white/80 backdrop-blur-sm shadow-[0_8px_40px_rgba(0,0,0,0.05)]"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">

          {/* LEFT CONTENT */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left" data-aos="fade-right">

            <h3
              className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug font-poppins"
              style={{ color: TEXT_COLOR }}
            >
              Bulk Bridge — Authorized Distributor for Premium School Shoes
            </h3>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-inter max-w-md mx-auto md:mx-0">
              Designed for all-day comfort and durability. Each pair ensures breathability,
              cushioned soles, and a reliable grip — keeping students confident from the first
              bell to the last.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-2">
              {[ 
                { id: 1, title: "Comfortable All-Day Wear" },
                { id: 2, title: "Durable & Size Inclusive" },
                { id: 3, title: "Bulk Supply & Fast Delivery" },
              ].map((point, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center md:items-start relative"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <span
                    className="text-3xl font-extrabold transition-transform duration-300 
                    group-hover:scale-110 
                    bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text text-transparent"
                  >
                    {point.id}.
                  </span>
                  <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-700 font-inter 
                  text-center md:text-left group-hover:text-black transition-colors duration-300">
                    {point.title}
                  </p>

                  <div className="absolute bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 
                    h-[2px] w-0 bg-[#2563eb] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <button
              className="relative mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full 
                         font-semibold text-white bg-black hover:bg-black/90 shadow-xl
                         transition-all duration-300 group font-inter mx-auto md:mx-0"
              data-aos="fade-up"
            >
              Learn More
              <Send className="w-5 h-5 text-white transform rotate-45 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* RIGHT IMAGE (Slider) */}
          <div className="relative md:w-1/2 w-full flex justify-center
           items-center" data-aos="fade-left">
            <div className="w-full scale-90 sm:scale-100">
              <RightSide />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Arrow */}
      <div className="flex justify-end mt-8 sm:mt-10 pr-6 sm:pr-10" data-aos="fade-right">
        <Send className="w-6 h-6 sm:w-8 sm:h-8 rotate-45 text-[#2563eb] hover:translate-x-2 transition-transform duration-300" />
      </div>

    </section>
  );
};

export default SchoolShoes;
