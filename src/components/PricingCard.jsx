import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function PricingCard({
  name,
  price,
  period,
  features,
  highlighted,
}) {
  return (
    <div
      className={`
        group
        relative
        flex
        h-full
        flex-col
        rounded-2xl
        border
        px-5
        py-7
        text-right
        transition-all
        duration-300
        sm:px-6
        sm:py-8

        ${
          highlighted
            ? `
              border-indigo-400/70
              bg-gradient-to-br
              from-indigo-50
              via-white
              to-purple-50
              shadow-xl
              shadow-indigo-950/10
              md:-translate-y-3

              dark:border-indigo-400/30
              dark:from-indigo-950/80
              dark:via-slate-900
              dark:to-purple-950/70
              dark:shadow-black/30
            `
            : `
              border-slate-200
              bg-white/80
              shadow-sm
              hover:-translate-y-1
              hover:border-indigo-200
              hover:shadow-lg

              dark:border-white/10
              dark:bg-slate-900/80
              dark:hover:border-indigo-400/30
              dark:hover:shadow-black/30
            `
        }
      `}
    >
      {/* Highlight glow */}

      {highlighted && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-8
            -top-6
            h-20
            rounded-full
            bg-indigo-400/20
            blur-2xl
            dark:bg-purple-500/15
          "
        />
      )}

      {/* Special badge */}

      {highlighted && (
        <span
          className="
            absolute
            -top-4
            right-1/2
            inline-flex
            translate-x-1/2
            items-center
            gap-1
            whitespace-nowrap
            rounded-full
            bg-gradient-to-l
            from-indigo-600
            to-purple-600
            px-4
            py-1.5
            text-xs
            font-bold
            text-white
            shadow-lg
            shadow-indigo-950/20
          "
        >
          <Sparkles
            size={14}
            strokeWidth={2}
          />

          پیشنهاد ویژه
        </span>
      )}

      {/* Plan name */}

      <h3
        className="
          relative
          z-10
          text-lg
          font-bold
          text-slate-900
          transition-colors
          duration-500
          dark:text-white
          sm:text-xl
        "
      >
        {name}
      </h3>

      {/* Price */}

      <div
        className="
          relative
          z-10
          mt-4
          flex
          items-baseline
          justify-end
          gap-1
          whitespace-nowrap
        "
      >
        <span
          className={`
            text-3xl
            font-extrabold
            tracking-tight
            transition-colors
            duration-500
            sm:text-4xl

            ${
              highlighted
                ? "text-indigo-700 dark:text-indigo-300"
                : "text-slate-900 dark:text-white"
            }
          `}
        >
          {price}
        </span>

        <span
          className="
            text-sm
            text-slate-500
            transition-colors
            duration-500
            dark:text-slate-400
          "
        >
          تومان / {period}
        </span>
      </div>

      {/* Features */}

      <ul
        className="
          relative
          z-10
          mt-7
          flex
          flex-1
          flex-col
          gap-3
        "
      >
        {features.map((feature) => (
          <li
            key={feature}
            className="
              flex
              items-center
              gap-2
            "
          >
            <Check
              size={18}
              strokeWidth={2.5}
              className="
                shrink-0
                text-indigo-600
                transition-colors
                duration-500
                dark:text-cyan-400
              "
            />

            <span
              className="
                text-sm
                leading-7
                text-slate-600
                transition-colors
                duration-500
                dark:text-slate-300
              "
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}

      <Link
        to="/contact"
        className={`
          relative
          z-10
          mt-8
          inline-flex
          items-center
          justify-center
          rounded-full
          px-5
          py-3
          text-sm
          font-semibold
          transition-all
          duration-300
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          focus:ring-offset-2
          dark:focus:ring-offset-slate-950

          ${
            highlighted
              ? `
                bg-gradient-to-l
                from-indigo-600
                to-purple-600
                text-white
                shadow-lg
                shadow-indigo-950/10
                hover:-translate-y-0.5
                hover:from-indigo-500
                hover:to-purple-500
                hover:shadow-xl
              `
              : `
                bg-indigo-50
                text-indigo-700
                hover:-translate-y-0.5
                hover:bg-indigo-100

                dark:bg-indigo-950/70
                dark:text-indigo-300
                dark:hover:bg-indigo-900/80
              `
          }
        `}
      >
        شروع کنید
      </Link>
    </div>
  );
}

export default PricingCard;