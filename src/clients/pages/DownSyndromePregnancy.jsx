// DownSyndromePregnancySymptoms.js
import React from "react";

export default function DownSyndromePregnancy() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      {/* العنوان الرئيسي */}
      <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center relative">
        أعراض متلازمة داون أثناء الحمل
        {/* الخط المتحرك تحت العنوان */}
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-5 w-0 h-[2px] bg-pink-500 animate-[expand_1s_ease-out_forwards]"></span>
      </h1>

      {/* تنويه */}
      <div className="p-4 bg-pink-50 border-l-4 border-purple-500 rounded mb-6">
        <p className="text-gray-700 leading-relaxed">
          ⚠️ ملاحظة هامة: لا توجد أعراض جسدية واضحة على الأم الحامل تؤكد إصابة
          الجنين بمتلازمة داون. التشخيص يعتمد على الفحوصات الطبية والتحاليل
          المخبرية، لكن بعض العلامات قد تُشير لاحتمالية وجود الحالة.
        </p>
      </div>

      {/* الأعراض المحتملة عبر الفحوصات */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        العلامات المحتملة أثناء الحمل
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed">
        <li>نتائج غير طبيعية في تحاليل الدم الخاصة بالفحص الأولي للحمل (Screening).</li>
        <li>زيادة سماكة السائل خلف رقبة الجنين (Nuchal translucency) في السونار.</li>
        <li>مستويات غير طبيعية لهرمونات الحمل مثل β-hCG و PAPP-A.</li>
        <li>بطء نمو الجنين مقارنةً بالمعدل الطبيعي.</li>
        <li>وجود تشوهات خلقية في القلب أو الأمعاء أثناء التصوير بالموجات فوق الصوتية.</li>
      </ul>

      {/* عوامل الخطر */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        عوامل تزيد من احتمالية إصابة الجنين
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed">
        <li>عمر الأم فوق 35 عامًا.</li>
        <li>وجود تاريخ عائلي لمتلازمة داون.</li>
        <li>الحمل السابق بطفل مصاب بمتلازمة داون.</li>
      </ul>

      {/* الفحوصات التشخيصية المؤكدة */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        الفحوصات المؤكدة
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        للتأكد بشكل نهائي من الإصابة، يلجأ الأطباء إلى فحوصات تشخيصية مثل:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed">
        <li>فحص بزل السلى (Amniocentesis).</li>
        <li>فحص عينة من الزغابات المشيمية (CVS).</li>
        <li>تحليل الحمض النووي الجنيني الحر (NIPT).</li>
      </ul>

      {/* الخلاصة */}
      <div className="mt-6 p-4 bg-pink-50 border-l-4 border-purple-600 rounded">
        <p className="text-gray-700 leading-relaxed">
          💡 الخلاصة: لا تظهر أعراض واضحة على الأم الحامل تشير مباشرةً إلى إصابة
          الجنين بمتلازمة داون، لكن الفحوصات المبكرة والمتابعة الطبية أثناء الحمل
          تساعد على الاكتشاف المبكر واتخاذ القرارات المناسبة.
        </p>
      </div>

      {/* إضافة حركة للخط تحت العنوان */}
      <style>
        {`
          @keyframes expand {
            0% { width: 0; }
            100% { width: 50%; }
          }
          .animate-[expand_1s_ease-out_forwards] {
            animation: expand 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
