import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShieldCheck, Leaf, Factory } from "lucide-react"; 
import fabricImg from "/src/assets/fabric.png";

// NEW BLUE & NEUTRAL COLORS
const PRIMARY_BLUE = "#2563eb";    
const ACCENT_BLACK = "#000000";    
const TEXT_GRAY = "#444444";       
const BUTTON_TEXT = "#FFFFFF";     

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
      className="py-20 px-6 md:px-16 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT IMAGE BLOCK */}
        <div
          className="relative w-full md:w-5/12 flex items-center justify-center h-[550px]"
          data-aos="fade-right"
        >
          {/* Soft blue glow */}
          <div
            className="absolute w-80 h-80 rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, #2563eb30 0%, #dbeafe 100%)",
              top: "15%",
              left: "5%"
            }}
          ></div>

          {/* Main Image */}
          <div className="relative w-100 h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-white z-10">
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

        {/* RIGHT CONTENT */}
        <div
          className="w-full md:w-7/12 text-left"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-poppins"
            style={{ color: ACCENT_BLACK }}
          >
            Sourcing <span style={{ color: PRIMARY_BLUE }}>Premium</span> School Uniform Fabrics
          </h2>

          <div className="space-y-6 text-lg" style={{ color: TEXT_GRAY }}>
            
            {/* Feature 1 */}
            <div className="flex items-start gap-4 font-inter text-sm md:text-lg">
              <Leaf className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: PRIMARY_BLUE }} />
              <p>
                Uniform fabric isn’t just about looks – it’s about how it feels and 
                performs daily. That’s why Bulk Bridge prioritizes premium woven fabrics,
                sourced from trusted textile centers across India.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-start gap-4 font-inter text-sm md:text-lg">
              <ShieldCheck className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: PRIMARY_BLUE }} />
              <p>
                We ensure each batch meets global standards for skin safety and comfort.
                With certifications like OEKO-TEX®, our materials are tested to be 
                non-toxic and breathable.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex items-start gap-4 font-inter text-sm md:text-lg">
              <Factory className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: PRIMARY_BLUE }} />
              <p>
                From dye matching to special textures, we offer custom sourcing
                tailored to your institution’s uniform requirements.
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            className="mt-10 font-bold py-2 px-6 rounded-md transition-all duration-300 transform 
                       shadow-xl text-sm md:text-base"
            style={{ 
                backgroundColor: ACCENT_BLACK,
                color: BUTTON_TEXT,
                boxShadow: `0 8px 15px rgba(0, 0, 0, 0.3)`
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
