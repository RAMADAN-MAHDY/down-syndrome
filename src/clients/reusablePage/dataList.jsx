import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataList({ endpoint, params, title }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(endpoint, { params });
        setData(res.data);
      } catch (err) {
        console.error("فشل في جلب البيانات:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, params]);
  



  if (loading) return <p className="text-center my-10">جارٍ تحميل المحتوى...</p>;

  if (data.length === 0) {
    return <p className="text-center my-10 text-gray-600">لا توجد بيانات متاحة.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">{title}</h2>
      <div className="space-y-6">
        {data.map((item) => (
          <div key={item._id} className="border border-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">{item.title}</h3>
            {item.image && (
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded mb-2" />
            )}
            <p className="text-sm text-gray-500 mb-1">النوع: {item.type}</p>
            <p className="text-sm text-gray-500 mb-1">
              الفئة العمرية: {item.ageGroup?.name || item.age_group?.name}
            </p>
            {item.problemTag && (
              <p className="text-sm text-gray-500 mb-1">التحدي: {item.problemTag}</p>
            )}
           
            {item.description && (
              <p className="text-gray-700 mt-2">{item.description}</p>
            )}
            {item.topic && (
              <p className="text-gray-700 mt-2">{item.topic}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
