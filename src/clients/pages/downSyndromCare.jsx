// DownSyndromeCare.js
import React from "react";

export default function DownSyndromeCare() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      {/* العنوان الرئيسي مع خط متحرك */}
      <h1 className="text-3xl font-bold text-purple-600 mb-4 text-center relative inline-block animate-fadeInUp">
        علاج ورعاية متلازمة داون
        <span className="block h-[2px] bg-pink-500 mt-5 animate-expandUnderline"></span>
      </h1>

      <p className="text-gray-700 mb-4 leading-relaxed animate-fadeInUp delay-100">
        لا يوجد علاج نهائي لمتلازمة داون لأنها حالة جينية، ولكن يمكن توفير
        رعاية شاملة تساعد الأطفال على النمو والتطور وتحسين جودة حياتهم. وتشمل
        الرعاية ما يلي:
      </p>

      {/* باقي العناوين بيربل بدون خط */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2 animate-fadeInUp delay-200">
        1. الرعاية الطبية
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4 animate-fadeInUp delay-300">
        يحتاج الأطفال المصابون بمتلازمة داون إلى متابعة طبية منتظمة للكشف المبكر
        عن المشكلات الصحية مثل:{" "}
        <span className="font-bold">عيوب القلب الخلقية، مشاكل السمع، مشاكل النظر، أمراض الغدة الدرقية</span>. التدخل المبكر بالعلاج الطبي يقلل من المضاعفات ويُحسّن الصحة العامة.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2 animate-fadeInUp delay-400">
        2. العلاج التأهيلي
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4 animate-fadeInUp delay-500">
        يشمل برامج تساعد الطفل على تطوير المهارات الأساسية مثل:{" "}
        <span className="font-bold">العلاج الطبيعي</span> لتحسين الحركة،{" "}
        <span className="font-bold">علاج النطق واللغة</span> لتحسين القدرة على
        التواصل، و<span className="font-bold">العلاج الوظيفي</span> لتطوير
        المهارات اليومية.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2 animate-fadeInUp delay-600">
        3. التعليم والدعم النفسي
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4 animate-fadeInUp delay-700">
        يحتاج الطفل إلى برامج تعليمية خاصة أو مدمجة مع المدارس العادية حسب قدراته،
        بالإضافة إلى الدعم النفسي والاجتماعي لمساعدته على التكيف وزيادة ثقته
        بنفسه. وجود بيئة داعمة ومحبة يُحدث فرقًا كبيرًا في حياته.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2 animate-fadeInUp delay-800">
        4. دعم الأسرة
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4 animate-fadeInUp delay-900">
        دور الأسرة أساسي في الرعاية، من خلال تشجيع الطفل، وتعزيز مهاراته،
        وتوفير بيئة مليئة بالحب والاهتمام. كما تحتاج الأسرة نفسها أحيانًا إلى دعم
        نفسي أو مجموعات مساندة لمشاركة الخبرات.
      </p>

      <div className="mt-6 p-4 bg-pink-50 border-l-4 border-purple-600 rounded animate-fadeInUp delay-1000">
        <p className="text-gray-700 leading-relaxed">
          💡 الرعاية المبكرة والتدخل العلاجي المستمر يساعدان بشكل كبير في تحسين
          القدرات الحركية والعقلية والاجتماعية للأطفال المصابين بمتلازمة داون.
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
