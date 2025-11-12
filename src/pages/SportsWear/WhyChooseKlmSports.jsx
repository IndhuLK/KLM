import React from "react";
import { Wind, Droplet, Palette, Sun, Shirt, Zap } from "lucide-react";

const WhyChooseKlmSports = () => {
  const PRIMARY_RED = "#EC3338"; // Deep Red
  const SOFT_GOLD = "#FFCA93"; // Soft Gold/Peach
  const DARK_TEXT = "text-gray-900";
  const LIGHT_TEXT = "text-white";

  const features = [
    { id: 1, icon: <Zap className="w-8 h-8 text-[#EC3338]" />, title: "Precision-Engineered Durability" },
    { id: 2, icon: <Wind className="w-8 h-8 text-[#EC3338]" />, title: "Optimized Airflow & Cooling" },
    { id: 3, icon: <Palette className="w-8 h-8 text-[#EC3338]" />, title: "Vibrant Color Fidelity" },
    { id: 4, icon: <Sun className="w-8 h-8 text-[#EC3338]" />, title: "Advanced Sun & Weather Protection" },
    { id: 5, icon: <Droplet className="w-8 h-8 text-[#EC3338]" />, title: "Rapid-Dry, Stain-Resistant Finish" },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gray-50">
      
      {/* ⚙️ Modern Industrial Background Geometry (Red and Gold) */}
      
      {/* Soft Gold Layer - Angled Wash */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(150deg, ${SOFT_GOLD} 0%, transparent 60%)`,
             clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' // Creates a sharp diagonal edge
           }}>
      </div>
      
      {/* Deep Red Corner Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 blur-3xl rounded-full" 
           style={{ backgroundColor: PRIMARY_RED }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* 🏅 Heading - Bold and Structured */}
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 font-sans">
          THE KLM DIFFERENCE
        </p>
        <h2 className={`text-2xl md:text-5xl font-black ${DARK_TEXT} mb-5 font-poppins leading-tight`}>
          <span style={{ color: PRIMARY_RED }}>BUILT</span> TO OUTLAST, 
          <br className="hidden md:block" /> ENGINEERED TO <span style={{  color: PRIMARY_RED, textShadow: '1px 1px 5px rgba(236, 51, 56, 0.3)' }}>WIN</span>
        </h2>

        <div className={`w-28 h-2 mx-auto mb-12 rounded-full`} style={{ background: `linear-gradient(90deg, ${PRIMARY_RED} 0%, ${SOFT_GOLD} 100%)` }}></div>

        <p className={`text-gray-700 text-sm md:text-xl max-w-4xl mx-auto leading-relaxed mb-20 font-inter`}>
          Our commitment is to athletic integrity. KLM apparel is developed using **proprietary textile blends**
          that ensure zero compromise on flexibility, strength, and comfort, from training to championship.
        </p>

        {/* 🧩 Features Grid - Neumorphism/Embossed Look */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
          {features.map((item, i) => (
            <div
              key={item.id}
              // Card Styling: Embossed (Neumorphism-inspired) look on a light background
              className={`group flex flex-col items-center justify-center p-6 w-full h-48 max-w-xs
               bg-white rounded-2xl border-b-4 border-r-4 border-l-2 border-t-2 border-gray-100
               shadow-[5px_5px_15px_rgba(0,0,0,0.1),_-5px_-5px_15px_rgba(255,255,255,1)]
               transition-all duration-300 transform 
               hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(236,51,56,0.5)] hover:border-b-4 hover:border-r-4 hover:border-gray-200`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div 
                className={`flex-shrink-0 p-4 rounded-full mb-3 shadow-inner shadow-gray-300/50 
                group-hover:shadow-inner`} 
                style={{ backgroundColor: SOFT_GOLD, border: `1px solid ${PRIMARY_RED}10` }}
              >
                {item.icon}
              </div>
              <h4 className={`text-base font-bold text-center ${DARK_TEXT} font-inter`}>
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        {/* ✨ Bottom Tagline - High-Impact Red Box */}
        <div className="mt-20 flex justify-center">
          <div 
            className={`text-white text-lg font-semibold px-8 py-4 rounded-xl max-w-4xl 
                text-center bg-black
            font-inter shadow-2xl shadow-[#EC3338]/50`}
        
          >
            “Performance is not an accident. It’s the direct result of superior gear.”
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKlmSports;