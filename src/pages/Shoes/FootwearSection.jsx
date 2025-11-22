import React, { useEffect } from "react";
import Slider from "react-slick";
import { Send, Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import shoe1 from "/src/assets/shoe1.png";
import shoe2 from "/src/assets/shoe2.png";
import shoe3 from "/src/assets/shoe.png";
import dots from "/src/assets/dots.png";
import ShoeSlider from "./ShoeSlider";

const FootwearSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const slides = [
    {
      id: "01",
      img: shoe1,
      title: "Institution-Ready Footwear",
      text: "We simplify procurement for institutions and ensure quality delivery at scale.",
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
        background:
          "linear-gradient(135deg, #f0f4ff 0%, #ffffff 40%, #f5eacd 100%)",
      }}
    >
      {/* Radial Background Pattern 
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2563eb 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      ></div>*/}

      {/* Blue Glow */}
      <div
        className="absolute -top-24 -left-16 w-72 h-72 bg-[#2563eb]/15 
      blur-3xl rounded-full"
      ></div>
      {/*Dots  */}
      <div className="absolute left-0 top-0 z-0">
        <img src={dots} alt="dots" className="w-32 opacity-30 -rotate-90" />
      </div>

      {/* Gold Glow */}
      <div
        className="absolute bottom-0 right-0 w-[26rem] h-[26rem] 
      bg-[#c9a759]/15 blur-3xl rounded-full"
      ></div>

      {/* MAIN CONTENT */}
      <div
        className="relative z-10 flex flex-col md:flex-row items-center
       justify-between gap-10 md:gap-16"
      >
        {/* LEFT TEXT SIDE (No Change) */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight
            text-black font-poppins"
            data-aos-delay="100"
            data-aos="fade-right"
          >
            <span
              className="bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text 
            text-transparent"
            >
              Footwear
            </span>{" "}
            — The Foundation of Every Uniform
          </h2>

          <p
            className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed
            font-inter"
            data-aos-delay="200"
            data-aos="fade-right"
          >
            At Bulk Bridge, we understand that school footwear must blend
            comfort, durability, and style. Our shoes are engineered for daily
            wear and designed to meet institutional standards.
          </p>

          <div
            className="mt-6 bg-white text-black rounded-xl shadow-md p-4 md:p-6 
          border border-[#2563eb]/20"
            data-aos-delay="400"
            data-aos="fade-right"
          >
            <p className="text-sm sm:text-base md:text-lg font-medium font-inter">
              Available in all standard sizes, crafted to last through every
              school day.
            </p>
          </div>

          <div
            className="flex justify-center md:justify-start"
            data-aos-delay="500"
            data-aos="fade-right"
          >
            <button
              className="mt-6 inline-flex items-center gap-2 bg-black text-white px-6 py-3 
              rounded-full font-semibold shadow-lg hover:bg-black/90 transition-all 
              duration-300 cursor-pointer"
            >
              Let’s Talk <Send className="w-5 h-5 rotate-45" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — 3D SLIDER (MODIFIED for overshoot effect) */}
        <div
          className=" overflow-visible" // CHANGED: overflow-visible on outer container
          data-aos="fade-left"
        >
          <ShoeSlider />
        </div>
      </div>
      {/*Dots  */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-0">
        <img src={dots} alt="dots" className="w-32 opacity-30" />
      </div>
    </section>
  );
};

export default FootwearSection;
