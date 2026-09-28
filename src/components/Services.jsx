import { House, Phone, Newspaper, Search } from "lucide-react";

import ServiceCard from "./ServiceCard";

import webDesignImage from "../assets/web-design.jpg";

const services = [
  {
    title: "طراحی سایت",
    description: "طراحی وب‌سایت‌های مدرن و حرفه‌ای برای کسب‌وکار شما",
    icon: House,
    image: webDesignImage,
  },
  {
    title: "طراحی اپلیکیشن",
    description: "ساخت اپلیکیشن‌های کاربردی و مدرن برای کاربران شما",
    icon: Phone,
    image: webDesignImage,
  },
  {
    title: "تولید محتوا",
    description: "تولید محتوای حرفه‌ای برای رشد و توسعه برند شما",
    icon: Newspaper,
    image: webDesignImage,
  },
  {
    title: "سئو و بهینه‌سازی",
    description: "بهینه‌سازی سایت برای دیده‌شدن بهتر در موتورهای جستجو",
    icon: Search,
    image: webDesignImage,
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
    -mt-20
    overflow-hidden
    rounded-t-[56px]
    bg-slate-50
    px-6
    pb-28
    pt-24
    shadow-[0_-20px_60px_rgba(15,23,42,0.12)]
    md:-mt-28
    md:rounded-t-[72px]
    md:px-8
  "
    >
      <div
        aria-hidden="true"
        className="
    pointer-events-none
    absolute
    left-1/2
    top-0
    h-1
    w-24
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
          bg-blue-100/70
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
          bg-blue-100/70
        "
      />

      <div className="relative z-10 mx-auto max-w-8xl">
        {/* Section heading */}
        <div
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
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
              tracking-tight
              text-slate-900
              md:text-4xl
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
              md:text-base
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
