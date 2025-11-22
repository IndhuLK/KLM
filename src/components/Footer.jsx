import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Follow Us */}
        <div>
          <h3 className="text-red-600 font-semibold mb-3 font-inter">
            Follow Us
          </h3>
          <p className="text-sm mb-4 leading-relaxed">
            We rank top for indoor and outdoor display manufacturing in terms of
            production capacity.
          </p>
          <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-red-500">
              <FaWhatsapp size={20} />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-red-600 font-semibold mb-3 font-inter">
            Quick Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Uniforms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Socks & Accessories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Jackets & Coats
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Fabric
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Sports Wear
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Institutional Shoes
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-red-600 font-semibold mb-3 font-inter">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                School Uniforms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Sports Accessories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Shoes Collection
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Custom Fabric Options
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-red-600 font-semibold mb-3 font-inter">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-semibold text-white">Email :</span>{" "}
              Info@bulkbridge.co.in 
            </li>
            <li>
              <span className="font-semibold text-white">Phone :</span> +91
              9585299988
            </li>
            <li>
              <span className="font-semibold text-white">Address :</span>{" "}
              NO.34J
Road/Street: KAMARAJ NAGAR, KALAPATTY ROAD
Sitra, <br />Coimbatore 641014

              
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()}{" "}
        <Link to="https://teknospot.in/"><span className="hover:text-[#EC3338] hover:underline cursor-pointer">
          Tekno Spot.  </span></Link> All rights reserved.
         
      </div>
    </footer>
  );
};

export default Footer;
