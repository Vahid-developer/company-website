import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

const plans = [
  {
    name: "پایه",
    price: "۱,۹۰۰,۰۰۰",
    period: "ماه",
    features: [
      "طراحی یک صفحه فرود",
      "پشتیبانی یک ماهه",
      "یک دور بازبینی طرح",
    ],
    highlighted: false,
  },
  {
    name: "حرفه‌ای",
    price: "۴,۹۰۰,۰۰۰",
    period: "ماه",
    features: [
      "طراحی کامل وب‌سایت",
      "پشتیبانی سه ماهه",
      "سه دور بازبینی طرح",
      "بهینه‌سازی اولیه سئو",
    ],
    highlighted: true,
  },
  {
    name: "سازمانی",
    price: "توافقی",
    period: "پروژه",
    features: [
      "طراحی اختصاصی و مقیاس‌پذیر",
      "پشتیبانی نامحدود",
      "مشاوره تخصصی فنی",
      "تحویل مرحله‌به‌مرحله",
    ],
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      dir="rtl"
      className="
        relative
        z-30
        -mt-8
        overflow-hidden
        rounded-t-3xl
        bg-slate-50
        px-5
        pb-20
        pt-16
        shadow-[0_-16px_50px_rgba(15,23,42,0.10)]
        transition-colors
        duration-500

        dark:bg-slate-950
        dark:shadow-[0_-16px_50px_rgba(0,0,0,0.35)]

        sm:px-6
        sm:pb-24
        sm:pt-20
        lg:px-10
      "
    >
      {/* Background glow - top right */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-28
          h-72
          w-72
          rounded-full
          bg-purple-300/30
          blur-3xl
          transition-all
          duration-500
          dark:bg-purple-600/15
          sm:h-80
          sm:w-80
        "
      />

      {/* Background glow - bottom left */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-36
          -left-36
          h-72
          w-72
          rounded-full
          bg-cyan-300/25
          blur-3xl
          transition-all
          duration-500
          dark:bg-cyan-500/10
          sm:h-80
          sm:w-80
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
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-300/10
          blur-3xl
          dark:bg-indigo-500/10
        "
      />

      {/* Hollow bubble - top right */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          top-20
          h-32
          w-32
          rounded-full
          border-2
          border-purple-200/70
          transition-colors
          duration-500
          dark:border-purple-500/20
          sm:-right-16
          sm:h-36
          sm:w-36
        "
      />

      {/* Hollow bubble - bottom left */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-2
          -left-14
          h-24
          w-24
          rounded-full
          border-2
          border-cyan-200/70
          transition-colors
          duration-500
          dark:border-cyan-500/20
          sm:bottom-20
          sm:-left-10
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* Section heading */}

        <div
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
            sm:mb-14
          "
        >
          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-4
              sm:mb-5
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
              تعرفه‌ها
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
            پلنی متناسب با نیاز شما
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
            بسته به اندازه و نیاز کسب‌وکارتان، مناسب‌ترین پلن را انتخاب کنید.
          </p>
        </div>

        {/* Pricing cards */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
            md:gap-6
            lg:gap-7
          "
        >
          {plans.map((plan, index) => {
            const isMiddle = plan.highlighted;

            return (
              <motion.div
                key={plan.name}
                className="h-full"
                initial={{
                  opacity: 0,
                  y: 24,
                  scale: isMiddle ? 0.96 : 1,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: isMiddle ? 0.7 : 0.6,
                  delay: isMiddle ? 0.25 : index * 0.12,
                  ease: "easeOut",
                }}
              >
                <PricingCard
                  name={plan.name}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  highlighted={plan.highlighted}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;