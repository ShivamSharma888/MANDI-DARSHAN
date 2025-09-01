import React, { useEffect, useState } from "react";
import axios from "axios";

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token"); // admin token
        const res = await axios.get(`${API}/api/feedback`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFeedbacks(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Feedbacks</h2>
      {loading ? (
        <p>Loading...</p>
      ) : feedbacks.length > 0 ? (
        <div className="space-y-4">
          {feedbacks.map((fb) => (
            <div key={fb._id} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
              <p className="font-semibold">{fb.name} ({fb.email})</p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">{fb.message}</p>
              <p className="text-xs text-gray-500 mt-1">{new Date(fb.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No feedbacks yet.</p>
      )}
    </div>
  );
};

export default FeedbackDashboard;
