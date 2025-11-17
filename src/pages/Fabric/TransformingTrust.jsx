import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TransformingTrust = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="py-12 px-6 md:px-20"
      style={{
        background: "linear-gradient(to top, #c9a75933, #ffffff, #2563eb22)",
      }}
    >
      {/* Blue Header */}
      <div
        className="text-white py-4 px-8 md:px-16 text-center"
        style={{ backgroundColor: "#2563eb" }}
        data-aos="fade-down"
      >
        <h2 className="text-2xl md:text-5xl font-semibold font-poppins">
          Transforming trust into
        </h2>
      </div>

      {/* White Section */}
      <div
        className="md:py-3 py-2 px-8 md:px-16 text-center"
        data-aos="fade-up"
      >
        {/* Subheading */}
        <h3 className="text-2xl md:text-5xl font-bold text-black mb-6 font-poppins">
          reality for over{" "}
          <span className="font-bold" style={{ color: "#c9a759" }}>
            15+ years
          </span>
        </h3>

        {/* Bullet Points */}
        <ul className="list-disc list-outside text-gray-800 text-base md:text-lg
         leading-relaxed space-y-4 pl-6 text-justify font-inter">
          <li>
            Bulk Bridge has steadily grown into a benchmark in the institutional apparel
            and gifting space. With over 9 years of experience and associations
            with top-tier brands like Reebok, Wildcraft, Campus, and Green Sole,
            our offerings are both premium and scalable.
          </li>

          <li>
            What sets us apart is our complete ecosystem — from tech pack
            development to production and delivery — managed seamlessly via{" "}
            <span
              className="font-semibold"
              style={{ color: "#2563eb" }}
            >
              BulkBridge.co.in
            </span>
            . This process ensures every garment and product matches institutional
            needs with consistent execution.
          </li>

          <li>
            Our portfolio spans customized T-shirts, branded corporate gifts,
            institutional uniforms, school footwear, and bags — all with a promise
            of elegance and dependability.
          </li>
        </ul>

        {/* Contact Button */}
        <div
          className="flex justify-center mt-10"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <button
            className="text-white font-semibold cursor-pointer py-2 px-10 bg-black
            rounded-full transition-all duration-300 shadow-md font-poppins"
           
          >
            CONTACT
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformingTrust;
