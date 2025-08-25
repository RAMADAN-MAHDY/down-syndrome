import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";

const icons = [
  { icon: <FaFacebookF />, color: "text-blue-600", hover: "hover:text-blue-800" },
  { icon: <FaTwitter />, color: "text-sky-400", hover: "hover:text-sky-600" },
  { icon: <FaWhatsapp />, color: "text-green-500", hover: "hover:text-green-700" },
  { icon: <FaInstagram />, color: "text-pink-600", hover: "hover:text-pink-800" },
];

export default function SocialIcons() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length);
    }, 10000); // كل 10 ثواني
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 p-1 z-50
                    md:left-2 md:gap-4 md:p-2">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`transition-transform duration-500 ${activeIndex === index ? "rotate-360" : "rotate-0"}
                      ${item.color} ${item.hover} text-2xl sm:text-3xl md:text-3xl`}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
