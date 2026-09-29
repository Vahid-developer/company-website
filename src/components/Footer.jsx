import {
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    label: "صفحه اصلی",
    to: "/",
  },
  {
    label: "تماس با ما",
    to: "/contact",
  },
  {
    label: "مقالات",
    to: "/articles",
  },
];

function Footer() {
  return (
    <footer
      dir="rtl"
      className="
        relative
        z-10
        overflow-hidden
        bg-gradient-to-br
        from-indigo-50
        via-white
        to-purple-50
        px-5
        pb-6
        pt-28
        text-slate-700
        transition-colors
        duration-500
        dark:from-slate-950
        dark:via-indigo-950
        dark:to-purple-950
        dark:text-slate-200
        sm:px-6
        sm:pt-32
        md:px-8
        md:pt-36
        lg:px-10
      "
    >
      {/* Section separator line (sits right under the bottom edge of Articles) */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-16
          h-1
          w-24
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-indigo-500
          to-purple-500
          md:top-24
        "
      />

      {/* Purple glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-purple-300/30
          blur-3xl
          dark:bg-purple-600/15
        "
      />

      {/* Cyan glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-96
          w-96
          rounded-full
          bg-cyan-300/25
          blur-3xl
          dark:bg-cyan-600/15
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

      {/* Decorative ring */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          top-20
          h-52
          w-52
          rounded-full
          border
          border-purple-300/30
          dark:border-purple-400/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-20
          bottom-20
          h-40
          w-40
          rounded-full
          border
          border-cyan-300/30
          dark:border-cyan-400/10
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Main footer content */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-[1.5fr_1fr_1.2fr]
            lg:gap-16
          "
        >
          {/* Company */}

          <div className="max-w-md">
            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-3
                transition-opacity
                duration-300
                hover:opacity-80
              "
              aria-label="صفحه اصلی"
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-indigo-200
                  bg-white/70
                  text-indigo-600
                  shadow-sm
                  backdrop-blur-sm
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-indigo-300
                "
              >
                <span
                  className="
                    text-xl
                    font-extrabold
                  "
                >
                  ن
                </span>
              </div>

              <span
                className="
                  bg-gradient-to-l
                  from-indigo-600
                  via-purple-600
                  to-fuchsia-600
                  bg-clip-text
                  text-2xl
                  font-extrabold
                  text-transparent
                  dark:from-cyan-300
                  dark:via-indigo-300
                  dark:to-purple-300
                "
              >
                نام شرکت
              </span>
            </Link>

            <p
              className="
                mt-6
                text-sm
                leading-8
                text-slate-500
                dark:text-slate-400
              "
            >
              ما با ارائه راهکارهای حرفه‌ای در زمینه طراحی سایت، تولید محتوا
              و سئو، به کسب‌وکارها کمک می‌کنیم حضور قدرتمندتری در فضای دیجیتال
              داشته باشند.
            </p>

            {/* CTA */}

            <Link
              to="/contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-indigo-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:from-indigo-700
                hover:to-purple-700
                hover:shadow-xl
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-indigo-500
                focus-visible:ring-offset-2
                focus-visible:ring-offset-white
                dark:shadow-indigo-950/40
                dark:focus-visible:ring-indigo-300
                dark:focus-visible:ring-offset-indigo-950
              "
            >
              شروع همکاری

              <ArrowLeft
                size={18}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              className="
                text-base
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              دسترسی سریع
            </h3>

            <div className="mt-6 flex flex-col items-start gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    text-slate-500
                    transition-all
                    duration-300
                    hover:bg-white/70
                    hover:text-indigo-600
                    dark:text-slate-400
                    dark:hover:bg-white/5
                    dark:hover:text-indigo-300
                  "
                >
                  <ArrowLeft
                    size={15}
                    strokeWidth={2}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-x-1
                    "
                    aria-hidden="true"
                  />

                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3
              className="
                text-base
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              ارتباط با ما
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-indigo-100
                    bg-white/70
                    text-indigo-600
                    shadow-sm
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-indigo-300
                  "
                >
                  <Phone
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    تلفن تماس
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-medium
                      text-slate-700
                      dark:text-slate-300
                    "
                  >
                    09357504152
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-purple-100
                    bg-white/70
                    text-purple-600
                    shadow-sm
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-purple-300
                  "
                >
                  <Mail
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    ایمیل
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-medium
                      text-slate-700
                      dark:text-slate-300
                    "
                  >
                    vahidbanakar84@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-100
                    bg-white/70
                    text-cyan-600
                    shadow-sm
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-cyan-300
                  "
                >
                  <MapPin
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    آدرس
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-medium
                      leading-6
                      text-slate-700
                      dark:text-slate-300
                    "
                  >
                    تهران، خیابان ولیعصر
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div
          className="
            mt-14
            h-px
            bg-gradient-to-r
            from-transparent
            via-indigo-200
            to-transparent
            dark:via-indigo-500/20
          "
        />

        {/* Bottom bar */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-3
            pt-6
            text-center
            sm:flex-row
            sm:text-right
          "
        >
          <p
            className="
              text-xs
              text-slate-400
              dark:text-slate-500
            "
          >
            © ۱۴۰۵ تمامی حقوق برای نام شرکت محفوظ است.
          </p>

          <p
            className="
              text-xs
              text-slate-400
              dark:text-slate-500
            "
          >
            طراحی و توسعه با ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;