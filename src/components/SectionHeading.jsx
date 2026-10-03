function SectionHeading({
  badge,
  title,
  description,
  className = "",
}) {
  return (
    <div
      className={`
        mx-auto
        mb-14
        max-w-3xl
        text-center
        ${className}
      `}
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
            w-10
            bg-gradient-to-r
            from-transparent
            to-indigo-300
            dark:to-indigo-500
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
          {badge}
        </span>

        <span
          className="
            h-px
            w-10
            bg-gradient-to-l
            from-transparent
            to-purple-300
            dark:to-purple-500
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
        {title}
      </h2>

      <p
        className="
          mx-auto
          mt-5
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
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;