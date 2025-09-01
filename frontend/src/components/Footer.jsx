// src/components/Footer.jsx
import React from "react";
import FooterBg from "../assets/slider/river.jpg"; // Put your image in assets folder

export default function Footer() {
  return (
    <footer
      className="relative text-gray-100 pt-12 pb-6"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-300">Mandi Darshan</h3>
          <p className="text-gray-200">
            Discover the heritage, spirituality, and natural beauty of Mandi,
            Himachal Pradesh. Your one-stop guide for travel and exploration.
          </p>
          <p className="mt-4 text-sm text-gray-400">© {new Date().getFullYear()} Mandi Darshan</p>
        </div>

        {/* Discover / Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-300">Discover</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="/glimpses" className="hover:text-yellow-400 transition">Photo Gallery</a></li>
            <li><a href="/events" className="hover:text-yellow-400 transition">Upcoming Events</a></li>
            <li><a href="/stories" className="hover:text-yellow-400 transition">Travel Stories</a></li>
            <li><a href="/faq" className="hover:text-yellow-400 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Attractions */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-300">Attractions</h3>
          <ul className="space-y-2">
            <li><a href="/temples" className="hover:text-yellow-400 transition">Temples & Monuments</a></li>
            <li><a href="/buddhist-sites" className="hover:text-yellow-400 transition">Buddhist Monasteries</a></li>
            <li><a href="/rivers-lakes" className="hover:text-yellow-400 transition">Rivers & Lakes</a></li>
            <li><a href="/nature" className="hover:text-yellow-400 transition">Nature & Wildlife</a></li>
            <li><a href="/arts-crafts" className="hover:text-yellow-400 transition">Arts & Handicrafts</a></li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-300">Stay Connected</h3>
          <p className="text-gray-200 mb-2">Subscribe for travel tips and updates.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4 text-gray-200 text-sm">
            <p>Email: <a href="mailto:info@mandidarshan.com" className="hover:text-yellow-400">info@mandidarshan.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="hover:text-yellow-400">+91 12345 67890</a></p>
            <p>
              Follow us:{" "}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400">Facebook</a> |{" "}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400">Instagram</a> |{" "}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400">Twitter</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-400 pt-6 text-center text-gray-300 text-sm relative z-10">
        Designed & Developed by <span className="text-yellow-400">Mandi Darshan Team</span> | All Rights Reserved
      </div>
    </footer>
  );
}
