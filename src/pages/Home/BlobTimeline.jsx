import React, { useEffect, useState } from "react";

/**
 * BlobTimeline.jsx
 *
 * React + Tailwind timeline matching the blob-style screenshot (Option B).
 * - Auto-advances every 2 seconds
 * - Click a step to jump to it
 *
 * Usage: <BlobTimeline />
 */

const STEPS = [
  "Understanding Your Vision",
  "Discovery & Specification",
  "Design Development",
  "Design Of Prototype",
  "Refinement & Enhancement",
  "Prototype Finalisation",
  "Production & Delivery",
];

export default function BlobTimeline({
  intervalMs = 2000,
  startIndex = 0,
  pauseOnHover = true,
}) {
  const [active, setActive] = useState(startIndex);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, isPaused]);

  // helper to determine left/right placement: true => left, false => right
  const isLeft = (index) => index % 2 === 0; // alternate: 0-left,1-right,2-left,...

  return (
    <div
      className="w-full flex justify-center py-10 px-4"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Blob container */}
      <div
        className="relative text-white flex items-center justify-center"
        style={{
          width: "360px",
          minHeight: "540px",
          background: "#0C2A63",
          // irregular blob-ish radius
          borderRadius: "50% 55% 60% 40% / 55% 45% 60% 40%",
          padding: "48px 32px",
        }}
      >
        {/* center vertical line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ width: 4, top: 56, bottom: 56, background: "#1A4B8E" }}
        />

        {/* steps */}
        <div className="relative z-10 w-full">
          <div className="flex flex-col justify-between h-full">
            {STEPS.map((label, idx) => {
              const leftSide = isLeft(idx);
              const activeDot = idx === active;

              // compute top positions evenly
              // We want items evenly spaced; using flex-column with gap accomplishes that visually.
              return (
                <div
                  key={idx}
                  className="relative flex items-center"
                  style={{ minHeight: 56 }}
                >
                  {/* left label (if leftSide) */}
                  {leftSide ? (
                    <div
                      className="pr-4 w-1/2 text-right"
                      onClick={() => setActive(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && setActive(idx)}
                    >
                      <p
                        className={`text-sm md:text-base font-medium transition-colors duration-200 ${
                          activeDot ? "text-[#F4C16C]" : "text-white/80"
                        }`}
                      >
                        {label.split(" ").map((w, i) => (
                          <span key={i} className="block">
                            {w}
                          </span>
                        ))}
                      </p>
                    </div>
                  ) : (
                    <div className="w-1/2" />
                  )}

                  {/* center area with dot aligned to line */}
                  <div className="w-0 flex items-center justify-center">
                    <button
                      onClick={() => setActive(idx)}
                      aria-label={`Go to ${label}`}
                      className="relative flex items-center justify-center"
                      style={{ width: 56, height: 56 }}
                    >
                      {/* outer circle (hollow) */}
                      <span
                        className={`block rounded-full border-2 transition-all duration-300 ${
                          activeDot
                            ? "bg-[#F4C16C] border-[#f39b02]"
                            : "border-white/70 bg-transparent"
                        }`}
                        style={{
                          width: 18,
                          height: 18,
                          display: "inline-block",
                        }}
                      />
                      {/* small ring effect when active */}
                      <span
                        className={`absolute rounded-full transition-all duration-400 pointer-events-none ${
                          activeDot
                            ? "opacity-40 bg-[#F4C16C] "
                            : "opacity-0 bg-transparent"
                        }`}
                        style={{
                          width: activeDot ? 36 : 0,
                          height: activeDot ? 36 : 0,
                        }}
                      />
                    </button>
                  </div>

                  {/* right label (if not leftSide) */}
                  {!leftSide ? (
                    <div
                      className="pl-4 w-1/2 text-left"
                      onClick={() => setActive(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && setActive(idx)}
                    >
                      <p
                        className={`text-sm md:text-base font-medium transition-colors duration-200 ${
                          activeDot ? "text-[#F4C16C]" : "text-white/80"
                        }`}
                      >
                        {label.split(" ").map((w, i) => (
                          <span key={i} className="block">
                            {w}
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
}
