import React, { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const initAOS = () => console.log("AOS Initialized (Mock)");

const Review = () => {
  const testimonials = [
    {
      quote:
        "Bulk Bridge delivers premium school uniforms that balance comfort, durability, and professional appearance. Their stitching quality and color consistency remain intact even after long-term use.",
      name: "Aria K.",
      title: "Premium School Uniform Manufacturing",
      color: "#2563eb",
    },
    {
      quote:
        "Our jackets & coats are crafted for warmth, style, and durability. Bulk Bridge ensures perfect fitting and premium fabric quality, making them ideal for winter schoolwear and institutional needs.",
      name: "Raghav S.",
      title: "Winter Wear Production Unit",
      color: "#c9a759",
    },
    {
      quote:
        "Bulk Bridge provides high-quality caps and belts with custom branding options. Strong buckles, comfortable fits, and long-lasting materials make our accessories stand out.",
      name: "Sahana M.",
      title: "School Accessories Manufacturing",
      color: "#2563eb",
    },
    {
      quote:
        "From house sportswear to custom athletic sets, Bulk Bridge offers breathable, flexible, and performance-ready sports uniforms tailored for daily practice and competitions.",
      name: "Devi R.",
      title: "Activewear & Sports Apparel Division",
      color: "#c9a759",
    },
    {
      quote:
        "Premium school fabrics with perfect GSM, colorfastness, and shrink-resistance. Bulk Bridge supplies long-lasting materials for uniforms, sportswear, and winter clothing.",
      name: "Kavin R.",
      title: "Bulk Fabric Supply Unit",
      color: "#2563eb",
    },
    {
      quote:
        "Bulk Bridge is your trusted partner for all school, institutional, and custom apparel requirements. From design to delivery, we ensure consistent quality and reliable service.",
      name: "Meera T.",
      title: "Official Brand Communication",
      color: "#c9a759",
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
    <section className="relative py-10 bg-gradient-to-tr from-[#6cb7e933] 
    via-white to-[#7dc7e433] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2
       gap-12 items-center">
        {/* LEFT CONTENT */}
        <div
          className="space-y-6 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h3
            className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest
          font-inter"
          >
            School Uniform Excellence
          </h3>

          <h2 className="text-2xl md:text-5xl font-extrabold text-black leading-tight font-poppins">
            What Our Customers Say About Bulk Bridge
          </h2>

          <p className="text-gray-700 text-lg max-w-lg mx-auto lg:mx-0 font-inter">
            Trusted by schools, institutions, and apparel partners — our clients
            share their genuine experiences with Bulk Bridge’s quality, service,
            and commitment to delivering the best.
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
                      <h4 className="font-semibold text-[#2563eb] font-poppins">
                        {t.name}
                      </h4>
                      <p className="text-sm text-gray-500 font-inter">
                        {t.title}
                      </p>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 
            rounded-full shadow-lg hover:bg-gray-100 z-50"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 
            rounded-full shadow-lg hover:bg-gray-100 z-50"
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

export default Review;
