import React from "react";
import { FaUniversalAccess } from "react-icons/fa";
import SurvySection from "../components/survySection";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full relative text-white">

      {/* خلفية الصورة */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/dawn.jpg')" }}
      >
        <div className="w-full h-full bg-black/30 bg-opacity-50" />
      </div>

      {/* المحتوى فوق الخلفية */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="w-full h-[100px] bg-blue-800 shadow-lg px-10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-white">الأمل</span>
            <Link to={"/home"}>
              <FaUniversalAccess className="text-white text-3xl animate-pulse" />
            </Link>
          </div>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-3xl font-bold text-white">
              مرحبًا بك في مركز الأمل
            </h1>
            <h3 className="text-sm text-white">
              مركز لعلاج ورعاية متلازمة داون
            </h3>
          </div>
        </nav>

        {/* هدف المركز والاستبيان */}
        <section className="flex flex-col items-end justify-center min-h-[calc(100vh-60px)] p-10 gap-6 text-right">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold text-white">هدف المركز</h2>
            <p className="text-lg font-bold leading-loose text-white">
              .مركز الأمل يهدف إلى تقديم الدعم الكامل لأهالي أطفال متلازمة داون
              <br />
              .نُساعد الأسر على تخطي التحديات التعليمية والصحية والنفسية
              <br />
              .نوفّر محتوى متنوع ومناسب لكل مرحلة عمرية
              <br />
              .نُؤمن بأن كل طفل يملك القدرة على التعلُّم والتطوّر
              <br />
              إذا أردت أن تعرف مايمكن أن يقدمه المركز الذهبى التخصصى من أجل صحة
              أطفالكم, اجب علي الاستبيان للتعرف علي طفلك وعرض ما يناسبه
            </p>
          </div>

          <section className="max-w-2xl w-full">
            <SurvySection />
          </section>
        </section>
      </div>
    </div>
  );
}
