import React from "react";
import { FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow-lg border-b sticky top-0 z-20">
      {/* العنوان */}
      <div className="flex items-center ml-[60px] gap-3">
        <FaTachometerAlt className="text-blue-600 text-2xl" />
        <span className="font-bold text-gray-800 text-lg">
          لوحة الإدارة
        </span>
      </div>

      {/* زر تسجيل الخروج */}
      <button
        onClick={async () => {
          await logout();
          navigate("/admin/login");
        }}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
      >
        <FaSignOutAlt />
        تسجيل خروج
      </button>
    </header>
  );
}
