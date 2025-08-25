// SearchEvents.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SearchEvents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();

async function handleSearch(e) {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setSearched(true);

  try {
    let results = [];

    if (searchTerm.trim()) {
      // البحث بالكلمة
      const res = await axios.get(
        "https://down-syndrome-api.vercel.app/api/EventSearch",
        {
          params: { keyword: searchTerm.trim() },
        }
      );
      results = res.data || [];

      // فلترة حسب النوع لو المستخدم اختاره
      if (eventType) {
        results = results.filter((event) => event.type === eventType);
      }
    } else {
      // لو مفيش كلمة، نجيب كل الأحداث
      const res = await axios.get(
        "https://down-syndrome-api.vercel.app/api/GetEvents"
      );
      results = res.data.events || [];

      if (eventType) {
        results = results.filter((event) => event.type === eventType);
      }
    }

    if (results.length === 0) {
      setError("لا توجد نتائج مطابقة");
    } else {
      navigate("/home/filterSearch", { state: { results } });
    }

    setSearchTerm("");
    setEventType("");
  } catch (error) {
    console.error("حدث خطأ أثناء البحث:", error.response ? error.response.data : error.message);
    setError("تعذر البحث عن الأحداث");
  } finally {
    setLoading(false);
  }
}


  return (
    <div className="mb-10">
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-3 max-w-3xl mx-auto"
      >
        <input
          type="text"
          placeholder="ابحث الآن"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 text-lg border-b-2 border-pink-400 focus:outline-none focus:border-pink-600"
        />

        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="w-full px-4 py-2 text-lg border-b-2 border-pink-400 focus:outline-none focus:border-pink-600"
        >
          <option value="">اختر نوع الحدث (اختياري)</option>
          <option value="تعليم">تعليم</option>
          <option value="رياضه">رياضه</option>
          <option value="صحة">صحة</option>
        </select>

        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-10 rounded-lg shadow-md hover:bg-purple-500 self-center"
        >
          بحث
        </button>
      </form>

      {loading && <p className="text-center mt-2">جاري البحث...</p>}
      {error && <p className="text-center mt-2 text-purple-600">{error}</p>}
      {searched && !loading && !error && <p className="text-center mt-2">لا توجد نتائج مطابقة</p>}
    </div>
  );
}
