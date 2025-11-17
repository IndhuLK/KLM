import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import shoe from "/src/assets/red-shoe.png"; // your shoe image

const AuthorizedDistributor = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const BLUE = "#2563eb";
  const GOLD = "#c9a759";

  return (
    <section
      className="relative overflow-hidden py-16 md:py-20 px-6 md:px-16"
      style={{
        background: "linear-gradient(135deg, #f1f5ff 0%, #ffffff 40%, #f5ead3 100%)",
      }}
    >

      {/* Decorative Blue Glow */}
      <div className="absolute -top-20 -left-16 w-80 h-80 bg-[#2563eb]/15 blur-3xl rounded-full"></div>
      {/* Gold Glow */}
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-[#c9a759]/20 blur-3xl rounded-full"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-left" data-aos="fade-right">
          
          <h2 className="text-2xl md:text-5xl font-extrabold leading-tight font-poppins 
            bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text text-transparent"
          >
            As Authorized <br /> Distributors
          </h2>

          <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed font-inter">
            We ensure that every pair is crafted for all-day wear — cushioned insoles, 
            reinforced stitching, breathable uppers, and long-lasting soles for daily 
            student use.
          </p>

          <button
            className="mt-6 bg-black text-white text-sm md:text-xl font-semibold cursor-pointer
            px-4 py-2 rounded-md shadow-xl hover:bg-black/90 transition-all duration-300"
          >
            Get Offer
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="md:w-1/2 relative flex justify-center items-center"
          data-aos="fade-left"
        >
          {/* Soft reflection shadow */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[85%] h-10 
            bg-black/10 rounded-full blur-2xl"></div>

          <img
            src={shoe}
            alt="School Shoe"
            className="relative z-10 w-[80%] md:w-[80%] object-contain drop-shadow-2xl 
            transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default AuthorizedDistributor;
