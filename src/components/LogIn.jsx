import React, { useState } from "react";
import { User, Lock, ArrowRight } from "lucide-react";
import logo from "/src/assets/logo.png"

const LogIn = () => {
  const PRIMARY_RED = "#EC3338";
  const SOFT_GOLD = "#FFCA93";

  // 🧩 State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // 🧠 Hardcoded credentials (you can replace with backend call)
  const ADMIN_CREDENTIALS = {
    username: "admin@klm",
    password: "klm@1234",
  };

  // 🧭 Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    // Real-time validation
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
      // Optional: redirect to dashboard
      setTimeout(() => {
         localStorage.setItem("auth", "true");
        window.location.href = "/add-blog"; // Change to your route
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
          backgroundColor: PRIMARY_RED,
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
        className="relative z-10 w-full max-w-md p-8 md:p-10 bg-white rounded-xl shadow-2xl
         backdrop-blur-sm"
        style={{ borderTop: `6px solid ${PRIMARY_RED}` }}
      >
        {/* Logo / Title */}
        <div className="mb-10 place-items-center">
          <img src={logo} alt="" className="w-30 h-30"/>
          
          <p className="text-gray-500 font-medium tracking-wider text-sm uppercase">
            Admin Login Portal
          </p>
        </div>

        {/* 🧠 Login Form */}
        <form onSubmit={handleLogin}>
          {/* Username Field */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC3338] outline-none"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC3338] outline-none"
              />
            </div>
          </div>

          {/* Error or Success Message */}
          {error && (
            <p className="text-red-500 text-sm text-center mb-4 font-medium">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-600 text-sm text-center mb-4 font-medium">
              Login successful! Redirecting...
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center px-8 py-3 rounded-full 
            font-bold text-white uppercase tracking-wider shadow-xl transition-all 
            duration-300 transform hover:scale-[1.01] hover:shadow-2xl"
            style={{
              backgroundColor: PRIMARY_RED,
              boxShadow: `0 10px 20px 0 ${PRIMARY_RED}40`,
            }}
          >
            LOGIN
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-sm font-medium transition-colors duration-300"
            style={{ color: PRIMARY_RED }}
          >
            Forgot Password?
          </a>
        </div>
      </div>

      {/* CSS Animation */}
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
