import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ContentPage() {
  const [contentData, setContentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem("userAnswers"));

    if (!savedAnswers) {
      setLoading(false);
      return;
    }

    axios
      .get("https://down-syndrome-api.vercel.app/api/content/filter", {
        params: {
          ageGroupId: savedAnswers.ageGroupId || undefined,
          problemTag: savedAnswers.problemTag || undefined,
        
        },
      })
      .then((res) => {
        setContentData(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.error("فشل في جلب البيانات:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center my-10">جارٍ تحميل المحتوى...</p>;

  if (contentData.length === 0) {
    return <p className="text-center my-10 text-gray-600">لم يتم العثور على محتوى مناسب حتى الآن.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">محتوى مخصص لطفلك</h2>

      <div className="space-y-6">
        {contentData.map((item) => (
          <div key={item._id} className="border border-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-1">نوع: {item.type}</p>
            <p className="text-sm text-gray-500 mb-1">الفئة العمرية: {item.ageGroup?.name}</p>
            <p className="text-sm text-gray-500 mb-1">التحدي: {item.problemTag}</p>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
