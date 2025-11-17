import React, { useState } from "react";
import {
  ShoppingBag,
  Palette,
  Users,
  ArrowRight,
} from "lucide-react";
import timeline from "/src/assets/timeline.png";

const BLUE = "#2563EB";

const tabs = [
  {
    id: 1,
    title: "Comprehensive Product Line",
    icon: ShoppingBag,
    content:
      "We supply T-shirts, shirts, pants, skirts, tights, socks, shoes,school bags, caps, fabrics, and corporate gift articles — all customizable to your institution’s needs.",
  },
  {
    id: 2,
    title: "One-Stop Uniform Solution",
    icon: Users,
    content:
      "From nursery to senior levels, our uniform system covers daily wear, winter wear, and accessories, ensuring comfort and durability across all grades.",
  },
  {
    id: 3,
    title: "Custom Branding & Bulk Orders",
    icon: Palette,
    content:
      "All items can be branded with logos, colors, and labels. Seamless fulfillment for large-scale institutional orders through BulkBridge.co.in.",
  },
];

const InstitutionalUniforms = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="font-sans py-12 px-4 sm:px-8 flex items-center justify-center bg-white">
      <div className="w-full max-w-7xl mx-auto overflow-hidden bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* LEFT SIDE — Tabs + Content */}
          <div className="lg:col-span-2 p-6 sm:p-8 bg-white">

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight font-poppins">
              Bulk Bridge{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb]
             to-[#c9a759] font-poppins">
                School & Institutional
              </span>{" "}
              Uniforms
            </h1>

            <p className="text-lg text-gray-600 mt-2 font-inter">
              Complete uniform solutions with customized branding.
            </p>

            {/* MOBILE RESPONSIVE SCROLLABLE TABS */}
            <div className="mt-8 flex gap-3 border-b border-gray-100 pb-3 font-inter text-sm overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 whitespace-nowrap rounded-t-lg font-semibold transition ${
                    activeTab === tab.id
                      ? "bg-[#2563EB] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <div key={tab.id}>
                      <div className="flex items-center mb-3">
                        <tab.icon className="w-6 h-6 text-blue-600 mr-3" />
                        <h2 className="text-xl font-bold text-blue-700 font-poppins">
                          {tab.title}
                        </h2>
                      </div>
                      <p className="text-gray-700 md:text-base text-sm leading-relaxed font-inter">
                        {tab.content}
                      </p>
                    </div>
                  )
              )}
            </div>

            {/* CTA BUTTON */}
            <button className="mt-8 px-8 py-3 bg-black text-white rounded-full font-bold shadow-lg hover:bg-black/90 transition flex items-center gap-3">
              Your Trusted Partner in Bulk Uniform Supply & Custom Apparel
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* RIGHT SIDE — RESPONSIVE TIMELINE IMAGE */}
          <div className="lg:col-span-1 flex flex-col items-center justify-start">

            {/* Desktop View */}
            <div className="hidden lg:flex w-full items-center justify-center p-6">
              <img
                src={timeline}
                alt="Timeline"
                className="w-full max-w-md"
              />
            </div>

            {/* Mobile View */}
            <div className="lg:hidden w-full flex items-center justify-center mt-10">
              <img
                src={timeline}
                alt="Timeline"
                className="w-64 sm:w-72 md:w-80"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default InstitutionalUniforms;
