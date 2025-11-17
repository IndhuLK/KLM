import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import whiteSocks from "/src/assets/socks.png";
import socksBanner from "/src/assets/socks2.jpg";
import walk from "/src/assets/walk.png";

const SchoolSocksSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative overflow-hidden py-16 px-6 md:px-14 
      bg-gradient-to-br from-[#eef3ff] via-white to-[#eef3ff]
      flex flex-col md:flex-row items-center justify-between 
      gap-12 md:gap-16"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#2563eb]/10 blur-3xl 
      rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2563eb]/5 blur-3xl rounded-full
       animate-pulse"></div>

      {/* LEFT SIDE */}
      <div
        className="w-full md:w-[45%] flex flex-col items-center justify-center z-10"
        data-aos="fade-right"
      >
        <div className="relative group w-full flex justify-center">
          <img
            src={whiteSocks}
            alt="School Uniform Socks"
            className="w-[65%] md:w-[80%] object-contain drop-shadow-xl 
            transition-transform duration-500 group-hover:scale-105 mx-auto"
          />
          <div className="absolute -z-10 inset-0 bg-[#2563eb]/5 blur-2xl rounded-full scale-125"></div>
        </div>

        <p className="italic text-white md:text-lg text-sm mt-4 font-medium 
        tracking-wide bg-black px-6 py-2 rounded-lg text-center">
          Stretchable, breathable, and soft comfort.
        </p>
      </div>

      {/* CENTER CONTENT */}
      <div
        className="w-full md:w-[50%] text-center md:text-left space-y-6 z-10"
        data-aos="fade-up"
      >
        <div className="flex justify-center md:justify-start">
          <img
            src={socksBanner}
            alt="Colorful Socks Banner"
            className="w-[90%] md:w-[70%] rounded-xl shadow-md
            hover:shadow-lg transition-all duration-500"
          />
        </div>

        <p className="text-[#c9a759] italic font-semibold text-lg md:text-xl text-center
         md:text-left">
          Comfortable, Durable & Designed for Active School Days
        </p>

        {/* Feature Icon + Text */}
        <div className="flex flex-col items-center md:items-start mt-3 space-y-3">
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-lg p-4 rounded-2xl shadow-sm hover:shadow-md transition duration-300 w-full md:w-auto">
            <div className="bg-[#2563eb]/10 p-3 rounded-xl">
              <img src={walk} alt="Walk Icon" className="w-10 h-10 object-contain" />
            </div>
            <h3 className="font-semibold text-black text-xl md:text-2xl font-poppins">
              Made for Movement
            </h3>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md text-center md:text-left font-inter mx-auto md:mx-0">
            Crafted with stretchable, breathable fabric that adapts with every
            step — ensuring day-long comfort and focus.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE VERTICAL TEXT (Hidden on Mobile) */}
      <div
        className="absolute right-0 top-98 md:right-10 bottom-0 hidden md:flex items-center justify-center"
        data-aos="fade-left"
      >
        <p
          className="text-black/30 font-semibold text-3xl tracking-[0.2em]"
          style={{
            transform: "rotate(90deg)",
            transformOrigin: "right center",
          }}
        >
          SCHOOL UNIFORM SOCKS
        </p>
      </div>

      {/* Dotted Background */}
      <div className="absolute bottom-6 left-8 w-60 h-24 
      bg-[radial-gradient(circle,_#2563eb_1.5px,transparent_1.5px)] 
      bg-[length:18px_18px] opacity-40"></div>
    </section>
  );
};

export default SchoolSocksSection;
