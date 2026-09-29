import {
  House,
  Phone,
  Newspaper,
  Search,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

import visitCardImage from "../assets/image/visit-card.jpg";
import applicationImage from "../assets/image/application-visit-card.jpg";
import ContentImage from "../assets/image/Content-creation.jpg";
import seoImage from "../assets/image/seo.jpg";

const services = [
  {
    title: "طراحی سایت",
    description:
      "طراحی وب‌سایت‌های مدرن و حرفه‌ای برای کسب‌وکار شما",
    icon: House,
    image: visitCardImage,
  },
  {
    title: "طراحی اپلیکیشن",
    description:
      "ساخت اپلیکیشن‌های کاربردی و مدرن برای کاربران شما",
    icon: Phone,
    image: applicationImage,
  },
  {
    title: "تولید محتوا",
    description:
      "تولید محتوای حرفه‌ای برای رشد و توسعه برند شما",
    icon: Newspaper,
    image: ContentImage,
  },
  {
    title: "سئو و بهینه‌سازی",
    description:
      "بهینه‌سازی سایت برای دیده‌شدن بهتر در موتورهای جستجو",
    icon: Search,
    image: seoImage,
  },
];

function Services() {
  return (
    <section
      id="services"
      dir="rtl"
      className="
        relative
        z-20
        -mt-16
        overflow-hidden
        rounded-t-[48px]
        bg-slate-50
        px-5
        pb-40
        pt-20
        shadow-[0_-16px_50px_rgba(15,23,42,0.10)]
        transition-colors
        duration-500

        dark:bg-slate-950
        dark:shadow-[0_-16px_50px_rgba(0,0,0,0.35)]

        sm:px-6
        md:-mt-24
        md:rounded-t-[64px]
        md:px-8
        md:pb-48
        md:pt-24
        lg:px-10
      "
    >
      {/* Top accent */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-1
          w-20
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-indigo-500
          to-purple-500
          dark:from-cyan-400
          dark:via-indigo-400
          dark:to-purple-500
        "
      />

      {/* Purple glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-purple-300/30
          blur-3xl
          dark:bg-purple-700/20
        "
      />

      {/* Cyan glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-80
          w-80
          rounded-full
          bg-cyan-300/25
          blur-3xl
          dark:bg-cyan-600/15
        "
      />

      {/* Indigo glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-indigo-300/15
          blur-3xl
          dark:bg-indigo-600/10
        "
      />

      {/* Content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section heading */}

        <div
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
            md:mb-16
          "
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
                dark:border-indigo-400/20
                dark:bg-indigo-950/60
                dark:text-indigo-300
              "
            >
              خدمات ما
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
            راهکارهایی برای رشد کسب‌وکار شما
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
            راهکارهای حرفه‌ای و تخصصی برای رشد و توسعه کسب‌وکار شما
          </p>
        </div>

        {/* Service cards */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-7
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              variant={
                index % 2 === 0
                  ? "light"
                  : "blue"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;