import { useState, useEffect } from "react";
import shoe1 from "/src/assets/yellow.png";
import shoe2 from "/src/assets/shoe2.png";
import shoe3 from "/src/assets/green.png";
import { QuoteIcon } from "lucide-react";

const ShoeSlider = () => {
  const slides = [
    {
      id: 1,
      size: "w-[600px] h-[600px]",
      rotate: "rotate-[deg]",
      bg: "bg-yellow-700",
      logoNum: "01",
      img: shoe1,
      desc: "We simplify procurement for institutions and ensure quality delivery at scale.",
    },
    {
      id: 2,
      size: "w-[600px] h-[600px]",
      bg: "bg-blue-950",
      logoNum: "02",
      img: shoe2,
      desc: "Engineered for breathable comfort and long-lasting durability.",
    },
    {
      id: 3,
      size: "w-[600px] h-[600px]",
      bg: "bg-green-950",
      logoNum: "03",
      img: shoe3,
      desc: "Trusted by schools nationwide for reliable, large-scale footwear distribution.",
    },
  ];

  const [active, setActive] = useState(1);
  const current = slides.find((s) => s.id === active);
  // ⭐ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === slides.length ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]); // Added dependency to suppress lint warning

  return (
    <>
      {/* FLOAT and FADE-IN Animation */}
      <style>{`
        @keyframes float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }

        /* NEW: Fade-in animation for smooth content change */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-content {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

      <style>
        {`
  .shadow-diagonal {
    background: radial-gradient(
      ellipse at top left,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0) 70%
    );
    filter: blur(60px);
    transform: rotate(35deg);
  }
`}
      </style>

      <div className="relative flex justify-center p-6">
        {/* ⭐ WAVE BG BEHIND CARD (Screenshot EXACT style) */}
        <div
          className="absolute top-[-150px] right-[-150px] w-[700px] h-[700px] 
          rotate-80 pointer-events-none z-0 sm:hidden md:block"
        >
          <div 
            className="
  absolute 
  top-10 
  right-0 
  w-[900px] 
  h-[900px] 
  -z-10
  pointer-events-none
  shadow-diagonal
"
          ></div>
        </div>

        <div
          // 🚀 ADDED TRANSITION FOR SMOOTH BG CHANGE
          className={`relative w-[90%] h-[550px] max-w-md rounded-2xl p-6 py-10
            ${current.bg} text-white/40 transition-all duration-700 ease-in-out`}
          key={current.id} // Key change forces remount/re-render for image/text animations
        >
          {/* Background Number */}
          <h1
            className="absolute -top-10 right-4 text-[160px] font-extrabold 
            opacity-20 select-none fade-in-content" // 🚀 ADDED FADE-IN
          >
            {current.logoNum}
          </h1>

          {/* Shoe Image */}
          <img
            src={current.img}
            className={`
              float-animation drop-shadow-2xl absolute pointer-events-none select-none
              max-w-[600px] max-h-[600px] ${current.rotate || ""} 
              transition-all duration-700 ease-in-out // 🚀 ADDED TRANSITION

              /* Desktop Size */
              md:w-[550px] md:h-[550px] md:left-40 md:bottom-1

              /* Tablet Size */
              sm:w-[380px] sm:h-[380px] sm:-left-10 sm:bottom-10

              /* Mobile Size */
              w-[380px] h-[380px] left-1/2 sm:-left-50 -translate-x-1/2 bottom-30 
            `}
            alt="Shoe"
          />

          {/* Description */}
          <div className="flex gap-2">
            <p
              className="md:mt-16 mt-10 md:text-lg sm:text-md leading-relaxed relative 
            top-90 font-inter fade-in-content text-white"
            >
              {/* 🚀 ADDED FADE-IN */}
              {current.desc}
            </p>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2 md:mt-68 mt-56">
            {slides.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 relative
                  ${active === item.id ? "bg-white" : "bg-white/40"}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoeSlider;
