
import React from "react";
import DataList from "../reusablePage/dataList";
import { useParams } from "react-router-dom";
import SearchNews from "../components/searchNews";
import { motion } from "framer-motion";

export default function NewsPage() {
  const savedAnswers = JSON.parse(localStorage.getItem("userAnswers")) || {};
  const { type } = useParams();

  return (
    <div className="px-4">
      {/* العنوان ينزل من فوق */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold text-purple-600 text-center mt-6 mb-6 drop-shadow-md"
      >
        المقالات والأخبار - {type}
      </motion.h2>

      <SearchNews />

      {/* المحتوى يطلع من تحت */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <DataList
          endpoint="https://down-syndrome-api.vercel.app/api/getArticle"
          params={{
            ageGroupId: savedAnswers.ageGroupId,
            type: type,
          }}
        />
      </motion.div>
    </div>
  );
}
