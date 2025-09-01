import React, { useState } from "react";
import axios from "axios";

export default function UserTestimonial() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${API}/api/testimonials/user`,
        { text, image },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSuccess(res.data.message);
      setText("");
      setImage("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit testimonial");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-4 sm:px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Submit Your Testimonial</h2>

      {success && <p className="text-green-600 mb-4">{success}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Testimonial</label>
          <textarea
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            rows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (optional)</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
