import {
  House,
  Phone,
  Newspaper,
  Search,
} from "lucide-react";

import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";

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
        z-10
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
        <SectionHeading
          badge="خدمات ما"
          title="راهکارهایی برای رشد کسب‌وکار شما"
          description="راهکارهای حرفه‌ای و تخصصی برای رشد و توسعه کسب‌وکار شما"
        />

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