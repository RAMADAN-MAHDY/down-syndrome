import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navBar";
import Sidebar from "./components/sideBar";

export default function LayoutAdmin() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <Navbar />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
