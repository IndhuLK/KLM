import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import logo from '/src/assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f5edd6] py-3 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        
        {/* Left Menu (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-8 font-semibold text-sm">
          <a href="/" className="hover:text-red-700">Home</a>
          <a href="/uniforms" className="hover:text-red-700">Uniforms</a>
          <a href="/socks" className="hover:text-red-700">Socks & Accessories</a>
          <a href="#" className="hover:text-red-700">Jackets & Coats</a>
        </div>

        {/* Logo Center */}
        <div className="flex-shrink-0 text-center">
          <img
            src={logo} // replace with your logo path
            alt="KLM Logo"
            className="h-10 mx-auto"
          />
          <p className="text-xs font-semibold text-red-700 mt-1">SINCE 1959</p>
        </div>

        {/* Right Menu (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-8 font-semibold text-sm">
          <a href="/fabric" className="hover:text-red-700">Fabric</a>
          <a href="#" className="hover:text-red-700">Sports Wear</a>
          <a href="/shoe" className="hover:text-red-700">Institutional Shoes</a>
        </div>

        {/* Social + Menu Icon */}
        <div className="flex items-center space-x-4 ml-4 ">
          <div className="hidden md:flex space-x-4">
            <FaFacebookF className="hover:scale-110 transition-transform" />
            <FaTwitter className="hover:scale-110 transition-transform" />
            <FaInstagram className="hover:scale-110 transition-transform" />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-[#f5edd6] border-t border-gray-200">
          <div className="flex flex-col items-center space-y-3 py-4 font-semibold text-sm">
            <a href="/" className="hover:text-red-700">Home</a>
            <a href="/uniforms" className="hover:text-red-700">Uniforms</a>
            <a href="/socks" className="hover:text-red-700">Socks & Accessories</a>
            <a href="#" className="hover:text-red-700">Jackets & Coats</a>
            <a href="/fabric" className="hover:text-red-700">Fabric</a>
            <a href="#" className="hover:text-red-700">Sports Wear</a>
            <a href="/shoe" className="hover:text-red-700">Institutional Shoes</a>
            <div className="flex space-x-4 pt-2 text-red-700">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
