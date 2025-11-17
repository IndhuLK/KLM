import React, { useEffect } from "react";
import Slider from "react-slick";
import { Send, Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import shoe1 from "/src/assets/shoe1.jpg";
import shoe2 from "/src/assets/shoe2.png";
import shoe3 from "/src/assets/shoe.png";

const FootwearSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const BLUE = "#2563eb";
  const GOLD = "#c9a759";

  const slides = [
    {
      id: "01",
      img: shoe1,
      title: "Institution-Ready Footwear",
      text: "We simplify procurement for schools — ensuring comfort, consistency, and large-scale delivery on time.",
      name: "Premium Supply Partner",
    },
    {
      id: "02",
      img: shoe2,
      title: "Engineered Comfort",
      text: "Designed for flexibility and breathability. Every shoe undergoes rigorous testing for long-lasting wear.",
      name: "Quality Assured by Bulk Bridge",
    },
    {
      id: "03",
      img: shoe3,
      title: "Nationwide Trust",
      text: "From city schools to academies — trusted across India for reliable footwear distribution at scale.",
      name: "National Distribution Network",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 800,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section
      className="relative overflow-hidden font-poppins py-12 px-4 sm:px-6 md:px-12 lg:px-16"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #ffffff 40%, #f5eacd 100%)",
      }}
    >
      {/* 🔵 Dotted Blue Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2563eb 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      ></div>

      {/* Blue Glow */}
      <div className="absolute -top-24 -left-16 w-72 h-72 bg-[#2563eb]/15 blur-3xl rounded-full"></div>
      {/* Gold Glow */}
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-[#c9a759]/15 blur-3xl rounded-full"></div>

      {/* 🌟 Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* LEFT TEXT SIDE */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left" data-aos="fade-right">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-black">
            <span className="bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text text-transparent">
              Footwear
            </span>{" "}
            — The Foundation <br className="hidden sm:block" /> of Every Uniform
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-inter">
            At Bulk Bridge, we understand that school footwear must blend comfort,
            durability, and style. Our shoes are engineered for daily wear and
            designed to meet institutional standards.
          </p>

          <div className="mt-6 bg-white text-black rounded-xl shadow-md p-4 md:p-6 border border-[#2563eb]/20">
            <p className="text-sm sm:text-base md:text-lg font-medium font-inter">
              Available in all standard sizes, crafted to last through every school day.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              className="mt-6 inline-flex items-center gap-2 bg-black text-white px-6 py-3 
                         rounded-full font-semibold shadow-lg hover:bg-black/90 
                         transition-all duration-300 cursor-pointer"
            >
              Let’s Talk <Send className="w-5 h-5 rotate-45" />
            </button>
          </div>
        </div>

        {/* RIGHT SLIDER SIDE */}
        <div
          className="w-full md:w-1/2 relative bg-white/40 backdrop-blur-2xl rounded-3xl shadow-2xl
                     py-10 px-6 md:px-10 overflow-hidden border border-white/40"
          data-aos="fade-left"
        >
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="relative flex flex-col items-center text-center p-6">
                
                {/* Slide Number (Blue Tint) */}
                <span className="absolute -top-8 right-6 text-[6rem] md:text-[8rem] font-black text-[#2563eb]/10 select-none">
                  {slide.id}
                </span>

                {/* Shoe Image */}
                <div className="relative flex justify-center mb-6">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-[80%] md:w-[60%] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 w-[50%] h-12 bg-gradient-to-t from-black/20 to-transparent blur-md"></div>
                </div>

                {/* Quote Icon (Blue) */}
                <Quote className="w-8 h-8 text-[#2563eb]/80 mb-3" />

                {/* Slide Text */}
                <p className="text-gray-800 italic text-sm md:text-base leading-relaxed max-w-md mx-auto">
                  “{slide.text}”
                </p>

                {/* Title */}
                <h4
                  className="font-semibold mt-4 text-base md:text-lg bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text text-transparent"
                >
                  {slide.title}
                </h4>

                <p className="text-gray-600 text-xs sm:text-sm mt-1">— {slide.name}</p>
              </div>
            ))}
          </Slider>

          {/* Blue Floating Icon */}
          <div className="absolute bottom-5 right-6">
            <Send className="w-7 h-7 text-[#2563eb] rotate-45 hover:translate-x-1 transition-transform duration-300" />
          </div>

          {/* Slider Dots */}
          <style>{`
            .custom-dots {
              display: flex !important;
              justify-content: center;
              margin-top: 1rem;
            }
            .custom-dots li button:before {
              font-size: 8px;
              color: #000;
              opacity: 0.3;
            }
            .custom-dots li.slick-active button:before {
              color: #2563eb !important;
              opacity: 1 !important;
              transform: scale(1.4);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default FootwearSection;
