// src/components/ManageUsers.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "User",
    password: "",
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const token = localStorage.getItem("token");
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  if (!loggedInUser || loggedInUser.userType !== "Admin") {
    return (
      <div className="p-6 text-red-600 font-bold text-lg">
        ❌ Access Denied. Only Admins can manage users.
      </div>
    );
  }

  const axiosInstance = axios.create({
    baseURL: `${API}/api`,
    headers: { Authorization: `Bearer ${token}` },
  });

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/users");
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axiosInstance.put(`/users/${editId}`, form);
      } else {
        await axiosInstance.post("/users/register", form);
      }
      setForm({ name: "", email: "", phone: "", userType: "User", password: "" });
      setEditId(null);
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Operation failed");
    }
  };

  const handleEdit = (user) => {
    setForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
      userType: user.userType,
      password: "",
    });
    setEditId(user._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axiosInstance.delete(`/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  if (loading) return <div className="p-6 text-gray-500">Loading users...</div>;

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Manage Users</h2>

      {/* Add / Update Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
      >
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          value={form.userType}
          onChange={(e) => setForm({ ...form, userType: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>User</option>
          <option>ParkingOwner</option>
          <option>Admin</option>
        </select>
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required={!editId}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition-colors col-span-full md:col-span-1 font-semibold shadow-md"
        >
          {editId ? "Update User" : "Add User"}
        </button>
      </form>

      {/* Error */}
      {error && <p className="text-red-500 font-medium">{error}</p>}

      {/* Users Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">Name</th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">Email</th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">Phone</th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">Type</th>
              <th className="px-6 py-3 text-center text-gray-600 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((u) => (
              <tr
                key={u._id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-3">{u.name}</td>
                <td className="px-6 py-3">{u.email}</td>
                <td className="px-6 py-3">{u.phone}</td>
                <td className="px-6 py-3">{u.userType}</td>
                <td className="px-6 py-3 flex justify-center gap-3">
                  <button
                    onClick={() => handleEdit(u)}
                    className="text-yellow-500 hover:text-yellow-700 transition-colors"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(u._id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
