
// SearchEvents.jsx
import React, { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";

// أيقونة الماركر
const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

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
        <div className="mt-8 flex flex-col gap-6">
          {results.map((item) => (
            <motion.div
              key={item._id}
              className="w-full p-4 border border-purple-300 rounded-lg bg-white"
              initial={{ boxShadow: "0px 0px 10px rgba(128, 0, 128, 0.2)", scale: 1 }}
              animate={{
                boxShadow: [
                  "0px 0px 10px rgba(128, 0, 128, 0.2)",
                  "0px 0px 20px rgba(128, 0, 128, 0.6)",
                  "0px 0px 10px rgba(128, 0, 128, 0.2)",
                ],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <h3 className="text-lg font-bold text-purple-700">{item.title}</h3>
              <p>النوع: {item.type}</p>
              <p>التاريخ: {item.date}</p>
              <small>الموعد: {item.time}</small>

              {/* الخريطة جوه كل حدث */}
              {item.location?.coordinates?.length === 2 ? (
                <MapContainer
                  center={[item.location.coordinates[0], item.location.coordinates[1]]}
                  zoom={13}
                  style={{
                    height: "200px",
                    width: "100%",
                    marginTop: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                  />
                  <Marker
                    position={[item.location.coordinates[0], item.location.coordinates[1]]}
                    icon={markerIcon}
                  >
                    <Popup>
                      {item.title} <br /> {item.date} - {item.time}
                    </Popup>
                  </Marker>
                </MapContainer>
              ) : (
                <p className="text-gray-400 mt-2">📍 لا يوجد موقع لهذا الحدث</p>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
