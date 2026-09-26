import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-indigo-950 text-white px-8 py-24 md:py-32">
      {/* نور پس‌زمینه تزئینی */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-indigo-200"
        >
          <Sparkles size={16} strokeWidth={2} />
          <span>همراه مطمئن کسب‌وکار شما</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          راه‌حل‌های حرفه‌ای برای{" "}
          <span className="bg-gradient-to-l from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            رشد کسب‌وکار شما
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-lg text-indigo-100 max-w-xl"
        >
          ما با ارائه خدمات تخصصی و باکیفیت، کنار شما هستیم تا کسب‌وکارتان را
          به سطح بعدی برسانید.
        </motion.p>

        {/* دکمه‌های اصلی و ثانویه */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>شروع همکاری</span>
            <ArrowLeft
              size={20}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </Link>

        <button
         onClick={() =>
           document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
             }
             className="cursor-pointer inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-full border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
        >
  <span>مشاهده خدمات</span>
</button>
        </motion.div>

        {/* آمار اعتمادسازی */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex items-center gap-8 mt-4 text-indigo-200"
        >
          <div className="text-center">
            <p className="text-2xl font-extrabold text-white">+۵۰۰</p>
            <p className="text-xs">مشتری راضی</p>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <p className="text-2xl font-extrabold text-white">۱۰+</p>
            <p className="text-xs">سال تجربه</p>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <p className="text-2xl font-extrabold text-white">۲۴/۷</p>
            <p className="text-xs">پشتیبانی</p>
          </div>
        </motion.div>
      </div>

      {/* شاخص اسکرول */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.9 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-indigo-300"
      >
        <ChevronDown size={28} strokeWidth={2} />
      </motion.div>
    </section>
  );
}

export default Hero;