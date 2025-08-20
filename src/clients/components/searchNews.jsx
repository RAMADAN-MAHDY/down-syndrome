import React, { useState } from "react";
import axios from "axios";

export default function SearchNews() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const savedAnswers = JSON.parse(localStorage.getItem("userAnswers")) || {};

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(
        `https://down-syndrome-api.vercel.app/api/search?keyword=${searchTerm}`,
        {
          ageGroupId: savedAnswers.ageGroupId,
          type: savedAnswers.problemTag,
        }
      );

      setResults(res.data);
      setSearchTerm('')
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
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="ابحث الآن"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-3xl px-4 py-1 rounded-lg border border-purple-500 shadow-lg text-lg outline-none mt-5 mb-10"

        />
      </form>

    
      {loading && <p>جاري البحث...</p>}

    
      {error && <p style={{ color: "red" }}>{error}</p>}

    
      {results.length > 0 && (
        <ul>
          {results.map((item) => (
            <li key={item._id}>
              <h3>{item.title}</h3>
              <p>النوع: {item.type}</p>
              <p>الموضوع: {item.topic}</p>
              <img src={item.image} alt={item.title} width="150" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
