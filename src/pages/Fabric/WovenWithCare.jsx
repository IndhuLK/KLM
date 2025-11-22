import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Home, Shirt, CheckCircle } from "lucide-react";

const WovenWithCare = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // BLUE THEME COLORS
  const PRIMARY_BLUE = "#2563eb";
  const NAVY = "#0b2e75";
  const TEXT_GRAY = "#444444";
  const ICON_BG = "#2563eb"; // icons inside circle
  const BG_WHITE = "#ffffff";

  return (
    <section
      className="relative py-24 px-6 md:px-16 overflow-hidden"
      style={{ background: BG_WHITE }}
    >
      {/* Soft Blue Background Orbs */}
      <div className="absolute -top-24 -left-16 w-80 h-80 bg-[#2563eb]/15 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-[#2563eb]/10 blur-3xl rounded-full"></div>

      {/* Title */}
      <div className="relative text-center mb-16 z-10" data-aos="fade-up">
        <h2
          className="text-2xl md:text-5xl font-bold tracking-tight font-poppins
                     bg-black bg-clip-text text-transparent"
        >
          Woven with <span className="bg-clip-text text-transparent bg-gradient-to-r
           from-[#2563eb] to-[#c9a759]">Care</span>
        </h2>

        <div className="mt-3 mx-auto w-28 h-1 bg-[#c9a759] rounded-full"></div>
      </div>

      {/* Card Grid */}
      <div
        className="relative grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto z-10"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {[
          {
            id: 1,
            icon: <Home className="w-7 h-7 text-white" />,
            title: "Premium Woven Fabric Centre",
            desc: "We source uniform fabrics from India's most trusted textile clusters, known for their precision and consistent quality.",
          },
          {
            id: 2,
            icon: <CheckCircle className="w-7 h-7 text-white" />,
            title: "Skin-Safe & Certified Materials",
            desc: "Our fabrics meet OEKO-TEX® standards — hypoallergenic, breathable, and safe for daily school use.",
          },
          {
            id: 3,
            icon: <Shirt className="w-7 h-7 text-white" />,
            title: "Designed for Daily Comfort",
            desc: "Soft textures, easy maintenance, and durability — engineered for long-lasting school comfort.",
          },
        ].map((card, index) => (
          <div
            key={card.id}
            className="group relative backdrop-blur-md rounded-3xl shadow-xl border border-[#2563eb]/30 
                       bg-white/70 p-8 text-center transform hover:-translate-y-3 hover:shadow-2xl 
                       transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Icon */}
            <div
              className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto rounded-full shadow-lg 
                         mb-4 transition-all duration-500 group-hover:scale-110 bg-[#c9a759]"
              
            >
              {card.icon}
            </div>

            {/* Stars (BLUE THEME) */}
            <div
              className="relative z-10 text-xl tracking-widest mb-4 text-red-500 animate-pulse"
              style={{ letterSpacing: "2px" }}
            >
              ★★★★★
            </div>

            {/* Title */}
            <h4
              className="text-lg md:text-xl font-bold mb-3 font-poppins text-transparent
                         bg-gradient-to-r from-[#2563eb] to-[#0b2e75] bg-clip-text "
            >
              {card.title}
            </h4>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed z-10 relative font-inter">
              {card.desc}
            </p>

            {/* Hover Line */}
            <div className="mt-6 mx-auto w-0 h-1 bg-[#2563eb] rounded-full 
                           group-hover:w-20 transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* STAR ANIMATION */}
      <style>{`
        @keyframes starPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-pulse {
          animation: starPulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WovenWithCare;
