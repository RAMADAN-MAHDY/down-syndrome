
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function ContentBySlug() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const sluge = searchParams.get("sluge");

  const savedData = JSON.parse(localStorage.getItem("survey-storage"));
  const ageGroupId = savedData?.state?.answers?.ageGroupId?.id;
  const problemTag = savedData?.state?.ansswers?.problemTag;

  useEffect(() => {
    async function getContentBySlug() {
      try {
        const response = await axios.get(
          "https://down-syndrome-api.vercel.app/api/content/filter",
          {
            params: {
              ageGroupId,
              problemTag,
              sluge,
            },
          }
        );
        setContent(response.data);
      } catch (error) {
        console.error("حدث خطأ أثناء جلب المحتوى:", error);
      } finally {
        setLoading(false);
      }
    }

    getContentBySlug();
  }, [ageGroupId, problemTag, sluge]);

  if (loading) return <p className="text-center mt-10">جاري تحميل المحتوى...</p>;

  if (content.length === 0)
    return <p className="text-center mt-10">لا يوجد محتوى متاح حاليًا.</p>;

  return (
    <div className="p-4 flex flex-wrap justify-center gap-6 mx-5">
  {content.map((item, idx) => (
    <motion.div
      key={item._id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      className="relative bg-white p-6 rounded-2xl shadow-md border border-gray-100 w-full sm:w-[350px] flex flex-col"
    >
      {/* الخط الوردي على الشمال */}
      <span className="absolute left-0 top-0 h-full w-1 bg-pink-500 rounded-l-2xl"></span>

      {/* العنوان */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        className="text-lg text-purple-600 font-bold mb-3"
      >
        {item.description}
      </motion.h2>

      {/* النص */}
      <p className="text-gray-900 whitespace-pre-line flex-grow">{item.articleText}</p>

      {/* الفيديو */}
      {item.sluge === "vid" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.3 }}
          className="relative mt-4 w-full flex justify-center"
        >
          <iframe
            className="w-full max-w-[300px] h-48 rounded-xl shadow-md"
            src={item.url}
            title={item.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </motion.div>
      )}
    </motion.div>
  ))}
</div>

  );
}
