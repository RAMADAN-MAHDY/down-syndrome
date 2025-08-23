// DownSyndromeCare.js
import React from "react";

export default function DownSyndromeCare() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        علاج ورعاية متلازمة داون
      </h1>
      <p className="text-gray-700 mb-4 leading-relaxed">
        لا يوجد علاج نهائي لمتلازمة داون لأنها حالة جينية، ولكن يمكن توفير
        رعاية شاملة تساعد الأطفال على النمو والتطور وتحسين جودة حياتهم. وتشمل
        الرعاية ما يلي:
      </p>

      {/* العلاج الطبي */}
      <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">
        1. الرعاية الطبية
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        يحتاج الأطفال المصابون بمتلازمة داون إلى متابعة طبية منتظمة للكشف المبكر
        عن المشكلات الصحية مثل:{" "}
        <span className="font-bold">عيوب القلب الخلقية، مشاكل السمع،
        مشاكل النظر، أمراض الغدة الدرقية</span>. التدخل المبكر بالعلاج الطبي يقلل
        من المضاعفات ويُحسّن الصحة العامة.
      </p>

      {/* العلاج التأهيلي */}
      <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">
        2. العلاج التأهيلي
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        يشمل برامج تساعد الطفل على تطوير المهارات الأساسية مثل:{" "}
        <span className="font-bold">العلاج الطبيعي</span> لتحسين الحركة،{" "}
        <span className="font-bold">علاج النطق واللغة</span> لتحسين القدرة على
        التواصل، و<span className="font-bold">العلاج الوظيفي</span> لتطوير
        المهارات اليومية.
      </p>

      {/* التعليم والدعم النفسي */}
      <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">
        3. التعليم والدعم النفسي
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        يحتاج الطفل إلى برامج تعليمية خاصة أو مدمجة مع المدارس العادية حسب قدراته،
        بالإضافة إلى الدعم النفسي والاجتماعي لمساعدته على التكيف وزيادة ثقته
        بنفسه. وجود بيئة داعمة ومحبة يُحدث فرقًا كبيرًا في حياته.
      </p>

      {/* دعم الأسرة */}
      <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">
        4. دعم الأسرة
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        دور الأسرة أساسي في الرعاية، من خلال تشجيع الطفل، وتعزيز مهاراته،
        وتوفير بيئة مليئة بالحب والاهتمام. كما تحتاج الأسرة نفسها أحيانًا إلى دعم
        نفسي أو مجموعات مساندة لمشاركة الخبرات.
      </p>

      <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-600 rounded">
        <p className="text-gray-700 leading-relaxed">
          💡 الرعاية المبكرة والتدخل العلاجي المستمر يساعدان بشكل كبير في تحسين
          القدرات الحركية والعقلية والاجتماعية للأطفال المصابين بمتلازمة داون.
        </p>
      </div>
    </div>
  );
}
