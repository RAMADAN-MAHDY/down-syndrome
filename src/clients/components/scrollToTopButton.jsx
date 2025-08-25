// 📂 components/ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // ايقونة سهم من مكتبة lucide-react

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // 🔹 اظهار الزر عند النزول
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 🔹 عند الضغط يطلع لفوق
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-transparent text-purple-600 rounded-full shadow-lg  transition duration-300 animate-pulse"
      >
        <ArrowUp size={36} />
      </button>
    )
  );
}
