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

  const PRIMARY_RED = "#EC3338";
  const BG_GRADIENT = "linear-gradient(135deg, #FFF6E5 0%, #FFDDB0 100%)";
  const CARD_BG = "rgba(255,255,255,0.8)";
  const ICON_BG = "#000000";

  return (
    <section
      className="relative py-24 px-6 md:px-16 overflow-hidden "
      style={{ background: BG_GRADIENT }}
    >
      {/* Background Orbs */}
      <div className="absolute -top-24 -left-16 w-80 h-80 bg-[#EC3338]/15 blur-3xl 
      rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-[#000000]/10 
      blur-3xl rounded-full"></div>

      {/* Title */}
      <div className="relative text-center mb-16 z-10" data-aos="fade-up">
        <h2
          className="text-2xl md:text-5xl font-bold tracking-tight font-poppins"
          style={{ color: PRIMARY_RED }}
        >
          Woven with Care
        </h2>
        <div className="mt-3 mx-auto w-28 h-1 bg-[#000000] rounded-full"></div>
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
            desc: "We source uniform fabrics from India's most trusted textile clusters, known for their precision, consistency, and ethical production standards.",
          },
          {
            id: 2,
            icon: <CheckCircle className="w-7 h-7 text-white" />,
            title: "Skin-Safe & Certified Materials",
            desc: "Our fabrics adhere to international standards like OEKO-TEX®, ensuring hypoallergenic, breathable, and non-toxic materials for all-day comfort.",
          },
          {
            id: 3,
            icon: <Shirt className="w-7 h-7 text-white" />,
            title: "Designed for Daily Comfort",
            desc: "Our textiles combine softness, easy maintenance, and durability — crafted to endure long school days while keeping comfort first.",
          },
        ].map((card, index) => (
          <div
            key={card.id}
            className="group relative backdrop-blur-md rounded-3xl shadow-xl border border-white/50 
                       bg-white/60 p-8 text-center transform hover:-translate-y-3 hover:shadow-2xl 
                       transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/30 to-[#fff3e0]/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Icon */}
            <div
              className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto rounded-full shadow-lg 
                         mb-4 transform transition-all duration-500 group-hover:scale-110"
              style={{ backgroundColor: ICON_BG }}
            >
              {card.icon}
            </div>

            {/* Stars */}
            <div
              className="relative z-10 text-xl tracking-widest mb-4 text-[#EC3338] animate-pulse"
              style={{ letterSpacing: "2px" }}
            >
              ★★★★★
            </div>

            {/* Title */}
            <h4
              className="text-lg md:text-xl font-bold mb-3 font-poppins"
              style={{ color: PRIMARY_RED }}
            >
              {card.title}
            </h4>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed 
            z-10 relative font-inter">
              {card.desc}
            </p>

            {/* Subtle hover line */}
            <div className="mt-6 mx-auto w-0 h-1 bg-[#000000] rounded-full 
            group-hover:w-20 transition-all duration-500"></div>
          </div>
        ))}
      </div>

      

      {/* Animation for star shimmer */}
      <style>{`
        @keyframes starPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-pulse {
          animation: starPulse 2s ease-in-out infinite;
        }
        .font-play {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default WovenWithCare;
