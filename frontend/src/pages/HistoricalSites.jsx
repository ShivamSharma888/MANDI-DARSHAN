import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";

const HistoricalPlaces = () => {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Fetch temples from backend
  const fetchTemples = async () => {
    try {
      const res = await axios.get(`${API}/api/temples`);
      setTemples(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching temples:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemples();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-500">
        Loading temples...
      </div>
    );
  }

  return (
    <section className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 🌟 Hero Section */}
      <div className="relative h-80 md:h-96 flex items-center justify-center bg-gray-900">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${"https://www.holidify.com/images/bgImages/MANDI.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Heading + Subtitle */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            Historical Sites of Mandi District
          </h1>
          <p className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Explore the Historical, spiritual and cultural heritage of Mandi
            through its{" "}
            <span className="font-semibold text-yellow-300">temples</span>,{" "}
            shrines, and sacred lakes.
          </p>
        </div>
      </div>

      {/* ✅ Grid Section (closed Hero div above) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-10">
        {temples.map((temple) => (
          <motion.div
            key={temple._id}
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.03 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={temple.images?.[0] || temple.image}
                alt={temple.name}
                className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {temple.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 flex-1 mb-4 text-sm sm:text-base">
                {temple.description?.substring(0, 120)}...
              </p>

              {/* Buttons */}
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/historical-sites/${temple._id}`}
                  className="flex-1 inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-medium transition"
                >
                  Explore
                </Link>

                {temple.mapLink && (
                  <a
                    href={temple.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-medium transition"
                  >
                    <FaMapMarkerAlt className="mr-2" /> Map
                    <FaExternalLinkAlt className="ml-1" size={12} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HistoricalPlaces;
