// SearchEvents.jsx
import React, { useState } from "react";
import axios from "axios";

export default function SearchEvents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      let data = [];

      if (searchTerm.trim()) {
        const res = await axios.get(
          "https://down-syndrome-api.vercel.app/api/EventSearch",
          { params: { keyword: searchTerm.trim() } }
        );
        data = res.data || [];
      }

      if (eventType) {
        data = data.filter((item) => item.type === eventType);
      }

      if (data.length === 0) {
        setError("لا توجد نتائج مطابقة");
      } else {
        setResults(data);
      }
    } catch (err) {
      console.error(
        "حدث خطأ أثناء البحث:",
        err.response ? err.response.data : err.message
      );
      setError("تعذر البحث عن الأحداث");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-10 max-w-3xl mx-auto text-center">
      {/* فورم البحث */}
      <form onSubmit={handleSearch} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="ابحث الآن"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 text-lg border-b-2 border-pink-400 
                     focus:outline-none focus:border-pink-600"
        />

        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="w-full px-4 py-2 text-lg border-b-2 border-pink-400 
                     focus:outline-none focus:border-pink-600"
        >
          <option value="">اختر نوع الحدث (اختياري)</option>
          <option value="تعليم">تعليم</option>
          <option value="رياضه">رياضه</option>
          <option value="صحة">صحة</option>
        </select>

        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-10 rounded-lg shadow-md 
                     hover:bg-purple-500 self-center transition"
        >
          بحث
        </button>
      </form>

      {/* رسائل */}
      {loading && <p className="text-center mt-2">جاري البحث...</p>}
      {error && <p className="text-center mt-2 text-purple-600">{error}</p>}

      {/* النتائج */}
      {results.length > 0 && (
        <div className="mt-8 flex justify-center">
          <ul className="flex flex-wrap gap-6 justify-center">
            {results.map((item) => (
              <li
                key={item._id}
                className="w-72 p-4 border border-purple-300 rounded-lg shadow 
                           hover:shadow-lg hover:scale-105 
                           transition-transform duration-200 bg-white"
              >
                <h3 className="text-lg font-bold text-purple-700">{item.title}</h3>
                <p>النوع: {item.type}</p>
                <p>التاريخ: {item.date}</p>
                <small>الموعد: {item.time}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
