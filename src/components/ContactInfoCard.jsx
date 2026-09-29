import { motion } from "framer-motion";

const variants = {
  indigo:
    "border-indigo-100 text-indigo-600 dark:border-white/10 dark:text-indigo-300",
  purple:
    "border-purple-100 text-purple-600 dark:border-white/10 dark:text-purple-300",
  cyan:
    "border-cyan-100 text-cyan-600 dark:border-white/10 dark:text-cyan-300",
};

function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
  variant = "indigo",
  ltr = false,
  index = 0,
}) {
  const Component = href ? motion.a : motion.div;

  return (
    <Component
      {...(href ? { href } : {})}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white/80
        p-4
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
      "
    >
      <div
        className={`
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          bg-white/70
          shadow-sm
          dark:bg-white/5
          ${variants[variant]}
        `}
      >
        <Icon
          size={20}
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0 flex-1 text-right">
        <p
          className="
            text-xs
            text-slate-400
            dark:text-slate-500
          "
        >
          {label}
        </p>

        <p
          dir={ltr ? "ltr" : undefined}
          className="
            mt-1
            break-words
            text-right
            text-sm
            font-medium
            leading-6
            text-slate-700
            transition-colors
            duration-500
            dark:text-slate-300
          "
        >
          {value}
        </p>
      </div>
    </Component>
  );
}

export default ContactInfoCard;