function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  variant,
}) {
  const cardBackground =
    variant === "blue"
      ? "bg-blue-50"
      : "bg-white";

  const iconBackground =
    variant === "blue"
      ? "bg-white"
      : "bg-blue-50";

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
        border-slate-200
        ${cardBackground}
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
      `}
    >
      {/* Image */}
      <div
        className="
          relative
          aspect-[16/10]
          w-full
          overflow-hidden
          bg-slate-200
        "
      >
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

        {/* Image overlay */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/10
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          flex
          flex-1
          flex-col
          px-6
          pb-6
          pt-6
          text-right
        "
      >
        {/* Service Icon */}
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
            text-blue-600
            transition-all
            duration-300
            group-hover:bg-blue-100
            group-hover:text-blue-700
          `}
        >
          <Icon
            size={22}
            strokeWidth={2}
          />
        </div>

        {/* Title */}
        <h3
          className="
            text-lg
            font-bold
            leading-7
            tracking-tight
            text-slate-900
            md:text-xl
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            min-h-[56px]
            max-w-[32ch]
            text-sm
            font-normal
            leading-7
            text-slate-500
            md:text-[15px]
          "
        >
          {description}
        </p>

        {/* More */}
        <div className="mt-auto pt-5">
          <button
            type="button"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              leading-6
              text-blue-600
              transition-all
              duration-200
              hover:gap-3
              hover:text-blue-700
            "
          >
            بیشتر بدانید

            <span
              aria-hidden="true"
              className="
                text-lg
                leading-none
              "
            >
              ←
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;