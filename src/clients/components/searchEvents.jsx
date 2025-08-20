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
      const res = await axios.get(
        "https://down-syndrome-api.vercel.app/api/EventSearch",
        {
          params: {
            keyword: searchTerm.trim(),
            type: eventType || "",
          },
        }
      );

      navigate("/home/filterSearch", { state: { results: res.data || [] } });
      setSearchTerm("");
      setEventType("");
    } catch (error) {
      console.error("حدث خطأ أثناء البحث:", error);
      setError("تعذر البحث عن الأحداث");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="flex flex-col gap-3 mt-5 mb-10">
        <input
          type="text"
          placeholder="ابحث الآن"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-3xl px-4 py-1 rounded-lg border border-purple-500 shadow-lg text-lg outline-none"
        />

        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="w-full max-w-3xl px-4 py-1 rounded-lg border border-purple-500 shadow-lg text-lg outline-none"
        >
          <option value="">اختر نوع الحدث (اختياري)</option>
          <option value="تعليم">تعليم</option>
          <option value="رياضه">رياضه</option>
          <option value="صحة">صحة</option>
        </select>

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          بحث
        </button>
      </form>

      {loading && <p>جاري البحث...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {searched && !loading && !error && (
        <p>لا توجد نتائج مطابقة</p>
      )}
    </div>
  );
}
