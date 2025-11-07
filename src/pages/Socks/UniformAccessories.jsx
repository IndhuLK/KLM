import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Palette, Package, Sun, Ruler, Backpack } from "lucide-react";

import cap from "/src/assets/8.png";
import belt from "/src/assets/9.png";
import bag from "/src/assets/9.png";
import socks1 from "/src/assets/6.png";

// 🎨 Brand Colors
const PRIMARY_RED = "#EC3338";
const DARK_TEXT = "#1A1A1A";
const LIGHT_TEXT = "#5A5A5A";
const SOFT_BG = "linear-gradient(135deg, #fff5f5 0%, #ffecec 100%)";

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
      className="py-20 px-6 md:px-16 font-poppins relative overflow-hidden 
      bg-gradient-to-br from-[#f36e4c] via-[#ffecec] to-[#f7c086]"
     
    >
      {/* Decorative Background Shapes */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#EC3338]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EC3338]/5 blur-3xl rounded-full"></div>

      {/* ---------- TOP FEATURE SECTION ---------- */}
      <div
        className="relative bg-white/80 backdrop-blur-lg border border-[#EC3338]/10 rounded-3xl p-10 md:p-14 shadow-xl overflow-hidden"
        data-aos="fade-up"
      >
        {/* Diagonal Gradient Background */}
        <div
          className="absolute top-0 right-0 w-3/5 h-full transform skew-y-3 origin-top-right z-0"
          style={{
            background: `linear-gradient(135deg, #EC3338 0%, #ff8a8a 100%)`,
          }}
          data-aos="fade-left"
        ></div>

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* LEFT: FEATURES */}
          <div className="w-full md:w-1/2 space-y-8 py-4">
            {/* Feature 1 */}
            <div
              className="p-6 rounded-xl border border-[#EC3338]/20 bg-white shadow-md 
              hover:shadow-lg transition duration-300"
              data-aos="fade-right"
            >
              <Palette className="w-8 h-8 text-[#EC3338] mb-3" />
              <h2 className="text-lg md:text-2xl font-bold text-[#EC3338] font-poppins">
                Institutional Color Matching
              </h2>
              <p className="text-sm mt-1 text-[#444] font-inter">
                Available in standard school shades with stripe or plain options
                that coordinate perfectly with the full uniform collection.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="p-6 rounded-xl border border-[#EC3338]/20 bg-white shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Package className="w-8 h-8 text-[#EC3338] mb-3" />
              <h2 className="text-lg md:text-2xl font-bold text-[#EC3338] font-poppins">
                Bulk Packaging & Size Range
              </h2>
              <p className="text-sm mt-1 text-[#444] font-inter">
                Socks come in multi-size packs and are ideal for bulk
                distribution, featuring clear labeling for easy inventory and
                organization.
              </p>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center py-8 relative">
            <img
              src={socks1}
              alt="Socks Display"
              className="w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl 
              rounded-[40%_60%_70%_30%] transition-transform duration-500 hover:scale-105"
              data-aos="zoom-in"
              style={{
                filter: "drop-shadow(0 10px 20px rgba(236, 51, 56, 0.3))",
              }}
            />
          </div>
        </div>
      </div>

      {/* ---------- BOTTOM ACCESSORY GRID ---------- */}
      <h2
        className="text-3xl md:text-5xl font-extrabold text-center mt-20 mb-10 font-poppins"
        style={{ color: PRIMARY_RED }}
        data-aos="fade-up"
      >
        Essential Uniform Accessories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bottomCards.map((card, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl p-8 shadow-md border
             border-[#EC3338]/10 hover:shadow-2xl hover:-translate-y-2 transition-all 
             duration-500"
            data-aos={card.anim}
            data-aos-delay={index * 150}
          >
            {/* Accent Blob */}
            <div
              className="absolute -top-12 -right-12 w-40 h-40 bg-[#EC3338]/10 rounded-full
               opacity-0 group-hover:opacity-100 transition-all duration-700"
            ></div>

            {/* Icon + Image */}
            <div className="mb-4 flex items-center justify-between">
              <card.icon className="w-8 h-8 text-[#EC3338] transition duration-300 
              group-hover:text-[#ff4b4b]" />
              <img
                src={card.img}
                alt={card.alt}
                className="w-16 h-16 object-contain drop-shadow-md transition-transform 
                duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]">
              {card.title}
            </h3>
            <p className="text-sm text-[#5a5a5a] leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniformAccessories;
