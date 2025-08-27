
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaHeart } from "react-icons/fa";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import useSurveyStore from "../store/useSurveyStore";

export default function SurvySection() {
  const { questions, currentIndex, submitted, handleAnswer, setQuestions } = useSurveyStore();

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
        console.error("فشل في جلب الفئات العمرية", err.response? err.response.data:err.message);
      });
  }, []);

  if (submitted) {
    return (
      <div className="text-center my-10">
        <h2 className="text-xl font-extrabold mb-4 text-white flex items-center justify-center gap-2">
          تم حفظ إجاباتك بنجاح
          <FaHeart className="text-pink-400 text-2xl" />
        </h2>
        <Link
          to="/home"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          تصفح الآن
        </Link>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const questionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  return (
    <div className="max-w-md mt-10 p-8 rounded-3xl shadow-2xl text-right ml-auto">

      {/* العنوان */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-end gap-3 mb-8"
      >
        <h1 className="text-white text-3xl font-extrabold">
          ابدأ الاستبيان الآن
        </h1>
        <FaChevronDown className="text-blue-400 text-2xl animate-bounce" />
      </motion.div>

      {/* السؤال والخيارات مع AnimatePresence */}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentIndex}
          variants={questionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* السؤال */}
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed">
            {currentQuestion.question}
          </h2>

          {/* الخيارات */}
          <div className="flex flex-col gap-4">
            {currentQuestion.options.length > 0 ? (
              currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    const answerToStore = option.id
                      ? { id: option.id, name: option.name }
                      : option;
                    handleAnswer(answerToStore);
                  }}
                  className="
                    text-right text-white font-semibold px-5 py-3 
                    rounded-xl shadow-lg 
                    bg-white/20 backdrop-blur-lg border border-white/30
                    hover:bg-white/30 hover:scale-105 transition-all duration-300
                  "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.name ? option.name : option}
                </motion.button>
              ))
            ) : (
              <p className="text-right text-purple-300">جاري تحميل الخيارات...</p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
