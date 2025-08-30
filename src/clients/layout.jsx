import React, { useState } from "react";
import Navbar from "./components/navBar";
import Sidebar from "./components/sideBar";
import SocialIcons from "./components/socialIcons";
import { Outlet } from "react-router-dom";
import { FaChild } from "react-icons/fa";
import ChatWidget from "./components/chatPage";

export default function LayOut() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      <Navbar />
      <SocialIcons />

      <div className="flex">
        <Sidebar />
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>

      {/* أيقونة الطفل */}
      <div className="fixed bottom-6 right-6 z-50">
        <FaChild
          className="text-4xl text-purple-600 cursor-pointer transition-transform duration-500 hover:scale-110 animate-bounce"
          onClick={() => setShowChat(true)}
        />
      </div>

      {/* الشات كبوب أب */}
      {showChat && (
        <ChatWidget closeChat={() => setShowChat(false)} />
      )}
    </div>
  );
}
