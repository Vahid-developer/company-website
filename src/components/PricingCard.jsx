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
              border-blue-500
              bg-blue-50
              shadow-xl
              md:-translate-y-3
            `
            : `
              border-slate-200
              bg-white
              shadow-sm
              hover:-translate-y-1
              hover:shadow-lg
            `
        }
      `}
    >
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
            bg-blue-600
            px-4
            py-1.5
            text-xs
            font-bold
            text-white
            shadow-md
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
          text-lg
          font-bold
          text-slate-900
          sm:text-xl
        "
      >
        {name}
      </h3>

      {/* Price */}
      <div
        className="
          mt-4
          flex
          items-baseline
          justify-end
          gap-1
          whitespace-nowrap
        "
      >
        <span
          className="
            text-3xl
            font-extrabold
            tracking-tight
            text-slate-900
            sm:text-4xl
          "
        >
          {price}
        </span>

        <span className="text-sm text-slate-500">
          تومان / {period}
        </span>
      </div>

      {/* Features */}
      <ul
        className="
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
                text-blue-600
              "
            />

            <span
              className="
                text-sm
                leading-7
                text-slate-600
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
          focus:ring-blue-500
          focus:ring-offset-2
          ${
            highlighted
              ? `
                bg-blue-600
                text-white
                hover:bg-blue-700
              `
              : `
                bg-blue-50
                text-blue-700
                hover:bg-blue-100
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