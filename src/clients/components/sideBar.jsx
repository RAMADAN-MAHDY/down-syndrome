import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaRegCalendarCheck, FaListAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const questions = [
    { title: "ما هي أسباب متلازمة داون؟", img: "/dawn14.png", path: "/home/answers/1" },
    { title: "ما أنواع متلازمة داون؟", img: "/dawn13.jpg", path: "/home/answers/2" },
    { title: "مركز علاج ورعاية متلازمة داون", img: "/dawn9.jpg", path: "/home/answers/3" },
    { title: "نسبة ذكاء مصاب متلازمة داون", img: "/dawn11.jpg", path: "/home/answers/4" },
    { title: "أنواع ودرجات متلازمة داون", img: "/dawn10.jpg", path: "/home/answers/5" },
    { title: "هل يمكن للمصاب بمتلازمة داون الزواج والإنجاب؟", img: "/dawn12.jpg", path: "/home/answers/6" },
    { title: "ماهي متلازمة داون؟ وما أعراضها؟", img: "/dawn8.jpg", path: "/home/answers/7" },
    { title: "أعراض متلازمة داون أثناء الحمل؟", img: "/dawn7.jpg", path: "/home/answers/8" },
  ];

  async function handelsubmit(e) {
    e.preventDefault();
    const nameParts = name.trim().split(" ").filter(Boolean);

    if (nameParts.length < 3) {
      toast.error("⚠️ الاسم يجب أن يكون ثلاثياً");
      return;
    }
    if (!phone.trim() || !date.trim()) {
      toast.error("⚠️ من فضلك أكمل جميع البيانات");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "https://down-syndrome-api.vercel.app/api/contact-us",
        { title: name, phone: phone, date: date }
      );

      toast.success("✅ تم إرسال البيانات بنجاح!");
      setName("");
      setPhone("");
      setDate("");
    } catch (error) {
      toast.error("❌ حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Sidebar اللابتوب */}
      <aside className="hidden lg:flex w-1/4 bg-gray-100 py-10 px-4 flex flex-col gap-6">
        <h2 className="text-2xl text-purple-700 border-b border-pink-400 pb-2 mb-2 flex items-center justify-center gap-2">
          <FaRegCalendarCheck className="text-pink-400" /> لحجز موعد
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handelsubmit}>
          <input type="text" placeholder="الاسم" value={name} onChange={(e) => setName(e.target.value)} className="border-b-2 border-pink-400 outline-none p-2 bg-transparent" />
          <input type="tel" placeholder="رقم الجوال/الهاتف" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-b-2 border-pink-400 outline-none p-2 bg-transparent" />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border-b-2 border-pink-400 outline-none p-2 bg-transparent" />
          <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-4xl w-20 hover:bg-pink-600 transition mx-auto mb-10">إرسال</button>
          {loading && <div className="text-center text-gray-600">جاري التحميل ....</div>}
        </form>

        <h2 className="text-lg font-semibold text-purple-700 border-b border-pink-400 pb-1">مواضيع ذات صلة</h2>
        <div className="flex flex-col gap-4">
          {questions.map(({ title, img, path }, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <Link to={path} className="flex items-center justify-between bg-white hover:bg-gray-100 p-2 rounded transform transition duration-300 hover:-translate-x-6">
                <img src={img} alt={`img ${index + 1}`} className="rounded-full w-20 h-20 object-cover border bg-white" />
                <p className="text-sm text-gray-800">{title}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </aside>

      {/* أزرار الموبايل أسفل الشاشة */}
      <div className="fixed bottom-0 left-0 w-full flex lg:hidden bg-white z-50 border-t border-gray-200">
        <button onClick={() => setMobileOpen(true)} className="flex-1 py-4 flex flex-col items-center justify-center gap-1 hover:bg-gray-100">
          <FaRegCalendarCheck size={20} />
          <span className="text-xs">حجز</span>
        </button>
        <button onClick={() => setMobileOpen(true)} className="flex-1 py-4 flex flex-col items-center justify-center gap-1 hover:bg-gray-100">
          <FaListAlt size={20} />
          <span className="text-xs">مواضيع</span>
        </button>
      </div>

      {/* Sidebar كامل للموبايل عند الضغط */}
      {mobileOpen && (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed top-0 left-0 w-full h-full bg-gray-100 z-50 p-6 overflow-y-auto">
          <button onClick={() => setMobileOpen(false)} className="mb-4 text-purple-700 font-bold">إغلاق</button>

          <h2 className="text-2xl text-purple-700 border-b border-pink-400 pb-2 mb-4 flex items-center gap-2">
            <FaRegCalendarCheck className="text-pink-400" /> لحجز موعد
          </h2>

          <form className="flex flex-col gap-4 mb-6" onSubmit={handelsubmit}>
            <input type="text" placeholder="الاسم" value={name} onChange={(e) => setName(e.target.value)} className="border-b-2 border-pink-400 outline-none p-2 bg-transparent" />
            <input type="tel" placeholder="رقم الجوال/الهاتف" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-b-2 border-pink-400 outline-none p-2 bg-transparent" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border-b-2 border-pink-400 outline-none p-2 bg-transparent" />
            <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-4xl w-20 hover:bg-pink-600 transition mx-auto">إرسال</button>
            {loading && <div className="text-center text-gray-600">جاري التحميل ....</div>}
          </form>

          <h2 className="text-lg font-semibold text-purple-700 border-b border-pink-400 pb-1">مواضيع ذات صلة</h2>
          <div className="flex flex-col gap-4">
            {questions.map(({ title, img, path }, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Link to={path} 
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between bg-white hover:bg-gray-100 p-2 rounded transform transition duration-300 hover:-translate-x-6">
                  <img src={img} alt={`img ${index + 1}`} className="rounded-full w-20 h-20 object-cover border bg-white" />
                  <p className="text-sm text-gray-800">{title}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
