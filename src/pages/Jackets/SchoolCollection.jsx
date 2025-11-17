import React from "react";
import uniformImg from "/src/assets/Uni4.png";
import winterImg from "/src/assets/Uni5.png";
import casualImg from "/src/assets/Uni6.png";

const SchoolCollection = () => {
  const collections = [
    {
      id: 1,
      title: "Uniform Jackets",
      desc: "Tailored perfection for formal school uniforms — neat, elegant, and comfortable all day.",
      img: uniformImg,
      delay: 0,
    },
    {
      id: 2,
      title: "Winter Coats",
      desc: "Cozy wool-blend coats that blend warmth with a touch of sophistication for winter days.",
      img: winterImg,
      delay: 100,
    },
    {
      id: 3,
      title: "Casual Layer Jackets",
      desc: "Lightweight jackets designed for movement — ideal for sports, field trips, and daily wear.",
      img: casualImg,
      delay: 200,
    },
  ];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden 
      bg-gradient-to-b from-[#e8f1ff] via-[#f3f7ff] to-[#dce9ff]"
    >
      {/* Decorative BG */}
      <div className="absolute -top-24 -left-20 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[250px] bg-blue-300/25 rounded-[100px] rotate-12 blur-2xl"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* 🔥 GRADIENT TITLE UPDATED */}
        <h2
          className="text-3xl md:text-5xl font-bold mb-5 font-poppins 
          bg-gradient-to-r from-black to-[#2563eb] bg-clip-text 
          text-transparent drop-shadow-sm"
        >
          Smart Styles for Every School Day
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-[#c9a759] to-[#2563eb] mx-auto mb-8 rounded-full"></div>

        {/* 🔥 PARAGRAPH UPDATED TO GRAY-700 */}
        <p className="text-gray-700 text-base md:text-xl mb-16 max-w-3xl
         mx-auto leading-relaxed font-inter">
          From brisk winter mornings to active afternoon sessions, Bulk Bridge Jackets
          & Coats are designed to keep every student warm, confident, and ready
          for the day ahead. Built for comfort, crafted for durability, and
          styled to suit every school.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden 
                         hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={item.delay}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform 
                duration-500"
              />

              {/* 🔥 FIXED OVERLAY – ALWAYS VISIBLE, DARKER */}
              <div
                className="absolute inset-0 bg-gradient-to-t 
    from-black/80 via-black/50 to-transparent opacity-100 transition-all duration-500"
              ></div>

              <div className="absolute bottom-8 left-0 w-full text-center px-4">
                <h3 className="text-2xl font-semibold text-white mb-2 tracking-wide drop-shadow-lg font-poppins">
                  {item.title}
                </h3>
                <p className="text-sm text-white max-w-xs mx-auto leading-snug font-inter">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-16 flex justify-center">
          <div
            className="bg-black text-white text-sm md:text-base italic 
            px-4 py-3 rounded-lg max-w-3xl text-center font-inter"
          >
            “Every stitch tells a story of comfort, confidence, and care — Bluk Bridge
            Jackets & Coats.”
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolCollection;
