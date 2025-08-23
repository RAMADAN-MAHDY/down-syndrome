import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaFileAlt, FaNewspaper, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // 👈 نستخدمه لمعرفة الصفحة الحالية

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/admin/dashboard" },
    { name: "Add Event", icon: <FaCalendarAlt />, path: "/admin/add-event" },
    { name: "Add Content", icon: <FaFileAlt />, path: "/admin/add-content" },
    { name: "Add News", icon: <FaNewspaper />, path: "/admin/add-news" },
    { name: "Booking Requests", icon: <FaEnvelope />, path: "/admin/bookings" },
  ];

  return (
    <>
      {/* Hamburger للـ Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-lg hover:bg-blue-100 transition"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars size={24} />
      </button>

      {/* Overlay عند فتح الـ Sidebar على الموبايل */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed z-50 inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out bg-white w-64 border-r shadow-lg`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-2xl font-bold text-blue-700">لوحة التحكم</h2>
          <button
            className="md:hidden p-1 rounded hover:bg-gray-200 transition"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* القائمة */}
        <nav className="mt-6 flex flex-col gap-1 px-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path; // 👈 الصفحة الحالية
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium
                  ${isActive ? "bg-blue-100 text-blue-700 font-bold" : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"}`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
