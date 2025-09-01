import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [active, setActive] = useState(0);

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API}/api/testimonials`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        setTestimonials(res.data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials]);

  if (testimonials.length === 0)
    return (
      <div className="py-20 flex justify-center items-center text-gray-500">
        Loading testimonials...
      </div>
    );

  const activeTestimonial = testimonials[active];

  return (
    <section className="  bg-amber-50 py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className=" font-soria text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
        What People Say About Us
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Image on top */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-blue-500">
          <img
            src={activeTestimonial.image || "/images/default.png"}
            alt={activeTestimonial.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text content below */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 sm:p-10 text-center relative hover:shadow-2xl transition-shadow duration-500">
          <span className="text-4xl sm:text-5xl font-extrabold text-blue-600 block mb-2">
            "
          </span>
          <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed mb-4">
            {activeTestimonial.text}
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            {activeTestimonial.name}
          </h3>
          <span className="text-gray-400 dark:text-gray-500 text-xs block mt-2">
            {new Date(activeTestimonial.createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((t, idx) => (
            <button
              key={t._id}
              onClick={() => setActive(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                active === idx ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
