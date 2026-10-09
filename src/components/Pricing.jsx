import { motion } from "framer-motion";

import PricingCard from "./PricingCard";
import SectionHeading from "./SectionHeading";

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
        z-20
        -mt-16
        overflow-hidden
        rounded-t-[48px]
        bg-slate-50
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

        lg:px-10
      "
    >
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

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <SectionHeading
          badge="تعرفه‌ها"
          title="پلنی متناسب با نیاز شما"
          description="بسته به اندازه و نیاز کسب‌وکارتان، مناسب‌ترین پلن را انتخاب کنید."
          className="mb-10 sm:mb-14"
        />

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
                viewport={{ once: true, amount: 0.2 }}
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