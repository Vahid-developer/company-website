import { Link, useParams } from "react-router-dom";

import articles from "../data/articles";

function ArticleDetail() {
  const { slug } = useParams();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section
        dir="rtl"
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-50
          px-5

          dark:bg-slate-950
        "
      >
        <div className="text-center">
          <h1
            className="
              text-3xl
              font-bold
              text-slate-900

              dark:text-white
            "
          >
            مقاله پیدا نشد
          </h1>

          <Link
            to="/articles"
            className="
              mt-6
              inline-flex
              rounded-full
              bg-indigo-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-indigo-700
            "
          >
            بازگشت به مقالات
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main
      dir="rtl"
      className="
        min-h-screen
        bg-slate-50
        px-5
        pb-24
        pt-12
        transition-colors
        duration-500

        dark:bg-slate-950

        sm:px-6
        md:px-8
        lg:px-10
      "
    >
      <article className="mx-auto w-full max-w-4xl">
        <Link
          to="/articles"
          className="
            mb-8
            inline-flex
            text-sm
            font-semibold
            text-indigo-600
            transition
            hover:text-indigo-800

            dark:text-indigo-400
            dark:hover:text-indigo-300
          "
        >
          ← بازگشت به مقالات
        </Link>

        <div
          className="
            overflow-hidden
            rounded-[32px]
            bg-white
            shadow-sm

            dark:bg-slate-900
          "
        >
          <img
            src={article.image}
            alt={article.title}
            className="
              h-64
              w-full
              object-cover

              sm:h-80
              md:h-96
            "
          />

          <div className="p-6 sm:p-8 md:p-10">
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

            <h1
              className="
                mt-5
                text-3xl
                font-extrabold
                leading-[1.8]
                text-slate-900

                dark:text-white

                md:text-4xl
              "
            >
              {article.title}
            </h1>

            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-4
                text-sm
                text-slate-500

                dark:text-slate-400
              "
            >
              <span>{article.date}</span>

              <span>{article.readTime}</span>
            </div>

            <p
              className="
                mt-8
                text-lg
                leading-9
                text-slate-600

                dark:text-slate-300
              "
            >
              {article.description}
            </p>

            <div
              className="
                mt-8
                border-t
                border-slate-200
                pt-8

                dark:border-slate-800
              "
            >
              <div className="space-y-10">
                {article.content.map((section, index) => (
                  <section key={index}>
                    <h2
                      className="
                        text-2xl
                        font-bold
                        leading-10
                        text-slate-900

                        dark:text-white
                      "
                    >
                      {section.heading}
                    </h2>

                    <div className="mt-4 space-y-5">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="
                            text-base
                            leading-9
                            text-slate-700

                            dark:text-slate-300
                          "
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default ArticleDetail;