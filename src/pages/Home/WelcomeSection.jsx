import React from "react";

const WelcomeSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white 
    to-gray-50 py-12 md:py-20"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT - Text content */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <h1
                className="text-2xl md:text-5xl font-extrabold leading-tight text-gray-900 
              mb-4 font-poppins"
              >
                WELCOME TO <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb]
             to-[#c9a759] font-poppins">Bluk Bridge</span>
              </h1>

              <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 font-inter">
                Your Dependable Partner for School and Institutional Uniforms
              </h2>

              <p
                className="text-gray-600 text-base md:text-lg mb-6 whitespace-pre-line
              font-inter"
              >
                Providing everything from garments to accessories under one
                roof. Whether you're outfitting a nursery or a senior school, we
                deliver comfort, durability, and consistency in every order.
              </p>

              <div
                className="rounded-lg bg-[#c9a759] shadow-md p-5 border border-[#ca9c2f]
              hover:shadow-[#ecc6c7]"
              >
                <p className="text-sm text-white">
                  <strong className="text-black">With BulkBridge.co.in</strong>{" "}
                  at the helm of our logistics and fulfillment, you can count on
                  smooth delivery, exceptional service, and complete uniform
                  solutions.
                </p>
              </div>

              <div className="mt-6 flex gap-3 items-center">
                <button
                  className="inline-flex items-center gap-2 bg-black hover:bg-black/90
                 text-white font-semibold py-3 px-5 rounded-lg shadow-sm transition cursor-pointer"
                >
                  Bulk Order Request
                </button>

                <a
                  href="#"
                  className="text-black hover:underline text-sm font-medium"
                >
                  Talk to Our Team →
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT - Unique small design */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* soft layered shapes */}
              <svg
                className="absolute -left-6 -top-8 w-40 h-40 opacity-40"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#638fee" />
                    <stop offset="100%" stopColor="#638fee" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#g1)"
                  d="M40.5,-55.9C53.7,-47.6,67.1,-38.9,71.1,-26.8C75.2,-14.7,69.9,0.9,61.6,14.4C53.2,27.9,41.7,39.3,28.1,45.5C14.5,51.6,-0.3,52.4,-15.2,50.2C-30,48,-45,42.8,-53.9,31.9C-62.8,21.1,-65.6,4.6,-61.6,-10.6C-57.6,-25.9,-46.9,-39.8,-33.2,-48.8C-19.5,-57.8,-9.8,-61.9,2.9,-66.4C15.6,-70.9,31.1,-75.1,40.5,-55.9Z"
                  transform="translate(100 100)"
                />
              </svg>

              {/* center card */}
              <div
                className="relative z-10 w-full h-full rounded-3xl bg-white/80 
              backdrop-blur-md border border-gray-100 shadow-lg flex flex-col overflow-hidden"
              >
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div
                      className="inline-flex items-center px-3 py-1 rounded-full 
                    bg-[#c9a759] text-white text-xs font-semibold mb-3"
                    >
                      School Uniforms
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Comfort-first fabrics
                    </h3>
                    <p className="text-sm text-gray-600">
                      Breathable, durable and easy to maintain — designed for
                      daily wear.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-full bg-[#2563eb] flex items-center 
                      justify-center font-semibold text-white"
                      >
                        BB
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">
                          Bluk Bridge
                        </div>
                        <div className="text-gray-500">Trusted since 1998</div>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500">
                      Bulkbridge Logistics
                    </div>
                  </div>
                </div>

                {/* decorative corner */}
                <div className="absolute -right-10 -bottom-10 w-28 h-28 opacity-60">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#638fee" />
                  </svg>
                </div>
              </div>

              {/* small floating badges */}
              <div className="absolute -right-6 -top-6 flex flex-col gap-3 z-10">
                <div
                  className="px-3 py-2 bg-white/90 border border-gray-100 rounded-full 
                text-xs font-medium shadow"
                >
                  Bulk Orders
                </div>
                <div
                  className="px-3 py-2 bg-white/90 border border-gray-100 rounded-full
                 text-xs font-medium shadow"
                >
                  Custom Logos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle background pattern */}
      <svg
        className="pointer-events-none absolute right-0 md:bottom-10 bottom-0 opacity-10 w-64
       h-64"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g2" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#g2)" rx="40" />
      </svg>
    </section>
  );
};

export default WelcomeSection;
