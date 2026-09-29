import { House, Phone, Newspaper, Search } from "lucide-react";

import ServiceCard from "./ServiceCard";

import visitCardImage from "../assets/image/visit-card.jpg";

import applicationImage from "../assets/image/application-visit-card.jpg"

import ContentImage from "../assets/image/Content-creation.jpg"

import seoImage from "../assets/image/seo.jpg"

const services = [
  {
    title: "طراحی سایت",
    description: "طراحی وب‌سایت‌های مدرن و حرفه‌ای برای کسب‌وکار شما",
    icon: House,
    image: visitCardImage,
  },
  {
    title: "طراحی اپلیکیشن",
    description: "ساخت اپلیکیشن‌های کاربردی و مدرن برای کاربران شما",
    icon: Phone,
    image: applicationImage,
  },
  {
    title: "تولید محتوا",
    description: "تولید محتوای حرفه‌ای برای رشد و توسعه برند شما",
    icon: Newspaper,
    image: ContentImage,
  },
  {
    title: "سئو و بهینه‌سازی",
    description: "بهینه‌سازی سایت برای دیده‌شدن بهتر در موتورهای جستجو",
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
        sm:px-6
        md:-mt-24
        md:rounded-t-[64px]
        md:px-8
        md:pb-48
        md:pt-24
        lg:px-10
      "
    >
      {/* Decorative top accent */}
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
          bg-blue-200
        "
      />

      {/* Decorative shape - top left */}
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
          bg-blue-100/60
        "
      />

      {/* Decorative shape - bottom right */}
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
          bg-blue-100/60
        "
      />

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
            <span className="h-px w-10 bg-blue-300" />

            <span
              className="
                rounded-full
                bg-blue-50
                px-5
                py-2
                text-sm
                font-semibold
                text-blue-600
              "
            >
              خدمات ما
            </span>

            <span className="h-px w-10 bg-blue-300" />
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-slate-900
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
              variant={index % 2 === 0 ? "light" : "blue"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;