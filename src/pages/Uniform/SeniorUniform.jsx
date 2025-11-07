import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Shirt, Leaf, UserCheck } from "lucide-react";
import seniorUniform from "/src/assets/Uni2.jpg";
import { ArrowRight } from "lucide-react";

const SeniorUniform = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="bg-gradient-to-br from-[#ffca93] via-[#fff7f7] to-[#ffca93] py-16 px-6 md:px-16 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Decorative Background Dots */}
      <div className="absolute top-8 left-8 w-48 h-48 opacity-30 bg-[radial-gradient(circle,_#b70b0b_1.2px,transparent_1.2px)] bg-[length:20px_20px]" />
      <div className="absolute bottom-10 right-10 w-64 h-64 opacity-20 bg-[radial-gradient(circle,_#b70b0b_1.2px,transparent_1.2px)] bg-[length:18px_18px]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 relative space-y-6" data-aos="fade-right">
          {/* Top Accent */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#b70b0b]/10 rounded-full blur-xl"></div>

          <h2 className="text-3xl md:text-6xl font-bold text-[#1c1c1c] leading-tight font-poppins">
            Senior Uniform <br />
            <span className="text-[#EC3338]">– Boys & Girls</span>
          </h2>

          <p className="text-gray-700 font-inter leading-relaxed text-base md:text-lg">
            Designed with elegance and functionality, our senior collection
            defines professionalism while prioritizing comfort, durability, and
            eco-conscious craftsmanship.
          </p>

          {/* Feature Cards */}
          <div className="space-y-5 mt-4">
            {/* Card 1 */}
            <div
              className="flex items-start gap-4 bg-white/80 backdrop-blur-lg border
               border-[#b70b0b]/20 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all 
               duration-300 hover:-translate-y-1"
              data-aos="fade-up"
            >
              <div className="p-3 bg-[#b70b0b]/10 text-[#b70b0b] rounded-xl">
                <Shirt size={22} />
              </div>
              <p className="font-medium text-gray-700 font-inter">
                <span className="text-[#b70b0b] font-semibold">
                  Tailored Shirts for All-Day Comfort:
                </span>{" "}
                Whiteorlight bluebutton-downshirts, long-or short-sleeve,
                available with optional embroidered school crests for brand alignment.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="flex items-start gap-4 bg-white/80 backdrop-blur-lg border border-[#b70b0b]/20 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="p-3 bg-[#b70b0b]/10 text-[#b70b0b] rounded-xl">
                <Leaf size={22} />
              </div>
              <p className="font-medium text-gray-700 font-inter">
                <span className="text-[#b70b0b] font-semibold">
                  Sustainable & Ethically Made:
                </span>{" "}
                We prioritize ethical production,reduced water usage,
                and eco-conscious fabric sourcing—aligning with modern institutional
                values.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="flex items-start gap-4 bg-white/80 backdrop-blur-lg border border-[#b70b0b]/20 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="p-3 bg-[#b70b0b]/10 text-[#b70b0b] rounded-xl">
                <UserCheck size={22} />
              </div>
              <p className="font-medium text-gray-700 font-inter">
                <span className="text-[#b70b0b] font-semibold">
                  Confident, Professional Appearance:
                </span>{" "}
                Our senior wear enhances discipline and identity while offering
                consistency across gender and body types with tailored fits.
              </p>
            </div>
          </div>

          {/* 🔴 Red Animated Arrow at Bottom-Left */}
          <div className="mt-10 flex justify-end" data-aos="zoom-in">
            <p className="text-[#b70b0b] text-7xl font-normal tracking-wider inline-block animate-redArrow">
              ›››››
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div
          className="md:w-1/2 flex flex-col items-center justify-center relative"
          data-aos="fade-left"
        >
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#b70b0b]/10 rounded-full blur-xl"></div>
          <img
            src={seniorUniform}
            alt="Senior Uniforms"
            className="w-full max-w-lg object-contain rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
          />

          {/* Red Label */}
          <div className="relative mt-8 flex" data-aos="fade-up">
            <div
              className="relative z-10 bg-black text-white text-sm font-semibold font-inter
    rounded-full px-8 py-3 shadow-md flex items-center gap-3 group transition-all duration-300"
            >
              <span>POLISHED • PRACTICAL • PROFESSIONAL</span>

              {/* Arrow with circular red bg */}
              <div
                className="bg-white/20 p-2 rounded-full flex items-center justify-center 
      transition-transform duration-300 group-hover:translate-x-1"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Soft dots behind label */}
            <div
              className="absolute -bottom-6 -right-20 w-40 h-20 
    bg-[radial-gradient(circle,_#b70b0b_1.5px,transparent_1.5px)] 
    bg-[length:16px_16px] opacity-70"
            ></div>
          </div>
        </div>
      </div>

      {/* 🔴 Custom Arrow Animation */}
      <style>
        {`
          @keyframes redArrowMove {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(15px); }
          }
          .animate-redArrow {
            animation: redArrowMove 1.5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default SeniorUniform;
