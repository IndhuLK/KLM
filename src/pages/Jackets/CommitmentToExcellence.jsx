import React from "react";
import {
  ShieldCheck, // For Long-lasting Fabric (implies protection, durability)
  CloudRainWind, // For All-Weather Comfort (more specific than just Wind)
  WashingMachine, // For Easy Wash & Quick Dry
  Paintbrush, // For Custom School Shades Available (implies artistic/customization)
  Shirt, // For Wrinkle Resistant (already good, represents garment)
  // No longer using Zap, Star, Award, Handshake, Layers, Ruler as per your specific content
} from "lucide-react"; 

const CommitmentToExcellence = () => {
  const features = [
    {
      icon: ShieldCheck, // Changed: from Layers to ShieldCheck for Long-lasting Fabric
      title: "Long-lasting Fabric",
      description:
        "Durable and resilient materials that stand up to daily school life and countless washes.",
      delay: "100",
    },
    {
      icon: CloudRainWind, // Changed: from Wind to CloudRainWind for All-Weather Comfort
      title: "All-Weather Comfort",
      description:
        "Designed to provide optimal comfort in various climates, keeping students cozy or cool.",
      delay: "200",
    },
    {
      icon: WashingMachine, // Changed: from Ruler to WashingMachine for Easy Wash & Quick Dry
      title: "Easy Wash & Quick Dry",
      description:
        "Low-maintenance fabrics that are simple to clean and dry rapidly, ready for the next school day.",
      delay: "300",
    },
    {
      icon: Paintbrush, // Changed: from Award to Paintbrush for Custom School Shades Available
      title: "Custom School Shades Available",
      description:
        "Tailored to match your institution's specific colors and branding guidelines.",
      delay: "400",
    },
    {
      icon: Shirt, // Kept Shirt icon for Wrinkle Resistant
      title: "Wrinkle Resistant",
      description:
        "Keeps uniforms looking crisp and neat throughout the day, minimizing ironing time.",
      delay: "500",
    },
  ];

  return (
    // Black background with subtle gradient for a premium/dark theme feel
    <section
      className="relative py-20 md:py-32 bg-gray-900 
    bg-gradient-to-l from-[#ffca93] via-[#eff3fa] 
    to-[#f3d6b8] overflow-hidden"
    >
      {/* 🔴 Brand Red Accent Overlay (Top Left Corner) */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#EC3338] opacity-10 filter blur-3xl rounded-full"></div>

      {/* ⚪ Subtle Light Accent (Bottom Right Corner) */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-white opacity-5 filter blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center z-10">
        {/* Main Heading - Focused on Jackets & Coats Quality */}
        <h2 className="text-4xl md:text-6xl font-black text-[#EC3338] mb-4">
          Quality You Can Trust
        </h2>

        {/* Subtitle/Decorative Line */}
        <div
          className="w-24 h-1.5 bg-[#EC3338] mx-auto mb-12 rounded-full transform 
        scale-x-125 font-poppins"
        ></div>

        {/* Descriptive Paragraph - Focused on product superiority */}
        <p
          className="text-gray-700 text-lg md:text-2xl mb-20 max-w-4xl mx-auto 
        leading-snug font-inter"
        >
          Every KLM jacket and coat is crafted with precision stitching,
          child-safe materials, and uniform-friendly shades. We understand what
          schools need — dependable quality, easy maintenance, and a smart look
          that lasts all season.
        </p>

        {/* Super Layout Structure: Featured Grid with Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 md:p-8 bg-white hover:bg-gray-900 
              rounded-xl shadow-xl border border-[#EC3338] 
                         transition-all duration-500 transform hover:scale-[1.03] hover:shadow-2xl
                          hover:border-[#EC3338]"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <item.icon className="w-10 h-10 text-[#EC3338] group-hover:text-white transition-colors duration-300 mb-4" />

              <h3 className="text-lg font-bold text-black mb-2 group-hover:text-white/90 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <button className="mt-20 px-8 py-3 text-lg font-semibold bg-[#EC3338] text-white rounded-full shadow-lg hover:bg-[#b70b0b] transition-all duration-300 transform hover:-translate-y-0.5">
          Explore Our Premium Fabric Range →
        </button>
      </div>
    </section>
  );
};

export default CommitmentToExcellence;