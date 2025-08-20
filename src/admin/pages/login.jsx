
// AdminLogin.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import UseVerifyToken from "../hook/verifyToken";

export default function AdminLogin() {
  UseVerifyToken()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const setAdmin = useAuthStore((state) => state.setAdmin); // أخذ دالة setAdmin

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://down-syndrome-api.vercel.app/api/admin/logInAdmin",
        { email, password },
        { withCredentials: true }
      );

      console.log("Login response:", response.data);

      // ✅ احفظ الأدمن في zustand
      setAdmin(response.data.admin);

      setLoading(false);

      // ✅ روح للداشبورد
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Login error:", err.response ? err.response.data : err.message);
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          تسجيل الدخول
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-1 font-medium">البريد الإلكتروني</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">كلمة المرور</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
        </button>
      </form>
    </div>
  );
}
