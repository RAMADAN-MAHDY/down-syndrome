
import React, { useState } from "react";
import axios from "axios";

export default function SearchNews() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const savedAnswers = JSON.parse(localStorage.getItem("survey-storage")) || {};

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(
        `https://down-syndrome-api.vercel.app/api/search?keyword=${searchTerm}`,
        {
          ageGroupId: savedAnswers.state?.answers?.ageGroupId?.id,
          type: savedAnswers.state?.answers?.problemTag,
        }
      );
      setResults(res.data);
      setSearchTerm("");
    } catch (error) {
      console.error("حدث خطأ أثناء البحث:", error);
      if (error.response) {
        setError(error.response.data?.message || "حدث خطأ أثناء البحث");
      } else {
        setError(error.message || "حدث خطأ غير متوقع");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-10">
      {/* input البحث */}
      <form onSubmit={handleSearch} className="flex justify-center">
        <input
          type="text"
          placeholder="ابحث الآن"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-2xl px-4 py-2 rounded-lg border-b border-pink-500 shadow-md text-lg outline-none"
        />
      </form>

      {loading && <p className="text-center mt-4">جاري البحث...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {results.length > 0 && (
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {results.map((item) => (
            <li
              key={item._id}
              className="p-4 rounded-xl shadow-lg border border-gray-200 bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                  className="w-full h-48 md:h-56 object-cover rounded-md mx-auto"

              />
              <h3 className="text-xl font-semibold text-purple-600 mt-4 mb-2 text-center drop-shadow">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">النوع: {item.type}</p>
              <p className="text-gray-600 text-sm">الموضوع: {item.topic}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
