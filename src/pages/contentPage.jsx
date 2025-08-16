import React from "react";
import DataList from "../reusablePage/dataList";

export default function ContentPage() {
  const savedAnswers = JSON.parse(localStorage.getItem("userAnswers")) || {};

  return (
    <DataList
      endpoint="https://down-syndrome-api.vercel.app/api/content/filter"
      params={{
        ageGroupId: savedAnswers.ageGroupId,
        problemTag: savedAnswers.problemTag,
      }}
      title="محتوى مخصص لطفلك"
    />
  );
}
