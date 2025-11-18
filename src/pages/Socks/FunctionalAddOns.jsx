import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Backpack, Check, Sun, Zap, CornerDownRight } from "lucide-react";

const FunctionalAddOns = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true, offset: 120 });
  }, []);

  return (
    <section className="w-full mx-auto font-poppins overflow-hidden">
      <div className="relative overflow-hidden bg-white">

        {/* BACKGROUND GRADIENT */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "linear-gradient(120deg, #eef3ff 0%, white 50%, #faf5e6 100%)",
          }}
        />

        {/* SOFT GLOWS */}
        <div className="absolute -top-20 -left-20 w-52 h-52 md:w-72 md:h-72 rounded-full blur-3xl opacity-20 bg-[#2563eb]" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 bg-[#c9a759]" />

        {/* MAIN GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 z-10">

          {/* LEFT TITLE SECTION */}
          <div className="p-6 sm:p-8 md:px-10 flex items-center">
            <div>
              <h2 className="leading-tight text-3xl sm:text-4xl md:text-5xl 
              font-extrabold text-[#1a1a1a] space-y-1 ">
                <span className="block">FUNCTIONAL ADD-</span>
                
                <span className="block">ONS THAT</span>
                <span className="block">COMPLETE THE</span>
                <span className="block text-[#2563eb]">LOOK</span>
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#444] max-w-md font-medium">
                Accessories designed to finish the uniform — practical,
                durable, and crafted to strengthen identity.
              </p>

              <div className="mt-5 sm:mt-8 h-1 w-32 sm:w-40 rounded-full bg-gradient-to-r from-[#2563eb] to-[#c9a759]" />
            </div>
          </div>

          {/* RIGHT POINTS SECTION */}
          <div className="p-6 sm:p-8 md:p-12 space-y-8">

            {/* POINT 1 */}
            <div className="flex items-start gap-3 sm:gap-4" data-aos="fade-up">
              <Check className="w-7 h-7 sm:w-10 sm:h-10 mt-1 sm:mt-2 text-blue-600" />
              <p className="text-[#1a1a1a] text-sm sm:text-base leading-relaxed">
                Uniform accessories like socks, caps, belts, and bags play an
                important role in presenting a cohesive and polished look for
                students.
              </p>
            </div>

            {/* POINT 2 */}
            <div
              className="flex items-start gap-3 sm:gap-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <Sun className="w-7 h-7 sm:w-10 sm:h-10 text-blue-600" />
              <p className="text-[#1a1a1a] text-sm sm:text-base leading-relaxed">
                Our school caps are breathable and sun-safe with logo embroidery
                options. Belts are durable and available in standard school
                colors.
              </p>
            </div>

            {/* POINT 3 */}
            <div
              className="flex items-start gap-3 sm:gap-4"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <Backpack className="w-7 h-7 sm:w-10 sm:h-10 text-blue-600" />
              <p className="text-[#1a1a1a] text-sm sm:text-base leading-relaxed">
                School bags balance comfort and capacity — with reinforced
                stitching and customizable printing to match school identity.
              </p>
            </div>

            {/* CTA */}
            <div
              className="mt-6 sm:mt-8 flex items-center justify-between bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3
              rounded-full shadow-lg gap-3"
              data-aos="zoom-in"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-sm sm:text-base font-medium">
                  Utility • Durability • Branding
                </p>
              </div>
              <CornerDownRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalAddOns;
