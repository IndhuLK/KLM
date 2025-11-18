// InstitutionalUniforms.jsx
import React, { useState, useEffect } from "react";
import { ShoppingBag, Palette, Users, ArrowRight } from "lucide-react";

/* ----------------------------------------------------
   BLOB TIMELINE DATA
----------------------------------------------------- */
const STEPS = [
  "Understanding Your Vision",
  "Discovery & Specification",
  "Design Development",
  "Design Of Prototype",
  "Refinement & Enhancement",
  "Prototype Finalisation",
  "Production & Delivery",
];

/* ----------------------------------------------------
   BLOB TIMELINE COMPONENT
----------------------------------------------------- */
const BlobTimeline = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const isLeft = (index) => index % 2 === 0;

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div
        className="relative text-white flex items-center justify-center"
        style={{
          width: "360px",
          minHeight: "540px",
          background: "#0C2A63",
          borderRadius: "50% 55% 60% 40% / 55% 45% 60% 40%",
          padding: "48px 32px",
        }}
      >
        {/* Vertical Timeline Line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            width: 4,
            top: 56,
            bottom: 56,
            background: "#1A4B8E",
          }}
        />

        {/* Steps */}
        <div className="relative z-10 w-full">
          <div className="flex flex-col justify-between h-full">
            {STEPS.map((label, idx) => {
              const leftSide = isLeft(idx);
              const activeDot = idx === active;

              return (
                <div
                  key={idx}
                  className="relative flex items-center"
                  style={{ minHeight: 56 }}
                >
                  {/* LEFT SIDE LABEL */}
                  {leftSide ? (
                    <div
                      className="pr-4 w-1/2 text-right cursor-pointer"
                      onClick={() => setActive(idx)}
                    >
                      <p
                        className={`text-sm font-medium ${
                          activeDot ? "text-[#F4C16C]" : "text-white/80"
                        }`}
                      >
                        {label.split(" ").map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))}
                      </p>
                    </div>
                  ) : (
                    <div className="w-1/2" />
                  )}

                  {/* DOT */}
                  <div className="w-0 flex items-center justify-center">
                    <div
                      onClick={() => setActive(idx)}
                      className="relative flex items-center justify-center cursor-pointer"
                      style={{ width: 56, height: 56 }}
                    >
                      <span
                        className={`block rounded-full border-2 ${
                          activeDot
                            ? "bg-[#F4C16C] border-[#F4C16C]"
                            : "border-white/70 bg-transparent"
                        }`}
                        style={{ width: 18, height: 18 }}
                      />
                    </div>
                  </div>

                  {/* RIGHT SIDE LABEL */}
                  {!leftSide ? (
                    <div
                      className="pl-4 w-1/2 text-left cursor-pointer"
                      onClick={() => setActive(idx)}
                    >
                      <p
                        className={`text-sm font-medium ${
                          activeDot ? "text-[#F4C16C]" : "text-white/80"
                        }`}
                      >
                        {label.split(" ").map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))}
                      </p>
                    </div>
                  ) : (
                    <div className="w-1/2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   LEFT SIDE TAB DATA
----------------------------------------------------- */
const tabs = [
  {
    id: 1,
    title: "Comprehensive Product Line",
    icon: ShoppingBag,
    content:
      "We supply T-shirts, shirts, pants, skirts, tights, socks, shoes, school bags, caps, fabrics, and corporate gift articles — all customizable to your institution’s needs.",
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

/* ----------------------------------------------------
   MAIN COMPONENT (RAFCE)
----------------------------------------------------- */
const InstitutionalUniforms = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="font-sans py-12 px-4 sm:px-8 flex items-center justify-center bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ------------------ LEFT SIDE CONTENT ------------------ */}
          <div className="lg:col-span-2 p-6 sm:p-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-poppins">
              Bulk Bridge{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb] to-[#c9a759]">
                School & Institutional
              </span>{" "}
              Uniforms
            </h1>

            <p className="text-lg text-gray-600 mt-2">
              Complete uniform solutions with customized branding.
            </p>

            {/* TAB BUTTONS */}
            <div className="mt-8 flex gap-3 border-b border-gray-100 pb-3 text-sm overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 whitespace-nowrap rounded-t-lg font-semibold ${
                    activeTab === tab.id
                      ? "bg-[#2563EB] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* TAB CONTENT BOX */}
            <div className="mt-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <div key={tab.id}>
                      <div className="flex items-center mb-3">
                        <tab.icon className="w-6 h-6 text-blue-600 mr-3" />
                        <h2 className="text-xl font-bold text-blue-700">
                          {tab.title}
                        </h2>
                      </div>
                      <p className="text-gray-700">{tab.content}</p>
                    </div>
                  )
              )}
            </div>

            {/* CTA BUTTON */}
            <button className="mt-8 px-8 py-3 bg-black text-white rounded-full font-bold shadow-lg hover:bg-black/90 flex items-center gap-3">
              Your Trusted Partner in Bulk Uniform Supply & Custom Apparel
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* ------------------ RIGHT SIDE BLOB TIMELINE ------------------ */}
          <div className="lg:col-span-1 flex items-start justify-center">
            <BlobTimeline/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InstitutionalUniforms;
