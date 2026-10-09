import { ArrowLeft, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

function ArticleCard({
  title,
  category,
  description,
  image,
  date,
  readTime,
  slug,
}) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
        dark:border-white/10
        dark:bg-slate-800/60
        dark:hover:border-indigo-400/30
        dark:hover:shadow-black/40
      "
    >
      {/* Image */}
      <div
        className="
          relative
          aspect-[16/10]
          w-full
          overflow-hidden
          bg-slate-200
          dark:bg-slate-700
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

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/20
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
        {/* Category */}
        <span
          className="
            w-fit
            rounded-full
            bg-blue-50
            px-3
            py-1
            text-xs
            font-semibold
            text-blue-600
            dark:bg-blue-500/15
            dark:text-blue-300
          "
        >
          {category}
        </span>

        {/* Title */}
        <h3
          className="
            mt-4
            text-lg
            font-bold
            leading-8
            tracking-tight
            text-slate-900
            dark:text-white
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
            text-sm
            leading-7
            text-slate-500
            dark:text-slate-400
          "
        >
          {description}
        </p>

        {/* Meta */}
        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            gap-4
            border-t
            border-slate-100
            pt-4
            dark:border-white/10
          "
        >
          <span className="text-xs text-slate-400 dark:text-slate-500">
            {date}
          </span>

          <span
            className="
              inline-flex
              items-center
              gap-1.5
              text-xs
              text-slate-400
              dark:text-slate-500
            "
          >
            <Clock3
              size={15}
              strokeWidth={2}
              aria-hidden="true"
            />

            {readTime}
          </span>
        </div>

        {/* Read More */}
        <div className="mt-5">
          <Link
            to={`/articles/${slug}`}
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
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              focus-visible:ring-offset-2
              dark:text-blue-300
              dark:hover:text-blue-200
              dark:focus-visible:ring-offset-slate-800
            "
          >
            ادامه مطلب

            <ArrowLeft
              size={18}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;