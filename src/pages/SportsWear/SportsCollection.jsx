import React from "react";
import trackImg from "/src/assets/cap.png";
import boysport from "/src/assets/boysport.png";
import teeImg from "/src/assets/shoe.png";

const SportsCollection = () => {
  const collections = [
    {
      id: 1,
      title: "High-Performance Sports Shoes",
      desc: "Engineered for grip, comfort, and agility — our sports shoes support every sprint, jump, and training session with superior cushioning and durability.",
      img: teeImg,
      delay: 0,
    },
    {
      id: 2,
      title: "Elite Sportswear Collection",
      desc: "Breathable, stretch-ready, lightweight sports uniforms crafted for performance. Perfect for physical training, team activities, and everyday school sports.",
      img: boysport,
      delay: 100,
    },
    {
      id: 3,
      title: "Sports Accessories — Cap & Belt",
      desc: "Durable, stylish, and built for everyday use. Our sports caps and belts complement school sports uniforms with comfort, strength, and long-lasting quality.",
      img: trackImg,
      delay: 200,
    },
  ];

  // NEW BLUE + GOLD THEME COLORS
  const PRIMARY_BLUE = "#2563eb";
  const SOFT_GOLD = "#c9a759";

  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* 🔷 Blue Right-Side Chevron */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none z-0"
        style={{
          backgroundColor: PRIMARY_BLUE,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%)",
        }}
      ></div>

      {/* 🟡 Soft Gold Circle Glow */}
      <div
        className="absolute bottom-[-150px] left-[-150px] w-80 h-80  
        bg-opacity-30 rounded-full blur-[100px] z-0"
        style={{ backgroundColor: SOFT_GOLD }}
      ></div>

      {/* 🟦 Blue Diagonal Stripe */}
      <div
        className="absolute top-1/2 left-0 w-32 h-6 bg-opacity-70 
        rotate-[-45deg] z-0 shadow-lg"
        style={{ backgroundColor: SOFT_GOLD }}
      ></div>

      {/* 🏅 HEADING */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-extrabold font-sans mb-3 drop-shadow-md">
          <span style={{ color: PRIMARY_BLUE }}>THE</span> ATHLETIC ARSENAL
        </h2>
        <p
          className="max-w-4xl mx-auto text-gray-700 text-sm md:text-xl font-inter
         leading-relaxed mb-5"
        >
          Explore Bulk Bridge essential sportswear collections—where advanced textile
          technology meets rugged, field-tested design for every sport and
          activity.
        </p>
      </div>

      {/* 🧥 ZIG-ZAG SHOWCASE */}
      <div className="relative z-10 mt-10 space-y-10">
        {collections.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-16 max-w-7xl mx-auto px-6`}
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            {/* 📸 IMAGE CARD */}
            <div className="relative w-full md:w-5/12 lg:w-4/12 group">
              {/* Blue Corner Accent */}
              <div
                className="absolute top-[-10px] right-[-10px] w-12 h-12 rounded-tl-xl rounded-br-xl"
                style={{ backgroundColor: PRIMARY_BLUE }}
              ></div>

              <img
                src={item.img}
                alt={item.title}
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover 
                border-4 border-white bg-white transform group-hover:-translate-y-1 
                group-hover:shadow-3xl transition-all duration-500 z-10"
              />

              {/* Gold Behind Accent */}
              <div
                className="absolute inset-0 rounded-3xl opacity-50 transform translate-x-3 translate-y-3 
                 group-hover:translate-x-5 group-hover:translate-y-5 transition-all duration-500"
                style={{ backgroundColor: SOFT_GOLD }}
              ></div>
            </div>

            {/* 📝 TEXT SECTION */}
            <div className="md:w-7/12 lg:w-8/12 text-center md:text-left">
              <span className="text-sm font-semibold uppercase tracking-widest
               text-gray-500 mb-2 block">
                Collection {item.id}
              </span>

              <h3
                className="text-2xl md:text-4xl font-extrabold mb-4 font-poppins leading-tight
                bg-gradient-to-r from-[#0943be] to-[#bd9029] bg-clip-text text-transparent"
               
              >
                {item.title}
              </h3>

              <p className="text-gray-700 font-inter text-lg leading-relaxed mb-8">
                {item.desc}
              </p>

              <button
                className="px-8 py-3 rounded-full font-bold text-white shadow-lg bg-black
                transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                style={{
                  
                  boxShadow: `0 8px 15px 0 ${PRIMARY_BLUE}40`,
                }}
              >
                Shop The Range →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✨ Bottom Tagline */}
      <div className="relative mt-28 text-center max-w-6xl mx-auto">
        <div className="h-0.5 w-full my-8 bg-gray-200">
          <p
            className="inline-block px-8 py-1 transform -translate-y-1/2 text-lg 
            font-medium italic text-white rounded-full shadow-lg bg-black"
            style={{
             
              boxShadow: `0 0 10px ${PRIMARY_BLUE}80`,
            }}
          >
            Uncompromising Quality. Unbeatable Performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SportsCollection;
