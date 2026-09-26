import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
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
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;