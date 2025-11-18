import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Palette, Package, Sun, Ruler, Backpack } from "lucide-react";

import cap from "/src/assets/caps.png";
import belt from "/src/assets/belt.png";
import bag from "/src/assets/bag.png";
import socks1 from "/src/assets/socks5.png";

// 🎨 New Brand Colors
const BLUE = "#2563eb";
const GOLD = "#c9a759";
const BLACK = "#1A1A1A";

const UniformAccessories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const bottomCards = [
    {
      title: "Smart School Caps",
      desc: "Available in standard school colors with embroidery options. Designed for sun protection and uniform consistency.",
      img: cap,
      icon: Sun,
      alt: "School Cap",
      anim: "fade-up",
    },
    {
      title: "Adjustable Belts",
      desc: "Durable, size-flexible belts made from school-compliant materials to ensure both form and function.",
      img: belt,
      icon: Ruler,
      alt: "Adjustable Belt",
      anim: "fade-up",
    },
    {
      title: "Multi-Use School Bags",
      desc: "Lightweight, spacious bags with padded straps, custom printing, and branding — perfect for daily academic needs.",
      img: bag,
      icon: Backpack,
      alt: "School Bag",
      anim: "fade-up",
    },
  ];

  return (
    <section
      className="py-10 px-6 md:px-16 font-poppins relative overflow-hidden 
      bg-gradient-to-br from-[#2563eb]/10 via-white to-[#c9a759]/10"
    >
      {/* ----------------- TOP SECTION ----------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-12" data-aos="fade-right">
          {/* BLOCK 1 */}
          <div className="flex items-start gap-4">
            {/* ICON */}
            <Sun className="w-10 h-10 text-[#c9a759] flex-shrink-0 " />

            {/* TEXT CONTENT */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
                Institutional Color Matching
              </h2>
              <p className="text-gray-600 leading-relaxed font-inter">
                Available in standard school shades with stripe or plain options
                that coordinate perfectly with the full uniform collection.
              </p>
            </div>
          </div>

          {/* BLOCK 2 */}
          <div className="flex items-start gap-4 mt-10">
            {/* ICON */}
            <Package className="w-10 h-10 text-[#c9a759] flex-shrink-0" />

            {/* TEXT CONTENT */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
                Bulk Packaging & Size Range
              </h2>
              <p className="text-gray-600 leading-relaxed font-inter">
                Socks come in multi-size packs and are ideal for bulk
                distribution, featuring clear labeling for easy inventory and
                organization.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="flex justify-center lg:justify-end"
          data-aos="fade-left"
        >
          <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
            <img
              src={socks1}
              className="w-full h-auto rounded-2xl shadow-lg object-contain"
              alt="Institutional Socks"
            />
          </div>
        </div>
      </div>

      {/* ----------------- BOTTOM TITLE ----------------- */}
      <h2
        className="text-3xl md:text-5xl font-extrabold text-center mt-24 mb-12 font-poppins 
        bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text text-transparent"
        data-aos="fade-up"
      >
        Essential Uniform Accessories
      </h2>

      {/* ----------------- BOTTOM CARDS GRID ----------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {bottomCards.map((card, index) => (
          <div
            key={index}
            className="group relative bg-[#0B2C6B] rounded-3xl p-8 shadow-md 
      hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-white"
            data-aos={card.anim}
            data-aos-delay={index * 150}
          >
            <div className="flex items-center justify-between">
              {/* -------- LEFT SIDE TEXT -------- */}
              <div className="w-1/2 pr-4">
                <h3 className="text-lg font-bold leading-snug">{card.title}</h3>
                <p className="text-sm mt-2 opacity-90">{card.desc}</p>
              </div>

              {/* -------- RIGHT SIDE IMAGE WITH WAVY BORDER -------- */}
              <div className="w-1/2 flex justify-end">
                <div
                  className="relative bg-white p-3 rounded-[28px] shadow-lg
              transition-all duration-500 group-hover:scale-110"
                >
                  {/* wavy blob border */}
                  <div className="absolute inset-0 bg-white rounded-[28px] 
                  blur-xl opacity-40"></div>

                  <img
                    src={card.img}
                    alt={card.alt}
                    className="relative w-20 h-20 object-contain z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniformAccessories;
