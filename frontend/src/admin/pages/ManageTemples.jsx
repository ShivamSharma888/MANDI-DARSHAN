import React, { useState, useEffect } from "react";
import axios from "axios";

const Temples = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    mapLink: "",
    images: [""],
    highlights: [""],
  });
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    baseURL: `${API}/api`,
    headers: { Authorization: `Bearer ${token}` },
  });

  // Fetch temples
  const fetchTemples = async () => {
    try {
      const res = await axiosInstance.get("/temples");
      setTemples(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTemples();
  }, []);

  // Handle text changes
  const handleChange = (e, field, index = null) => {
    if (field === "images" || field === "highlights") {
      const updated = [...form[field]];
      updated[index] = e.target.value;
      setForm({ ...form, [field]: updated });
    } else {
      setForm({ ...form, [field]: e.target.value });
    }
  };

  // Add/remove input field
  const addField = (field) => setForm({ ...form, [field]: [...form[field], ""] });
  const removeField = (field, index) => {
    const updated = form[field].filter((_, i) => i !== index);
    setForm({ ...form, [field]: updated });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await axiosInstance.post("/temples", form);
      setMessage("Temple added successfully!");
      setForm({
        name: "",
        description: "",
        mapLink: "",
        images: [""],
        highlights: [""],
      });
      fetchTemples();
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Failed to add temple");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold">Admin Temple Management</h2>

      {/* Add Temple Form */}
      <form
        className="bg-white shadow-md rounded-xl p-6 grid gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Temple Name"
          value={form.name}
          onChange={(e) => handleChange(e, "name")}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => handleChange(e, "description")}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          placeholder="Google Maps Link"
          value={form.mapLink}
          onChange={(e) => handleChange(e, "mapLink")}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        {/* Images */}
        <div>
          <label className="font-semibold">Images URLs</label>
          {form.images.map((img, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder={`Image URL #${index + 1}`}
                value={img}
                onChange={(e) => handleChange(e, "images", index)}
                className="border px-3 py-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                className="bg-red-500 text-white px-3 rounded hover:bg-red-600"
                onClick={() => removeField("images", index)}
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => addField("images")}
          >
            Add Image
          </button>
        </div>

        {/* Highlights */}
        <div>
          <label className="font-semibold">Highlights</label>
          {form.highlights.map((hl, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder={`Highlight #${index + 1}`}
                value={hl}
                onChange={(e) => handleChange(e, "highlights", index)}
                className="border px-3 py-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                className="bg-red-500 text-white px-3 rounded hover:bg-red-600"
                onClick={() => removeField("highlights", index)}
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => addField("highlights")}
          >
            Add Highlight
          </button>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors mt-4"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Temple"}
        </button>

        {message && <p className="mt-2 text-green-600 font-medium">{message}</p>}
      </form>

      {/* Display Temples */}
      <h3 className="text-2xl font-bold mt-8 mb-4">Existing Temples</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {temples.map((temple) => (
          <div key={temple._id} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src={temple.images[0]}
              alt={temple.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold">{temple.name}</h4>
              <p className="mt-2 text-gray-600">{temple.description}</p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                {temple.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              {temple.mapLink && (
                <a
                  href={temple.mapLink}
                  target="_blank"
                  className="mt-2 inline-block text-blue-600 hover:underline"
                >
                  View on Map
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Temples;
