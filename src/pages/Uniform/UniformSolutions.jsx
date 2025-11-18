import sample1 from "/src/assets/rocket.png";
import sample2 from "/src/assets/goal.png";
import sample3 from "/src/assets/light.png";

const UniformSolutions = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      
      {/* TOP SMALL TITLE */}
      <h3 className="text-center text-sm font-semibold text-[#2563eb] tracking-widest 
      uppercase mb-3">
        Why School Uniforms Matter
      </h3>

      {/* MAIN HEADING */}
      <h2 className="text-center text-2xl md:text-4xl font-extrabold text-black font-poppins
       mb-12 max-w-2xl mx-auto">
        Bulk Bridge’s Approach to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb]
             to-[#c9a759] font-poppins">Practical, Branded, and Reliable </span>  Uniform Solutions
      </h2>

      {/* 3-COLUMN WRAPPER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-20 place-items-center">

        {/* LEFT CARD */}
        <div className="relative bg-[#F7CDBA] p-8 pt-16 
        w-full max-w-sm text-center border border-gray-200">

          {/* FLOATING IMAGE */}
          <img 
            src={sample1}
            alt="Legacy Image"
            className="absolute -top-14 left-1/2 -translate-x-1/2 w-24 h-24 object-contain"
          />

          <h3 className="text-xl font-bold mb-3 text-black font-poppins">
            Established Legacy <br /> & Trusted Brands
          </h3>

          <p className="text-gray-700 leading-relaxed text-sm font-inter mb-10">
            Founded in 2015, Bulk Bridge Apparel has built a reputation for quality and trust. 
            Our partners include Reebok, Wildcraft, Campus, Green Sole, and more.
          </p>
        </div>

        {/* CENTER CARD */}
        <div className="relative bg-[#073597] p-8 pt-30 
         w-full max-w-sm text-center border border-gray-200 text-white">

          {/* FLOATING IMAGE */}
          <img 
            src={sample2}
            alt="Institutional Image"
            className="absolute -top-18 left-1/2 -translate-x-1/2 w-38 h-38 object-contain"
          />

          <h3 className="text-xl font-bold mb-4 font-poppins ">
            Tailored Institutional Solutions
          </h3>

          <p className=" leading-relaxed text-sm font-inter mb-10">
            We specialize in Customized T-Shirts, Corporate Gifts, Institutional Uniforms,
            School Shoes & Bags — delivered with professionalism and scale through BulkBridge.co.in.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="relative bg-[#F7CDBA] p-8 pt-16 w-full
         max-w-sm text-center border border-gray-200">

          {/* FLOATING IMAGE */}
          <img 
            src={sample3}
            alt="Production Image"
            className="absolute -top-14 left-1/2 -translate-x-1/2 w-24 h-24 object-contain"
          />

          <h3 className="text-xl font-bold mb-3 text-black font-poppins">
            From Concept <br /> to Production
          </h3>

          <p className="text-gray-700 leading-relaxed text-sm font-inter mb-10">
            With direct ties to India's leading garment manufacturers, we execute every
            order with clarity — from tech pack creation to final delivery.
          </p>
        </div>

      </div>
    </section>
  );
};

export default UniformSolutions;
