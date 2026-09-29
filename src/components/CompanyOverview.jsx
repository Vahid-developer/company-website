import { ArrowLeft, Briefcase, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      className="relative z-20 -mt-8 overflow-hidden rounded-t-3xl bg-white px-5 pb-24 pt-20 shadow-[0_-16px_50px_rgba(15,23,42,0.10)] sm:px-6 lg:px-10"
    >
      {/* Decorative bubble - top left, hollow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full border-2 border-blue-100"
      />

      {/* Decorative bubble - bottom right, hollow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-16 h-24 w-24 rounded-full border-2 border-blue-100"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-blue-300" />

            <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600">
              درباره شرکت ما
            </span>

            <span className="h-px w-10 bg-blue-300" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            همراه شما برای ساختن آینده‌ای بهتر
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            ترکیبی از تجربه، خلاقیت و فناوری برای ساخت راهکارهایی که به رشد
            واقعی کسب‌وکار شما کمک می‌کنند.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Content - RIGHT (first child in RTL) */}
          <div className="max-w-2xl text-right">
            <p className="text-justify text-sm leading-7 text-slate-500 sm:text-base">
              ما در کنار کسب‌وکارها قرار می‌گیریم تا با استفاده از طراحی مدرن،
              فناوری‌های روز و تجربه تخصصی، مسیر حضور آن‌ها در فضای دیجیتال را
              ساده‌تر و حرفه‌ای‌تر کنیم.
            </p>

            <p className="mt-4 text-justify text-sm leading-7 text-slate-500 sm:text-base">
              تمرکز ما فقط روی ساخت یک محصول نیست؛ هدف ما ایجاد راهکارهایی
              کاربردی، قابل توسعه و متناسب با نیاز واقعی هر کسب‌وکار است.
            </p>

            {/* Features */}
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    strokeWidth={2}
                    className="shrink-0 text-blue-600"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                تماس با ما
                <ArrowLeft size={18} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Image - LEFT (second child in RTL) */}
          <div className="w-full">
            <div className="relative mx-auto w-full max-w-xl">
              {/* Image frame */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
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
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"
                />
              </div>

              {/* Floating stat card */}
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
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Briefcase size={22} strokeWidth={2} aria-hidden="true" />
                  </span>

                  <div className="text-right">
                    <div className="text-xl font-extrabold leading-6 text-slate-900">
                      +۲۰
                    </div>

                    <div className="text-xs font-medium text-slate-500">
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
