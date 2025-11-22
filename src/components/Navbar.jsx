import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "/src/assets/logo1.jpeg";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🌟 NAVLINKS USING NAME + PATH
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Uniforms", path: "/uniforms" },
    { name: "Socks & Accessories", path: "/socksandaccessories" },
    { name: "Jackets & Coats", path: "/jacketcoats" },
    { name: "Fabric", path: "/fabric" },
    { name: "Sports Wear", path: "/sportswear" },
    { name: "Institutional Shoes", path: "/institutionalshoes" },
  ];

  return (
    <>
      {/* 🔥 TOP WHITE BAR (Logo + Contact + Mobile Menu) */}
      <div className="bg-[#f5f8f6] py-4 shadow flex items-center justify-between px-4 relative">
        
        <div className="w-1/3 hidden md:block"></div>

        {/* LOGO CENTER */}
        <div className="flex-1 flex justify-center">
          <img src={logo} alt="BB Logo" className="h-15 w-15" />
        </div>

        {/* CONTACT INFO (Desktop Only) */}
        <div className="hidden md:flex w-1/3 flex-col items-end pr-4 text-right text-sm font-semibold text-gray-700">
          <span>📧 info@klm.com</span>
          <span>📞 +91 98765 43210</span>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black absolute right-4 top-5"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* 🔥 RED NAVBAR */}
      <nav className="bg-[#c9a759] text-white font-semibold">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex space-x-10 text-sm mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:opacity-80"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* SOCIAL ICONS (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-4">
            <FaFacebookF className="hover:scale-110 transition-transform cursor-pointer" />
            <FaTwitter className="hover:scale-110 transition-transform cursor-pointer" />
            <FaInstagram className="hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>

        {/* 🔥 MOBILE DROPDOWN MENU */}
        {menuOpen && (
          <div className="md:hidden bg-[#c9a759] text-white py-4 space-y-3 text-center text-sm">

            {/* MOBILE NAV LINKS */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block"
              >
                {link.name}
              </Link>
            ))}

            {/* CONTACT BOX */}
            <div className="pt-4 flex justify-center">
              <div className="bg-white text-black rounded-lg px-4 py-3 shadow-md w-[80%]">
                <p className="font-semibold text-sm">📧 info@klm.com</p>
                <p className="font-semibold text-sm mt-1">📞 +91 98765 43210</p>
              </div>
            </div>

            {/* SOCIAL ICONS */}
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
