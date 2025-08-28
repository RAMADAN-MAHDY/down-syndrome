import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import SearchEvents from "../components/searchEvents";

// 🟢 أيقونة الماركر
const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getEvents() {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(
          "https://down-syndrome-api.vercel.app/api/GetEvents"
        );
        setEvents(res.data.events || []);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("حدث خطأ أثناء تحميل الفعاليات");
      } finally {
        setLoading(false);
      }
    }
    getEvents();
  }, []);

  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <motion.div
      className="p-5 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <SearchEvents />

      <h1 className="text-2xl font-bold mt-5 mb-5">قائمة الفعاليات</h1>

      {events.length > 0 ? (
        <div className="flex flex-col gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event._id}
              className="p-4 bg-white shadow-lg rounded-lg relative border-l-4 border-pink-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
              <p className="text-purple-600 mb-1">{event.type}</p>
              <div className="flex gap-3 text-gray-500 text-sm mb-3">
                <span>{event.date}</span>
                <span>{event.time}</span>
              </div>

              {/* 🟢 هنا الخريطة */}
              {event.location?.coordinates?.length === 2 ? (
                <MapContainer
                  center={[
                    event.location.coordinates[0],
                    event.location.coordinates[1],
                  ]}
                  zoom={13}
                  style={{ height: "250px", width: "100%", borderRadius: "12px" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                  />
                  <Marker
                    position={[
                      event.location.coordinates[0],
                      event.location.coordinates[1],
                    ]}
                    icon={markerIcon}
                  >
                    <Popup>
                      {event.title} <br /> {event.date} - {event.time}
                    </Popup>
                  </Marker>
                </MapContainer>
              ) : (
                <p className="text-gray-400">📍 لا يوجد موقع لهذا الحدث</p>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <p>لا توجد فعاليات متاحة</p>
      )}
    </motion.div>
  );
}
