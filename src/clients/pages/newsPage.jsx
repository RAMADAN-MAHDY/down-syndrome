import React from "react";
import DataList from "../reusablePage/dataList";
import { useParams } from "react-router-dom";
import SearchNews from "../components/searchNews";

export default function NewsPage() {
  const savedAnswers = JSON.parse(localStorage.getItem("userAnswers")) || {};
  const { type } = useParams();

  return (
    <>
    <SearchNews/>
     <DataList
      endpoint="https://down-syndrome-api.vercel.app/api/getArticle"
      params={{
        ageGroupId: savedAnswers.ageGroupId,
        type: type
      }}
      title={`المقالات والأخبار - ${type}`}
    />
    </>
   
  );
}
