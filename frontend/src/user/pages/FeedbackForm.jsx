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
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow mt-10">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Submit Feedback</h2>
      {success && <p className="mb-4 text-green-600">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
