import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const PlaceDetail = () => {
  const { id } = useParams(); // temple ID from URL
  const [place, setPlace] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const res = await axios.get(`${API}/api/temples/${id}`);
        setPlace(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlace();
  }, [id]);

  // Auto-slide images
  useEffect(() => {
    if (!place?.images) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % place.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [place?.images]);

  if (loading) return <div className="text-center mt-28">Loading...</div>;
  if (!place) return <div className="text-center mt-28">Place not found</div>;

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 px-6 lg:px-12 flex flex-col lg:flex-row gap-10">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {place.name}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {place.description}
        </p>

        {place.highlights?.length > 0 && (
          <ul className="list-disc list-inside mb-6 text-gray-800 dark:text-gray-200 space-y-2">
            {place.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {place.mapLink && (
          <a
            href={place.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg shadow-lg transition"
          >
            <FaMapMarkerAlt /> View on Map
          </a>
        )}

        <div className="mt-8">
          <Link
            to="/historical-sites"
            className="text-indigo-600 hover:underline text-sm font-medium"
          >
            ← Back to Explore
          </Link>
        </div>
      </motion.div>

      {/* Right Content - Image Slider */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 relative flex items-center justify-center"
      >
        <div className="relative w-full max-w-lg h-[420px] flex items-center justify-center overflow-hidden">
          {place.images?.map((img, idx) => {
            let position = "hidden";
            if (idx === currentIndex) position = "z-20 scale-100 opacity-100 translate-x-0";
            else if (idx === (currentIndex - 1 + place.images.length) % place.images.length)
              position = "z-10 scale-90 opacity-60 -translate-x-28 blur-sm";
            else if (idx === (currentIndex + 1) % place.images.length)
              position = "z-10 scale-90 opacity-60 translate-x-28 blur-sm";
            else position = "hidden";

            return (
              <motion.img
                key={idx}
                src={img}
                alt={place.name}
                className={`absolute rounded-2xl shadow-2xl object-cover w-full h-full transition-all duration-700 ease-in-out ${position}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: idx === currentIndex ? 1 : 0.6 }}
              />
            );
          })}
        </div>

        {/* Controls */}
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + place.images.length) % place.images.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % place.images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full"
        >
          <FaChevronRight />
        </button>
      </motion.div>
    </section>
  );
};

export default PlaceDetail;
