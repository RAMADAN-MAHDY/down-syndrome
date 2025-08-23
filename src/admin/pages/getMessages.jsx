import React, { useEffect, useState } from "react";
import axios from "axios";
import { Phone, User, Calendar, Eye } from "lucide-react";
import UseVerifyToken from "../hook/verifyToken";

export default function GetMessages() {
    UseVerifyToken();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMessage, setSelectedMessage] = useState(null);


    // 🟢 جلب جميع الرسائل
    useEffect(() => {
        axios
            .get("https://down-syndrome-api.vercel.app/api/admin/contact-us-all", { withCredentials: true })
            .then((res) => {
                setMessages(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching messages:", err.response ? err.response.data : err.message);
                setLoading(false);
            });
    }, []);

    // 🟢 جلب رسالة معينة عند الضغط عليها
    const fetchMessageById = (id) => {
        axios
            .get(`https://down-syndrome-api.vercel.app/api/admin/contact-us/${id}`, { withCredentials: true })
            .then((res) => setSelectedMessage(res.data))
            .catch((err) => console.error("Error fetching single message:", err));
    };

    if (loading) return <p className="text-center">جاري التحميل...</p>;

    return (
        <div className="max-w-6xl mx-auto mt-10 p-6">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
                📩 طلبات الاتصال
            </h2>

            {/* 🟢 رسائل */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {messages.map((msg) => (
                    <div
                        key={msg._id}
                        className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
                    >
                        <div className="flex  justify-end mb-4">
                            {/* <span className="text-sm text-gray-400">#{index + 1}</span> */}
                            <button
                                onClick={() => fetchMessageById(msg._id)}
                                className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm transition"
                            >
                                <Eye size={16} /> عرض
                            </button>
                        </div>

                        <div className="space-y-3 text-gray-700">
                            <p className="flex items-center gap-2">
                                <User className="text-blue-500" size={18} />
                                <span className="font-semibold">{msg.title}</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="text-green-500" size={18} />
                                {msg.phone}
                            </p>
                            <p className="flex items-center gap-2">
                                <Calendar className="text-purple-500" size={18} />
                                {msg.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🟢 تفاصيل الرسالة */}
            {selectedMessage && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#44554457] bg-opacity-50 z-50">
                    <div className="bg-white p-6 transform transition-all opacity-0 animate-fadeIn scale-95 rounded-2xl shadow-2xl max-w-lg w-full">
                        <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                            تفاصيل الرسالة
                        </h3>

                        <div className="space-y-4 text-gray-600">
                            <p><strong>👤 الاسم:</strong> {selectedMessage.title}</p>
                            <p><strong>📞 التليفون:</strong> {selectedMessage.phone}</p>
                            <p><strong>📅 التاريخ:</strong> {selectedMessage.date}</p>
                        </div>

                        <button
                            onClick={() => setSelectedMessage(null)} // أو خليها state clear
                            className="mt-6 w-full shadow-[12px_12px_12px_rgba(231,131,133,0.8)] bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transform transition-all opacity-0 animate-fadeOut scale-85"
                        >
                            إغلاق
                        </button>
                    </div>
                </div>
            )}
        </div>

    );
}
