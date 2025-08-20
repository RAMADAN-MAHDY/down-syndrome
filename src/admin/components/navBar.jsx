import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const logout = useAuthStore((state) => state.logout);
 const navigate=useNavigate()


  return (
    <header className="flex items-center justify-between bg-white px-4 py-3 border-b shadow">
      <div className="flex items-center">
        <FaTachometerAlt className="text-blue-700 mr-2" />
        <span className="font-semibold text-gray-700">مرحبًا بك في لوحة الإدارة</span>
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
         onClick={async () => {
          await logout();  
          navigate('/admin/login');}}
  >
        تسجيل خروج
      </button>
    </header>
  );
}
