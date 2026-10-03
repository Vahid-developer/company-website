import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import ArticleCard from "./ArticleCard";
import SectionHeading from "./SectionHeading";

import webArticleImage from "../assets/image/web-article.jpg";
import contentImage from "../assets/image/Content-creation.jpg";
import seoImage from "../assets/image/seo.jpg";

const articles = [
  {
    title: "چطور یک وب‌سایت حرفه‌ای برای کسب‌وکار خود داشته باشیم؟",
    category: "طراحی سایت",
    description:
      "با بررسی اصول مهم طراحی، تجربه کاربری و ساختار مناسب، مسیر ساخت یک وب‌سایت حرفه‌ای را بهتر بشناسید.",
    image: webArticleImage,
    date: "۱۴۰۵/۰۷/۰۵",
    readTime: "۵ دقیقه مطالعه",
  },
  {
    title: "تأثیر تولید محتوای حرفه‌ای بر رشد برند",
    category: "تولید محتوا",
    description:
      "محتوای هدفمند چگونه می‌تواند باعث افزایش اعتماد کاربران و رشد حضور دیجیتال برند شما شود؟",
    image: contentImage,
    date: "۱۴۰۵/۰۷/۰۲",
    readTime: "۴ دقیقه مطالعه",
  },
  {
    title: "چرا سئو برای موفقیت یک وب‌سایت اهمیت دارد؟",
    category: "سئو",
    description:
      "با مهم‌ترین اصول سئو و روش‌هایی که می‌توانند به دیده‌شدن بهتر وب‌سایت شما کمک کنند آشنا شوید.",
    image: seoImage,
    date: "۱۴۰۵/۰۶/۲۸",
    readTime: "۶ دقیقه مطالعه",
  },
];

function Articles() {
  return (
    <section
      id="articles"
      dir="rtl"
      className="
        relative
        z-30
        -mt-16
        -mb-16
        overflow-hidden
        rounded-[48px]
        bg-slate-50
        px-5
        pb-32
        pt-20
        shadow-[0_-16px_50px_rgba(15,23,42,0.10),0_16px_50px_rgba(15,23,42,0.10)]
        transition-colors
        duration-500

        dark:bg-slate-950
        dark:shadow-[0_-16px_50px_rgba(0,0,0,0.35),0_16px_50px_rgba(0,0,0,0.35)]

        sm:px-6
        md:-mt-24
        md:-mb-24
        md:rounded-[64px]
        md:px-8
        md:pb-40
        md:pt-24
        lg:px-10
      "
    >
      {/* Background glow - top left */}

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
          bg-purple-300/25
          blur-3xl
          transition-all
          duration-500
          dark:bg-purple-600/15
          sm:h-80
          sm:w-80
        "
      />

      {/* Background glow - bottom right */}

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
          bg-cyan-300/20
          blur-3xl
          transition-all
          duration-500
          dark:bg-cyan-600/10
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
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-300/10
          blur-3xl
          dark:bg-indigo-600/10
        "
      />

      {/* Decorative bubble - top left */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-10
          top-16
          h-24
          w-24
          rounded-full
          border-2
          border-purple-200/70
          transition-colors
          duration-500
          dark:border-purple-500/20
          sm:h-28
          sm:w-28
        "
      />

      {/* Decorative bubble - bottom right */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-8
          -right-10
          h-24
          w-24
          rounded-full
          border-2
          border-cyan-200/70
          transition-colors
          duration-500
          dark:border-cyan-500/20
          sm:h-28
          sm:w-28
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* Section heading */}

        <SectionHeading
          badge="مقالات و مطالب"
          title="آخرین مقالات ما"
          description="مطالب کاربردی و آموزشی برای رشد کسب‌وکار و حضور بهتر شما در فضای دیجیتال"
          className="mb-12"
        />

        {/* Articles */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {articles.map((article) => (
            <ArticleCard
              key={article.title}
              title={article.title}
              category={article.category}
              description={article.description}
              image={article.image}
              date={article.date}
              readTime={article.readTime}
            />
          ))}
        </div>

        {/* View all */}

        <div className="mt-12 flex justify-center">
          <Link
            to="/articles"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-indigo-200
              bg-white
              px-6
              py-3
              text-sm
              font-medium
              text-indigo-700
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-indigo-300
              hover:bg-indigo-50
              hover:shadow-md
              dark:border-white/10
              dark:bg-slate-900/80
              dark:text-indigo-300
              dark:hover:border-indigo-400/30
              dark:hover:bg-slate-900
            "
          >
            مشاهده همه مقالات

            <ArrowLeft
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Articles;