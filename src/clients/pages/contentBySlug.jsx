
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function ContentBySlug() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const sluge = searchParams.get("sluge"); 

  const savedData = JSON.parse(localStorage.getItem("updatedAnswers"));
  const ageGroupId = savedData?.ageGroupId;
  const problemTag = savedData?.problemTag;

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
    <div className="p-4 space-y-6">
      {content.map((item) => (
        <div
          key={item._id}
          className="bg-white p-4 rounded-2xl shadow-md border border-gray-100"
        >
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-700 mb-2">{item.description}</p>
          <p className="text-gray-900 whitespace-pre-line">{item.articleText}</p>

          {item.sluge === "vid" ? (
            <iframe
            className="w-full h-64 rounded-xl"
            src={item.url}
            title={item.title}
            frameBorder="0"
            allowFullScreen
            ></iframe>) :(
            <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline">
               </a>)}


        </div>
      ))}
    </div>
  );
}
