import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { ArrowRight, Shirt, Wind, Ruler } from "lucide-react";
import uniform from "/src/assets/Nursery.png";

const NurseryUniform = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6">
      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 z-10">
        {/* LEFT SIDE — IMAGE ONLY */}
        <div className="relative w-full md:w-1/2" data-aos="fade-right">
          <img
            src={uniform}
            className="w-full h-[550px] object-contain rounded-xl" // Clean image
          />

          {/* Bottom Label */}
          <div
            className="absolute -bottom-6 left-0 bg-black text-white px-6 py-3 
            rounded-full shadow-md flex items-center space-x-2"
            data-aos="fade-up"
          >
            <p className="font-medium text-sm md:text-base">
              Comfortable, Practical, and Easy-to-Wear
            </p>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="md:w-1/2 text-gray-800" data-aos="fade-left">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Nursery Uniform –{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb]
             to-[#c9a759] font-poppins"
            >
              Boys & Girls
            </span>
          </h2>

          {/* Content Box */}
          <div
            className="space-y-6 text-sm md:text-base leading-relaxed font-inter
            bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md border border-[#2563eb]/10"
          >
            {/* 1 */}
            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="p-3 rounded-xl bg-[#2563eb]/10 text-[#2563eb]">
                <Shirt size={22} />
              </div>
              <p>
                For our youngest students, comfort and practicality are
                paramount. Bulk Bridge nursery uniform range supports active
                play and easy wear.
              </p>
            </div>

            {/* 2 */}
            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="p-3 rounded-xl bg-[#2563eb]/10 text-[#2563eb]">
                <Wind size={22} />
              </div>
              <p>
                Soft, breathable fabrics in polo shirts and T-shirts ensure
                all-day comfort.
              </p>
            </div>

            {/* 3 */}
            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="p-3 rounded-xl bg-[#2563eb]/10 text-[#2563eb]">
                <Ruler size={22} />
              </div>
              <p>
                Flexible waistbands in shorts, skirts, and pinafores support
                growth and movement.
              </p>
            </div>
          </div>

          {/* Decorative Line */}
          <motion.div
            className="mt-8 w-28 h-1 bg-[#c9a759] rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default NurseryUniform;
