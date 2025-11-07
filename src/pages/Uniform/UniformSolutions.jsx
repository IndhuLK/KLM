import React, { useEffect, useState } from "react";

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

// Mock AOS initializer for the Canvas environment
const initAOS = () => console.log("AOS Initialized (Mock)");

const UniformSolutions = () => {
  const testimonials = [
    {
      quote:
        "KLM's uniform quality is unmatched. The fabric durability significantly reduced replacements throughout the school year. Their reliable delivery made the back-to-school process seamless.",
      name: "Dr. L. Karthikeyan",
      title: "Principal, St. Jude's International School",
      color: "#2b4a91",
    },
    {
      quote:
        "We were looking for a manufacturer who could handle specific design requirements with low minimum order quantities. KLM provided excellent personalized service with perfect finishing.",
      name: "Sonia M.",
      title: "Procurement Head, City Public Schools Group",
      color: "#34d399",
    },
    {
      quote:
        "The partnership with KLM has been a major asset. Their transparent practices and consistent quality control ensure we deliver the best product to parents.",
      name: "Aravind K.",
      title: "Owner, Retail Uniform Store (KLM Partner)",
      color: "#60a5fa",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    initAOS(); // Mock AOS
    const auto = setInterval(nextSlide, 6000);
    return () => clearInterval(auto);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-tr from-[#ffca93]
     via-white to-[#ffca93] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 
      gap-12 items-center">
        {/* LEFT CONTENT */}
        <div
          className="space-y-6 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h3 className="text-sm font-semibold text-[#EC3338] uppercase tracking-widest
          font-inter">
            Why School Uniforms Matter
          </h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight
          font-poppins">
            KLM’s Approach to Practical, Branded, and Reliable Uniform Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-lg mx-auto lg:mx-0 font-inter">
            Our uniforms represent unity, discipline, and identity — crafted to
            last, designed to impress, and delivered with reliability. Discover
            our trusted approach to quality apparel.
          </p>
        </div>
        {/* RIGHT SIDE - 3D DIAGONAL STACK TESTIMONIAL CAROUSEL */}
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
                className={`absolute w-[95%] sm:w-[85%] md:w-[70%] lg:w-[380px] bg-white
                   rounded-2xl shadow-2xl p-8 flex flex-col justify-between 
                   border-t-4 border-[${t.color}] backdrop-blur-md`}
              >
                <Quote className="w-8 h-8 text-[#EC3338] mb-4" />
                <p className="text-gray-700 text-base italic leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="mt-6 border-t border-[#EC3338] pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-[#EC3338] font-poppins">{t.name}</h4>
                      <p className="text-sm text-gray-500 font-inter">{t.title}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            isActive ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition z-40"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition z-40"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-200/20 rounded-full blur-3xl animate-bounce"></div>
    </section>
  );
};

export default UniformSolutions;
