import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import useSurveyStore from "../../clients/store/useSurveyStore";
import UseVerifyToken from "../hook/verifyToken";
import Alert from "../components/Alert ";
import ConfirmationPopup from '../components/ConfirmationPopup'


export default function ManageArticles() {
    UseVerifyToken();
    const formRef = useRef(null);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [alert, setAlert] = useState({ show: false, message: "", type: "info" });
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

            // console.log(res.data.length)
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
        console.log(form[0])
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
                // alert("تم تعديل المقال ✅");
                setAlert({ show: true, message: "تم تعديل المقال ✅", type: "success" });

            } else {
                // إضافة
                await axios.post(
                    "https://down-syndrome-api.vercel.app/api/admin/article",
                    formData,
                    { withCredentials: true }
                );
                // alert("تم إضافة المقال ✅");
                setAlert({ show: true, message: "تم إضافة المقال ✅", type: "success" });

            }

            setForm({ title: "", type: "", topic: "", age_group: "", image: null });
            setEditingId(null);
            fetchArticles();
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
            // alert("فشل العملية ❌");
            setAlert({ show: true, message: "فشل العملية ❌", type: "error" });

        }
    };

    // 🟢 تعديل
    const handleEdit = (article) => {
        setEditingId(article._id);
        // console.log(article.age_group)
        setForm({
            title: article.title || "",
            type: article.type || "",
            topic: article.topic || "",
            age_group: article.age_group._id || "",
            image: null,
        });

        formRef.current.scrollIntoView({
            behavior: "smooth", // أو "auto"
            block: "start",     // "start" أو "center" أو "end"
        });
    };

    const handleDeleteClick = (id) => {
    setSelectedId(id);
    setConfirmDelete(true);
  };

    // 🟢 حذف
    const handleDelete = async () => {
        // if (!window.confirm("هل أنت متأكد من الحذف؟")) return;
        try {
            await axios.delete(
                `https://down-syndrome-api.vercel.app/api/admin/DeleteArticle/${selectedId}`,
                { withCredentials: true }
            );
            // alert("تم حذف المقال 🗑️");
            setAlert({ show: true, message: "تم حذف المقال 🗑️", type: "error" });
            setConfirmDelete(false);
            setSelectedId(null)
            fetchArticles();
        } catch (err) {
            console.error(err);
            // alert("فشل الحذف ❌");
            setAlert({ show: true, message: "فشل الحذف ❌", type: "error" });

        }
    };

    return (
        <div className="rounded-3xl w-full shadow-lg p-4 sm:p-6">

            {/* 📝 فورم إضافة / تعديل */}
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6" ref={formRef}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3 sm:mb-0">
                    {editingId ? "✏️ تعديل مقال" : "➕ إضافة مقال"}
                </h2>
                {editingId && (
                    <button
                        onClick={() => setEditingId(null)}
                        className="text-sm px-3 py-2 ml-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        إضافة حدث جديد
                    </button>
                )}
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-4 w-full sm:max-w-md lg:max-w-lg mx-auto bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-md"
            >
                <input
                    required
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="📌 العنوان"
                    className="border border-gray-300 p-2 sm:p-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                />

                <select
                    required
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 sm:p-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">📂 اختر الفئة</option>
                    <option value="صحة">صحة</option>
                    <option value="تعليم">تعليم</option>
                    <option value="رياضه">رياضة</option>
                </select>

                <input
                    required
                    type="text"
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    placeholder="📝 الموضوع"
                    className="border border-gray-300 p-2 sm:p-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                />

                <select
                    required
                    name="age_group"
                    value={form.age_group}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 sm:p-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">👶 اختر الفئة العمرية</option>
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
                    className="border border-gray-300 p-2 sm:p-3 w-full rounded-xl outline-none"
                />

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium shadow-md w-full"
                >
                    {editingId ? "💾 حفظ التعديلات" : "➕ إضافة مقال"}
                </button>
            </form>

            {/* 📚 جدول المقالات */}
            <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 border mt-8">
                <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-700">📚 قائمة المقالات</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse rounded-xl text-sm sm:text-base">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 text-left">
                                <th className="border p-3">📌 العنوان</th>
                                <th className="border p-3">📝 الموضوع</th>
                                <th className="border p-3">📂 النوع</th>
                                <th className="border p-3">🖼️ الصوره</th>
                                <th className="border p-3 text-center">⚙️ إجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((a) => (
                                <tr key={a._id} className="hover:bg-gray-50 transition border-b last:border-0">
                                    <td className="p-3 ">{a.title}</td>
                                    <td className="p-3 ">{a.topic}</td>
                                    <td className="p-3">{a.type}</td>
                                    <td className="p-3 w-[100px]"> <img src={a.image} alt="image"/></td>
                                    <td className="p-3 text-center flex justify-center gap-2 sm:gap-3 flex-wrap">
                                        <button
                                            onClick={() => handleEdit(a)}
                                            className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 transition text-white px-2 sm:px-3 py-1 rounded-md shadow-sm text-xs sm:text-sm"
                                        >
                                            ✏️ تعديل
                                        </button>
                                        <button
                                            onClick={() => handleDeleteClick(a._id)}
                                            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 transition text-white px-2 sm:px-3 py-1 rounded-md shadow-sm text-xs sm:text-sm"
                                        >
                                            🗑️ حذف
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Alert
                show={alert.show}
                message={alert.message}
                type={alert.type}
                onClose={() => setAlert({ ...alert, show: false })}
            />

            <ConfirmationPopup
                show={confirmDelete}
                onConfirm={handleDelete}
                onCancel={() => setConfirmDelete(false)}
            />
        </div>


    );
}
