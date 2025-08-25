
import React from "react";
import Navbar from "./components/navBar";
import Sidebar from "./components/sideBar";
import SocialIcons from "./components/socialIcons";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "./components/scrollToTopButton";

export default function LayOut() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      
      <Navbar />

      {/* أيقونات التواصل الثابتة */}
      <SocialIcons />

      <div className="flex">
        <Sidebar />

        <main className="p-6 flex-1">
          <Outlet />
        </main>
        <ScrollToTopButton/>
      </div>
    </div>
  );
}
