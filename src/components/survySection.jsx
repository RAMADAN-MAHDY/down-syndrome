import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaHeart } from "react-icons/fa";
import axios from "axios";

const defaultQuestions = [
  {
    id: "ageGroupId",
    question: "ما عمر الطفل؟",
    options: [],
  },
  {
    id: "problemTag",
    question: "ما التحدي الرئيسي الذي يواجهه الطفل؟",
    options: [
      "تأخر في الكلام",
      "فرط حركة",
      "صعوبات تعلم",
      "مشاكل حركية",
      "سلوكيات غير متزنة",
    ],
  },
  {
    id: "previousSupport",
    question: "هل حصل الطفل على دعم أو جلسات تأهيلية سابقًا؟",
    options: [
      "نعم، بشكل منتظم",
      "نعم، لكن بشكل متقطع",
      "لا",
      "لا أعلم",
    ],
  },
];

export default function SurvySection() {
  const [questions, setQuestions] = useState(defaultQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // useEffect(()=>{
  //   const saveAnswers=localStorage.getItem("userAnswers")
  //   if(saveAnswers){
  //     setSubmitted(true)
  //   }
  // },[])
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

  const handleAnswer = (answerText) => {
    const currentQuestion = questions[currentIndex];
    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: answerText,
    };

    setAnswers(updatedAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("الإجابات النهائية:", updatedAnswers);
      localStorage.setItem("userAnswers", JSON.stringify(updatedAnswers));
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center my-10">
        <h2 className="text-xl font-bold mb-4 text-white flex items-center justify-center gap-2">
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
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl  shadow-lg">
      {/* العنوان */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <h1 className="text-blue-700 text-3xl font-bold">ابدأ الاستبيان الآن</h1>
        <FaChevronDown className="text-white text-2xl animate-bounce" />
      </div>

      {/* السؤال */}
      <h2 className="text-xl font-bold text-white mb-6 text-right leading-relaxed">
        {currentQuestion.question}
      </h2>

      {/* الخيارات */}
      <div className="flex flex-col gap-3">
        {currentQuestion.options.length > 0 ? (
          currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option._id ? option._id : option)}
              className="text-right text-white px-4 py-3 border border-white/40 rounded-xl hover:bg-white/10 focus:ring-2 focus:ring-white/30 transition-all duration-200"
            >
              {option.name ? option.name : option}
            </button>
          ))
        ) : (
          <p className="text-center text-white/70">جاري تحميل الخيارات...</p>
        )}
      </div>
    </div>
  );
}
