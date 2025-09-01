import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    try {
      const res = await axios.post(`${API}/api/feedback`, form);
      setSuccess(res.data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setSuccess("Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full relative">
        {/* Background Blobs */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Card */}
        <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 sm:p-10 overflow-hidden z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
            Share Your Feedback
          </h2>

          {success && (
            <p className="mb-4 text-center text-green-600 font-medium">{success}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-all"
            />

            <textarea
              name="message"
              placeholder="Your Feedback"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-all resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
