import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Shirt, Leaf, UserCheck, ArrowRight } from "lucide-react";
import seniorUniform from "/src/assets/senior.png";

const BLUE = "#2563eb";
const GOLD = "#c9a759";
const ORANGE = "#fca311";

const SeniorUniform = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="bg-blue-50 py-16 px-6 md:px-16 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Decorative Background Dots */}
      <div className="absolute top-8 left-8 w-48 h-48 opacity-20 bg-[radial-gradient(circle,#2563eb_1.2px,transparent_1.2px)] bg-[length:20px_20px]" />
      <div className="absolute bottom-10 right-10 w-64 h-64 opacity-20 bg-[radial-gradient(circle,#c9a759_1.2px,transparent_1.2px)] bg-[length:18px_18px]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 relative space-y-6" data-aos="fade-right">
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight font-poppins">
            Senior Uniform <br />
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb]
             to-[#c9a759] font-poppins"
            >
              – Boys & Girls
            </span>
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
              className="flex items-start gap-4  backdrop-blur-lg transition-all 
               duration-300"
              data-aos="fade-up"
            >
              <div className="p-3 bg-[#2563eb]/10 text-[#2563eb] rounded-xl">
                <Shirt size={22} />
              </div>
              <p className="font-medium text-gray-700 font-inter">
                <span className="text-[#2563eb] font-semibold">
                  Tailored Shirts for All-Day Comfort:
                </span>{" "}
                White or light blue button-down shirts, long or short sleeve
                with optional embroidered school crests.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="flex items-start gap-4 backdrop-blur-lg  transition-all
                duration-300  "
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="p-3 bg-[#c9a759]/15 text-[#c9a759] rounded-xl">
                <Leaf size={22} />
              </div>
              <p className="font-medium text-gray-700 font-inter">
                <span className="text-[#c9a759] font-semibold">
                  Sustainable & Ethically Made:
                </span>{" "}
                We prioritize ethical production, reduced water usage and
                eco-conscious fabric sourcing.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="flex items-start gap-4  backdrop-blur-lg  transition-all 
               duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="p-3 bg-[#2563eb]/10 text-[#2563eb] rounded-xl">
                <UserCheck size={22} />
              </div>
              <p className="font-medium text-gray-700 font-inter">
                <span className="text-[#2563eb] font-semibold">
                  Confident, Professional Appearance:
                </span>{" "}
                Our senior wear enhances discipline and identity with tailored
                fits for all body types.
              </p>
            </div>
          </div>

          {/* Decorative Arrow */}
          <div className="mt-10 flex justify-end" data-aos="zoom-in">
            <p className="text-[#2563eb] text-7xl font-normal tracking-wider inline-block animate-smoothArrow">
              ›››››
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="md:w-1/2 flex flex-col items-center justify-center relative"
          data-aos="fade-left"
        >
          <img
            src={seniorUniform}
            alt="Senior Uniforms"
            className="w-full max-w-lg object-contain rounded-3xl shadow-xl hover:scale-105 transition-all duration-500"
          />

          {/* Black Label */}
          <div className="relative mt-8 flex" data-aos="fade-up">
            <div className="relative z-10 bg-black text-white text-sm font-semibold font-inter rounded-full px-8 py-3 shadow-md flex items-center gap-3 group">
              <span>POLISHED • PRACTICAL • PROFESSIONAL</span>

              <div className="bg-white/20 p-2 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Animation */}
      <style>
        {`
          @keyframes smoothArrowMove {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(15px); }
          }
          .animate-smoothArrow {
            animation: smoothArrowMove 1.5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default SeniorUniform;
