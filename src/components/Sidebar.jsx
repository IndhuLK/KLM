import React, { useState } from "react";
import { Home, FilePlus2, Eye, LogOut, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '/src/assets/logo.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true); // for desktop expand/collapse
  const [isMobileOpen, setIsMobileOpen] = useState(false); // for mobile toggle
  const PRIMARY_RED = "#EC3338";

  const menu = [
    
    { name: "Add Blog", icon: <FilePlus2 />, path: "/add-blog" },
    { name: "Preview Blog", icon: <Eye />, path: "/preview-blog" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <>
      {/* 📱 Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-md z-40 flex 
      justify-between items-center px-5 py-4 border-b border-gray-200">
        <img src={logo} alt="" className="w-20 h-20"/>
        <h1 className="text-2xl font-bold" style={{ color: PRIMARY_RED }}>
          KLM <span className="text-gray-800">SPORTS</span>
        </h1>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 🟥 Sidebar */}
      <aside
        className={`fixed md:sticky top-0 md:top-[80px] h-full md:h-[calc(100vh-80px)] 
        bg-white shadow-lg border-r border-gray-200 flex flex-col justify-between 
        z-50 transition-all duration-300 ease-in-out 
        ${isExpanded ? "w-64" : "w-20"} 
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo + Toggle (desktop) */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className={`transition-all duration-300 ${!isExpanded && "hidden"}`}>
            <img src={logo} alt="" className="w-20 h-20"/>
            
            <p className="text-sm text-gray-400 mt-1">Admin Panel</p>
          </div>

          {/* Toggle button (desktop view only) */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hidden md:flex text-gray-600 hover:text-[#EC3338] transition"
          >
            {isExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 mt-4 space-y-1">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-gray-700 font-medium
                hover:bg-[#EC3338]/10 hover:text-[#EC3338] transition-all duration-300
                ${isActive ? "bg-[#EC3338]/10 text-[#EC3338]" : ""}`
              }
            >
              <span className="w-6 h-6 flex items-center justify-center">{item.icon}</span>
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  isExpanded ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Logout Button */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 hover:text-red-700 font-semibold"
          >
            <LogOut className="w-5 h-5" />
            <span
              className={`transition-all duration-300 ${
                isExpanded ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* 🩶 Overlay (Mobile) */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
