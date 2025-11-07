import React from 'react';
import { ShoppingBag, Palette, Users, ArrowRight, CheckCircle, Lightbulb, TrendingUp, Monitor, LayoutGrid } from 'lucide-react';

// Data for the content sections (Content changed to English)
const contentSections = [
  {
    icon: ShoppingBag,
    title: "Comprehensive Product Line",
    description: "We supply T-shirts, shirts, pants, skirts, tights, socks, shoes, school bags, caps, fabrics, and corporate gift articles — all customizable to your institution’s needs.",
  },
  {
    icon: Users,
    title: "One-Stop Uniform Solution",
    description: "From nursery to senior levels, our offerings cover daily wear, winter wear, accessories, and more — ensuring consistency and comfort for students.",
  },
  {
    icon: Palette,
    title: "Custom Branding & Bulk Orders",
    description: "All items can be branded with logos, colors, and labels. Seamless fulfillment for large-scale institutional orders through BulkBridge.co.in",
  },
];

// Data for the 7-step process (Content changed to English)
const processSteps = [
  { step: "Understanding Your Vision", icon: Lightbulb },
  { step: "Discovery & Specification", icon: Monitor },
  { step: "Design Development", icon: Palette },
  { step: "Design Of Prototype", icon: LayoutGrid },
  { step: "Refinement & Enhancement", icon: TrendingUp },
  { step: "Prototype Finalization", icon: CheckCircle },
  { step: "Production & Delivery", icon: ArrowRight },
];

// Component for the Process Step (Right Side) - Attractive Grid Card Design
const ProcessCard = ({ step, index, icon: Icon }) => (
  <div className="p-4 bg-white rounded-xl shadow-lg border border-[#ee5c60] 
  transition duration-300 hover:shadow-xl hover:shadow-[#ee5c60]/50 transform 
  hover:-translate-y-0.5 cursor-default">
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#ee5c60] flex items-center
       justify-center text-white font-bold text-lg shadow-md">
        {index + 1}
      </div>
      <h3 className="text-slate-800 text-base font-semibold leading-snug">{step}</h3>
    </div>
    <div className="mt-2 flex justify-end">
      <Icon className="w-5 h-5 text-[#ee5c60]" />
    </div>
  </div>
);

// Component for the Main Content Section (Left Side)
const ContentSection = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 mb-6 
  transition duration-300 hover:border-[#ee5c60] hover:shadow-lg">
    <div className="flex items-center mb-3">
      <Icon className="w-6 h-6 text-[#ee5c60] mr-3" /> {/* Icon color changed to Teal */}
      <h2 className="text-lg font-bold text-slate-800 tracking-tight font-poppins">{title}</h2>
    </div>
    <p className="text-slate-600 leading-relaxed text-base font-inter">{description}</p>
  </div>
);

const InstitutionalUniforms = () => {
  return (
    // Global Background Gradient (Light, Kid/Parent Friendly)
    // Removed min-h-screen and reduced vertical padding (py-12 sm:py-16)
    <div className="bg-gradient-to-br from-[#ee5c60] to-[#ffca93] font-sans py-10 
    sm:py-10 px-4 sm:px-8 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl 
      shadow-[#ee5c60] bg-white border border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* LEFT SIDE - Content and Call to Action (2/3 width on desktop) */}
          {/* Reduced padding from p-12 to p-8 */}
          <div className="lg:col-span-2 p-6 sm:p-8 bg-white">
            <header className="mb-8 pb-4 border-b border-[#ee5c60] "> {/* Reduced margins */}
              <h1 className="text-2xl sm:text-5xl font-extrabold text-slate-900 
              leading-tight tracking-tight font-poppins">
                KLM <span className="text-[#ee5c60]">School & Institutional</span> Uniforms
              </h1> {/* Title in English */}
              <p className="mt-2 text-md md:text-2xl text-slate-600 font-light
              font-i"> {/* Reduced font size and margin */}
                Comprehensive solutions for all your institutional apparel needs.
              </p> {/* Subtitle in English */}
            </header>

            {/* Content Sections */}
            <div className="space-y-2"> {/* Reduced vertical spacing */}
              {contentSections.map((section, index) => (
                <ContentSection key={index} {...section} />
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-8"> {/* Reduced top margin */}
              <button
                className="w-full sm:w-auto px-8 py-3 bg-black  text-white text-lg 
                font-extrabold rounded-full shadow-lg shadow-[#FFCA93] hover:bg-black 
                transition duration-300 transform hover:scale-[1.01] flex items-center 
                justify-center font-inter"
                onClick={() => console.log('Contact button clicked')} // Placeholder action
              >
                Your Trusted Partner in Bulk Uniform Supply & Custom Apparel
                <ArrowRight className="w-5 h-5 ml-3" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Process Grid (1/3 width on desktop) - New Design */}
          {/* Reduced padding from p-12 to p-8 */}
          <div className="lg:col-span-1 p-6 sm:p-8 bg-[#FFCA93] border-l-0 lg:border-l
           border-[#FFCA93]">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-wider
             border-b pb-3 border-[#FFCA93]"> {/* Reduced font size and margins */}
              The KLM Process
            </h2> {/* Heading in English */}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"> {/* Reduced gap */}
              {/* Process Steps Component with new grid card styling */}
              {processSteps.map((item, index) => (
                <ProcessCard key={index} step={item.step} index={index} icon={item.icon} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InstitutionalUniforms;