import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShieldCheck, Leaf, Factory } from "lucide-react"; 
import fabricImg from "/src/assets/fabric.png"; // your image (with text inside)

// --- Define Custom Color Palette ---
const PRIMARY_RED = "#EC3338";        // Title and Primary Accent Color
const ACCENT_BLACK = "#000000";       // Button BG, Image Layer Accent
const TEXT_COLOR = "#333333";         // Dark text for contrast
const LIGHT_CONTRAST = "#FFFFFF";     // Button Text Color

// Define the Gradient Stops
// Starting color (close to #FFC991)
const GRADIENT_START = "#FFD9A8"; 
// Ending color (soft white/cream)
const GRADIENT_END = "#FFFFFF";   

const SchoolUniformFabrics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true,
      easing: "cubic-bezier(0.65, 0.05, 0.36, 1)", 
    });
  }, []);

  return (
    <section
      className="py-20 px-6 md:px-16 overflow-hidden"
      // ✅ APPLY GRADIENT BACKGROUND
      style={{ 
          background: `linear-gradient(145deg, ${GRADIENT_START} 0%, ${GRADIENT_END} 100%)` 
      }} 
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE — PREMIUM SOFT CIRCLE GLOW DESIGN */}
<div
  className="relative w-full md:w-5/12 flex items-center justify-center h-[550px]"
  data-aos="fade-right"
>

  {/* 🔵 Soft Circle Glow Behind Image */}
  <div
    className="absolute w-80 h-80 rounded-full opacity-40 blur-3xl"
    style={{
      background: "radial-gradient(circle, #EC3338 0%, #FFC991 100%)",
      top: "15%",
      left: "5%"
    }}
  ></div>

  {/* 📸 MAIN IMAGE CARD */}
  <div className="relative w-100 h-[420px] rounded-3xl overflow-hidden shadow-2xl
   bg-white z-10 shadow-red-300">
    <img
      src={fabricImg}
      alt="Premium Fabrics"
      className="w-full h-full object-cover"
    />

    {/* Label Tag */}
    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 text-white text-xs rounded-full shadow">
      Premium Fabrics
    </div>
  </div>
</div>


        {/* RIGHT SIDE: PREMIUM CONTENT BLOCK */}
        <div
          className="w-full md:w-7/12 text-left"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-poppins"
            style={{ color: PRIMARY_RED }} 
          >
            Sourcing <span style={{ color: ACCENT_BLACK }}>Premium</span> School Uniform Fabrics
          </h2>

          <div className="space-y-6 text-lg" style={{ color: TEXT_COLOR }}>
            
            {/* Feature 1: Performance */}
            <div className="flex items-start gap-4 font-inter text-sm md:text-lg">
              <Leaf className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: PRIMARY_RED }} />
              <p>
                Uniform fabric is not just about looks – it’s about how it feels and
                **performs daily**. That’s why KLM prioritizes premium woven fabrics,
                sourced from **trusted textile centers** across India, ensuring superior quality and durability.
              </p>
            </div>
            
            {/* Feature 2: Safety & Certification */}
            <div className="flex items-start gap-4 font-inter text-sm md:text-lg">
              <ShieldCheck className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: PRIMARY_RED }} />
              <p>
                We ensure each fabric batch meets global standards for **skin safety** and comfort. With certifications like **OEKO-TEX®**, our materials are
                tested to be non-toxic, breathable, and allergy-free – ideal for
                all-day wear in school environments.
              </p>
            </div>
            
            {/* Feature 3: Custom Sourcing */}
            <div className="flex items-start gap-4 font-inter text-sm md:text-lg">
              <Factory className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: PRIMARY_RED }} />
              <p>
                From consistent **dye matching** to tailored textures, we offer a dedicated fabric
                sourcing service that aligns perfectly with your institution’s
                uniform needs – combining quality, comfort, and **institutional care**.
              </p>
            </div>
          </div>

          {/* Premium Button */}
          <button
            className="mt-10 font-bold py-4 px-6 rounded-md transition-all duration-300 transform 
                       shadow-xl hover:scale-105 text-sm md:text-lg"
            style={{ 
                backgroundColor: ACCENT_BLACK, 
                color: LIGHT_CONTRAST,       
                boxShadow: `0 8px 15px rgba(0, 0, 0, 0.4)`
            }}
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            SOURCING CERTIFIED, SKIN-FRIENDLY TEXTILES
          </button>
        </div>
      </div>
    </section>
  );
};

export default SchoolUniformFabrics;