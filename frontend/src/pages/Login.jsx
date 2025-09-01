// src/components/LoginBox.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate
import { motion } from "framer-motion";
import { FaUser, FaLock, FaParking, FaUserShield } from "react-icons/fa";

const LoginBox = () => {
  const [userType, setUserType] = useState("User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // ✅ Initialize navigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userType: userType.replace(" ", ""),
          email,
          password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        alert(data.message || "❌ Login failed");
        return;
      }
const { user, token } = data; // backend sends user object and token
user._id = user.id;
localStorage.setItem("user", JSON.stringify(user)); // user must include _id
localStorage.setItem("token", token);
      alert(`✅ Welcome ${data.user.name}! Logged in as ${data.user.userType}`);


      // ✅ Use navigate for routing
      if (data.user.userType === "Admin") {
        navigate("/admin", { replace: true });
      } else if (data.user.userType === "ParkingOwner") {
        navigate("/manager", { replace: true });
      } else {
        navigate("/user", { replace: true });
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("⚠️ Server error. Please try again.");
    }
  };

  const userTypes = [
    { label: "User", icon: <FaUser /> },
    { label: "Parking Owner", icon: <FaParking /> },
    { label: "Admin", icon: <FaUserShield /> },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 px-4">
      <motion.div
        className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 relative border border-white/30"
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* User Type Selector */}
        <div className="flex justify-center gap-3 mb-8">
          {userTypes.map((type) => (
            <motion.button
              whileTap={{ scale: 0.9 }}
              key={type.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                userType === type.label
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/40"
                  : "bg-white/30 text-gray-800 hover:bg-white/50"
              }`}
              onClick={() => setUserType(type.label)}
            >
              {type.icon} {type.label}
            </motion.button>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-md">
          {userType} Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-300" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/30 text-white placeholder-gray-300 border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-300" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/30 text-white placeholder-gray-300 border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-purple-500/40 transition-all"
          >
            Login
          </motion.button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-200">
          <a href="#" className="hover:underline hover:text-white">
            Forgot password?
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginBox;
