// import React, { useState } from "react";
import Navbar from "./components/navBar";
import Sidebar from "./components/sideBar";
import SocialIcons from "./components/socialIcons";
import { Outlet } from "react-router-dom";
// import { FaChild } from "react-icons/fa";
// import ChatWidget from "./components/chatPage";
import ChatBotWidget from "./components/chatAI/ChatBot";
export default function LayOut() {

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

      {/* الشات كبوب أب */}
    
        <ChatBotWidget />
   
    </div>
  );
}
