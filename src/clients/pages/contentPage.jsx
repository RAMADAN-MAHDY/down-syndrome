import React from "react";
import DataList from "../reusablePage/dataList";

export default function ContentPage() {
  const savedAnswers = JSON.parse(localStorage.getItem("survey-storage")) || {};
console.log("📌 Saved Answers:", savedAnswers);

  const params = {
    ageGroupId: savedAnswers.state?.answers?.ageGroupId?._id, 
    problemTag: savedAnswers.state?.answers?.problemTag
  };

  console.log("📌 Params to API:", params);

  return (
    <DataList
      endpoint="https://down-syndrome-api.vercel.app/api/content/filter"
      params={params}
      title="محتوى مخصص لطفلك"
    />
  );
}
