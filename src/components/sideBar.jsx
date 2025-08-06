
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaRegCalendarCheck} from "react-icons/fa";


export default function Sidebar() {
  const questions = [
    {
      title: "ما هي أسباب متلازمة داون؟",
      img: "/dawn14.png",
      path: "/answers/1",
    },
    {
      title: "ما أنواع متلازمة داون؟",
      img: "/dawn13.jpg",
      path: "/answers/2",
    },
    {
      title: "مركز علاج ورعاية متلازمة داون",
      img: "/dawn9.jpg",
      path: "/answers/3",
    },
    {
      title: "نسبة ذكاء مصاب متلازمة داون",
      img: "/dawn11.jpg",
      path: "/answers/4",
    },
    {
      title: "أنواع ودرجات متلازمة داون",
      img: "/dawn10.jpg",
      path: "/answers/5",
    },
    {
      title: "هل يمكن للمصاب بمتلازمة داون الزواج والإنجاب؟",
      img: "/dawn12.jpg",
      path: "/answers/6",
    },
    {
      title: "ماهي متلازمة داون؟ وما أعراضها؟",
      img: "/dawn8.jpg",
      path: "/answers/7",
    },
    {
      title: "أعراض متلازمة داون أثناء الحمل؟",
      img: "/dawn7.jpg",
      path: "/answers/8",
    },
  ];

  return (
    <aside className="w-1/4 bg-gray-100 py-10 px-4 flex flex-col gap-6">
      <h2 className="text-2xl text-purple-700 border-b border-pink-400 pb-2 mb-2 flex items-center justify-center gap-2">
        <FaRegCalendarCheck className="text-pink-400" />
        لحجز موعد
        </h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="الاسم"
          className="border-b-2 border-pink-400 outline-none p-2 bg-transparent"
          name="name"
        />
        <input
          type="tel"
          placeholder="رقم الجوال/الهاتف"
          className="border-b-2 border-pink-400 outline-none p-2 bg-transparent"
          dir="rtl"
          name="phone"
        />
        <input
          type="date"
          className="border-b-2 border-pink-400 outline-none p-2 bg-transparent"
          name="date"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white py-2 px-4 rounded-4xl w-20 hover:bg-pink-600 transition mx-auto mb-10"
        >
          إرسال
        </button>
      </form>

      <h2 className="text-lg font-semibold text-purple-700 border-b border-pink-400 pb-1">مواضيع ذات صلة</h2>

      <div className="flex flex-col gap-4">
        {questions.map(({ title, img, path }, index) => (
          <Link
            to={path}
            key={index}
              className="flex items-center justify-between bg-white hover:bg-gray-100 p-2 rounded transform transition duration-300 hover:-translate-x-6"

          >
            <img
              src={img}
              alt={`img ${index + 1}`}
              className="rounded-full w-20 h-20 object-cover border bg-white"
            />
            <p className="text-sm text-gray-800">{title}</p>
          </Link>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t flex justify-center items-center gap-4 text-2xl">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 transition"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="text-sky-400 hover:text-sky-600 transition"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="text-green-500 hover:text-green-700 transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="#"
          className="text-pink-600 hover:text-pink-800 transition"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </aside>
  );
}
