// DownSyndromeTypesAndDegrees.js
import React from "react";

export default function DownSyndromeTypesAndDegrees() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8 animate-fadeIn">
      {/* العنوان الرئيسي */}
      <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center relative inline-block">
        أنواع ودرجات متلازمة داون
        <span className="block h-[2px] bg-pink-500 animate-expandUnderline mt-5 w-[fit-content] mx-auto"></span>
      </h1>

      <p className="text-gray-700 mb-6 leading-relaxed">
        متلازمة داون هي اضطراب وراثي يحدث نتيجة وجود نسخة إضافية من الكروموسوم
        رقم 21. رغم أن السبب واحد، إلا أن هناك{" "}
        <span className="font-bold">أنواعًا مختلفة</span> و{" "}
        <span className="font-bold">درجات متفاوتة</span> من حيث التأثير على
        القدرات الجسدية والعقلية.
      </p>

      {/* الأنواع */}
      <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-2 relative inline-block">
        أولًا: أنواع متلازمة داون
        <span className="block h-[2px] bg-pink-500 w-[fit-content] mt-1"></span>
      </h2>

      <h3 className="text-xl font-semibold text-purple-600 mt-4 mb-1 relative inline-block">
        1. التثلث الصبغي 21 (Trisomy 21)
        <span className="block h-[2px] bg-pink-500 w-[fit-content] mt-1"></span>
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        وهو النوع الأكثر شيوعًا (حوالي 95% من الحالات)، حيث يحتوي كل خلية في جسم
        المصاب على نسخة إضافية كاملة من الكروموسوم 21.
      </p>

      <h3 className="text-xl font-semibold text-purple-600 mt-4 mb-2 relative inline-block">
        2. الانتقال الكروموسومي (Translocation)
        <span className="block h-[2px] bg-pink-500 w-[fit-content] mt-1"></span>
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        يحدث في حوالي 3-4% من الحالات، عندما يلتصق جزء من الكروموسوم 21 بكروموسوم
        آخر. هذا النوع قد يكون موروثًا من أحد الأبوين.
      </p>

      <h3 className="text-xl font-semibold text-purple-600 mt-4 mb-2 relative inline-block">
        3. الفسيفسائية (Mosaicism)
        <span className="block h-[2px] bg-pink-500 w-[fit-content] mt-1"></span>
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        يحدث في حوالي 1-2% من الحالات، حيث تحتوي بعض الخلايا على نسخة إضافية من
        الكروموسوم 21 بينما الخلايا الأخرى طبيعية. هذا قد يجعل الأعراض أقل
        وضوحًا مقارنة بالأنواع الأخرى.
      </p>

      {/* الدرجات */}
      <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-3 relative inline-block">
        ثانيًا: درجات متلازمة داون
        <span className="block h-[2px] bg-pink-500 w-[fit-content] mt-1"></span>
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        درجات متلازمة داون تُقاس غالبًا بناءً على{" "}
        <span className="font-bold">شدة التأخر العقلي</span> والقدرات
        التطورية، وتشمل:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed">
        <li>
          <span className="font-bold">الدرجة البسيطة:</span> نسبة ذكاء تتراوح
          بين 50–70، وقدرة على الاعتماد على النفس في أمور الحياة اليومية.
        </li>
        <li>
          <span className="font-bold">الدرجة المتوسطة:</span> نسبة ذكاء تتراوح
          بين 35–50، يحتاج الفرد فيها إلى دعم أكبر في التعليم والمهارات
          الحياتية.
        </li>
        <li>
          <span className="font-bold">الدرجة الشديدة:</span> نسبة ذكاء أقل من
          35، يصاحبها تحديات كبيرة في التعليم والاستقلالية، مع الحاجة إلى رعاية
          مستمرة.
        </li>
      </ul>

      <div className="mt-6 p-4 bg-pink-50 border-l-4 border-purple-600 rounded">
        <p className="text-gray-700 leading-relaxed">
          💡 فهم نوع ودرجة متلازمة داون يساعد الأطباء والمعلمين والأسرة على
          توفير خطة رعاية وتعليم مناسبة لتحسين جودة حياة الفرد.
        </p>
      </div>

      {/* Animation CSS */}
      <style>
        {`
         @keyframes expandUnderline {
            from { width: 0; }
            to { width: 100%; }
         }

         .animate-expandUnderline {
            animation: expandUnderline 1s forwards;
         }

         @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
         }

         .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
         }
        `}
      </style>
    </div>
  );
}
