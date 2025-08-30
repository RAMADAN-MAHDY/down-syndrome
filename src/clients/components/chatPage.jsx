import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function ChatWidget({ closeChat }) {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [token, setToken] = useState(localStorage.getItem("chatToken") || "");

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      const res = await axios.post(
        "https://down-syndrome-ai-chat-api.vercel.app/chat",
        { message: input },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReply(res.data.reply);

      if (res.data.token) {
        setToken(res.data.token);
        localStorage.setItem("chatToken", res.data.token);
      }

      setInput("");
    } catch (err) {
      console.error("خطأ في المحادثة:", err.response ? err.response.data : err.message);
    }
  };

  return (
    // الخلفية شبه الشفافة
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50">
      
      {/* البوب أب نفسه */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="w-96 bg-white rounded-2xl shadow-lg border p-4 relative"
      >
        {/* زر الإغلاق */}
        <button
          onClick={closeChat}
          className="absolute top-2 left-4 text-pink-500 hover:text-gray-800"
        >
          ✖
        </button>

        <div className="h-48 overflow-y-auto border-b border-pink-500 p-4">
          {reply ? (
            <p className="text-gray-800 text-sm">{reply}</p>
          ) : (
            <p className="text-gray-400 text-sm">ابدأ المحادثة الآن...</p>
          )}
        </div>

        <div className="flex mt-3 gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 text-black border-b border-pink-400 rounded-lg px-3 py-1 text-sm outline-none"
            placeholder="اكتب رسالتك..."
          />
          <button
            onClick={handleSend}
            className="bg-purple-500 text-white px-3 py-1 rounded-lg"
          >
            إرسال
          </button>
        </div>
      </motion.div>
    </div>
  );
}
