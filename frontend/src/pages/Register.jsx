// src/components/RegisterBox.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";

const RegisterBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userType: "User", // fixed: always register as User
          name,
          email,
          phone,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("✅ Registered Successfully!");
      console.log("Registered user:", data);

      // reset fields after success
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Register error:", err);
      alert("⚠️ Server error. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      <motion.div
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative Gradient Circle */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-20 blur-2xl"></div>

        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill in your details to get started 
        </p>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FaPhone className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-green-600 hover:to-teal-600 transition"
          >
            Register
          </motion.button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 font-semibold hover:underline">
            Login here
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterBox;
