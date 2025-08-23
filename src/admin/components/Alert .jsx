import { motion, AnimatePresence } from "framer-motion";

export default function Alert({
    message,
    type = "info",
    show,
    onClose,
    duration = 3000,
}) {
    if (!show) return null;

    const bgColor =
        type === "success"
            ? "bg-green-500"
            : type === "error"
                ? "bg-red-500"
                : "bg-blue-500";

    // اغلاق تلقائي بعد المدة
    setTimeout(() => {
        onClose();
    }, duration);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`fixed top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg text-white shadow-lg ${bgColor}`}
            >
                {message}
            </motion.div>
        </AnimatePresence>
    );
}
