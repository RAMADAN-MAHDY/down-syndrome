// Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaFileAlt,
  FaNewspaper,
  FaEnvelope,
  FaBars,
  FaTimes
} from "react-icons/fa";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/admin/dashboard" },
    { name: "Add Event", icon: <FaCalendarAlt />, path: "/admin/add-event" },
    { name: "Add Content", icon: <FaFileAlt />, path: "/admin/add-content" },
    { name: "Add News", icon: <FaNewspaper />, path: "/admin/add-news" },
    { name: "Booking Requests", icon: <FaEnvelope />, path: "/admin/bookings" },
  ];

  return (
    <>
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 bg-white p-2 rounded shadow"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div className={`fixed z-30 inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out bg-white w-64 border-r`}>
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-xl font-bold text-blue-700">Dashboard</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-100 transition-colors"
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
