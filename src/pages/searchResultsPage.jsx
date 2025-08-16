
import React from "react";
import { useLocation } from "react-router-dom";

export default function SearchResultsPage() {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div className="container mx-auto p-6">

      {results.length === 0 ? (
        <p className="text-gray-600">لا توجد نتائج مطابقة.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((item) => (
            <li
              key={item._id}
              className="p-4 border border-purple-300 rounded-lg shadow"
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p>النوع: {item.type}</p>
              <p>التاريخ: {item.date}</p>
              <small>الموعد: {item.time}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
