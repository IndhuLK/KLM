import React from "react";
import { Wind, Droplet, Palette, Sun, Zap } from "lucide-react";

const WhyChooseKlmSports = () => {
  const PRIMARY_BLUE = "#2563eb";
  const SOFT_GOLD = "#c9a759";
  const DARK_TEXT = "text-gray-900";

  const features = [
    { id: 1, icon: <Zap className="w-8 h-8 text-[#2563eb]" />, title: "Precision-Engineered Durability" },
    { id: 2, icon: <Wind className="w-8 h-8 text-[#2563eb]" />, title: "Optimized Airflow & Cooling" },
    { id: 3, icon: <Palette className="w-8 h-8 text-[#2563eb]" />, title: "Vibrant Color Fidelity" },
    { id: 4, icon: <Sun className="w-8 h-8 text-[#2563eb]" />, title: "Advanced Sun & Weather Protection" },
    { id: 5, icon: <Droplet className="w-8 h-8 text-[#2563eb]" />, title: "Rapid-Dry, Stain-Resistant Finish" },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gray-50">

      {/* 🟡 Gold Wash Background */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(150deg, ${SOFT_GOLD} 0%, transparent 60%)`,
          clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
        }}
      ></div>

      {/* 🔵 Soft Blue Light Burst */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-20 blur-3xl rounded-full"
        style={{ backgroundColor: PRIMARY_BLUE }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">

        {/* 🏅 Heading */}
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 font-sans">
          THE KLM DIFFERENCE
        </p>

        <h2 className={`text-2xl md:text-5xl font-black ${DARK_TEXT} mb-5 font-poppins leading-tight`}>
          <span className="bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text text-transparent">
            BUILT
          </span>{" "}
          TO OUTLAST,
          <br className="hidden md:block" />
          ENGINEERED TO{" "}
          <span className="bg-gradient-to-r from-[#2563eb] to-[#c9a759] bg-clip-text text-transparent">
            WIN
          </span>
        </h2>

        {/* Blue → Gold Divider */}
        <div
          className="w-28 h-2 mx-auto mb-12 rounded-full"
          style={{ background: `linear-gradient(90deg, ${PRIMARY_BLUE}, ${SOFT_GOLD})` }}
        ></div>

        <p className="text-gray-700 text-sm md:text-xl max-w-4xl mx-auto leading-relaxed
         mb-10 font-inter">
          Our commitment is to athletic integrity. Bulk Bridge apparel is developed using <b>proprietary performance blends </b>
          that ensure zero compromise on flexibility, strength, and comfort from training to competition.
        </p>

        {/* 🧩 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
          {features.map((item, i) => (
            <div
              key={item.id}
              className="group flex flex-col items-center justify-center p-6 w-full h-48 max-w-xs
              bg-white rounded-2xl border-b-4 border-r-4 border-l-2 border-t-2 border-gray-100
              shadow-[5px_5px_15px_rgba(0,0,0,0.1),_-5px_-5px_15px_rgba(255,255,255,1)]
              transition-all duration-300 transform hover:scale-[1.03]
              hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:border-gray-200"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div
                className="flex-shrink-0 p-4 rounded-full mb-3 shadow-inner shadow-gray-300/50"
                style={{ backgroundColor: `${SOFT_GOLD}40` }}
              >
                {item.icon}
              </div>

              <h4 className={`text-base font-bold text-center ${DARK_TEXT} font-inter`}>
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        {/* 🟦 Bottom Tagline */}
        <div className="mt-10 flex justify-center">
          <div
            className="text-white text-base font-semibold px-8 py-2 rounded-xl 
            max-w-4xl text-center font-inter shadow-2xl bg-black"
            
            style={{ boxShadow: `0 0 20px ${PRIMARY_BLUE}60` }}
          >
            “Performance is not an accident. It’s the direct result of superior gear.”
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKlmSports;
