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
      {/* Scrim + Blur */}
      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-[9998]

          bg-slate-950/20
          backdrop-blur-md

          transition-opacity
          duration-300

          dark:bg-black/45

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
          fixed
          top-0
          right-0
          z-[9999]

          h-dvh
          w-[280px]
          max-w-[85vw]

          overflow-hidden

          border-l
          border-slate-200/70

          bg-white/95
          text-slate-900

          shadow-2xl
          shadow-slate-900/10

          backdrop-blur-xl

          transition-transform
          duration-300
          ease-out

          dark:border-white/10
          dark:bg-indigo-950/95
          dark:text-white
          dark:shadow-black/30

          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Subtle purple glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-56
            w-56
            rounded-full
            bg-indigo-200/30
            blur-3xl

            dark:bg-purple-600/10
          "
        />

        {/* Drawer Header */}
        <div
          className="
            relative
            flex
            h-16
            items-center
            justify-between

            border-b
            border-slate-200/80

            px-4

            dark:border-white/10
          "
        >
          <h2
            className="
              text-lg
              font-bold
              text-slate-900

              dark:text-white
            "
          >
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="بستن منو"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full

              text-slate-500

              transition-all
              duration-200

              hover:bg-indigo-50
              hover:text-indigo-600

              focus:outline-none
              focus:ring-2
              focus:ring-indigo-400
              focus:ring-offset-2
              focus:ring-offset-white

              dark:text-white/60
              dark:hover:bg-white/10
              dark:hover:text-white
              dark:focus:ring-offset-indigo-950
            "
          >
            <X
              size={22}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* Navigation */}
        <div
          className="
            relative

            h-[calc(100dvh-4rem)]

            overflow-y-auto

            px-4
            py-5

            scrollbar-thin
            scrollbar-thumb-slate-200
            scrollbar-track-transparent

            dark:scrollbar-thumb-white/10
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