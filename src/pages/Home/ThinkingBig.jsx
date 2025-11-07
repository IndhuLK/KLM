import React from "react";

const ThinkingBig = () => {
  return (
    <section className="relative py-20 bg-gradient-to-tr from-[#ffca93] via-white 
    to-[#ffca93] overflow-hidden text-center">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_40%,#818cf8_0%,transparent_40%),
      radial-gradient(circle_at_80%_70%,#34d399_0%,transparent_40%)]"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col 
      items-center justify-center text-center">
        {/* Heading */}
        <div className="max-w-3xl space-y-4 mb-10">
          <h2 className="text-sm uppercase tracking-widest font-semibold text-black mb-2">
            THINKING BIG? WE ARE READY
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ee5c60] to-[#ee3b41]">
              LOW MOQ CUSTOM APPAREL MANUFACTURER
            </span>
          </h1>
          <p className="text-gray-700 text-lg mt-4">
            At KLM, we believe that trust is built through consistent delivery of quality products
            and transparent business practices. Our customers’ satisfaction is our highest priority,
            and we strive to exceed their expectations in every transaction.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mb-10">
          <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 text-left">
            <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl">
              ⭐
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#EC3338]">
              Guiding Principles for Success
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our mission, vision, and goals reflect our commitment to excellence, innovation, and
              social responsibility. We deliver superior products and foster trust to make a
              positive impact on society.
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-[#ffe8d0] to-white border border-gray-100 
          rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 text-left">
            <div className="absolute -right-4 -top-4 w-10 h-10 rounded-full bg-emerald-100 flex items-center
             justify-center text-emerald-600 text-xl">
              🎯
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600">
              Our Goal
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To continually enhance our products, foster long-term partnerships, and support
              communities through responsible practices and innovative apparel solutions.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="inline-flex items-center gap-2 bg-black hover:bg-black/90 cursor-pointer
           text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-transform hover:scale-105">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
          <a
            href="#"
            className="text-black font-semibold hover:text-black hover:underline text-sm"
          >
            Request Sample →
          </a>
        </div>
      </div>

      {/* Background dotted pattern */}
      <svg
        className="absolute bottom-0 right-0 w-64 h-64 opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="pattern-dots"
            x="0"
            y="0"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#c7d2fe" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#pattern-dots)" />
      </svg>
    </section>
  );
};

export default ThinkingBig;
