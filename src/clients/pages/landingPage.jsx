import React, { useRef } from "react";
import { FaUniversalAccess } from "react-icons/fa";
import SurvySection from "../components/survySection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  const surveyRef = useRef(null);

  const scrollToSurvey = () => {
    surveyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full relative text-white font-sans">

      {/* خلفية الصورة مع طبقة شفافة */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('dawn10.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* المحتوى فوق الخلفية */}
      <div className="relative z-10">

        {/* Navbar ثابت مع دخول متحرك */}
        <motion.nav
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
  fixed top-0 w-full h-[100px] 
  bg-white/20 backdrop-blur-lg 
  border border-white/30 rounded-xl 
  shadow-lg px-10 flex justify-between items-center 
  z-20
"

        >
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-white">الأمل</span>
            <Link to={"/home"}>
              <FaUniversalAccess className="text-blue-400 text-3xl animate-pulse" />
            </Link>
          </div>
          <div className="flex flex-col gap-y-1 text-right">
            <h1 className="text-lg md:text-3xl font-extrabold text-white">
              مرحبًا بك في مركز الأمل للأطفال ذوي متلازمة داون
            </h1>
            <h3 className="hidden md:block text-sm font-bold text-blue-400">
              مركز شامل للدعم والرعاية التعليمية والصحية والنفسية
            </h3>
          </div>
        </motion.nav>

     
<div className="pt-[120px] flex justify-end pr-10">
  <motion.button
    onClick={scrollToSurvey}
    className="relative text-blue-500 font-bold py-3 px-6 rounded-lg shadow-lg border border-blue-400 overflow-hidden"
    animate={{
      boxShadow: [
        "0 0 0px rgba(255,255,255,0)", 
        "0 0 20px rgba(255,255,255,0.8)", 
        "0 0 0px rgba(255,255,255,0)"
      ]
    }}
    transition={{
      duration: 2,      // مدة اللمعة
      repeat: Infinity,
      repeatDelay: 10,  // كل 10 ثواني
      ease: "easeInOut",
    }}
  >
    ابدأ الاستبيان
  </motion.button>
</div>


        {/* هدف المركز والاستبيان */}
        <section className="flex flex-col items-end justify-start min-h-[calc(100vh-100px)] p-10 gap-8 text-right">

          {/* نص طويل عن المركز مع موشن لكل سطر */}
          <motion.div
            className="max-w-3xl space-y-6 font-extrabold"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3, // يظهر كل عنصر بعد الآخر
                },
              },
            }}
          >
            <motion.h2
              className="text-4xl text-purple-200 font-bold"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              هدف المركز
            </motion.h2>

            <motion.p
              className="text-lg leading-relaxed text-purple-100"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              مركز الأمل هو مركز متخصص لدعم الأطفال ذوي متلازمة داون وأسرهم، حيث نؤمن بأن كل طفل يمتلك القدرة على التعلّم والنمو. يعمل المركز على:
            </motion.p>

            <motion.ul
              className="list-disc list-inside space-y-2 text-purple-100"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <motion.li variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>توفير برامج تعليمية متكاملة تناسب كل مرحلة عمرية.</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>تقديم استشارات صحية ونفسية للأهالي لضمان نمو الطفل بشكل صحي وسليم.</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>تدريب الأسرة على استراتيجيات الدعم اليومي وتعزيز مهارات الطفل.</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>خلق بيئة محفزة للأطفال تساعدهم على تطوير مهاراتهم الاجتماعية والمعرفية.</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>توعية المجتمع بأهمية دمج أطفال متلازمة داون ومساندتهم.</motion.li>
            </motion.ul>

            <motion.p
              className="text-lg leading-relaxed text-purple-100"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              إذا كنت ترغب في معرفة المزيد عن كيفية دعم طفلك واختيار البرنامج الأنسب له، يمكنك ملء الاستبيان أدناه، وسنقوم بعرض خطة تعليمية وصحية مفصلة تناسب احتياجاته
            </motion.p>
          </motion.div>

          {/* الاستبيان مباشر بدون ديف إضافي */}
          <div ref={surveyRef}>
            <SurvySection />
          </div>

        </section>

      </div>
    </div>
  );
}
