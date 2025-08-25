import React from "react";

export default function DownSyndromeLife() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8 overflow-hidden">
      {/* Animation wrapper */}
      <div className="animate-slideIn">
        <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center relative inline-block">
          هل يمكن لمصاب متلازمة داون الزواج والإنجاب؟
          <span className="block h-[2px] bg-pink-500 animate-expandUnderline mt-5 w-[fit-content] mx-auto"></span>
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          نعم، الأشخاص المصابون بمتلازمة داون يمكنهم أن يعيشوا حياة اجتماعية
          طبيعية إلى حد كبير، بما في ذلك الزواج، إذا توفرت لهم{" "}
          <span className="font-bold">الرعاية المناسبة والدعم الأسري والقانوني</span>.
        </p>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-2 relative inline-block">
          أولًا: الزواج
         
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          - من الناحية القانونية والاجتماعية، يحق للمصاب بمتلازمة داون الزواج إذا
          كان قادرًا على اتخاذ القرار ويدرك معنى الزواج ومسؤولياته.  
          - يحتاج في الغالب إلى دعم الأسرة والمجتمع لتحقيق حياة زوجية مستقرة.
        </p>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-2 relative inline-block">
          ثانيًا: الإنجاب
          
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          - من الناحية الطبية:  
          <ul className="list-disc list-inside mt-2 mb-3">
            <li>
              <span className="font-bold">النساء:</span> قادرات على الإنجاب، لكن
              نسبة الخصوبة أقل من النساء غير المصابات، كما أن هناك{" "}
              <span className="font-bold">احتمالًا أعلى لإنجاب طفل مصاب
              بمتلازمة داون</span>.
            </li>
            <li>
              <span className="font-bold">الرجال:</span> معظم الرجال المصابين
              بمتلازمة داون يعانون من <span className="font-bold">ضعف أو
              انعدام الخصوبة</span>، ونادر جدًا حدوث إنجاب.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-2 relative inline-block">
          ثالثًا: الاعتبارات الأخلاقية والطبية
         
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          - يحتاج قرار الزواج والإنجاب إلى تقييم طبي ونفسي وقانوني.  
          - من المهم وجود <span className="font-bold">توعية ودعم أسري
          متكامل</span> لضمان حياة صحية ومستقرة للزوجين وللأطفال المحتملين.
        </p>

        <div className="mt-6 p-4 bg-pink-50 border-l-4 border-purple-600 rounded">
          <p className="text-gray-700 leading-relaxed">
            💡 الخلاصة: يمكن لمصاب متلازمة داون الزواج، أما الإنجاب فممكن في حالة
            النساء مع بعض التحديات والمخاطر الوراثية، بينما يكون نادرًا جدًا لدى
            الرجال.
          </p>
        </div>
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

         @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
         }

         .animate-slideIn {
            animation: slideIn 0.8s ease-out forwards;
         }
        `}
      </style>
    </div>
  );
}
