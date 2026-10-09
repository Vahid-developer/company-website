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
        z-40
        -mt-16
        overflow-hidden
        rounded-t-[48px]
        bg-white
        px-5
        pb-28
        pt-20
        shadow-[0_-16px_50px_rgba(15,23,42,0.10)]
        transition-colors
        duration-500

        dark:bg-slate-950
        dark:shadow-[0_-16px_50px_rgba(0,0,0,0.35)]

        sm:px-6
        sm:pb-32
        sm:pt-24

        md:-mt-16
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
          bg-gradient-to-r
          from-cyan-400
          via-indigo-500
          to-purple-500
          dark:from-cyan-400
          dark:via-indigo-400
          dark:to-purple-500
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
          bg-purple-300/25
          blur-3xl
          transition-all
          duration-500
          dark:bg-purple-600/15
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
          bg-cyan-300/20
          blur-3xl
          transition-all
          duration-500
          dark:bg-cyan-600/10
        "
      />

      {/* Center glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-300/10
          blur-3xl
          dark:bg-indigo-600/10
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
          border-purple-200/70
          transition-colors
          duration-500
          dark:border-purple-500/20
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
          border-cyan-200/70
          transition-colors
          duration-500
          dark:border-cyan-500/20
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
            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-transparent
                to-indigo-300
                dark:to-indigo-500
                sm:w-10
              "
            />

            <span
              className="
                rounded-full
                border
                border-indigo-200
                bg-indigo-50/80
                px-5
                py-2
                text-sm
                font-semibold
                text-indigo-600
                backdrop-blur-sm
                transition-all
                duration-500
                dark:border-indigo-400/20
                dark:bg-indigo-950/60
                dark:text-indigo-300
              "
            >
              نظرات مشتریان
            </span>

            <span
              className="
                h-px
                w-8
                bg-gradient-to-l
                from-transparent
                to-purple-300
                dark:to-purple-500
                sm:w-10
              "
            />
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-slate-900
              transition-colors
              duration-500
              dark:text-white
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
              transition-colors
              duration-500
              dark:text-slate-400
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
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white/80
                p-5
                text-right
                shadow-sm
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-indigo-200
                hover:shadow-xl

                dark:border-white/10
                dark:bg-slate-900/80
                dark:hover:border-indigo-400/30
                dark:hover:shadow-black/30

                sm:min-h-[350px]
                sm:p-6

                lg:min-h-[360px]
                lg:p-7
              "
            >
              {/* Card glow */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-28
                  w-28
                  rounded-full
                  bg-indigo-200/20
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:bg-purple-300/25
                  dark:bg-indigo-600/10
                  dark:group-hover:bg-purple-600/15
                "
              />

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
                  bg-indigo-50
                  text-indigo-500
                  transition-all
                  duration-300
                  group-hover:bg-indigo-100
                  group-hover:text-indigo-600

                  dark:bg-indigo-950
                  dark:text-indigo-300
                  dark:group-hover:bg-indigo-900
                  dark:group-hover:text-indigo-200

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
                  relative
                  z-10
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
                  relative
                  z-10
                  mt-5
                  flex-1
                  text-sm
                  leading-8
                  text-slate-600
                  transition-colors
                  duration-500
                  dark:text-slate-300
                  sm:text-[15px]
                "
              >
                «{testimonial.text}»
              </blockquote>

              {/* Divider */}

              <div
                aria-hidden="true"
                className="
                  relative
                  z-10
                  my-5
                  h-px
                  w-full
                  bg-slate-100
                  transition-colors
                  duration-500
                  dark:bg-white/10
                  sm:my-6
                "
              />

              {/* Customer */}

              <footer className="relative z-10 flex items-center gap-3">
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
                    bg-indigo-50
                    text-sm
                    font-bold
                    text-indigo-600
                    transition-all
                    duration-500
                    dark:bg-indigo-950
                    dark:text-cyan-400
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
                      transition-colors
                      duration-500
                      dark:text-white
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
                      transition-colors
                      duration-500
                      dark:text-slate-400
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