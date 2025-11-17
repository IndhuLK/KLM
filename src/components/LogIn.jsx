import React, { useState } from "react";
import { User, Lock, ArrowRight } from "lucide-react";
import logo from "/src/assets/logo1.jpeg";

const LogIn = () => {
  const PRIMARY_BLUE = "#2563eb";  // 🔵 new blue
  const SOFT_GOLD = "#c9a759";     // 🟡 new gold

  // 🧩 State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // 🧠 Hardcoded credentials
  const ADMIN_CREDENTIALS = {
    username: "admin@klm",
    password: "klm@1234",
  };

  // 🧭 Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      setSuccess(false);
      return;
    }

    if (
      username.trim().toLowerCase() === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      setSuccess(true);
      setError("");
      setTimeout(() => {
        localStorage.setItem("auth", "true");
        window.location.href = "/add-blog";
      }, 1000);
    } else {
      setError("Invalid username or password. Try again.");
      setSuccess(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden p-4">
      
      {/* 🔶 Background Shapes */}
      <div
        className="absolute top-0 left-0 w-3/5 h-full opacity-10 pointer-events-none z-0"
        style={{
          backgroundColor: PRIMARY_BLUE,
          transform: "skewY(-10deg)",
          transformOrigin: "top left",
        }}
      ></div>

      <div
        className="absolute bottom-[-150px] right-[-150px] w-96 h-96 bg-opacity-40 
        rounded-full blur-[120px] z-0 animate-pulse-slow"
        style={{ backgroundColor: SOFT_GOLD }}
      ></div>

      {/* 🧾 Login Card */}
      <div
        className="relative z-10 w-full max-w-md p-8 md:p-10 bg-white rounded-xl shadow-2xl backdrop-blur-sm"
        style={{ borderTop: `6px solid ${PRIMARY_BLUE}` }}
      >
        
        {/* Logo / Title */}
        <div className="mb-10 place-items-center">
          <img src={logo} alt="" className="w-30 h-30" />

          <p className="text-gray-500 font-medium tracking-wider text-sm uppercase">
            Admin Login Portal
          </p>
        </div>

        {/* 🧠 Login Form */}
        <form onSubmit={handleLogin}>
          
          {/* Username */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] outline-none"
              />
            </div>
          </div>

          {/* Error or Success */}
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          {success && <p className="text-green-600 text-sm text-center mb-4">Login successful! Redirecting...</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center px-8 py-3 rounded-full font-bold
             text-black uppercase tracking-wider shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            style={{
              backgroundColor: SOFT_GOLD,
              boxShadow: `0 10px 20px 0 ${PRIMARY_BLUE}40`,
            }}
          >
            LOGIN
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-sm font-medium transition-colors duration-300"
            style={{ color: PRIMARY_BLUE }}
          >
            Forgot Password?
          </a>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LogIn;
