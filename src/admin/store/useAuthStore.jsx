// useAuthStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useAuthStore = create(
    persist(
        (set) => ({
            admin: null,
            counts: {
                articles: 0,
                content: 0,
                events: 0,
                bookings: 0,
            },

            // تحديث أعداد العناصر
            setCounts: (newCounts) => set({ counts: { ...newCounts } }),

            updateCount: (key, value) =>
                set((state) => ({ counts: { ...state.counts, [key]: value } })),

            setAdmin: (data) => set({ admin: data }),
            logout: async () => {
                try {
                    const res = await axios.post(
                        "https://down-syndrome-api.vercel.app/api/admin/logOutAdmin",
                        {},
                        { withCredentials: true }
                    );
                    console.log("Logout response:", res.data);


                    set({ admin: null });
                } catch (error) {
                    console.error("Logout failed:", error.response?.data || error.message);
                    set({ admin: null });
                }
                finally {
                    set({ admin: null });
                    useAuthStore.persist.clearStorage(); // 🔹 يمسح الـ localStorage تمام
                }
            },
        }),
        {
            name: "admin-auth",
        }
    )
);

export default useAuthStore;
