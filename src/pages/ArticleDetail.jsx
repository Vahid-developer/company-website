import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  SearchX,
} from "lucide-react";

import articles from "../data/articles";

import ArticleCard from "../components/ArticleCard";
import ArticleProgress from "../components/ArticleProgress";
import ArticleToc from "../components/ArticleToc";

function ArticleDetail() {
  const { slug } = useParams();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section
        dir="rtl"
        className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5 dark:bg-slate-950"
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
            <SearchX size={26} strokeWidth={2} aria-hidden="true" />
          </div>

          <h1 className="mt-5 text-2xl font-extrabold text-slate-900 dark:text-white">
            مقاله پیدا نشد
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-400">
            ممکن است آدرس اشتباه باشد یا این مقاله حذف شده باشد.
          </p>

          <Link
            to="/articles"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            بازگشت به مقالات
          </Link>
        </div>
      </section>
    );
  }

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .sort(
      (a, b) =>
        Number(b.category === article.category) -
        Number(a.category === article.category),
    )
    .slice(0, 3);

  return (
    <div
      dir="rtl"
      className="relative bg-slate-50 transition-colors duration-500 dark:bg-slate-950"
    >
      <ArticleProgress />

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] overflow-hidden"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-300/25 blur-3xl dark:bg-indigo-600/15" />
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl dark:bg-purple-600/10" />
      </div>

      <article className="relative px-5 pb-20 pt-10 sm:px-6 md:pt-14 lg:px-10">
        <div className="mx-auto w-full max-w-5xl">
          {/* Header */}
          <header className="max-w-3xl">
            <Link
              to="/articles"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors duration-200 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-200"
            >
              <ArrowRight
                size={18}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              بازگشت به مقالات
            </Link>

            <span className="mt-8 inline-flex rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-950/60 dark:text-indigo-300">
              {article.category}
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.5] tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              {article.title}
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              {article.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} strokeWidth={2} aria-hidden="true" />
                {article.date}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock3 size={16} strokeWidth={2} aria-hidden="true" />
                {article.readTime}
              </span>
            </div>
          </header>

          {/* Cover image */}
          <figure className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30">
            <img
              src={article.image}
              alt={article.title}
              className="aspect-[16/9] w-full object-cover object-center"
            />
          </figure>

          {/* Body + table of contents */}
          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
            <div className="max-w-3xl space-y-12">
              {article.content.map((section, index) => (
                <section
                  key={section.heading}
                  id={`section-${index}`}
                  className="scroll-mt-28"
                >
                  <h2 className="border-s-4 border-indigo-500 ps-4 text-xl font-extrabold leading-9 text-slate-900 dark:border-indigo-400 dark:text-white sm:text-2xl">
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-justify text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg sm:leading-9"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <aside className="hidden lg:block">
              <ArticleToc sections={article.content} />
            </aside>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section
          aria-labelledby="related-articles-title"
          className="border-t border-slate-200 bg-white px-5 py-20 transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/40 sm:px-6 lg:px-10"
        >
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-4">
              <h2
                id="related-articles-title"
                className="text-2xl font-extrabold text-slate-900 dark:text-white"
              >
                مقالات مرتبط
              </h2>

              <Link
                to="/articles"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors duration-200 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-200"
              >
                همه مقالات
                <ArrowLeft
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((item) => (
                <ArticleCard key={item.slug} {...item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ArticleDetail;