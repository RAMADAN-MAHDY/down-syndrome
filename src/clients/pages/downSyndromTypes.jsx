// DownSyndromeTypes.js
import React from "react";

export default function DownSyndromeTypes() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8 animate-fadeIn">
   <h1 className="text-3xl font-bold text-purple-700 mb-7 text-center relative inline-block">
  أنواع متلازمة داون
  <span className="absolute left-0 -bottom-4 h-[2px] bg-pink-500 animate-expandUnderline w-0"></span>
</h1>


      <p className="text-gray-700 mb-4 leading-relaxed">
        متلازمة داون لها أكثر من نوع، ويختلف كل نوع حسب طبيعة التغير الجيني
        الذي يحدث. الأنواع الرئيسية هي:
      </p>

      {/* النوع الأول */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2 relative">
        1. التثلث الصبغي 21 (Trisomy 21)
       
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        وهو النوع الأكثر شيوعًا، حيث يمثل حوالي <span className="font-bold">95%</span> من الحالات.
        يحدث عندما يكون لدى الطفل نسخة إضافية كاملة من الكروموسوم رقم 21 في جميع الخلايا، بدلًا من نسختين فقط.
        هذا يؤدي إلى التغيرات الجسدية والعقلية المميزة لمتلازمة داون.
      </p>

      {/* النوع الثاني */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2 relative">
        2. متلازمة داون الفسيفسائية (Mosaic Down Syndrome)
       
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        تمثل حوالي <span className="font-bold">1-2%</span> فقط من الحالات.
        في هذا النوع، بعض الخلايا تحتوي على نسخة طبيعية من الكروموسومات (46 كروموسومًا)،
        بينما تحتوي خلايا أخرى على نسخة إضافية من الكروموسوم 21 (47 كروموسومًا).
        قد تكون الأعراض أقل وضوحًا حسب نسبة الخلايا المتأثرة.
      </p>

      {/* النوع الثالث */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2 relative">
        3. متلازمة داون بالانتقال (Translocation Down Syndrome)
        
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        تمثل حوالي <span className="font-bold">3-4%</span> من الحالات.
        هنا لا يكون هناك كروموسوم إضافي كامل، بل ينتقل جزء من الكروموسوم 21 ويلتصق بكروموسوم آخر.
        يمكن أن يكون هذا الانتقال وراثيًا من أحد الوالدين أو يحدث بشكل عشوائي.
        قد يؤدي إلى نفس الأعراض الخاصة بمتلازمة داون.
      </p>

      <div className="mt-6 p-4 bg-pink-50 border-l-4 border-purple-600 rounded">
        <p className="text-gray-700 leading-relaxed">
          👉 فهم الأنواع المختلفة يساعد الأطباء والأهل على تحديد أفضل الطرق
          للتعامل مع الطفل وتقديم الدعم المناسب له.
        </p>
      </div>

      {/* أنيميشن CSS */}
      <style>
        {`
          /* حركة دخول للصفحة */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }

          /* حركة توسعة الخط */
          @keyframes expandUnderline {
            from { width: 0; }
            to { width: 100%; }
          }
          .animate-expandUnderline {
            display: inline-block;
            width: 0;
            animation: expandUnderline 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
