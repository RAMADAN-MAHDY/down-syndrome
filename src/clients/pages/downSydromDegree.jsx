// DownSyndromeTypesAndDegrees.js
import React from "react";

export default function DownSyndromeTypesAndDegrees() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
        أنواع ودرجات متلازمة داون
      </h1>

      <p className="text-gray-700 mb-4 leading-relaxed">
        متلازمة داون هي اضطراب وراثي يحدث نتيجة وجود نسخة إضافية من الكروموسوم
        رقم 21. رغم أن السبب واحد، إلا أن هناك{" "}
        <span className="font-bold">أنواعًا مختلفة</span> و{" "}
        <span className="font-bold">درجات متفاوتة</span> من حيث التأثير على
        القدرات الجسدية والعقلية.
      </p>

      {/* الأنواع */}
      <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-2">
        أولًا: أنواع متلازمة داون
      </h2>

      <h3 className="text-xl font-semibold text-indigo-500 mt-4 mb-1">
        1. التثلث الصبغي 21 (Trisomy 21)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        وهو النوع الأكثر شيوعًا (حوالي 95% من الحالات)، حيث يحتوي كل خلية في جسم
        المصاب على نسخة إضافية كاملة من الكروموسوم 21.
      </p>

      <h3 className="text-xl font-semibold text-indigo-500 mt-4 mb-1">
        2. الانتقال الكروموسومي (Translocation)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        يحدث في حوالي 3-4% من الحالات، عندما يلتصق جزء من الكروموسوم 21 بكروموسوم
        آخر. هذا النوع قد يكون موروثًا من أحد الأبوين.
      </p>

      <h3 className="text-xl font-semibold text-indigo-500 mt-4 mb-1">
        3. الفسيفسائية (Mosaicism)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        يحدث في حوالي 1-2% من الحالات، حيث تحتوي بعض الخلايا على نسخة إضافية من
        الكروموسوم 21 بينما الخلايا الأخرى طبيعية. هذا قد يجعل الأعراض أقل
        وضوحًا مقارنة بالأنواع الأخرى.
      </p>

      {/* الدرجات */}
      <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-2">
        ثانيًا: درجات متلازمة داون
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        درجات متلازمة داون تُقاس غالبًا بناءً على{" "}
        <span className="font-bold">شدة التأخر العقلي</span> والقدرات
        التطورية، وتشمل:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed">
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

      <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-600 rounded">
        <p className="text-gray-700 leading-relaxed">
          💡 فهم نوع ودرجة متلازمة داون يساعد الأطباء والمعلمين والأسرة على
          توفير خطة رعاية وتعليم مناسبة لتحسين جودة حياة الفرد.
        </p>
      </div>
    </div>
  );
}
