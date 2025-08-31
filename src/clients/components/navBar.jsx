import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCog,
  FaCalendarAlt,
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

  // Variants for motion
  const fromTop = { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const fromBottom = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <nav className="w-full bg-gradient-to-b from-purple-600 to-purple-400 shadow-lg px-6 py-6" dir="rtl">
      {/* رأس النارفبار */}
      <motion.div className="flex justify-between items-center max-w-7xl mx-auto" initial="hidden" animate="visible" variants={fromTop}>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold text-white">مركز الأمل</span>
          <FaUniversalAccess className="text-white text-3xl animate-pulse" />
        </div>

        {/* أيقونة الهامبرغر للموبايل */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* قائمة اللابتوب */}
        <div className="hidden md:flex space-x-6 rtl:space-x-reverse text-white/80 text-lg font-medium items-center">
          <Link to="/home/settings" className="flex items-center gap-1 hover:text-white transition duration-300">
            <FaCog />
            <span>الإعدادات</span>
          </Link>
          <Link to="/home/events" className="flex items-center gap-1 hover:text-white transition duration-300">
            <FaCalendarAlt />
            <span>الفعاليات</span>
          </Link>

          {/* الأخبار */}
          <div className="relative group cursor-pointer ml-8">
            <div className="flex items-center gap-1 hover:text-white transition duration-300">
              <FaNewspaper />
              <span>الأخبار</span>
            </div>
            <div className="absolute bg-white text-gray-700 rounded shadow-md mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 group-hover:block z-10 min-w-[150px] transition-all duration-500 ease-in-out">
              <Link to="/home/news/صحة" className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2">
                <FaHeartbeat />
                <span>صحة</span>
              </Link>
              <Link to="/home/news/تعليم" className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2">
                <FaGraduationCap />
                <span>تعليم</span>
              </Link>
              <Link to="/home/news/رياضه" className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2">
                <FaGamepad />
                <span>أنشطة</span>
              </Link>
            </div>
          </div>

          {/* المحتوى */}
          <div className="relative group cursor-pointer ml-8">
            <div className="flex items-center gap-1 hover:text-white transition duration-300">
              <FaBook />
              <span>المحتوى</span>
            </div>
            <div className="absolute bg-white text-gray-700 rounded shadow-md mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 group-hover:block z-10 min-w-[150px] transition-all duration-500 ease-in-out">
              <Link to="/home/content?sluge=text" className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2">
                <FaFileAlt />
                <span>مقالات</span>
              </Link>
              <Link to="/home/content?sluge=vid" className="flex px-4 py-2 hover:bg-purple-100 items-center gap-2">
                <FaVideo />
                <span>فيديوهات</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* قائمة الموبايل */}
      {menuOpen && (
        <motion.div
          className="md:hidden mt-6 bg-transparent backdrop-blur-sm text-white rounded-lg shadow-lg p-4 space-y-2"
          initial="hidden"
          animate="visible"
          variants={fromTop}
        >
          {/* ... نفس العناصر بدون تغيير ... */}
        </motion.div>
      )}

      {/* رسالة الترحيب + زرار الشات */}
      <motion.div
        className="max-w-7xl mx-auto mt-6 md:mt-20 text-center text-white text-2xl font-semibold flex justify-center items-center gap-3 relative"
        initial="hidden"
        animate="visible"
        variants={fromBottom}
      >
        <span>مركز الأمل يقدم لكم كل ما يخص متلازمة داون — كن مطمئنًا</span>
        <img
          src="/dawn4.jpg"
          className="w-28 h-28 rounded-full object-cover"
          alt="صورة متعلقة بمتلازمة داون"
        />
      </motion.div>
    </nav>
  );
}
