import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

function ContactHero() {
  return (
    <section
      id="contact-hero"
      dir="rtl"
      className="
        relative
        z-10
        overflow-hidden
        bg-gradient-to-br
        from-indigo-50
        via-white
        to-purple-50
        px-6
        pb-40
        pt-20
        text-slate-900
        transition-colors
        duration-500
        dark:from-slate-950
        dark:via-indigo-950
        dark:to-purple-950
        dark:text-white
        md:px-8
        md:pb-48
        md:pt-28
      "
    >
      {/* ========================= */}
      {/* Background color layers */}
      {/* ========================= */}

      {/* Purple - top right */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-purple-400/30
          blur-3xl
          transition-all
          duration-700
          dark:bg-purple-600/30
        "
      />

      {/* Cyan / Sky - bottom left */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-32
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-400/25
          blur-3xl
          transition-all
          duration-700
          dark:bg-cyan-500/20
        "
      />

      {/* Pink / Fuchsia - center */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-fuchsia-300/15
          blur-3xl
          transition-all
          duration-700
          dark:bg-fuchsia-500/10
        "
      />

      {/* Indigo - upper left */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          top-10
          h-[320px]
          w-[320px]
          rounded-full
          bg-indigo-400/20
          blur-3xl
          transition-all
          duration-700
          dark:bg-indigo-500/20
        "
      />

      {/* ========================= */}
      {/* Main content */}
      {/* ========================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
          justify-center
          gap-6
          text-center
        "
      >
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-indigo-200/80
            bg-white/60
            px-4
            py-2
            text-sm
            text-indigo-700
            shadow-sm
            backdrop-blur-md
            transition-all
            duration-500
            dark:border-white/10
            dark:bg-white/10
            dark:text-indigo-200
          "
        >
          <MessageCircle
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>
            تماس با ما
          </span>
        </motion.div>

        {/* Main title */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            max-w-4xl
            text-4xl
            font-extrabold
            leading-tight
            tracking-tight
            md:text-6xl
          "
        >
          با ما{" "}

          <span
            className="
              bg-gradient-to-l
              from-indigo-600
              via-purple-600
              to-fuchsia-600
              bg-clip-text
              text-transparent
              dark:from-cyan-300
              dark:via-indigo-300
              dark:to-purple-300
            "
          >
            در ارتباط باشید
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="
            max-w-2xl
            text-base
            leading-8
            text-slate-600
            transition-colors
            duration-500
            dark:text-indigo-100/80
            md:text-lg
          "
        >
          سؤال، پیشنهاد یا درخواست همکاری دارید؟ پیام خود را برای ما بنویسید
          تا در کوتاه‌ترین زمان ممکن با شما تماس بگیریم.
        </motion.p>
      </div>
    </section>
  );
}

export default ContactHero;