// AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaCalendarAlt, FaNewspaper, FaEnvelope, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { Info  } from "lucide-react";
import axios from 'axios';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [counts, setCounts] = useState([]);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const res = await axios.get('https://down-syndrome-api.vercel.app/api/admin/getCounts',
                    { withCredentials: true }

                );
                setCounts(res.data);
                setCounts(res.data)
                console.log(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCounts();
    }, []);

    const [hovered, setHovered] = useState(null);

    // بيانات كل قسم
    const cards = [
        {
            title: "🏠 Dashboard",
            description: "هنا تقدر تشوف ملخص سريع لكل الأقسام: المقالات، الأحداث، الأخبار وطلبات الحجز.",
            icon: <FaHome className="text-3xl text-blue-600" />,
            tooltip: "اضغط هنا للعودة للصفحة الرئيسية",
            path: "/admin/dashboard",
            color: "bg-gradient-to-tr from-blue-100 to-blue-200",
            count: null,
        },
        {
            title: "مقالات",
            description: "عدد المقالات المنشورة",
            icon: <FaFileAlt className="text-3xl text-blue-600" />,
            tooltip: "اضغط هنا لإدارة المقالات",
            path: "/admin/add-content",
            color: "bg-gradient-to-tr from-white to-blue-50",
            count: counts.contents,
            NameCount: " عدد المقالات",
        },
        {
            title: "الأحداث",
            description: "عدد الأحداث القادمة",
            icon: <FaCalendarAlt className="text-3xl text-green-500" />,
            tooltip: "اضغط هنا لإدارة الأحداث",
            path: "/admin/add-event",
            color: "bg-gradient-to-tr from-white to-green-50",
            count: counts.events,
            NameCount: " عدد الاحداث",

        },
        {
            title: "الأخبار",
            description: "عدد الأخبار المنشورة",
            icon: <FaNewspaper className="text-3xl text-yellow-500" />,
            tooltip: "اضغط هنا لإدارة الأخبار",
            path: "/admin/add-news",
            color: "bg-gradient-to-tr from-white to-yellow-50",
            count: counts.articles,
            NameCount: " عدد الاخبار",
        },
        {
            title: "طلبات الحجز",
            description: "عدد طلبات الحجز الحالية",
            icon: <FaEnvelope className="text-3xl text-red-500" />,
            tooltip: "اضغط هنا لرؤية طلبات الحجز",
            path: "/admin/bookings",
            color: "bg-gradient-to-tr from-white to-red-50",
            count: counts.contacts,
            NameCount: " عدد الطلبات",

        },
    ];

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            {/* 👋 عنوان الترحيب */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent 
                 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                 animate-gradient-x mb-4 drop-shadow-lg">
                    مرحبًا بك في لوحة الإدارة
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-gray-600 text-lg md:text-xl"
                >
                    استخدم الأقسام التالية لإدارة الموقع بشكل سلس وفعال
                </motion.p>

                {/* خط متحرك أسفل العنوان */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                    className="h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                />
            </motion.div>


            {/* 🌟 Grid البطاقات */}
            <div className="grid grid-cols-1 z-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        layout
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(card.path)}
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                        className={`relative p-6 z-10 rounded-2xl shadow-lg cursor-pointer transition-transform ${card.color}`}
                    >
                        <div className="flex items-center z-10 gap-4">
                            {card.icon}
                            <h2 className="text-xl font-semibold">{card.title}</h2>
                            {card.count !== null && card.count !== undefined ? (
                                <span className="ml-auto bg-gray-100 px-3 py-1 rounded-full font-bold text-gray-800">
                                    {card.count}  {card.NameCount}
                                </span>
                            ) : card.count !== null &&

                                <span className="ml-auto bg-gray-100 px-3 py-1 rounded-full font-bold text-gray-800">
                                    <motion.div
                                        className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    />
                                </span>
                            }
                        </div>
                        <p className="mt-2 text-gray-500">{card.description}</p>

                        {/* Tooltip */}
                        {hovered === idx && (
                            <div className="absolute top-0 z-[1000] left-full ml-[-220px] bg-[#0231ff5e] text-balck text-sm px-2 py-1 rounded whitespace-nowrap ">
                                {card.tooltip}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* 👇 شريط معلومات إضافي */}
   <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
>
  {[
    { icon: "🖱️", text: "اضغط على أي بطاقة للدخول إلى القسم مباشرة" },
    { icon: "⚡", text: "القائمة الجانبية توفر وصول أسرع للأقسام" },
    { icon: "💡", text: "راقب الأعداد لمعرفة حالة الموقع لحظيًا" },
  ].map((tip, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-white rounded-xl shadow-sm border flex items-center gap-3"
    >
      <span className="text-2xl">{tip.icon}</span>
      <p className="text-gray-700 font-medium">{tip.text}</p>
    </motion.div>
  ))}
</motion.div>

        </div>
    );
}
