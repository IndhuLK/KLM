import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Handshake, ShieldCheck, Truck } from "lucide-react";
import logoFallback from "/src/assets/certi.png"

const BrandCertification = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const features = [
    {
      icon: <Handshake className="w-8 h-8 " />,
      title: "Partnered with Trusted Brands",
      desc: "We collaborate with Reebok, Wildcraft, Campus, and Green Sole to provide stylish, durable, and purpose-driven products for school and institutional needs.",
      delay: 100,
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Certified for Safety & Sustainability",
      desc: "Our products are sourced from partners certified under OEKO-TEX®, GOTS, Organic Blend, European Flax, Global Recycled Standard, and more.",
      delay: 200,
    },
    {
      icon: <Truck className="w-8 h-8 " />,
      title: "Efficient & Ethical Delivery",
      desc: "With reliable logistics, we ensure that quality-certified apparel and accessories are delivered smoothly and consistently to institutions nationwide.",
      delay: 300,
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* subtle top wave - keep orange */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none 
      rotate-180 pointer-events-none">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M1200 120L0 0v120h1200z" fill="#c9a759" fillOpacity="2"></path>
        </svg>
      </div>

      {/* Heading */}
      <div className="text-center mb-16 px-6" data-aos="fade-down">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2563eb]
         tracking-tight font-poppins">
          Brand & Certification Partnerships
        </h2>

        <p className="mt-4 text-base sm:text-lg md:text-2xl font-semibold text-gray-600 font-inter">
          Quality Backed by <span className="text-[#c9a759]">Globally Recognized Labels</span>
        </p>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((item, i) => (
          <article
            key={i}
            data-aos="fade-up"
            data-aos-delay={item.delay}
            className="relative   p-8 
            text-center ">
            {/* Keep orange circle */}
            <div className="absolute inset-x-0 -top-8 flex justify-center">
              <div className="bg-[#c9a759] text-white p-4 rounded-full shadow-lg 
              transition-transform duration-500">
                {item.icon}
              </div>
            </div>

            <h4 className="mt-8 font-bold text-xl text-[#2563eb] font-play transition-colors duration-300">
              {item.title}
            </h4>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3 font-inter">
              {item.desc}
            </p>

            {/* underline on hover → Blue */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 
            h-[3px] bg-[#2563eb] transition-all duration-500 rounded-full"></div>
          </article>
        ))}
      </div>

      {/* Certification Image */}
      <div className="flex justify-center mt-16" data-aos="zoom-in-up" data-aos-delay="400">
        <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl p-6 
        overflow-hidden group max-w-[920px] w-full">
          <img
            src={logoFallback}
            alt="Certifications"
            className="w-full object-contain h-auto transition-transform duration-700"
          />
        </div>
      </div>

      {/* Decorative bubbles — Blue + Gold */}
      <div className="absolute -bottom-10 left-10 w-20 h-20 bg-[#2563eb33] rounded-full blur-2xl"></div>
      <div className="absolute top-10 right-16 w-32 h-32 bg-[#c9a75933] rounded-full blur-3xl"></div>
    </section>
  );
};

export default BrandCertification;
