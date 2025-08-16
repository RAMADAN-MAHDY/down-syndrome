import React from "react";
import useSurveyStore from "../store/useSurveyStore";

export default function Settings() {
  const { questions, answers, updateAnswer } = useSurveyStore();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        تعديل الإجابات
      </h2>

      {questions.map((q) => (
        <div key={q.id} className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {q.question}
          </h3>

          <select
            value={answers[q.id] || ""}
            onChange={(e) => updateAnswer(q.id, e.target.value)} 
            className="w-full p-3 border rounded-lg text-gray-700"
          >
            
            {q.options.map((opt, index) => (
              <option key={index} value={opt._id ? opt._id : opt}>
                {opt.name ? opt.name : opt}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
