import React, { useState } from 'react';
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
  FaBars,
  FaTimes,
} from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="w-full bg-gradient-to-b from-purple-600 to-purple-400 shadow-lg px-6 py-6"
      dir="rtl"
    >
      {/* رأس النارفبار */}
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold text-white">مركز الأمل</span>
          <FaUniversalAccess className="text-white text-3xl animate-pulse" />
        </div>

        {/* أيقونة الهامبرغر للموبايل */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* قائمة اللابتوب */}
        <div className="hidden md:flex space-x-6 rtl:space-x-reverse text-white/80 text-lg font-medium items-center">
          <Link
            to="/home/settings"
            className="flex items-center gap-1 hover:text-white transition duration-300"
          >
            <FaCog />
            <span>الإعدادات</span>
          </Link>
          <Link
            to="/home/events"
            className="flex items-center gap-1 hover:text-white transition duration-300"
          >
            <FaCalendarAlt />
            <span>الفعاليات</span>
          </Link>

          <div className="relative group cursor-pointer ml-8">
            <div className="flex items-center gap-1 hover:text-white transition duration-300">
              <FaNewspaper />
              <span>الأخبار</span>
            </div>
            <div className="absolute bg-white text-gray-700 rounded shadow-md mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 group-hover:block z-10 min-w-[150px] transition-all duration-500 ease-in-out">
              <Link
                to="/home/news/صحة"
                className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2"
              >
                <FaHeartbeat />
                <span>صحة</span>
              </Link>
              <Link
                to="/home/news/تعليم"
                className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2"
              >
                <FaGraduationCap />
                <span>تعليم</span>
              </Link>
              <Link
                to="/home/news/رياضه"
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
                to="/home/content?sluge=vid"
                className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2"
              >
                <FaVideo />
                <span>فيديوهات</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل */}
      {menuOpen && (
        <div className="md:hidden mt-6 bg-transparent backdrop-blur-sm text-white rounded-lg shadow-lg p-4 space-y-2">
          {[
            { to: '/home/settings', label: 'الإعدادات', icon: <FaCog /> },
            { to: '/home/events', label: 'الفعاليات', icon: <FaCalendarAlt /> },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className={`flex items-center gap-2 pl-4 hover:text-purple-200 transition duration-300 animate-slide-in`}
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              {item.icon} {item.label}
            </Link>
          ))}

          {/* الأخبار */}
          <div className="border-t border-white/50 pt-2">
            <span className="flex items-center gap-2 font-medium mb-2"> 
              <FaNewspaper /> الأخبار
            </span>
            {[
              { to: '/home/news/صحة', label: 'صحة', icon: <FaHeartbeat /> },
              { to: '/home/news/تعليم', label: 'تعليم', icon: <FaGraduationCap /> },
              { to: '/home/news/رياضه', label: 'أنشطة', icon: <FaGamepad /> },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className={`flex items-center gap-2 pl-6 hover:text-purple-200 transition duration-300 animate-slide-in`}
                style={{ animationDelay: `${(idx + 2) * 100}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>

          {/* المحتوى */}
          <div className="border-t border-white/50 pt-2">
            <span className="flex items-center gap-2 font-medium mb-2">
              <FaBook /> المحتوى
            </span>
            {[
              { to: '/home/content?sluge=text', label: 'مقالات', icon: <FaFileAlt /> },
              { to: '/home/content?sluge=vid', label: 'فيديوهات', icon: <FaVideo /> },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className={`flex items-center gap-2 pl-6 hover:text-purple-200 transition duration-300 animate-slide-in`}
                style={{ animationDelay: `${(idx + 5) * 100}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* رسالة الترحيب */}
      <div className="max-w-7xl mx-auto mt-6 md:mt-20 text-center text-white text-2xl font-semibold">
        مركز الأمل يقدم لكم كل ما يخص متلازمة داون — كن مطمئنًا
      </div>

      {/* الأنيميشن */}
      <style>
        {`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-in {
            animation: slideIn 0.3s forwards;
          }
        `}
      </style>
    </nav>
  );
}
