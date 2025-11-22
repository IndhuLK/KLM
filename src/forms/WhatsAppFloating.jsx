// src/components/WhatsAppFloating.jsx
import React from "react";
import social from "/src/assets/social.png"  // unga icon path

const WhatsAppFloating = () => {
  return (
    <a
      href="https://wa.me/919363633009"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full hover:scale-110 transition duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src={social}
        alt="WhatsApp"
        className="w-14 h-14 object-contain animate-bounce"
      />
    </a>
  );
};

export default WhatsAppFloating;
