
// DownSyndromeIQ.js
import React from "react";

export default function DownSyndromeIQ() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      {/* العنوان الرئيسي */}
      <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center relative">
        نسبة الذكاء لدى مصابي متلازمة داون
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-5 w-0 h-[2px] bg-pink-500 animate-[expand_1s_ease-out_forwards]"></span>
      </h1>

      {/* تنويه */}
      <div className="p-4 bg-pink-50 border-l-4 border-pink-500 rounded mb-6">
        <p className="text-gray-700 leading-relaxed">
          ⚠️ ملاحظة هامة: تختلف قدرات الذكاء بين الأشخاص المصابين بمتلازمة داون، 
          وبعضهم قد يحتاج دعم إضافي للتعلم والتطور.
        </p>
      </div>

      {/* 1. متوسط نسبة الذكاء */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        1. متوسط نسبة الذكاء
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        تشير الدراسات إلى أن متوسط نسبة الذكاء (IQ) لدى المصابين بمتلازمة داون
        يتراوح بين <span className="font-bold">35 إلى 70</span>. أغلب الحالات تقع
        في فئة التأخر العقلي البسيط إلى المتوسط.
      </p>

      {/* 2. القدرات التعليمية */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        2. القدرات التعليمية
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        يمكن للأطفال المصابين بمتلازمة داون تعلم القراءة والكتابة والمهارات
        الحسابية البسيطة، خاصة عند دمجهم في برامج تعليمية تعتمد على التكرار
        والصور والأنشطة العملية.
      </p>

      {/* 3. الذكاء الاجتماعي والعاطفي */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        3. الذكاء الاجتماعي والعاطفي
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        رغم أن نسبة الذكاء قد تكون أقل من المتوسط، إلا أن كثيرًا من الأشخاص
        المصابين بمتلازمة داون يتمتعون بنسبة عالية من 
        <span className="font-bold"> الذكاء الاجتماعي والعاطفي</span>.
      </p>

      {/* 4. عوامل تؤثر على التطور العقلي */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        4. عوامل تؤثر على التطور العقلي
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed">
        <li>التدخل المبكر (علاج طبيعي، نطق، دعم تعليمي).</li>
        <li>البيئة الداعمة والمحفزة.</li>
        <li>الدعم الأسري والنفسي المستمر.</li>
        <li>المتابعة الطبية لتجنب مشاكل السمع أو النظر التي قد تؤثر على التعلم.</li>
      </ul>

      {/* الخلاصة */}
      <div className="mt-6 p-4 bg-pink-50 border-l-4 border-purple-600 rounded">
        <p className="text-gray-700 leading-relaxed">
          💡 الخلاصة: الذكاء ليس العامل الوحيد لتحديد قدرات الشخص المصاب بمتلازمة داون،
          فالدعم والرعاية والبيئة المحيطة تصنع فرقًا كبيرًا في حياته اليومية وتطوره.
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
