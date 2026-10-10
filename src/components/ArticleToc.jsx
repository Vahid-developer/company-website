import { useEffect, useState } from "react";
import { List } from "lucide-react";

// ids follow the same pattern used in ArticleDetail: section-0, section-1, ...

function ArticleToc({ sections }) {
  const [activeId, setActiveId] = useState("section-0");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );

    sections.forEach((_, index) => {
      const element = document.getElementById(`section-${index}`);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="فهرست مطالب" className="sticky top-28">
      <p className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
        <List size={16} strokeWidth={2} aria-hidden="true" />
        در این مقاله
      </p>

      <ul className="mt-4 border-s border-slate-200 dark:border-white/10">
        {sections.map((section, index) => {
          const id = `section-${index}`;
          const isActive = activeId === id;

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`-ms-px block border-s-2 py-2 ps-4 text-sm leading-6 transition-colors duration-200 ${
                  isActive
                    ? "border-indigo-500 font-semibold text-indigo-600 dark:border-indigo-400 dark:text-indigo-300"
                    : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {section.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default ArticleToc;