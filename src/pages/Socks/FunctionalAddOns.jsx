import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Backpack, Check, Sun, Zap, CornerDownRight } from "lucide-react";

const FunctionalAddOns = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true, offset: 120 });
  }, []);

  const ACCENT_RED = "#EC3338"; // ✅ define your accent color here

  return (
    <section className="max-w-7xl mx-auto p-6 md:p-10 font-poppins overflow-hidden">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, #EC3338 0%, rgba(236,51,56,0.1) 50%, #ffd3a0 100%)",
          }}
        />
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-20 bg-[#EC3338]" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 bg-[#0F327D]" />

        {/* Overlay pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-1/2 md:right-[40%] w-1/2 transform skew-x-[-12deg] origin-top-right"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.08))",
            mixBlendMode: "overlay",
          }}
        />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT TITLE AREA */}
          <div
            className="p-8 md:p-12 flex items-center justify-center md:justify-start"
            data-aos="fade-right"
          >
            <div className="relative z-10">
              <div className="text-left">
                <h2 className="leading-none font-poppins text-4xl md:text-6xl lg:text-7xl 
                font-extrabold text-white drop-shadow-md ">
                  <span className="block">FUNCTIONAL</span>
                  <span className="block">ADD-</span>
                  <span className="block">ONS THAT</span>
                  <span className="block">COMPLETE THE</span>
                  <span className="block">LOOK</span>
                </h2>
                <p className="mt-6 max-w-md text-sm md:text-base text-black/90 font-medium">
                  Accessories designed to finish the uniform — practical,
                  durable, and crafted to strengthen identity.
                </p>
              </div>
              <div className="mt-8 h-1 w-40 rounded-full bg-gradient-to-r from-[#EC3338] to-[#FF8A8A] shadow-sm" />
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="p-8 md:p-12" data-aos="fade-left">
            <div className="space-y-6">
              {/* Card 1 */}
              <article
                className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="80"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-[#EC3338]/10 text-[#EC3338] flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm md:text-base leading-relaxed">
                      Uniform accessories like socks, caps, belts, and bags play
                      an important role in presenting a cohesive and polished
                      look for students. KLM's accessory line is crafted for
                      utility, durability, and branding.
                    </p>
                  </div>
                </div>
              </article>

              {/* Card 2 */}
              <article
                className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="160"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-[#0F327D]/10 text-[#0F327D] flex items-center justify-center">
                      <Sun className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm md:text-base leading-relaxed">
                      Our school caps are breathable, sun-safe, and available
                      with logo embroidery for brand visibility. Belts are
                      designed to last, with adjustable fits and standard school
                      colors.
                    </p>
                  </div>
                </div>
              </article>

              {/* Card 3 */}
              <article
                className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="240"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-[#EC3338]/10 text-[#EC3338] flex items-center justify-center">
                      <Backpack className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm md:text-base leading-relaxed">
                      School bags from KLM balance comfort and capacity —
                      featuring reinforced stitching, padded support, and
                      customizable logo printing. Every item is designed to
                      match school identity while serving student needs
                      efficiently.
                    </p>
                  </div>
                </div>
              </article>

              {/* CTA Row */}
              <div
                className="mt-8 flex items-center justify-between bg-black text-white px-6 py-3 rounded-full shadow-lg"
                data-aos="zoom-in"
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-white" />
                  <p className="text-base font-medium">
                    Utility • Durability • Branding
                  </p>
                </div>
                <CornerDownRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes floatSoft {
          0% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
          100% { transform: translateY(0px); }
        }
        .float-soft { animation: floatSoft 6s ease-in-out infinite; }
        .font-play { font-family: 'Poppins', system-ui, sans-serif; }
      `}</style>
    </section>
  );
};

export default FunctionalAddOns;
