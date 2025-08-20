
import React, { useEffect, useState } from "react";
import axios from "axios";
import UseVerifyToken from "../hook/verifyToken";
import useSurveyStore from "../../clients/store/useSurveyStore";

export default function AddContents() {
  UseVerifyToken();

  const questions = useSurveyStore((state) => state.questions);

  const [form, setForm] = useState({
    title: "",
    type: "",
    description: "",
    sluge: "text",
    ageGroup: "",
    problemTag: "",
    articleText: "",
    url: "",
  });

  const [contents, setContents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // 🟢 جلب المحتوى
  const fetchContents = async () => {
    try {
      const res = await axios.get(
        "https://down-syndrome-api.vercel.app/api/content/filter",
        { withCredentials: true }
      );
      console.log("📌 API response:", res.data);

      setContents(res.data);
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  // 🟢 تغيير الفورم
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🟢 إضافة أو تعديل
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: form.title,
      type: form.type,
      description: form.description,
      sluge: form.sluge,
      ageGroupId: form.ageGroup,
      problemTag: form.problemTag,
      articleText: form.sluge === "text" ? form.articleText : undefined,
      url: form.sluge === "vid" ? form.url : undefined,
    };

    try {
      if (editingId) {
        await axios.patch(
          `https://down-syndrome-api.vercel.app/api/admin/content-Edit/${editingId}`,
          payload,
          { withCredentials: true }
        );
        alert("تم تعديل المحتوى ✅");
      } else {
        await axios.post(
          "https://down-syndrome-api.vercel.app/api/admin/content",
          payload,
          { withCredentials: true }
        );
        alert("تم إضافة المحتوى ✅");
      }

      setForm({
        title: "",
        type: "",
        description: "",
        sluge: "text",
        ageGroup: "",
        problemTag: "",
        articleText: "",
        url: "",
      });

      setEditingId(null);
      fetchContents();
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      alert("فشل العملية ❌");
    }
  };

  // 🟢 تعديل
  const handleEdit = (item) => {
    setForm({
      title: item.title,
      type: item.type || "",
      description: item.description || "",
      sluge: item.sluge || "text",
      ageGroup: item.ageGroup?._id || "",
      problemTag: item.problemTag || "",
      articleText: item.articleText || "",
      url: item.url || "",
    });
    setEditingId(item._id);
  };

  // 🟢 حذف
  const handleDelete = async (id) => {
    if (!window.confirm("هل أنت متأكد من الحذف؟")) return;
    try {
      await axios.delete(
        `https://down-syndrome-api.vercel.app/api/admin/content-Delete/${id}`,
        { withCredentials: true }
      );
      alert("تم الحذف ✅");
      fetchContents();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        {editingId ? "تعديل المحتوى" : "إضافة محتوى جديد"}
      </h2>

      {/* 🟢 فورم */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="title"
          placeholder="العنوان"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="type"
          placeholder="الفئة (صحة / تعليم)"
          value={form.type}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          placeholder="الوصف"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <select
          name="sluge"
          value={form.sluge}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="text">نص</option>
          <option value="vid">فيديو</option>
        </select>

        
        {form.sluge === "text" && (
          <textarea
            name="articleText"
            placeholder="نص المقال"
            value={form.articleText}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        )}
        {form.sluge === "vid" && (
          <input
            type="text"
            name="url"
            placeholder="رابط الفيديو (YouTube/Vimeo)"
            value={form.url}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        )}

        <select
       name="ageGroup"
       value={form.ageGroup}
       onChange={handleChange}
       className="border p-2 w-full"
       >
        <option value="">اختر الفئة العمرية</option>
        {questions[0]?.options?.map((option, idx) => (
            <option key={idx} value={option._id}>
            {option.name}
            </option>
        ))}
        </select>


        
        <select
          name="problemTag"
          value={form.problemTag}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">اختر التحدي الرئيسي</option>
          {questions[1]?.options?.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "تحديث" : "إضافة"}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-bold mb-2">جميع المحتويات</h3>
        <ul className="space-y-2">
          {contents.map((item) => (
            <li
              key={item._id}
              className="border p-3 rounded flex flex-col space-y-2"
            >
              <span className="font-bold">{item.title}</span>
              <span className="text-sm text-gray-500">
                الفئة: {item.type} | الفئة العمرية: {item.ageGroup?.name}
              </span>
              <span className="text-sm text-gray-500">
                التحدي: {item.problemTag || "—"}
              </span>

              {item.sluge === "text" && (
                <p className="text-gray-700">{item.articleText}</p>
              )}

              {item.sluge === "vid" && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  شاهد الفيديو
                </a>
              )}

              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  تعديل
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  حذف
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
