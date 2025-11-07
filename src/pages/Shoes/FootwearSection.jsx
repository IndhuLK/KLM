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

  const BRAND_RED = "#EC3338";

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
      name: "Quality Assured by KLM",
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
      className="relative overflow-hidden font-poppins py-16 px-6 md:px-16"
      style={{
        background: "linear-gradient(135deg, #FFF6EB 0%, #FFE1C0 100%)",
      }}
    >
      {/* 🔴 Soft Fabric Dot Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #b70b0b 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      ></div>

      {/* 🔴 Soft Light Glows */}
      <div className="absolute -top-24 -left-16 w-80 h-80 bg-[#EC3338]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-black/10 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 space-y-6" data-aos="fade-right">
          <h2 className="text-2xl md:text-5xl font-extrabold leading-tight font-poppins text-[#000]">
            <span style={{ color: BRAND_RED }}>Footwear</span> — The Foundation{" "}
            <br /> of Every Uniform
          </h2>

          <p className="text-gray-700 md:text-lg leading-relaxed font-inter">
            At KLM, we understand that school footwear must blend comfort,
            durability, and style. Our shoes are engineered for daily wear,
            designed to meet institutional standards.
          </p>

          <div className="mt-6 bg-white text-black rounded-xl shadow-md p-4 md:p-6 border border-[#EC3338]/10">
            <p className="text-sm md:text-lg font-medium font-inter">
              Available in all standard sizes for boys and girls, crafted to
              last through every school day.
            </p>
          </div>

          <button
            className="mt-8 inline-flex items-center gap-3 bg-[#000] text-white px-6 py-3 
                       rounded-full font-semibold shadow-lg hover:bg-[#EC3338] 
                       transition-all duration-300 cursor-pointer"
          >
            Let’s Talk <Send className="w-5 h-5 rotate-45" />
          </button>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div
          className="md:w-1/2 relative bg-white/40 backdrop-blur-2xl rounded-3xl shadow-2xl
                     py-10 px-6 md:px-10 overflow-hidden border border-white/40"
          data-aos="fade-left"
        >
          <Slider {...settings} className="w-full">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative flex flex-col items-center justify-center text-center p-6"
              >
                {/* Background Number */}
                <span
                  className="absolute -top-8 right-8 text-[6rem] md:text-[8rem] font-black text-[#EC3338]/10 select-none"
                >
                  {slide.id}
                </span>

                {/* Shoe Image */}
                <div className="relative flex justify-center items-center mb-6">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-[70%] md:w-[60%] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 w-[50%] h-12 bg-gradient-to-t from-black/20 to-transparent blur-md"></div>
                </div>

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#EC3338]/80 mb-3" />

                {/* Text */}
                <p className="text-gray-800 italic text-sm md:text-base leading-relaxed max-w-md mx-auto">
                  “{slide.text}”
                </p>
                <h4
                  className="text-[#000] font-semibold mt-4 text-base md:text-lg"
                  style={{ color: BRAND_RED }}
                >
                  {slide.title}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  — {slide.name}
                </p>
              </div>
            ))}
          </Slider>

          {/* Floating Send Icon */}
          <div className="absolute bottom-5 right-6">
            <Send className="w-7 h-7 text-[#EC3338] rotate-45 hover:translate-x-1 transition-transform duration-300" />
          </div>

          {/* Custom Dots Styling */}
          <style>{`
            .custom-dots {
              display: flex !important;
              justify-content: center;
              margin-top: 1.5rem;
            }
            .custom-dots li {
              margin: 0 6px;
            }
            .custom-dots li button:before {
              font-size: 10px;
              color: #000;
              opacity: 0.5;
              transition: all 0.3s;
            }
            .custom-dots li.slick-active button:before {
              color: ${BRAND_RED};
              opacity: 1;
              transform: scale(1.5);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default FootwearSection;
