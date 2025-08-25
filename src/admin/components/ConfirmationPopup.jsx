import { motion, AnimatePresence } from "framer-motion";

export default function ConfirmationPopup({
  show,
  message = "هل أنت متأكد من الحذف؟",
  onConfirm,
  onCancel,
}) {
  return (
    <AnimatePresence>
      {show && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={onCancel} // اضغط برا لإلغاء
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full"
            onClick={(e) => e.stopPropagation()} // منع إغلاق عند الضغط داخل البوباب
          >
            <p className="text-gray-700 text-lg mb-6 text-center">{message}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={onConfirm}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                نعم احذف
              </button>
              <button
                onClick={onCancel}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition"
              >
                لا 
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
