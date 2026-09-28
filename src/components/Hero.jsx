import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");

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
        bg-indigo-950
        px-6
        py-24
        text-white
        md:px-8
        md:py-28
      "
    >
      {/* نور پس‌زمینه سمت راست */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-96
          w-96
          rounded-full
          bg-purple-600/20
          blur-3xl
        "
      />

      {/* نور پس‌زمینه سمت چپ */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-32
          h-96
          w-96
          rounded-full
          bg-indigo-600/20
          blur-3xl
        "
      />

      {/* نور مرکزی */}
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
          bg-indigo-500/10
          blur-3xl
        "
      />

      {/* محتوای اصلی Hero */}
      <div
        className="
          relative
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
            border-white/10
            bg-white/10
            px-4
            py-2
            text-sm
            text-indigo-200
            backdrop-blur-md
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

        {/* عنوان اصلی */}
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
              from-indigo-300
              to-purple-300
              bg-clip-text
              text-transparent
            "
          >
            رشد کسب‌وکار شما
          </span>
        </motion.h1>

        {/* توضیحات */}
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
            text-indigo-100/80
            md:text-lg
          "
        >
          ما با ارائه خدمات تخصصی و باکیفیت، کنار شما هستیم تا کسب‌وکارتان را
          به سطح بعدی برسانید.
        </motion.p>

        {/* دکمه‌ها */}
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
          {/* شروع همکاری */}
          <Link
            to="/contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-indigo-500
              px-6
              py-3
              font-bold
              text-white
              shadow-lg
              shadow-indigo-950/20
              transition-all
              duration-300
              hover:scale-105
              hover:bg-indigo-400
              active:scale-95
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

          {/* مشاهده خدمات */}
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
              border-white/20
              bg-white/5
              px-6
              py-3
              font-medium
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/10
              active:scale-95
            "
          >
            <span>
              مشاهده خدمات
            </span>
          </button>
        </motion.div>

        {/* آمار اعتمادسازی */}
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
            text-indigo-200
            md:gap-8
          "
        >
          <div className="text-center">
            <p className="text-2xl font-extrabold text-white">
              +۵۰۰
            </p>

            <p className="text-xs">
              مشتری راضی
            </p>
          </div>

          <div className="h-8 w-px bg-white/20" />

          <div className="text-center">
            <p className="text-2xl font-extrabold text-white">
              ۱۰+
            </p>

            <p className="text-xs">
              سال تجربه
            </p>
          </div>

          <div className="h-8 w-px bg-white/20" />

          <div className="text-center">
            <p className="text-2xl font-extrabold text-white">
              ۲۴/۷
            </p>

            <p className="text-xs">
              پشتیبانی
            </p>
          </div>
        </motion.div>
      </div>

      {/* شاخص اسکرول */}
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
          text-indigo-300
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