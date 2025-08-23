// DownSyndromeIQ.js
import React from "react";

export default function DownSyndromeIQ() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center">
        نسبة الذكاء لدى مصابي متلازمة داون
      </h1>
      <p className="text-gray-700 mb-4 leading-relaxed">
        تختلف القدرات العقلية للأشخاص المصابين بمتلازمة داون من فرد لآخر، ولكن
        غالبًا ما يكون لديهم درجة من{" "}
        <span className="font-bold">التأخر العقلي</span> تتراوح بين الخفيف
        والمتوسط. هذا لا يعني أنهم غير قادرين على التعلم أو التطور، بل إن
        التدخل المبكر والدعم المناسب يساعدهم بشكل كبير على تحسين مهاراتهم.
      </p>

      {/* متوسط نسبة الذكاء */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        1. متوسط نسبة الذكاء
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        تشير الدراسات إلى أن متوسط نسبة الذكاء (IQ) لدى المصابين بمتلازمة داون
        يتراوح بين <span className="font-bold">35 إلى 70</span>. 
        أغلب الحالات تقع في فئة التأخر العقلي البسيط إلى المتوسط.
      </p>

      {/* القدرات التعليمية */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        2. القدرات التعليمية
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        يمكن للأطفال المصابين بمتلازمة داون تعلم القراءة والكتابة والمهارات
        الحسابية البسيطة، خاصةً عند دمجهم في برامج تعليمية مناسبة تعتمد على
        التكرار والصور والأنشطة العملية.
      </p>

      {/* الذكاء الاجتماعي والعاطفي */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        3. الذكاء الاجتماعي والعاطفي
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        رغم أن نسبة الذكاء قد تكون أقل من المتوسط، إلا أن كثيرًا من الأشخاص
        المصابين بمتلازمة داون يتمتعون بنسبة عالية من{" "}
        <span className="font-bold">الذكاء الاجتماعي والعاطفي</span>، حيث
        يتميزون بالود، والقدرة على تكوين علاقات إيجابية، والتعاطف مع الآخرين.
      </p>

      {/* عوامل مساعدة */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        4. عوامل تؤثر على التطور العقلي
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        - التدخل المبكر (علاج طبيعي، نطق، دعم تعليمي). <br />
        - البيئة الداعمة والمحفزة. <br />
        - الدعم الأسري والنفسي المستمر. <br />
        - المتابعة الطبية لتجنب مشاكل السمع أو النظر التي قد تؤثر على التعلم.
      </p>

      <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-600 rounded">
        <p className="text-gray-700 leading-relaxed">
          💡 الذكاء ليس العامل الوحيد لتحديد قدرات الشخص المصاب بمتلازمة داون،
          فالدعم، والرعاية، والبيئة المحيطة تصنع فرقًا كبيرًا في حياته اليومية
          وتطوره.
        </p>
      </div>
    </div>
  );
}
