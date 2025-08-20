import React, { useEffect, useState } from "react";
import axios from "axios";
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
        console.log(res.data)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching messages:", err.response?err.response.data:err.message);
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
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-2xl">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        طلبات الاتصال
      </h2>

      {/* 🟢 جدول عرض كل الرسائل */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-2 border">رقم الطلبpm run</th>
            <th className="p-2 border">الاسم</th>
            <th className="p-2 border">التليفون</th>
            <th className="p-2 border">التاريخ</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg, index) => (
            <tr key={msg._id} className="hover:bg-gray-50">
              <td className="p-2 border text-center">{index + 1}</td>
              <td className="p-2 border">{msg.title}</td>
              <td className="p-2 border">{msg.phone}</td>
              <td className="p-2 border">{msg.date}</td>
              <td className="p-2 border text-center">
                <button
                  onClick={() => fetchMessageById(msg._id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                  عرض
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🟢 عرض تفاصيل الرسالة المختارة */}
      {selectedMessage && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">تفاصيل الرسالة</h3>
          <p> {selectedMessage.title}<strong>:الاسم</strong></p>
          <p><strong>التليفون:</strong> {selectedMessage.phone}</p>
          <p><strong>التاريخ:</strong> {selectedMessage.date}</p>
        </div>
      )}
    </div>
  );
}
