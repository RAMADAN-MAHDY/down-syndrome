import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import SearchEvents from "../components/searchEvents";

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
        <div className="flex flex-col gap-4">
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
              <div className="flex gap-3 text-gray-500 text-sm">
                <span>{event.date}</span>
                <span>{event.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p>لا توجد فعاليات متاحة</p>
      )}
    </motion.div>
  );
}
