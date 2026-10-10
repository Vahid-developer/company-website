
function ServiceCard({ title, description, icon: Icon, image, variant }) {
  const cardBackground =
    variant === "blue"
      ? "bg-indigo-50/80 dark:bg-indigo-950/50"
      : "bg-white/80 dark:bg-slate-900/80";

  const iconBackground =
    variant === "blue"
      ? "bg-white dark:bg-slate-800"
      : "bg-indigo-50 dark:bg-indigo-950";

  return (
    <article
      className={`
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/80
        ${cardBackground}
        shadow-sm
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-300
        hover:shadow-xl
        dark:border-white/10
        dark:hover:border-indigo-400/40
      `}
    >
      {/* Service image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
          "
        />

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
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </div>

      {/* Service content */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-6 text-right">
        {/* Service icon */}
        <div
          className={`
            mb-5
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            ${iconBackground}
            text-indigo-600
            transition-all
            duration-300
            group-hover:bg-indigo-100
            group-hover:text-indigo-700
            dark:text-indigo-300
            dark:group-hover:bg-indigo-900
            dark:group-hover:text-indigo-200
          `}
        >
          <Icon size={22} strokeWidth={2} />
        </div>

        {/* Service title */}
        <h3
          className="
            text-lg
            font-bold
            leading-7
            tracking-tight
            text-slate-900
            transition-colors
            duration-300
            dark:text-white
            md:text-xl
          "
        >
          {title}
        </h3>

        {/* Service description */}
        <p
          className="
            mt-3
            min-h-[56px]
            max-w-[32ch]
            text-sm
            font-normal
            leading-7
            text-slate-500
            transition-colors
            duration-300
            dark:text-slate-400
            md:text-[15px]
          "
        >
          {description}
        </p>

        {/* Decorative accent */}
        <div className="mt-auto flex justify-start pt-6">
          <span
            aria-hidden="true"
            className="
              h-1
              w-10
              rounded-full
              bg-gradient-to-l
              from-indigo-500
              to-purple-400
              opacity-70
              transition-all
              duration-300
              group-hover:w-16
              group-hover:opacity-100
              dark:from-indigo-400
              dark:to-cyan-400
            "
          />
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
