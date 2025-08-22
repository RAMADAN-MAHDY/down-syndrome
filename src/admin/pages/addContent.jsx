
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import UseVerifyToken from "../hook/verifyToken";
import useSurveyStore from "../../clients/store/useSurveyStore";

export default function AddContents() {
    UseVerifyToken();

    const questions = useSurveyStore((state) => state.questions);
    console.log(questions)
    const formRef = useRef(null);
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
            ageGroup: form.ageGroup,
            problemTag: form.problemTag,
            articleText: form.sluge === "text" ? form.articleText : undefined,
            url: form.sluge === "vid" ? form.url : undefined,
        };
        console.log(payload)

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

        formRef.current.scrollIntoView({
            behavior: "smooth", // أو "auto"
            block: "start",     // "start" أو "center" أو "end"
        });

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
        <div className="rounded-3xl shadow-lg" >


            <div className="flex items-center justify-center mb-6" ref={formRef}>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {editingId ? "✏️ تعديل المحتوى" : "➕ إضافة محتوى جديد"}
                </h2>
                {editingId && (
                    <button
                        onClick={() => setEditingId(null)}
                        className="text-sm ml-6 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        إضافة حدث جديد
                    </button>
                )}

            </div>

            {/* 🟢 فورم */}
            <form

                onSubmit={handleSubmit}
                className="space-y-4 sm:ml-[10%]
sm:max-w-[80%] lg:max-w-[50%] bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="📌 العنوان"
                    value={form.title}
                    onChange={handleChange}
                    className="border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 w-full rounded-xl outline-none"
                />

                <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 w-full rounded-xl outline-none"
                >
                    <option value="">📂 اختر الفئة</option>
                    <option value="صحة">صحة</option>
                    <option value="تعليم">تعليم</option>
                    <option value="رياضه">رياضه</option>
                </select>


                <textarea
                    name="description"
                    placeholder="📝 الوصف"
                    value={form.description}
                    onChange={handleChange}
                    className="border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 w-full rounded-xl outline-none"
                />

                <select
                    name="sluge"
                    value={form.sluge}
                    onChange={handleChange}
                    className="border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 w-full rounded-xl outline-none"
                >
                    <option value="text">📰 نص</option>
                    <option value="vid">🎥 فيديو</option>
                </select>

                {form.sluge === "text" && (
                    <textarea
                        name="articleText"
                        placeholder="✍️ نص المقال"
                        value={form.articleText}
                        onChange={handleChange}
                        className="border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 w-full rounded-xl outline-none"
                    />
                )}
                {form.sluge === "vid" && (
                    <input
                        type="text"
                        name="url"
                        placeholder="🔗 رابط الفيديو (YouTube / Vimeo)"
                        value={form.url}
                        onChange={handleChange}
                        className="border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 w-full rounded-xl outline-none"
                    />
                )}

                <select
                    name="ageGroup"
                    value={form.ageGroup}
                    onChange={handleChange}
                    className="border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 w-full rounded-xl outline-none"
                >
                    <option value="">👶 اختر الفئة العمرية</option>
                    {questions[0]?.options?.map((option, idx) => (
                        <option key={idx} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>

                <select
                    name="problemTag"
                    value={form.problemTag}
                    onChange={handleChange}
                    className="border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 w-full rounded-xl outline-none"
                >
                    <option value="">🚩 اختر التحدي الرئيسي</option>
                    {questions[1]?.options?.map((option, idx) => (
                        <option key={idx} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-xl font-medium hover:opacity-90 transition"
                >
                    {editingId ? "✅ تحديث" : "➕ إضافة"}
                </button>
            </form>

            {/* 🟣 قائمة المحتويات */}
            <div className="mt-10">
                <h3 className="font-bold text-xl mb-4 text-gray-800">📋 جميع المحتويات</h3>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contents.map((item) => (
                        <li
                            key={item._id}
                            className="border border-gray-200 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col gap-3"
                        >
                            <h2 className="font-bold text-lg text-gray-900">{item.title}</h2>

                            <span className="text-sm text-gray-600">
                                📂 الفئة: {item.type}

                            </span>

                            <span className="text-sm text-gray-600">
                                {item.ageGroup?.name || "غير محدد"}
                            </span>

                            <span className="text-sm text-gray-600">
                                🚩 التحدي: {item.problemTag || "—"}
                            </span>

                            {item.sluge === "text" && (
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {item.articleText}
                                </p>
                            )}

                            {item.sluge === "vid" && (
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline font-medium hover:text-blue-800"
                                >
                                    🎥 شاهد الفيديو
                                </a>
                            )}

                            <div className="flex gap-3 pt-3 mt-auto">
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-3 py-2 rounded-xl transition"
                                > 
                                    ✏️ تعديل
                                </button>
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="flex-1 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white px-3 py-2 rounded-xl transition"
                                >
                                    🗑️ حذف
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div >

    );
}
