import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import shoeImg from "/src/assets/shoe.png";
import { Send } from "lucide-react";

const SchoolShoes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // NEW BLUE + GOLD THEME
  const PRIMARY_BLUE = "#2563eb";
  const GOLD = "#c9a759";
  const TEXT_COLOR = "#2C2C2C";

  return (
    <section className="relative overflow-hidden">

      {/* Background (Blue + Gold Soft Gradient) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #f1f5ff 0%, #fff 40%, #f4ead0 100%)",
        }}
      ></div>

      {/* Decorative Blue & Gold Glows */}
      <div className="absolute -top-24 -left-16 w-80 h-80 bg-[#2563eb]/15 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#c9a759]/20 blur-3xl rounded-full"></div>

      {/* --- Heading Section --- */}
      <div className="px-6 md:px-16 pt-19 md:pt-10 text-left" data-aos="fade-right">
        <h2 className="text-2xl md:text-5xl font-extrabold leading-tight font-poppins text-black">
          <span className="bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text text-transparent">
            School Shoes
          </span>{" "}
          — Trusted Quality, <br />
          <span className="text-black">Bulk Distribution</span>
        </h2>

        <div
          className="mt-3 w-24 h-[4px] rounded-full"
          style={{ backgroundColor: PRIMARY_BLUE }}
        ></div>
      </div>

      {/* --- Main Content --- */}
      <div
        className="relative mt-2 px-6 md:px-16 py-10 md:py-5 rounded-3xl 
                   shadow-[0_10px_50px_rgba(0,0,0,0.06)] bg-white/80 backdrop-blur-sm"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="md:w-1/2 space-y-4" data-aos="fade-right">

            <h3
              className="text-xl md:text-4xl font-bold leading-snug font-poppins"
              style={{ color: TEXT_COLOR }}
            >
              Bulk Bridge — Authorized Distributor for Premium School Shoes
            </h3>

            <p className="text-gray-700 md:text-lg leading-relaxed max-w-md font-inter">
              Designed for all-day comfort and durability. Each pair ensures breathability,
              cushioned soles, and reliable grip — keeping students confident from the first
              bell to the last.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-1">
              {[
                { id: 1, title: "Comfortable All-Day Wear" },
                { id: 2, title: "Durable & Size Inclusive" },
                { id: 3, title: "Bulk Supply & Fast Delivery" },
              ].map((point, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-start relative"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <span
                    className="text-3xl font-extrabold transition-transform duration-300 
                    group-hover:scale-110 bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text text-transparent"
                  >
                    {point.id}.
                  </span>
                  <p className="mt-1 text-sm md:text-base text-gray-700 font-inter 
                  group-hover:text-black transition-colors duration-300">
                    {point.title}
                  </p>

                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2563eb]
                     group-hover:w-full transition-all duration-500 rounded-full"
                  ></div>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <button
              className="relative mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full 
                         font-semibold text-white bg-black hover:bg-black/90 shadow-xl
                         transition-all duration-300 group font-inter cursor-pointer"
              data-aos="fade-up"
            >
              Learn More
              <Send className="w-5 h-5 text-white transform rotate-45 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative md:w-1/2 flex justify-center items-center" data-aos="fade-left">

            {/* Blue Glow */}
            <div
              className="absolute w-96 h-96 rounded-full bg-[#2563eb]/10 blur-3xl"
              style={{ boxShadow: "0 0 60px rgba(0,0,0,0.08)" }}
            ></div>

            {/* Shoe Image */}
            <img
              src={shoeImg}
              alt="School Shoes"
              className="relative z-10 w-[75%] md:w-[65%] object-contain drop-shadow-2xl 
                         transform hover:scale-105 transition-transform duration-700"
            />

            {/* Reflection */}
            <div className="absolute bottom-[-3rem] w-[70%] h-20 bg-gradient-to-t from-black/10 to-transparent rounded-full blur-md"></div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Arrow */}
      <div className="flex justify-end mt-10 pr-10" data-aos="fade-right">
        <Send
          className="w-8 h-8 rotate-45 text-[#2563eb] hover:translate-x-2 transition-transform duration-300"
        />
      </div>

    </section>
  );
};

export default SchoolShoes;
