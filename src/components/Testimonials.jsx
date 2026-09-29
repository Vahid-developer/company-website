import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "علی رضایی",
    role: "مدیر یک مجموعه تجاری",
    text: "تجربه همکاری با این تیم بسیار حرفه‌ای بود. از طراحی تا اجرا همه چیز با دقت و طبق نیاز کسب‌وکار ما پیش رفت.",
    rating: 5,
    initials: "ع",
  },
  {
    name: "سارا احمدی",
    role: "مدیر برند و بازاریابی",
    text: "چیزی که برای ما اهمیت داشت درک درست نیازهای کسب‌وکار بود و تیم دقیقاً همین کار را انجام داد. نتیجه نهایی واقعاً رضایت‌بخش بود.",
    rating: 5,
    initials: "س",
  },
  {
    name: "محمد کریمی",
    role: "مدیر یک شرکت فناوری",
    text: "هم کیفیت طراحی و هم پشتیبانی بعد از اجرا برای ما عالی بود. همکاری منظم و حرفه‌ای باعث شد پروژه بدون دردسر پیش برود.",
    rating: 5,
    initials: "م",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      dir="rtl"
      className="
        relative
        z-30
        -mt-8
        overflow-hidden
        rounded-t-3xl
        bg-white
        px-5
        pb-24
        pt-20
        shadow-[0_-16px_50px_rgba(15,23,42,0.10)]
        sm:px-6
        sm:pb-28
        sm:pt-24
        md:rounded-t-[64px]
        md:px-8
        lg:px-10
      "
    >
      {/* Top accent */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-1
          w-20
          -translate-x-1/2
          rounded-full
          bg-blue-200
        "
      />

      {/* Background glow - top left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-indigo-100/60
          blur-3xl
          sm:h-80
          sm:w-80
        "
      />

      {/* Background glow - bottom right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-80
          w-80
          rounded-full
          bg-blue-100/50
          blur-3xl
        "
      />

      {/* Decorative bubble - top left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-10
          top-16
          h-24
          w-24
          rounded-full
          border-2
          border-blue-100
          sm:h-28
          sm:w-28
        "
      />

      {/* Decorative bubble - bottom right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-8
          -right-10
          h-24
          w-24
          rounded-full
          border-2
          border-blue-100
          sm:h-28
          sm:w-28
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
            sm:mb-12
          "
        >
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-8 bg-blue-300 sm:w-10" />

            <span
              className="
                rounded-full
                bg-blue-50
                px-5
                py-2
                text-sm
                font-semibold
                text-blue-600
              "
            >
              نظرات مشتریان
            </span>

            <span className="h-px w-8 bg-blue-300 sm:w-10" />
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-4xl
            "
          >
            تجربه‌ای که مشتریان ما روایت می‌کنند
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            "
          >
            رضایت مشتریان برای ما فقط یک عدد نیست؛ نتیجه‌ای است که از هر
            همکاری به دست می‌آوریم.
          </p>
        </div>

        {/* Testimonials */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-3
            lg:gap-7
          "
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="
                group
                relative
                flex
                min-h-[340px]
                flex-col
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                text-right
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-md
                sm:min-h-[350px]
                sm:p-6
                lg:min-h-[360px]
                lg:p-7
              "
            >
              {/* Quote */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-5
                  top-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50
                  text-blue-500
                  transition-colors
                  duration-300
                  group-hover:bg-blue-100
                  group-hover:text-blue-600
                  sm:left-6
                  sm:top-6
                "
              >
                <Quote
                  size={18}
                  strokeWidth={2}
                />
              </div>

              {/* Rating */}
              <div
                className="
                  flex
                  items-center
                  gap-1
                "
                aria-label={`امتیاز ${testimonial.rating} از 5`}
              >
                {Array.from({
                  length: testimonial.rating,
                }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    strokeWidth={2}
                    fill="currentColor"
                    className="text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote
                className="
                  mt-5
                  flex-1
                  text-sm
                  leading-8
                  text-slate-600
                  sm:text-[15px]
                "
              >
                «{testimonial.text}»
              </blockquote>

              {/* Divider */}
              <div
                aria-hidden="true"
                className="
                  my-5
                  h-px
                  w-full
                  bg-slate-100
                  sm:my-6
                "
              />

              {/* Customer */}
              <footer className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-50
                    text-sm
                    font-bold
                    text-blue-600
                  "
                >
                  {testimonial.initials}
                </div>

                <div>
                  <h3
                    className="
                      text-sm
                      font-bold
                      leading-6
                      text-slate-900
                    "
                  >
                    {testimonial.name}
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      font-medium
                      leading-5
                      text-slate-500
                    "
                  >
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;