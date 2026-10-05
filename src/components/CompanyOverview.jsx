import {
  ArrowLeft,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SectionHeading from "./SectionHeading";

import webDesignImage from "../assets/image/web-card.jpg";

const features = [
  "طراحی متناسب با نیاز کسب‌وکار",
  "تجربه کاربری مدرن و کاربردی",
  "ساختار قابل توسعه",
  "تمرکز بر کیفیت و جزئیات",
];

function CompanyOverview() {
  return (
    <section
      dir="rtl"
      className="
        relative
        z-20
        -mt-16
        overflow-hidden
        rounded-t-[48px]
        bg-white
        px-5
        pb-24
        pt-20
        shadow-[0_-16px_50px_rgba(15,23,42,0.10)]
        transition-colors
        duration-500

        dark:bg-slate-950
        dark:shadow-[0_-16px_50px_rgba(0,0,0,0.35)]

        sm:px-6
        md:-mt-24
        md:rounded-t-[64px]
        lg:px-10
      "
    >
      {/* Purple bubble */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-20
          top-8
          h-48
          w-48
          rounded-full
          border-2
          border-purple-200/70
          transition-colors
          duration-500
          dark:border-purple-500/20
        "
      />

      {/* Cyan bubble */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-12
          bottom-16
          h-32
          w-32
          rounded-full
          border-2
          border-cyan-200/70
          transition-colors
          duration-500
          dark:border-cyan-500/20
        "
      />

      {/* Soft center glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-indigo-300/10
          blur-3xl
          dark:bg-indigo-600/10
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <SectionHeading
          badge="درباره شرکت ما"
          title="همراه شما برای ساختن آینده‌ای بهتر"
          description="ترکیبی از تجربه، خلاقیت و فناوری برای ساخت راهکارهایی که به رشد واقعی کسب‌وکار شما کمک می‌کنند."
          className="mb-10 md:mb-12"
        />

        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-12
          "
        >
          <div className="max-w-2xl text-right">
            <p
              className="
                text-justify
                text-sm
                leading-7
                text-slate-500
                transition-colors
                duration-500
                dark:text-slate-400
                sm:text-base
              "
            >
              ما در کنار کسب‌وکارها قرار می‌گیریم تا با استفاده از طراحی مدرن،
              فناوری‌های روز و تجربه تخصصی، مسیر حضور آن‌ها در فضای دیجیتال را
              ساده‌تر و حرفه‌ای‌تر کنیم.
            </p>

            <p
              className="
                mt-4
                text-justify
                text-sm
                leading-7
                text-slate-500
                transition-colors
                duration-500
                dark:text-slate-400
                sm:text-base
              "
            >
              تمرکز ما فقط روی ساخت یک محصول نیست؛ هدف ما ایجاد راهکارهایی
              کاربردی، قابل توسعه و متناسب با نیاز واقعی هر کسب‌وکار است.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    strokeWidth={2}
                    className="
                      shrink-0
                      text-indigo-600
                      transition-colors
                      duration-500
                      dark:text-cyan-400
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-medium
                      text-slate-700
                      transition-colors
                      duration-500
                      dark:text-slate-300
                    "
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-l
                  from-indigo-600
                  to-purple-600
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-indigo-950/10
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:from-indigo-500
                  hover:to-purple-500
                  hover:shadow-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                  focus:ring-offset-2
                  focus:ring-offset-white
                  dark:from-indigo-500
                  dark:to-purple-500
                  dark:hover:from-indigo-400
                  dark:hover:to-purple-400
                  dark:focus:ring-offset-slate-950
                "
              >
                تماس با ما

                <ArrowLeft
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="relative mx-auto w-full max-w-xl">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-100
                  shadow-xl
                  transition-all
                  duration-500
                  dark:border-white/10
                  dark:bg-slate-900
                  dark:shadow-black/30
                "
              >
                <div className="aspect-[4/3] w-full">
                  <img
                    src={webDesignImage}
                    alt="تیم شرکت در حال کار روی راهکارهای دیجیتال"
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-indigo-950/20
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute -bottom-5 right-4 md:-right-5"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/95
                    px-4
                    py-3
                    shadow-xl
                    backdrop-blur-md
                    transition-all
                    duration-500
                    dark:border-white/10
                    dark:bg-slate-900/95
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-indigo-50
                      text-indigo-600
                      transition-colors
                      duration-500
                      dark:bg-indigo-950
                      dark:text-cyan-400
                    "
                  >
                    <Briefcase size={22} strokeWidth={2} aria-hidden="true" />
                  </span>

                  <div className="text-right">
                    <div
                      className="
                        text-xl
                        font-extrabold
                        leading-6
                        text-slate-900
                        transition-colors
                        duration-500
                        dark:text-white
                      "
                    >
                      +۲۰
                    </div>

                    <div
                      className="
                        text-xs
                        font-medium
                        text-slate-500
                        transition-colors
                        duration-500
                        dark:text-slate-400
                      "
                    >
                      پروژه انجام‌شده
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;