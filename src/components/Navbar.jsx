import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "/src/assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🔥 TOP WHITE BAR (Logo + Contact + Mobile Menu) */}
      <div className="bg-white py-4 shadow flex items-center justify-between px-4 relative">
        {/* LEFT EMPTY SPACE (for alignment) */}
        <div className="w-1/3 hidden md:block"></div>

        {/* LOGO CENTER */}
        <div className="flex-1 flex justify-center">
          <img src={logo} alt="KLM Logo" className="h-15 w-20" />
        </div>

        {/* 🔥 CONTACT INFO (RIGHT SIDE ONLY DESKTOP) */}
        <div className="hidden md:flex w-1/3 flex-col items-end pr-4 text-right text-sm font-semibold text-gray-700">
          <span>📧 info@klm.com</span>
          <span>📞 +91 98765 43210</span>
        </div>

        {/* 🔥 MOBILE MENU BUTTON (Right side) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-red-600 absolute right-4 top-5"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* 🔥 RED NAVBAR */}
      <nav className="bg-red-600 text-white font-semibold">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex space-x-10 text-sm mx-auto">
            <a href="/home" className="hover:opacity-80">
              Home
            </a>
            <a href="/uniforms" className="hover:opacity-80">
              Uniforms
            </a>
            <a href="/socksandaccessories" className="hover:opacity-80">
              Socks & Accessories
            </a>
            <a href="/jacketcoats" className="hover:opacity-80">
              Jackets & Coats
            </a>
            <a href="/fabric" className="hover:opacity-80">
              Fabric
            </a>
            <a href="/sportswear" className="hover:opacity-80">
              Sports Wear
            </a>
            <a href="/institutionalshoes" className="hover:opacity-80">
              Institutional Shoes
            </a>
          </div>

          {/* DESKTOP SOCIAL ICONS */}
          <div className="hidden md:flex items-center space-x-4">
            <FaFacebookF className="hover:scale-110 transition-transform cursor-pointer" />
            <FaTwitter className="hover:scale-110 transition-transform cursor-pointer" />
            <FaInstagram className="hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>

        {/* 🔥 MOBILE DROPDOWN MENU */}
        {menuOpen && (
          <div className="md:hidden bg-red-600 text-white py-4 space-y-3 text-center text-sm">
            {/* Mobile Links */}
            <a href="/home" className="block">
              Home
            </a>
            <a href="/uniforms" className="block">
              Uniforms
            </a>
            <a href="/socksandaccessories" className="block">
              Socks & Accessories
            </a>
            <a href="/jacketcoats" className="block">
              Jackets & Coats
            </a>
            <a href="/fabric" className="block">
              Fabric
            </a>
            <a href="/sportswear" className="block">
              Sports Wear
            </a>
            <a href="/institutionalshoes" className="block">
              Institutional Shoes
            </a>

            {/* 🔥 Mobile Contact Info */}
            <div className="pt-4 flex justify-center">
  <div className="bg-white text-black rounded-lg px-4 py-3 shadow-md w-[80%]">
    <p className="font-semibold text-sm">📧 info@klm.com</p>
    <p className="font-semibold text-sm mt-1">📞 +91 98765 43210</p>
  </div>
</div>


            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-5 pt-4">
              <FaFacebookF className="text-lg" />
              <FaTwitter className="text-lg" />
              <FaInstagram className="text-lg" />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
