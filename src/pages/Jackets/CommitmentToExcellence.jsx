import React from "react";
import {
  ShieldCheck,
  CloudRainWind,
  WashingMachine,
  Paintbrush,
  Shirt,
} from "lucide-react"; 

const CommitmentToExcellence = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Long-lasting Fabric",
      description:
        "Durable and resilient materials that stand up to daily school life and countless washes.",
      delay: "100",
    },
    {
      icon: CloudRainWind,
      title: "All-Weather Comfort",
      description:
        "Designed to provide optimal comfort in various climates, keeping students cozy or cool.",
      delay: "200",
    },
    {
      icon: WashingMachine,
      title: "Easy Wash & Quick Dry",
      description:
        "Low-maintenance fabrics that are simple to clean and dry rapidly, ready for the next school day.",
      delay: "300",
    },
    {
      icon: Paintbrush,
      title: "Custom School Shades Available",
      description:
        "Tailored to match your institution's specific colors and branding guidelines.",
      delay: "400",
    },
    {
      icon: Shirt,
      title: "Wrinkle Resistant",
      description:
        "Keeps uniforms looking crisp and neat throughout the day, minimizing ironing time.",
      delay: "500",
    },
  ];

  return (
    <section
      className="relative py-16 bg-white overflow-hidden"
    >
      {/* Blue Glow 
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#2563eb]/20 blur-3xl rounded-full"></div>*/}

      {/* Soft White Glow
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-white/20 blur-3xl rounded-full"></div> */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-black 
        bg-gradient-to-r from-[#2563eb] to-[#0b3a91]
        bg-clip-text text-transparent mb-4">
          Quality You Can Trust
        </h2>

        {/* Line */}
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#c9a759] mx-auto 
        mb-12 rounded-full"></div>

        {/* Paragraph */}
        <p className="text-gray-700 text-lg md:text-xl mb-20 max-w-4xl mx-auto
         leading-snug font-inter">
          Every Bulk Bridge jacket and coat is crafted with precision stitching, child-safe materials, 
          and uniform-friendly shades. We understand what schools need — dependable quality, 
          easy maintenance, and a smart look that lasts all season.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 md:p-8 
              bg-white hover:bg-[#0d1b3a] rounded-xl shadow-xl border border-[#2563eb]
              
              transition-all duration-500 transform hover:scale-[1.03] hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <item.icon className="w-10 h-10 text-[#c9a759] 
              group-hover:text-white transition-colors duration-300 mb-4" />

              <h3 className="text-lg font-bold text-black 
              group-hover:text-white/90 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 group-hover:text-gray-300 mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-20 px-8 py-3 text-lg font-semibold 
        bg-black  text-white rounded-full shadow-lg 
        hover:bg-black/90 transition-all duration-300 transform hover:-translate-y-0.5">
          Explore Our Premium Fabric Range →
        </button>
      </div>
    </section>
  );
};

export default CommitmentToExcellence;
