import { motion } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  const handleScrollToServices = () => {
    const servicesSection =
      document.getElementById("services");

    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="
        relative
        flex
        min-h-[calc(100svh+80px)]
        items-center
        overflow-hidden
        bg-gradient-to-br
        from-indigo-50
        via-white
        to-purple-50
        px-6
        py-24
        text-slate-900
        transition-colors
        duration-500
        dark:from-slate-950
        dark:via-indigo-950
        dark:to-purple-950
        dark:text-white
        md:px-8
        md:py-28
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
          -translate-y-8
          flex-col
          items-center
          justify-center
          gap-6
          text-center
          md:-translate-y-10
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
          <Sparkles
            size={16}
            strokeWidth={2}
          />

          <span>
            همراه مطمئن کسب‌وکار شما
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
          راه‌حل‌های حرفه‌ای برای{" "}

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
            رشد کسب‌وکار شما
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
          ما با ارائه خدمات تخصصی و باکیفیت، کنار شما هستیم تا کسب‌وکارتان را
          به سطح بعدی برسانید.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.45,
            ease: "easeOut",
          }}
          className="
            flex
            flex-col
            items-center
            gap-4
            sm:flex-row
          "
        >
          {/* Start cooperation */}

          <Link
            to="/contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-l
              from-indigo-600
              to-purple-600
              px-6
              py-3
              font-bold
              text-white
              shadow-lg
              shadow-indigo-950/20
              transition-all
              duration-300
              hover:scale-105
              hover:from-indigo-500
              hover:to-purple-500
              active:scale-95
              dark:from-indigo-500
              dark:to-purple-500
              dark:hover:from-indigo-400
              dark:hover:to-purple-400
            "
          >
            <span>
              شروع همکاری
            </span>

            <ArrowLeft
              size={20}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />
          </Link>

          {/* View services */}

          <button
            type="button"
            onClick={handleScrollToServices}
            className="
              inline-flex
              cursor-pointer
              items-center
              gap-2
              rounded-full
              border
              border-indigo-200
              bg-white/50
              px-6
              py-3
              font-medium
              text-indigo-900
              shadow-sm
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/80
              active:scale-95
              dark:border-white/20
              dark:bg-white/5
              dark:text-white
              dark:hover:bg-white/10
            "
          >
            <span>
              مشاهده خدمات
            </span>
          </button>
        </motion.div>

        {/* Trust statistics */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="
            mt-6
            flex
            items-center
            gap-6
            text-indigo-600
            transition-colors
            duration-500
            dark:text-indigo-200
            md:gap-8
          "
        >
          <div className="text-center">
            <p
              className="
                text-2xl
                font-extrabold
                text-slate-900
                dark:text-white
              "
            >
              +۵۰۰
            </p>

            <p className="text-xs">
              مشتری راضی
            </p>
          </div>

          <div
            className="
              h-8
              w-px
              bg-indigo-200
              dark:bg-white/20
            "
          />

          <div className="text-center">
            <p
              className="
                text-2xl
                font-extrabold
                text-slate-900
                dark:text-white
              "
            >
              ۱۰+
            </p>

            <p className="text-xs">
              سال تجربه
            </p>
          </div>

          <div
            className="
              h-8
              w-px
              bg-indigo-200
              dark:bg-white/20
            "
          />

          <div className="text-center">
            <p
              className="
                text-2xl
                font-extrabold
                text-slate-900
                dark:text-white
              "
            >
              ۲۴/۷
            </p>

            <p className="text-xs">
              پشتیبانی
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: {
            duration: 0.6,
            delay: 0.9,
          },
          y: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9,
          },
        }}
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          text-indigo-500
          dark:text-cyan-300
        "
      >
        <ChevronDown
          size={28}
          strokeWidth={2}
        />
      </motion.div>
    </section>
  );
}

export default Hero;