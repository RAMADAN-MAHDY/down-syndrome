import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import UseVerifyToken from "../hook/verifyToken";
import MapPicker from '../components/MapPicker'
import Alert from "../components/Alert ";
import ConfirmationPopup from '../components/ConfirmationPopup'

export default function AddEvents() {
    UseVerifyToken();
    const formRef = useRef(null);
    const [form, setForm] = useState({
        title: "",
        type: "",
        date: "",
        time: "",
        latitude: "",
        longitude: "",
    });
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [alert, setAlert] = useState({ show: false, message: "", type: "info" });
    // console.log(form)
    const [events, setEvents] = useState([]);
    const [editingId, setEditingId] = useState(null);

    // 🟢 جلب الأحداث
    const fetchEvents = async () => {
        try {
            const res = await axios.get(
                "https://down-syndrome-api.vercel.app/api/GetEvents",
                { withCredentials: true }
            );
            // console.log(" Events:", res.data.events);
            setEvents(res.data.events);
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    // 🟢 تغيير الفورم
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 🟢 إضافة أو تعديل حدث
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.latitude) {
            return alert(" من فضلك حدد مكان الحدث علي الخريطه ");
        }

        const payload = {
            title: form.title,
            type: form.type,
            date: form.date,
            time: form.time,
            location: {
                type: "Point",
                coordinates: [parseFloat(form.latitude), parseFloat(form.longitude)],
            },
        };

        // console.log(payload)
        try {
            if (editingId) {
                await axios.patch(
                    `https://down-syndrome-api.vercel.app/api/admin/EditEvents/${editingId}`,
                    payload,
                    { withCredentials: true }
                );
                // alert(" تم تعديل الحدث");
                setAlert({ show: true, message: "تم تعديل الحدث ✅", type: "success" });

            } else {
                await axios.post(
                    "https://down-syndrome-api.vercel.app/api/admin/AddEvents",
                    payload,
                    { withCredentials: true }
                );
                // alert(" تم إضافة الحدث");
                setAlert({ show: true, message: "تم إضافة الحدث ✅", type: "success" });

            }

            setForm({
                title: "",
                type: "",
                date: "",
                time: "",
                latitude: "",
                longitude: "",
            });
            setEditingId(null);
            fetchEvents();
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
            // alert("❌ فشل العملية");
            setAlert({ show: true, message: "فشل العملية ❌", type: "error" });


        }
    };

    // 🟢 تعديل
    const handleEdit = (item) => {
        setForm({
            title: item.title,
            type: item.type || "",
            date: item.date || "",
            time: item.time || "",
            latitude: item.location?.coordinates?.[0] || "",
            longitude: item.location?.coordinates?.[1] || "",
        });
        setEditingId(item._id);

        formRef.current.scrollIntoView({
            behavior: "smooth", // أو "auto"
            block: "start",     // "start" أو "center" أو "end"
        });

    };

    // 🟢 حذف

    const handleDeleteClick = (id) => {
        setSelectedId(id);
        setConfirmDelete(true);
    };

    const handleDelete = async () => {
        // if (!window.confirm("هل أنت متأكد من الحذف؟")) return;
        try {
            await axios.delete(
                `https://down-syndrome-api.vercel.app/api/admin/DeleteEvent/${selectedId}`,
                { withCredentials: true }
            );
            // alert("✅ تم الحذف");
            setSelectedId(null);
            setConfirmDelete(false);
            setAlert({ show: true, message: "تم حذف الحدث 🗑️", type: "error" });

            fetchEvents();
        } catch (err) {
            console.error(err);
            setAlert({ show: true, message: "فشل الحذف ❌", type: "error" });

        }
    };

    return (

        <div className="p-0 mx-0 grid justify-center grid-cols-1 md:grid-cols-1 gap-8">

            {/* 🟢 القسم الأول: إضافة/تعديل حدث */}
            <div className="sm:ml-[10%] bg-white shadow-lg rounded-2xl p-6 border flex sm:max-w-[80%] lg:max-w-[50%] flex-col">
                <div className="flex items-center justify-between mb-6" ref={formRef}>
                    <h2 className="text-xl font-bold text-gray-700">
                        {editingId ? "✏️ تعديل الحدث" : "➕ إضافة حدث جديد"}
                    </h2>
                    {editingId && (
                        <button
                            onClick={() => setEditingId(null)}
                            className="text-sm px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
                        >
                            إضافة حدث جديد
                        </button>
                    )}
                </div>

                {/* 🟢 الفورم */}
                <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                    <input
                        type="text"
                        name="title"
                        placeholder="📌 عنوان الحدث"
                        value={form.title}
                        onChange={handleChange}
                        className="border p-3 w-full rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
                        required
                    />

                    <select
                        required
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


                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="date"
                            placeholder="📅 التاريخ"
                            value={form.date}
                            onChange={handleChange}
                            className="border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                        <input
                            type="text"
                            name="time"
                            placeholder="⏰ الوقت"
                            value={form.time}
                            onChange={handleChange}
                            className="border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    {/* <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="latitude"
                            placeholder="🌍 خط العرض"
                            value={form.latitude}
                            onChange={handleChange}
                            className="border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                        <input
                            type="text"
                            name="longitude"
                            placeholder="📍 خط الطول"
                            value={form.longitude}
                            onChange={handleChange}
                            className="border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div> */}
                    {/* 🟢 اختيار الموقع من الخريطة */}
                    <MapPicker
                        onLocationSelect={(latlng) => {
                            setForm((prev) => ({
                                ...prev,
                                latitude: latlng.lat,
                                longitude: latlng.lng,
                            }));
                        }}
                    />
                    <p className="text-sm text-gray-500 mt-2">
                        📍 اضغط على الخريطة لتحديد موقع الحدث
                    </p>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md transition"
                    >
                        {editingId ? "💾 تحديث" : "➕ إضافة"}
                    </button>
                </form>
            </div>

            {/* 🟢 القسم الثاني: قائمة الأحداث */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-3xl p-6 border border-gray-200">
                <h3 className="font-bold text-2xl mb-6 text-gray-800 flex items-center gap-2">
                    📋 جميع الأحداث
                </h3>

                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-2">
                    {events.length > 0 ? (
                        events.map((item) => (
                            <li
                                key={item._id}
                                className="relative group border border-gray-200 p-5 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col gap-4"
                            >
                                {/* العنوان */}
                                <h4 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                                    <span className="text-blue-500">📌</span> {item.title}
                                </h4>

                                {/* التفاصيل */}
                                <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                                    <span className="flex items-center gap-1">
                                        ⚡ <span className="font-medium text-gray-700">النوع:</span> {item.type}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        📅 <span className="font-medium text-gray-700">التاريخ:</span> {item.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        ⏰ <span className="font-medium text-gray-700">الوقت:</span> {item.time}
                                    </span>
                                    <span className="flex items-center gap-1 truncate">
                                        🌍 <span className="font-medium text-gray-700">الموقع:</span>
                                        lat {item.location?.coordinates[0]}, lng {item.location?.coordinates[1]}
                                    </span>
                                </div>

                                {/* الأزرار */}
                                <div className="flex gap-3 pt-3 mt-auto">
                                    <button
                                        onClick={() => handleEdit(item)}
                                        className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-3 py-2 rounded-xl transition font-medium"
                                    >
                                        ✏️ تعديل
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClick(item._id)}
                                        className="flex-1 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white px-3 py-2 rounded-xl transition font-medium"
                                    >
                                        🗑️ حذف
                                    </button>
                                </div>

                                {/* حركة عند المرور */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm">لا توجد أحداث بعد.</p>
                    )}
                </ul>
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
