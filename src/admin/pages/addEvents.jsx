import React, { useEffect, useState } from "react";
import axios from "axios";
import UseVerifyToken from "../hook/verifyToken";

export default function AddEvents() {
  UseVerifyToken();

  const [form, setForm] = useState({
    title: "",
    type: "",
    date: "",
    time: "",
    latitude: "",
    longitude: "",
  });

  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // 🟢 جلب الأحداث
  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        "https://down-syndrome-api.vercel.app/api/GetEvents",
        { withCredentials: true }
      );
      console.log(" Events:", res.data.events);
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

    try {
      if (editingId) {
        await axios.patch(
          `https://down-syndrome-api.vercel.app/api/admin/EditEvents/${editingId}`,
          payload,
          { withCredentials: true }
        );
        alert(" تم تعديل الحدث");
      } else {
        await axios.post(
          "https://down-syndrome-api.vercel.app/api/admin/AddEvents",
          payload,
          { withCredentials: true }
        );
        alert(" تم إضافة الحدث");
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
      alert("❌ فشل العملية");
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
  };

  // 🟢 حذف
  const handleDelete = async (id) => {
    if (!window.confirm("هل أنت متأكد من الحذف؟")) return;
    try {
      await axios.delete(
        `https://down-syndrome-api.vercel.app/api/admin/DeleteEvent/${id}`,
        { withCredentials: true }
      );
      alert("✅ تم الحذف");
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        {editingId ? "✏️ تعديل الحدث" : "➕ إضافة حدث جديد"}
      </h2>

      {/* 🟢 فورم الأحداث */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="title"
          placeholder="عنوان الحدث"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="type"
          placeholder="نوع الحدث (صحة / تعليم / رياضة)"
          value={form.type}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="date"
          placeholder="تاريخ الحدث (مثال: 15 / 8 / 2025)"
          value={form.date}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="time"
          placeholder="وقت الحدث (مثال: 5م)"
          value={form.time}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="latitude"
          placeholder="خط العرض Latitude"
          value={form.latitude}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="longitude"
          placeholder="خط الطول Longitude"
          value={form.longitude}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "تحديث" : "إضافة"}
        </button>
      </form>

      {/* 🟢 عرض الأحداث */}
      <div className="mt-6">
        <h3 className="font-bold mb-2">📋 جميع الأحداث</h3>
        <ul className="space-y-2">
          {events.map((item) => (
            <li
              key={item._id}
              className="border p-3 rounded flex flex-col space-y-2"
            >
              <span className="font-bold">{item.title}</span>
              <span className="text-sm text-gray-500">
                النوع: {item.type} | التاريخ: {item.date} | الوقت: {item.time}
              </span>
              <span className="text-sm text-gray-500">
                الموقع: lat {item.location?.coordinates[0]}, lng{" "}
                {item.location?.coordinates[1]}
              </span>

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
