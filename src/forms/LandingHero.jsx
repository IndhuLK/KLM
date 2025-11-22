import React from "react";
// Heroicons and Social Media Icon
import { TruckIcon, BoltIcon, CurrencyDollarIcon, CheckBadgeIcon, GlobeAltIcon, UsersIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; 
import { useState } from 'react';

// Use actual paths for your images
import Image1 from "/src/assets/Championlace/champ1.jpg" // Champion Lace Image 
import Image2 from "/src/assets/ChampionVelcro/champv1.jpg" // Champion Velcro Image
// Note: You need paths for Prodigy Lace and Prodigy Velcro here if available

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
            <h3 className="text-xl font-bold text-slate-800">Additional Product Details</h3>
            {details.map((item, index) => (
                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                    <button
                        className="flex justify-between items-center w-full p-4 text-left font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition duration-150"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className='flex items-center'>
                            <item.icon className='w-5 h-5 mr-2 text-indigo-500' />
                            {item.title}
                        </span>
                        {openIndex === index ? <ChevronUpIcon className="w-5 h-5 text-indigo-500" /> : <ChevronDownIcon className="w-5 h-5 text-slate-400" />}
                    </button>
                    {openIndex === index && (
                        <div className="p-4 bg-white text-sm text-slate-600 border-t border-slate-200">
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
                        <p className="mt-2 text-xs font-semibold text-slate-700 text-center">{product.name}</p>
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
    <div className="min-h-screen bg-white text-slate-900 relative"> 
      
      {/* WhatsApp Floating Icon (Fixed Position - no change) */}
      <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition duration-300 transform hover:scale-110"
          aria-label="Contact us on WhatsApp"
      >
          {/* Simple WhatsApp SVG Icon */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 3.12 1.34 5.94 3.48 7.96L4 22l2.36-1.55C7.54 20.73 9.7 21 12 21c5.52 0 10-4.48 10-10S17.52 2 12 2zM12 19c-2.07 0-4.01-.68-5.63-1.87l-.4-.25-2.58 1.63 1.05-3.03-.27-.42C5.07 13.56 4 12 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm-1.1-7.7c-.12-.06-.72-.37-.83-.4-.09-.03-.19-.04-.26.04-.08.08-.3.37-.36.45-.07.09-.13.09-.24.04-.64-.32-1.28-.56-1.83-1.18-.45-.51-.75-1.14-.99-1.57-.24-.45-.03-.7.19-.91.17-.18.37-.4.5-.59.13-.19.18-.32.26-.48.09-.17.04-.32-.02-.45-.06-.12-.5-.14-.68-.14-.15 0-.3.04-.46.07-.15.03-.38.08-.58.28-.2.19-.74.72-.74 1.75 0 1.03.76 2.02.86 2.15.1.13 1.49 2.28 3.63 3.14 1.7.67 2.06.66 2.76.62.66-.05 1.75-.71 2.02-1.39.27-.68.27-1.25.19-1.39-.08-.14-.26-.23-.54-.37z"/>
          </svg>
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
                Bulk Bridge – Reebok Shoe Templates
              </h1>

              <div className="space-y-1 text-sm sm:text-base">
                <p className="font-semibold text-[#f52d13] 
font-inter text-xl">Reebok</p>
                
              </div>

              <div>
                <p className="text-sm sm:text-base text-slate-600">
                  **Description:** Discover seamless wholesale operations with our Reebok shoe templates. We provide verified inventory, streamlined bulk ordering processes, and exceptional logistics, ensuring high margins for retailers worldwide.
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
                <p className="text-sm font-bold text-slate-800">Fast Fulfillment</p>
                <p className="text-xs text-slate-600">Optimized for speed and quick tracking.</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center p-4 bg-slate-50 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <TruckIcon className="h-6 w-6" />
                </div>
                <p className="text-sm font-bold text-slate-800">Reliable Delivery</p>
                <p className="text-xs text-slate-600">Trusted transport and verified logistics.</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center p-4 bg-slate-50 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CurrencyDollarIcon className="h-6 w-6" />
                </div>
                <p className="text-sm font-bold text-slate-800">High Margin</p>
                <p className="text-xs text-slate-600">Transparent pricing & bulk discounts.</p>
            </div>
        </div>

        {/* ========== 3. UNIVERSAL SHOE SIZING GUIDE (CENTERED) ========== */}
        <div className="space-y-6 pt-8 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-center text-slate-800">
                Universal Shoe Sizing Guide
            </h2>
            <p className="text-center text-sm text-slate-600 max-w-4xl mx-auto">
                Ensure the perfect fit for your customers with our comprehensive sizing charts. Bridge the international sizing gap effortlessly for US/India and Euro standards.
            </p>
            
            {/* size grids */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {/* Kids Sizing Table */}
                <SizingTable title="Kids/Youth Sizing" data={kidsSizes} isKids={true} />
                {/* Adult Sizing Table */}
                <SizingTable title="Adult Sizing" data={adultSizes} isKids={false} />
            </div>

            <p className="text-xs text-slate-500 text-center pt-2">
                Note: Length is based on standard foot length measurement. Need a custom chart? Contact us!
            </p>
        </div>


        {/* ========== 4. WHY CHOOSE TEMPLATE & HOT DEALS? ========== */}
        <div className="space-y-6 pt-8 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Why Choose Template &amp; Hot deals?
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Left card: image + title + para */}
            <div className="border border-slate-200 rounded-2xl p-4 flex flex-col gap-3 bg-white shadow-lg">
              <div className="h-20 w-24 bg-indigo-50 rounded-md text-sm text-indigo-700 font-semibold flex items-center justify-center border border-indigo-200">
                Template Preview
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Streamlined B2B Experience</h3>
                <p className="text-sm text-slate-600">
                  Our Reebok templates are designed specifically for wholesale, offering simplified bulk selection, quick re-ordering, and immediate inventory visibility, saving you valuable time.
                </p>
              </div>
              <div className="h-16 w-20 bg-slate-200 rounded-md text-xs flex items-center justify-center mt-auto self-end">
                Analytics Icon
              </div>
            </div>

            {/* Right card: title + para + image + button */}
            <div className="border border-slate-200 rounded-2xl p-4 flex flex-col gap-3 bg-white shadow-lg">
                <div>
                    <h3 className="text-lg font-bold mb-1">Exclusive Hot Deals & Offers</h3>
                    <p className="text-sm text-slate-600">
                        Access seasonal discounts and exclusive overstock deals on popular Reebok shoes directly through your template. Optimize your stock levels with limited-time offers.
                    </p>
                </div>
                <div className="h-20 w-24 bg-orange-50 rounded-md text-sm text-orange-700 font-semibold flex items-center justify-center border border-orange-200">
                    Deal Tag Image
                </div>
                <button className="mt-auto self-start px-5 py-2 rounded-full text-sm font-semibold bg-[#1361f5] text-white hover:bg-[#0f4bc0] transition shadow-md">
                    Learn How
                </button>
            </div>
          </div>
        </div>

        {/* ========== 5. TRUSTED BY RETAILERS GLOBALLY ========== */}
        <div className="space-y-4 pt-8 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Trusted by Retailers Globally
          </h2>
          <p className="text-base text-slate-600 max-w-xl">
            Join the network of successful shoe retailers worldwide who rely on Bulk Bridge for seamless, high-volume sourcing of branded footwear.
          </p>
          <div className="flex items-center gap-4">
            <CheckBadgeIcon className="h-8 w-8 text-green-600" />
            <p className="text-2xl font-extrabold text-[#ff6b2c] mt-2">500+ successful retailers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;