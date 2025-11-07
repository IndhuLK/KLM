import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import shoe from "/src/assets/red-shoe.png"; // 👈 your red shoe image here

const AuthorizedDistributor = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-t from-[#fabb78] via-[#f7faff] 
    to-[#f7ad5e]  overflow-hidden py-16 md:py-20 px-6 md:px-16">
      {/* Background pattern / shapes */}
      <div className="absolute inset-0 "></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* LEFT SIDE CONTENT */}
        <div className="md:w-1/2 text-left" data-aos="fade-right">
          <h2 className="text-2xl md:text-5xl font-extrabold text-[#EC3338] leading-tight
          font-poppins">
            As Authorized <br /> Distributors
          </h2>

          <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed font-inter">
            We ensure that every pair is crafted for all-day wear. Features like cushioned insoles, 
            strong stitching, and breathable material make our shoes perfect for the rigors of 
            daily student life.
          </p>

          <button
            className="mt-6 bg-black text-white text-sm md:text-xl font-semibold cursor-pointer
            px-6 py-3 rounded-md shadow-md hover:bg-[#EC3338] transition-all duration-300"
          >
            Get Offer
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          className="md:w-1/2 relative flex justify-center items-center"
          data-aos="fade-left"
        >
          {/* Subtle background shadow plate */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[40px] 
          bg-gray-300 rounded-full blur-2xl opacity-30"></div>

          {/* Shoe Image */}
          <img
            src={shoe}
            alt="Red School Shoe"
            className="relative z-10 w-[80%] md:w-[80%] object-contain drop-shadow-2xl
            rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AuthorizedDistributor;
