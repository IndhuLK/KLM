import React from "react";
import Slider from "react-slick";

import shoe1 from "/src/assets/shoe1.png";
import shoe2 from "/src/assets/shoe2.png";
import shoe3 from "/src/assets/shoe.png";

const slides = [
  {
    id: "01",
    img: shoe1,
    text: "We simplify procurement for institutions and ensure quality delivery at scale",
  },
  {
    id: "02",
    img: shoe2,
    text: "Designed for comfort and engineered for long-lasting durability for school use",
  },
  {
    id: "03",
    img: shoe3,
    text: "Trusted by institutions across India with reliable distribution at scale",
  },
];

const FootwearSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">

      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>

            {/* CARD CONTAINER */}
            <div className="relative bg-[#0746B0] rounded-2xl p-6 overflow-visible 
            shadow-xl min-h-[380px]">

              {/* BIG NUMBER */}
              <span className="absolute top-5 right-6
                text-[5rem] sm:text-[7rem] font-black text-white/10 select-none">
                {slide.id}
              </span>

              {/* SHOE IMAGE */}
              <div className="relative flex justify-center -mt-10">
                <img
                  src={slide.img}
                  alt="shoe"
                  className="
                    relative z-20 drop-shadow-2xl 
                    w-[280px] sm:w-[340px] md:w-[400px]
                    translate-x-[-10%]
                  "
                  style={{ overflow: "visible" }}
                />
              </div>

              

              {/* TEXT */}
              <p className="text-white mt-4 text-center text-sm sm:text-base 
              leading-relaxed px-4">
                {slide.text}
              </p>

            </div>

          </div>
        ))}
      </Slider>

      {/* Custom dots style */}
      <style>{`
        .custom-dots {
          position: relative;
          bottom: -15px;
        }

        .custom-dots li button::before {
          font-size: 10px;
          color: #999;
          opacity: 0.5;
        }

        .custom-dots li.slick-active button::before {
          color: #2563eb !important;
          opacity: 1 !important;
        }
      `}</style>

    </div>
  );
};

export default FootwearSlider;
