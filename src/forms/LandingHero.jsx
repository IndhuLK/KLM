import React from "react";
// Heroicons and Social Media Icon
import { TruckIcon, BoltIcon, CurrencyDollarIcon, CheckBadgeIcon,
     GlobeAltIcon, UsersIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; 
import { useState } from 'react';

// Use actual paths for your images
import Image1 from "/src/assets/Championlace/champ1.jpg" // Champion Lace Image 
import Image2 from "/src/assets/ChampionVelcro/champv1.jpg" // Champion Velcro Image
import social from "/src/assets/social.png" 


// --- Data for Sizing Chart (Used in the lower section) ---
const kidsSizes = [
    { us: '9C', age: '3-4 Years', cm: 15, euro: 25.5 },
    { us: '10C', age: '4-5 Years', cm: 16, euro: 26.5 },
    { us: '11C', age: '4-5 Years', cm: 17, euro: 27.5 },
    { us: '12C', age: '5-6 Years', cm: 18, euro: 29 },
    { us: '13C', age: '6-7 Years', cm: 19, euro: 30.5 },
    { us: '1', age: '7-8 Years', cm: 20, euro: 31.5 },
    { us: '2', age: '8-9 Years', cm: 21, euro: 32.5 },
    { us: '3', age: '9-10 Years', cm: 22, euro: 34 },
    { us: '4', age: '10-11 Years', cm: 23, euro: 35 },
    { us: '5', age: '11-12 Years', cm: 23.5, euro: 36.5 },
    { us: '6', age: '12-13 Years', cm: 24, euro: 38 },
];

const adultSizes = [
    { us: '7', cm: 25, euro: 39 },
    { us: '8', cm: 26, euro: 40.5 },
    { us: '9', cm: 27, euro: 42 },
    { us: '10', cm: 28, euro: 43 },
    { us: '11', cm: 29, euro: 44.5 },
    { us: '12', cm: 30, euro: 45.5 },
    { us: '13', cm: 31, euro: 47 },
    { us: '14', cm: 32, euro: 48.5 },
];

// Reusable Sizing Table Component (No change)
const SizingTable = ({ title, data, isKids }) => (
    <div className="mt-4 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
        <h4 className="text-base font-bold text-slate-800 p-3 bg-slate-50 border-b flex items-center">
            <GlobeAltIcon className="w-4 h-4 mr-2 text-indigo-600" />
            {title}
        </h4>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                    <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">US/India</th>
                        {isKids && <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Age</th>}
                        <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Length (cm)</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Euro</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                    {data.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-slate-900">{row.us}</td>
                            {isKids && <td className="px-3 py-2 whitespace-nowrap text-sm text-slate-700">{row.age}</td>}
                            <td className="px-3 py-2 whitespace-nowrap text-sm text-slate-700">{row.cm}</td>
                            <td className="px-3 py-2 whitespace-nowrap text-sm text-slate-700">{row.euro}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// Product Details Accordion (No change)
const ProductDetailsAccordion = () => {
    const details = [
        { 
            title: "Material & Build Quality", 
            content: "Upper: Premium Synthetic Leather and Mesh. Sole: Durable, non-marking TPR. Insole: Cushioned EVA foam for all-day comfort. Designed for maximum longevity and wear resistance in retail environments.",
            icon: CheckBadgeIcon
        },
        { 
            title: "Recommended Occasions", 
            content: "Ideal for daily wear, school uniforms, light sports activities, and casual outings. The robust design ensures they are suitable for active children and demanding use.",
            icon: UsersIcon
        },
        { 
            title: "Wholesale Packaging Details", 
            content: "Shoes are packed in individual branded boxes. Cartons typically contain 12 pairs (mix of sizes). Custom packaging options are available for large volume orders. Contact for full inventory sheet.",
            icon: TruckIcon
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-3 pt-6">
            <h3 className="text-xl font-bold text-slate-800 font-poppins">Additional Product Details</h3>
            {details.map((item, index) => (
                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                    <button
                        className="flex justify-between items-center w-full p-4 text-left font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition duration-150"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className='flex items-center font-inter'>
                            <item.icon className='w-5 h-5 mr-2 text-indigo-500' />
                            {item.title}
                        </span>
                        {openIndex === index ? <ChevronUpIcon className="w-5 h-5 text-indigo-500" /> : <ChevronDownIcon className="w-5 h-5 text-slate-400" />}
                    </button>
                    {openIndex === index && (
                        <div className="p-4 bg-white text-sm text-slate-600 border-t
 border-slate-200 font-inter">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

// NEW Component: Product Variety Showcase (1 image per product)
const ProductVarietyShowcase = () => {
    const products = [
        { name: "Champion Lace", img: Image1 },
        { name: "Champion Velcro", img: Image2 },
        // Use placeholder images for Prodigy until actual paths are provided
        { name: "Prodigy Lace", img: "https://images.unsplash.com/photo-1596707323136-24f4640d216d?fit=crop&w=300&h=200&q=80" }, 
        { name: "Prodigy Velcro", img: "https://images.unsplash.com/photo-1543632940-529a61e7127e?fit=crop&w=300&h=200&q=80" },
    ];

    return (
        <div className="space-y-4 pt-6 pb-4 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 font-poppins">Available Varieties</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center group">
                        <div className="h-20 w-full overflow-hidden rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition duration-300">
                            <img 
                                src={product.img} 
                                alt={product.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                        </div>
                        <p className="mt-2 text-xs font-semibold font-inter
                             text-slate-700 text-center">{product.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


const LandingHero = () => {
    // College-themed Placeholder Images (8 images)
    // Replace these with your actual image paths for a college setting!
    const collegeImages = [
        "/src/assets/Championlace/champ1.jpg", // 0: Main Campus View
        "/src/assets/Championlace/champ2.jpg", // 1: Students in hall
        "/src/assets/ChampionVelcro/champv1.jpg", // 2: Library
        "/src/assets/ChampionVelcro/champv2.jpg", // 3: Graduation (Tall)
        "/src/assets/Prodigylace/Prol1.jpg", // 4: Classroom (Wide)
        "/src/assets/Prodigylace/Prol2.jpg", // 5: Sports field (Wide)
        "/src/assets/ProdigyVelcro/Prov1.jpg", // 6: Campus walk
        "/src/assets/ProdigyVelcro/Prov3.jpg", // 7: Architecture (Tall)
    ];

    return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden"> 
      
      {/* WhatsApp Floating Icon (Fixed Position - no change) */}
      <a 
  href="https://wa.me/919363633009"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6  p-4 hover:scale-110 "
  aria-label="Contact us on WhatsApp"
>
  <img 
    src={social}
    alt="WhatsApp"
    className="w-15 h-15 object-contain animate-bounce"
  />
</a>


      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-14 space-y-14">
        
        {/* ========== 1. TOP SECTION (Hero and Description/Details) ========== */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: IMAGE COLLAGE EXACT LIKE SNAPSHOT (4 IMAGES) */}
<div className="grid grid-cols-2 gap-3">
  
  {/* Top Left (Big Vertical Image) */}
  <div className="col-span-1 h-52 sm:h-60 overflow-hidden rounded-xl shadow border border-slate-100">
    <img src={collegeImages[0]} 
         alt="Shoe 1" 
         className="w-full h-full object-cover hover:scale-105 duration-300" />
  </div>

  {/* Top Right (Medium Square Image) */}
  <div className="col-span-1 h-52 sm:h-60 overflow-hidden rounded-xl shadow border border-slate-100">
    <img src={collegeImages[1]} 
         alt="Shoe 2" 
         className="w-full h-full object-cover hover:scale-105 duration-300" />
  </div>

  {/* Bottom Left (Medium Square Image) */}
  <div className="col-span-2 h-44 sm:h-52 overflow-hidden rounded-xl shadow border border-slate-100">
    <img src={collegeImages[4]} 
         alt="Shoe 3" 
         className="w-full h-full object-cover hover:scale-105 duration-300" />
  </div>

  {/* Bottom Right (Wider Image) */}
  <div className="col-span-1 h-44 sm:h-52 overflow-hidden rounded-xl shadow border border-slate-100">
    <img src={collegeImages[5]} 
         alt="Shoe 4" 
         className="w-full h-full object-cover hover:scale-105 duration-300" />
  </div>
  {/* Bottom Left (Medium Square Image) */}
  <div className="col-span-1 h-44 sm:h-52 overflow-hidden rounded-xl shadow border border-slate-100">
    <img src={collegeImages[6]} 
         alt="Shoe 3" 
         className="w-full h-full object-cover hover:scale-105 duration-300" />
  </div>

  
  {/* Bottom Right (Wider Image) */}
  <div className="col-span-2 h-44 sm:h-52 overflow-hidden rounded-xl shadow border border-slate-100">
    <img src={collegeImages[7]} 
         alt="Shoe 4" 
         className="w-full h-full object-cover hover:scale-105 duration-300" />
  </div>

</div>



          {/* RIGHT: Title / Description / Buttons / Variety Showcase / Accordion */}
          <div className="space-y-6">
            <div className="space-y-4 pb-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold font-poppins">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb]
 to-[#c9a759] font-poppins">Bulk Bridge </span> – Your Gateway to Smarter Wholesale Footwear
              </h1>

              <div className="space-y-1 text-sm sm:text-base">
                <p className="font-semibold text-[#f52d13] 
font-inter text-xl">Reebok</p>
                
              </div>

              <div>
                <p className="text-sm sm:text-base text-slate-600 font-inter text-justify">
                  Level up your wholesale experience with precision-built Reebok shoe templates
                  designed for high-volume retailers. Gain access to vetted suppliers, 
                  guaranteed authentic stock, automated order batching, and lightning-fast shipping. 
                  Our logistics engine ensures zero bottlenecks, while competitive tiered pricing 
                  maximizes your margins. From discovery to doorstep delivery, we streamline your 
                   procurement journey, helping retailers grow faster and operate smarter.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button className="px-5 py-2 rounded-full text-sm font-semibold bg-[#ff6b2c] text-white hover:bg-[#ff5a10] transition shadow-md">
                  Enquiry
                </button>
                <button className="px-5 py-2 rounded-full text-sm font-semibold border border-slate-300 hover:bg-slate-50 transition shadow-sm">
                  Contact Us
                </button>
              </div>
            </div>
            
            {/* **NEW: Product Variety Showcase** */}
            <ProductVarietyShowcase />

            {/* Product Details Accordion (Existing component) */}
            <ProductDetailsAccordion />

          </div>
        </div>

        {/* ========== 2. KEY VALUE PROPOSITION (Icons Row) ========== */}
        <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
            <div className="flex flex-col items-center gap-2 text-center p-4 bg-slate-50 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <BoltIcon className="h-6 w-6" />
                </div>
                <p className="text-sm md:text-lg font-poppins font-bold text-slate-800">Fast Fulfillment</p>
                <p className="text-xs md:text-base font-inter text-slate-600">Optimized for speed and quick tracking.</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center p-4 bg-slate-50 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <TruckIcon className="h-6 w-6" />
                </div>
                <p className="text-sm md:text-lg font-poppins font-bold text-slate-800">Reliable Delivery</p>
                <p className="text-xs md:text-base font-inter text-slate-600">Trusted transport and verified logistics.</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center p-4 bg-slate-50 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CurrencyDollarIcon className="h-6 w-6" />
                </div>
                <p className="text-sm md:text-lg font-poppins font-bold text-slate-800">High Margin</p>
                <p className="text-xs md:text-base font-inter text-slate-600">Transparent pricing & bulk discounts.</p>
            </div>
        </div>

        {/* ========== 3. UNIVERSAL SHOE SIZING GUIDE (CENTERED) ========== */}
        <div className="space-y-6 pt-8 border-t border-slate-100">
            <h2 className="text-xl md:text-3xl font-bold text-center text-slate-800
                             font-poppins"> Universal Shoe
               <span className="bg-clip-text text-transparent bg-gradient-to-r
 from-[#2563eb] to-[#c9a759] font-poppins"> Sizing Guide</span> 
            </h2>
            <p className="text-center text-sm md:text-base text-slate-600 max-w-4xl mx-auto font-inter">
                Ensure the perfect fit for your customers with our comprehensive sizing charts. Bridge the international sizing gap effortlessly for US/India and Euro standards.
            </p>
            
            {/* size grids */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {/* Kids Sizing Table */}
                <SizingTable title="Kids/Youth Sizing" data={kidsSizes} isKids={true} />
                {/* Adult Sizing Table */}
                <SizingTable title="Adult Sizing" data={adultSizes} isKids={false} />
            </div>

            <p className="text-sm md:text-base text-slate-500 text-center pt-2 font-inter">
                Note: Length is based on standard foot length measurement. Need a custom chart? Contact us!
            </p>
        </div>


        {/* ========== 4. WHY CHOOSE TEMPLATE & HOT DEALS? ========== */}
<div className="space-y-6 pt-8 border-t border-slate-100">
  <h2 className="text-xl md:text-3xl font-bold text-center">
    Why Choose Template & Hot deals?
  </h2>

  <div className="grid sm:grid-cols-2 gap-6 items-stretch">
    {/* Left card: image left, title+para+button right */}
    <div className="border border-slate-200 rounded-2xl bg-white shadow-lg p-4 md:p-6 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center flex-1">
        {/* LEFT → IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={Image1}
            alt="Template Preview"
            className="h-32 w-32 md:h-40 md:w-40 rounded-xl object-cover border border-indigo-200 shadow"
          />
        </div>

        {/* RIGHT → TEXT + BUTTON */}
        <div className="flex flex-col h-full">
          <div>
            <h3 className="text-lg font-bold font-poppins mb-2">
              Streamlined B2B Experience
            </h3>
            <p className="text-sm md:text-base text-slate-600 font-inter leading-relaxed">
              Our Reebok templates are designed specifically for wholesale,
              offering simplified bulk selection, quick re-ordering, and
              immediate inventory visibility, saving you valuable time.
            </p>
          </div>

          <button
            className="mt-4 md:mt-6 w-fit self-start bg-[#c9a759] text-white 
                       px-5 py-2 rounded-full font-semibold text-sm md:text-base 
                       shadow-lg cursor-pointer hover:bg-white hover:text-black 
                       hover:border-black border transition"
          >
            Enquiry Now
          </button>
        </div>
      </div>
    </div>

    {/* Right card: title + para + button + image right */}
    <div className="border border-slate-200 rounded-2xl bg-white shadow-lg p-4 
    md:p-6 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center flex-1">
        {/* LEFT → TEXT + BUTTON */}
        <div className="flex flex-col h-full">
          <div>
            <h3 className="text-lg font-bold mb-1 font-poppins">
              Exclusive Hot Deals & Offers
            </h3>

            <p className="text-sm md:text-base text-slate-600 font-inter mt-2 mb-4 leading-relaxed">
              Access seasonal discounts and exclusive overstock deals on popular
              Reebok shoes directly through your template. Optimize your stock
              levels with limited-time offers.
            </p>
          </div>

          <button
            className="mt-auto w-fit self-start px-5 py-2 rounded-full cursor-pointer 
                       text-sm md:text-base font-semibold bg-[#c9a759] text-white 
                       border transition shadow-md hover:bg:white hover:text-black 
                       hover:border-black hover:bg-white"
          >
            Learn More
          </button>
        </div>

        {/* RIGHT → IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Image1}
            alt="Hot Deals Template"
            className="h-32 w-32 md:h-40 md:w-40 rounded-xl object-cover border 
                       border-indigo-200 shadow"
          />
        </div>
      </div>
    </div>
  </div>
</div>


        {/* ========== 5. TRUSTED BY RETAILERS GLOBALLY ========== */}
        <div className="space-y-4 pt-8 border-t border-slate-100">
          <h2 className="text-xl md:text-3xl font-bold text-center font-poppins">
            Trusted by Retailers Globally
          </h2>
          <p className="md:text-base text-sm text-slate-600  font-inter text-center">
            Join the network of successful shoe retailers worldwide who rely on 
<br />Bulk Bridge for seamless, high-volume sourcing of branded footwear.
          </p>
          <div className="flex items-center gap-4 justify-center">
            <CheckBadgeIcon className="h-8 w-8 text-green-600" />
            <p className="text-2xl font-extrabold text-[#ff6b2c] mt-2">500+ successful retailers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;