import { Link } from "react-router-dom";

import SectionHeading from "../components/SectionHeading";
import articles from "../data/articles";

function ArticlesList() {
  return (
    <section
      dir="rtl"
      className="
        min-h-screen
        bg-slate-50
        px-5
        pb-24
        pt-20
        transition-colors
        duration-500

        dark:bg-slate-950

        sm:px-6
        md:px-8
        lg:px-10
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          badge="مقالات"
          title="آخرین مقالات و مطالب آموزشی"
          description="مطالب کاربردی درباره طراحی سایت، تولید محتوا و سئو"
          className="mb-12"
        />

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
            <article
              key={article.title}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl

                dark:border-slate-800
                dark:bg-slate-900
              "
            >
              <img
                src={article.image}
                alt={article.title}
                className="
                  h-56
                  w-full
                  object-cover
                "
              />

              <div className="p-6">
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-indigo-50
                    px-3
                    py-1
                    text-sm
                    font-medium
                    text-indigo-600

                    dark:bg-indigo-500/10
                    dark:text-indigo-400
                  "
                >
                  {article.category}
                </span>

                <h2
                  className="
                    mt-4
                    text-xl
                    font-bold
                    leading-8
                    text-slate-900

                    dark:text-white
                  "
                >
                  {article.title}
                </h2>

                <p
                  className="
                    mt-3
                    line-clamp-2
                    text-sm
                    leading-7
                    text-slate-600

                    dark:text-slate-400
                  "
                >
                  {article.description}
                </p>

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-100
                    pt-4
                    text-sm

                    dark:border-slate-800
                  "
                >
                  <span className="text-slate-500 dark:text-slate-400">
                    {article.date}
                  </span>

                  <span className="text-slate-500 dark:text-slate-400">
                    {article.readTime}
                  </span>
                </div>

                <Link
                  to={`/articles/${article.slug}`}
                  className="
                    mt-5
                    inline-flex
                    font-semibold
                    text-indigo-600
                    transition-colors
                    hover:text-indigo-800

                    dark:text-indigo-400
                    dark:hover:text-indigo-300
                  "
                >
                  مطالعه مقاله
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticlesList;