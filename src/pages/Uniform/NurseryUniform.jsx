import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { ArrowRight, Shirt, Wind, Ruler } from "lucide-react";
import uniform from "/src/assets/Uni1.jpg";

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
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#fae5ce]
     via-[#f8eeee] to-[#ffca93] py-24 px-6"
    >
      {/* Soft floating background shapes */}
      <div
        className="absolute top-0 left-0 w-72 h-72 bg-[#EC3338]/10 rounded-full blur-3xl animate-pulse"
        data-aos="fade-right"
      ></div>
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#EC3338]/5 rounded-full blur-3xl animate-pulse"
        data-aos="fade-left"
      ></div>

      {/* Main Container */}
      <div
        className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center
       md:items-start gap-12 z-10"
      >
        {/* Left Image Section */}
        <div
          className="relative w-full md:w-1/2 group"
          data-aos="fade-right"
        >
          <div
            className="absolute -top-6 -left-6 w-24 h-24 bg-[#EC3338]/10 rounded-full 
          blur-lg"
          ></div>
          <img
            src={uniform}
            className="rounded-3xl shadow-xl w-full h-[450px] transform 
            group-hover:scale-105 transition duration-500 object-contain"
          />
          <div
            className="absolute -bottom-6 -right-4 bg-black text-white px-6 py-3 
            rounded-full shadow-md flex items-center space-x-2"
            data-aos="fade-up"
          >
            <p className="font-medium text-sm md:text-base">
              Comfortable, Practical, and Easy-to-Wear
            </p>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* Right Content Section */}
        <div
          className="md:w-1/2 text-gray-800"
          data-aos="fade-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#EC3338] mb-6 font-poppins">
            Nursery Uniform – Boys & Girls
          </h2>
          <div
            className="space-y-6 text-sm md:text-base leading-relaxed font-inter
          bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md border border-[#EC3338]/10"
          >
            {/* Point 1 */}
            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="p-3 rounded-xl bg-[#EC3338]/10 text-[#EC3338]">
                <Shirt size={22} />
              </div>
              <p>
                For our youngest students, comfort and practicality are
                paramount. KLM’s nursery uniform range supports active play and
                easy wear — perfect for classroom adventures and morning
                routines.
              </p>
            </div>

            {/* Point 2 */}
            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="p-3 rounded-xl bg-[#EC3338]/10 text-[#EC3338]">
                <Wind size={22} />
              </div>
              <p>
                We use soft, breathable fabrics in polo shirts and T-shirts for
                all-day comfort. Sweaters and sweatshirts are perfect for
                layering and can be personalized with school logos.
              </p>
            </div>

            {/* Point 3 */}
            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="p-3 rounded-xl bg-[#EC3338]/10 text-[#EC3338]">
                <Ruler size={22} />
              </div>
              <p>
                Our trousers, shorts, skirts, and pinafores feature elastic or
                adjustable waistbands for flexibility and growth. The color
                palette aligns with school standards for a unified, neat look.
              </p>
            </div>
          </div>

          {/* Decorative Line (motion only here) */}
          <motion.div
            className="mt-8 w-28 h-1 bg-[#EC3338] rounded-full"
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
