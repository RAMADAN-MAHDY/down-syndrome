import React from "react";
import useSurveyStore from "../store/useSurveyStore";
import { motion } from "framer-motion";

export default function Settings() {
  const { questions, answers, updateAnswer, resetSurvey } = useSurveyStore();

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-xl bg-white"
    >
      {/* 👇 العنوان يدخل من فوق */}
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl font-bold text-purple-600 mb-6 text-center"
      >
        تعديل الإجابات
      </motion.h2>

      {questions.map((q) => (
        <div key={q.id} className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {q.question}
          </h3>

       <select
  value={q.id === "ageGroupId" ? answers[q.id]?.id || "" : answers[q.id] || ""}
  onChange={(e) => {
    if (q.id === "ageGroupId") {
      // نخزن object كامل فقط للفئة العمرية
      const selectedOption = q.options.find(opt => opt.id === e.target.value);
      updateAnswer(q.id, selectedOption);
    } else {
      // باقي الأسئلة تظل تخزن النصوص كما هي
      updateAnswer(q.id, e.target.value);
    }
  }}
  className="w-full p-3 border-b-2 border-pink-400 text-gray-700 focus:outline-none focus:border-pink-600 transition"
>
  {q.options.map((opt, index) => (
    <option key={index} value={opt.id ? opt.id : opt}>
      {opt.name ? opt.name : opt}
    </option>
  ))}
</select>

        </div>
      ))}

      <div className="text-center mt-6">
        <button
          onClick={resetSurvey}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
        >
          إعادة تعيين الاستبيان
        </button>
      </div>
    </motion.div>
  );
}
