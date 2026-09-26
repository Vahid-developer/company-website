import { useEffect } from "react";
import { X } from "lucide-react";

function Drawer({ isOpen, onClose, title, children }) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* پس‌زمینه تار */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* پنل کشویی */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[85%] bg-indigo-950 text-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            aria-label="بستن منو"
          >
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </>
  );
}

export default Drawer;