
import React from "react";
import Navbar from "./components/navBar";
import Sidebar from "./components/sideBar";
import { Outlet } from "react-router-dom";

export default function LayOut() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
    
      <Navbar />

      
      <div className="flex">

          <Sidebar />

        <main className=" p-6 ">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
