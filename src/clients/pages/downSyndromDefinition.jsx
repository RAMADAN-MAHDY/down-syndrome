// DownSyndromeDefinitionAndSymptoms.js
import React from "react";

export default function DownSyndromeDefinition() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      {/* العنوان الرئيسي مع خط متحرك */}
      <h1 className="text-3xl font-bold text-purple-600 mb-4 text-center relative inline-block animate-fadeInUp">
        ما هي متلازمة داون وأعراضها؟
        <span className="block h-[2px] bg-pink-500 mt-5 animate-expandUnderline"></span>
      </h1>

      {/* التعريف */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2 animate-fadeInUp delay-100">
        ما هي متلازمة داون؟
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4 animate-fadeInUp delay-200">
        متلازمة داون هي <span className="font-bold">اضطراب وراثي</span> يحدث نتيجة وجود نسخة إضافية من الكروموسوم رقم 21.  
        هذا يؤدي إلى تغييرات في النمو الجسدي والعقلي للشخص.  
        تُعد من أكثر المتلازمات شيوعًا وتظهر عند الولادة، وترافق الفرد طوال حياته.  
      </p>

      {/* الأعراض الجسدية */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2 animate-fadeInUp delay-300">
        الأعراض الجسدية الشائعة
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed animate-fadeInUp delay-400">
        <li>ملامح وجه مميزة (مثل صغر حجم الأنف، تسطح الوجه).</li>
        <li>قصر القامة مقارنةً بالأقران.</li>
        <li>ارتخاء في العضلات والمفاصل (ضعف في التوتر العضلي).</li>
        <li>عيون لوزية الشكل مائلة قليلاً لأعلى.</li>
        <li>قصر أصابع اليدين والقدمين مع وجود خط واحد في راحة اليد.</li>
        <li>لسان بارز نسبيًا.</li>
      </ul>

      {/* الأعراض الذهنية والسلوكية */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2 animate-fadeInUp delay-500">
        الأعراض الذهنية والسلوكية
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed animate-fadeInUp delay-600">
        <li>تأخر في التطور العقلي واللغوي.</li>
        <li>مستوى ذكاء أقل من المتوسط (لكن يختلف من شخص لآخر).</li>
        <li>صعوبات في التعلم تحتاج إلى برامج تعليمية خاصة.</li>
        <li>قدرات اجتماعية جيدة نسبيًا مع الميل للتفاعل الودي.</li>
      </ul>

      {/* المشاكل الصحية المصاحبة */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2 animate-fadeInUp delay-700">
        المشاكل الصحية المصاحبة
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4 animate-fadeInUp delay-800">
        بعض الأطفال المصابين بمتلازمة داون قد يواجهون مشاكل صحية إضافية مثل:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed animate-fadeInUp delay-900">
        <li>عيوب خلقية في القلب.</li>
        <li>ضعف السمع أو مشاكل في الرؤية.</li>
        <li>زيادة القابلية للإصابة بالالتهابات.</li>
        <li>مشاكل في الغدة الدرقية أو الهضم.</li>
      </ul>

      {/* الخلاصة */}
      <div className="mt-6 p-4 bg-pink-50 border-l-4 border-purple-600 rounded animate-fadeInUp delay-1000">
        <p className="text-gray-700 leading-relaxed">
          💡 الخلاصة: متلازمة داون هي حالة وراثية ناتجة عن خلل في الكروموسومات،
          وتظهر في شكل تغيرات جسدية وعقلية بدرجات مختلفة. يمكن من خلال الرعاية
          الطبية والتعليمية تحسين نوعية حياة المصاب بشكل كبير.
        </p>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s forwards;
        }
        .animate-expandUnderline {
          width: 0;
          animation: expandUnderline 0.6s forwards;
          animation-delay: 0.6s;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandUnderline {
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
