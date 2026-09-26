import { createPortal } from "react-dom";
import { useEffect } from "react";
import { X } from "lucide-react";

function Drawer({ isOpen, onClose, title, children }) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return createPortal(
    <>
      {/* Scrim + Blur کل سایت */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[9998]
          bg-black/35
          backdrop-blur-md
          transition-opacity duration-300
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <aside
        aria-label={title}
        className={`
          fixed top-0 right-0 z-[9999]
          h-dvh
          w-[280px]
          max-w-[85vw]

          bg-slate-950
          text-white

          shadow-2xl

          transition-transform
          duration-300
          ease-out

          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div
          className="
            flex h-16
            items-center justify-between
            border-b border-white/10
            px-4
          "
        >
          <h2 className="text-lg font-bold text-white">{title}</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="بستن منو"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full

              text-white/70

              transition-colors
              duration-200

              hover:bg-white/10
              hover:text-white

              focus:outline-none
              focus:ring-2
              focus:ring-indigo-400
            "
          >
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        {/* Navigation */}
        <div
          className="
         h-[calc(100dvh-4rem)]
         px-4
         py-4
  "
        >
          {children}
        </div>
      </aside>
    </>,
    document.body,
  );
}

export default Drawer;
