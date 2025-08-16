
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaHeart } from "react-icons/fa";
import axios from "axios";
import useSurveyStore from "../store/useSurveyStore";

export default function SurvySection() {
  const {
    questions,
    currentIndex,
    submitted,
    handleAnswer,
    setQuestions,
  } = useSurveyStore();

  
  useEffect(() => {
    axios
      .get("https://down-syndrome-api.vercel.app/api/getAgeGroups")
      .then((res) => {
        const ageGroups = res.data.map((item) => ({
          id: item._id,
          name: item.name,
        }));
        const updatedQuestions = [...questions];
        updatedQuestions[0].options = ageGroups;
        setQuestions(updatedQuestions);
      })
      .catch((err) => {
        console.error("فشل في جلب الفئات العمرية", err);
      });
  }, []);

  if (submitted) {
    return (
      <div className="text-center my-10">
        <h2 className="text-xl font-bold mb-4 text-pink-500 flex items-center justify-center gap-2">
          تم حفظ إجاباتك بنجاح
          <FaHeart className="text-pink-400 text-2xl" />
        </h2>
        <Link
          to="/home"
          className="inline-block px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
        >
          تصفح الآن
        </Link>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg">
      {/* العنوان */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <h1 className="text-blue-700 text-3xl font-bold">ابدأ الاستبيان الآن</h1>
        <FaChevronDown className="text-blue-700 text-2xl animate-bounce" />
      </div>

      {/* السؤال */}
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-right leading-relaxed">
        {currentQuestion.question}
      </h2>

      {/* الخيارات */}
      <div className="flex flex-col gap-3">
        {currentQuestion.options.length > 0 ? (
          currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option._id ? option._id : option)}
              className="text-right text-blue-700 font-bold px-4 py-3 hover:bg-black/10 border-none outline-none"
            >
              {option.name ? option.name : option}
            </button>
          ))
        ) : (
          <p className="text-center text-blue-700">جاري تحميل الخيارات...</p>
        )}
      </div>
    </div>
  );
}
