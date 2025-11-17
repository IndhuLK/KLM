import React, { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const initAOS = () => console.log("AOS Initialized (Mock)");

const UniformSolutions = () => {
  const testimonials = [
    {
      quote:
        "Bulk Bridge uniform quality is unmatched. The fabric durability significantly reduced replacements throughout the school year. Their reliable delivery made the back-to-school process seamless.",
      name: "Dr. L. Karthikeyan",
      title: "Principal, St. Jude's International School",
      color: "#2563eb", // 🔵 BLUE
    },
    {
      quote:
        "We were looking for a manufacturer who could handle specific design requirements with low minimum order quantities. Bulk Bridge provided excellent personalized service with perfect finishing.",
      name: "Sonia M.",
      title: "Procurement Head, City Public Schools Group",
      color: "#c9a759", // 🟡 GOLD
    },
    {
      quote:
        "The partnership with Bluk Bridge has been a major asset. Their transparent practices and consistent quality control ensure we deliver the best product to parents.",
      name: "Aravind K.",
      title: "Owner, Retail Uniform Store (KLM Partner)",
      color: "#2563eb", // 🔵 BLUE
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    initAOS();
    const auto = setInterval(nextSlide, 6000);
    return () => clearInterval(auto);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-tr from-[#6cb7e933] via-white to-[#7dc7e433] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div
          className="space-y-6 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h3 className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest
          font-inter">
            Why School Uniforms Matter
          </h3>

          <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
            Bluk Bridge Approach to Practical, Branded, and Reliable Uniform
            Solutions
          </h2>

          <p className="text-gray-700 text-lg max-w-lg mx-auto lg:mx-0 font-inter">
            Our uniforms represent unity, discipline, and identity — crafted to
            last, designed to impress, and delivered with reliability.
          </p>
        </div>

        {/* RIGHT — STACKED TESTIMONIAL CARDS */}
        <div
          className="relative flex justify-center items-center w-full h-[420px] md:h-[450px]"
          data-aos="fade-left"
        >
          {testimonials.map((t, index) => {
            const offset = index - activeIndex;
            const isActive = offset === 0;

            const style = {
              transform: `translate(${offset * 30}px, ${offset * 20}px) scale(${
                isActive ? 1.05 : 0.9
              }) rotate(${offset * 4}deg)`,
              zIndex: testimonials.length - Math.abs(offset),
              opacity: Math.abs(offset) > 2 ? 0 : 1,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            };

            return (
              <div
                key={index}
                style={style}
                className={`absolute w-[95%] sm:w-[85%] md:w-[70%] lg:w-[380px] 
                bg-white rounded-2xl shadow-2xl p-8 flex flex-col justify-between 
                border-t-4 border-[${t.color}] backdrop-blur-md`}
              >
                <Quote className="w-8 h-8 text-[#2563eb] mb-4" />

                <p className="text-gray-700 text-base italic leading-relaxed">
                  “{t.quote}”
                </p>

                <div className="mt-6 border-t border-[#c9a759] pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-[#2563eb] font-poppins">{t.name}</h4>
                      <p className="text-sm text-gray-500 font-inter">{t.title}</p>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            isActive ? "text-[#f5e506]" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      {/* DECORATIVE BUBBLES */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-[#2563eb22] rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#c9a75922] rounded-full blur-3xl"></div>
    </section>
  );
};

export default UniformSolutions;
