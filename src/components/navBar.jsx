import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCog,
  FaCalendarAlt,
  FaTools,
  FaBook,
  FaFileAlt,
  FaVideo,
  FaHeartbeat,
  FaGraduationCap,
  FaGamepad,
  FaUniversalAccess,
  FaNewspaper, 
} from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav
      className="w-full bg-gradient-to-b from-purple-600 to-purple-400 shadow-lg px-6 py-6 h-[200px]"
      dir="rtl"
    >
    
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        <div className="flex items-center gap-2 order-1">
          <span className="text-3xl font-extrabold text-white"> مركز الأمل</span>
          <FaUniversalAccess className="text-white text-3xl animate-pulse" />
        </div>

        
        <div className="flex space-x-6 rtl:space-x-reverse text-white/80 text-lg font-medium items-center order-2">
          <Link
            to="/settings"
            className="flex items-center gap-1 hover:text-white transition duration-300"
          >
            <FaCog />
            <span>الإعدادات</span>
          </Link>
          <Link
            to="/events"
            className="flex items-center gap-1 hover:text-white transition duration-300"
          >
            <FaCalendarAlt />
            <span>الفعاليات</span>
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-1 hover:text-white transition duration-300"
          >
            <FaTools />
            <span>الخدمات</span>
          </Link>

          
          <div className="relative group cursor-pointer ml-8">
            <div className="flex items-center gap-1 hover:text-white transition duration-300">
              <FaNewspaper />
              <span>الأخبار</span>
            </div>
            <div className="absolute bg-white text-gray-700 rounded shadow-md mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 group-hover:block z-10 min-w-[150px] transition-all duration-500 ease-in-out">
              <Link
                to="/health"
                className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2"
              >
                <FaHeartbeat />
                <span>صحة</span>
              </Link>
              <Link
                to="/education"
                className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2"
              >
                <FaGraduationCap />
                <span>تعليم</span>
              </Link>
              <Link
                to="/activities"
                className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2"
              >
                <FaGamepad />
                <span>أنشطة</span>
              </Link>
            </div>
          </div>

          
          <div className="relative group cursor-pointer ml-8">
            <div className="flex items-center gap-1 hover:text-white transition duration-300">
              <FaBook />
              <span>المحتوى</span>
            </div>
            <div className="absolute bg-white text-gray-700 rounded shadow-md mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 group-hover:block z-10 min-w-[150px] transition-all duration-500 ease-in-out">
              <Link
                to="/home/content?sluge=text"
                className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2"
              >
                <FaFileAlt />
                <span>مقالات</span>
              </Link>
              <Link
                to="/home/content?sluge=video"
                className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2"
              >
                <FaVideo />
                <span>فيديوهات</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto mt-20 text-center text-white text-2xl font-semibold">
        مركز الأمل يقدم لكم كل ما يخص متلازمة داون — كن مطمئنًا
      </div>
    </nav>
  );
}
