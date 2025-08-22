import React, { useState, useEffect } from "react";
import axios from "axios";
import useSurveyStore from "../../clients/store/useSurveyStore";
import UseVerifyToken from "../hook/verifyToken";


export default function ManageArticles() {
    UseVerifyToken();
  const questions = useSurveyStore((state) => state.questions);
  const [articles, setArticles] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    type: "",
    topic: "",
    age_group: "",
    image: null,
  });

  // 🟢 تحميل المقالات
  const fetchArticles = async () => {
    try {
      const res = await axios.get("https://down-syndrome-api.vercel.app/api/getArticle");
      setArticles(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // 🟢 تغيير الفورم
  const handleChange = (e) => {
    if (e.target.files) {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // 🟢 حفظ (إضافة أو تعديل)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form[0] )
    try {
      const formData = new FormData();
      if (form.title) formData.append("title", form.title);
      if (form.type) formData.append("type", form.type);
      if (form.topic) formData.append("topic", form.topic);
      if (form.age_group) formData.append("age_group", form.age_group);
      if (form.image) formData.append("image", form.image);

      if (editingId) {
        // تعديل
        await axios.patch(
          `https://down-syndrome-api.vercel.app/api/admin/EditArticle/${editingId}`,
          formData,
          { withCredentials: true }
        );
        alert("تم تعديل المقال ✅");
      } else {
        // إضافة
        await axios.post(
          "https://down-syndrome-api.vercel.app/api/admin/article",
          formData,
          { withCredentials: true }
        );
        alert("تم إضافة المقال ✅");
      }

      setForm({ title: "", type: "", topic: "", age_group: "", image: null });
      setEditingId(null);
      fetchArticles(); 
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      alert("فشل العملية ❌");
    }
  };

  // 🟢 تعديل
  const handleEdit = (article) => {
    setEditingId(article._id);
    setForm({
      title: article.title || "",
      type: article.type || "",
      topic: article.topic || "",
      age_group: article.age_group || "",
      image: null,
    });
  };

  // 🟢 حذف
  const handleDelete = async (id) => {
    if (!window.confirm("هل أنت متأكد من الحذف؟")) return;
    try {
      await axios.delete(
        `https://down-syndrome-api.vercel.app/api/admin/DeleteArticle/${id}`,
        { withCredentials: true }
      );
      alert("تم حذف المقال 🗑️");
      fetchArticles();
    } catch (err) {
      console.error(err);
      alert("فشل الحذف ❌");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 space-y-6">
      {/* فورم إضافة / تعديل */}
      <div>
        <h2 className="text-xl font-bold mb-4">
          {editingId ? "تعديل مقال" : "إضافة مقال"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="العنوان"
            className="border p-2 w-full rounded"
          />
          <input
            type="text"
            name="type"
            value={form.type}
            onChange={handleChange}
            placeholder="النوع"
            className="border p-2 w-full rounded"
          />
          <input
            type="text"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            placeholder="الموضوع"
            className="border p-2 w-full rounded"
          />
          <select
            name="age_group"
            value={form.age_group}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option value="">اختر الفئة العمرية</option>
            {questions[0]?.options?.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {editingId ? "حفظ التعديلات" : "إضافة مقال"}
          </button>
        </form>
      </div>

      {/* جدول المقالات */}
      <div>
        <h2 className="text-lg font-bold mb-2">قائمة المقالات</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">العنوان</th>
              <th className="border p-2">الموضوع</th>
              <th className="border p-2">النوع</th>
              <th className="border p-2">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((a) => (
              <tr key={a._id}>
                <td className="border p-2">{a.title}</td>
                <td className="border p-2">{a.topic}</td>
                <td className="border p-2">{a.type}</td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(a)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    تعديل
                  </button>
                  <button
                    onClick={() => handleDelete(a._id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
