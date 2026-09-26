import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { House, Phone, Newspaper, Building2, Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `group relative inline-flex items-center gap-2 whitespace-nowrap
    px-4 py-2 rounded-full
    text-sm font-medium
    transition-all duration-300 ease-out
    hover:scale-105 hover:bg-white/10
    active:scale-95
    ${
      isActive
        ? "font-bold text-indigo-200 bg-white/15"
        : "text-indigo-50 hover:text-indigo-200"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl
    text-base font-medium
    transition-all duration-300 ease-out
    ${
      isActive
        ? "font-bold text-indigo-200 bg-white/15"
        : "text-indigo-50 hover:bg-white/10 hover:text-indigo-200"
    }`;

  return (
    <header
      ref={menuRef}
      className={`relative sticky top-0 z-50 backdrop-blur-md text-white transition-shadow duration-300 ${
        isScrolled ? "bg-indigo-950/90 shadow-xl" : "bg-indigo-950/80 shadow-lg"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        {/* سکشن لوگو */}
        <NavLink
          to="/"
          end
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Building2 size={28} strokeWidth={2} className="text-indigo-300" />
          <span className="text-2xl font-extrabold bg-gradient-to-l from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            نام شرکت
          </span>
        </NavLink>

        {/* سکشن منو - فقط دسکتاپ */}
        <nav
          aria-label="منوی اصلی"
          className="hidden md:flex items-center gap-1 rounded-full bg-white/5 px-3 py-2 backdrop-blur-sm"
        >
          <NavLink to="/" end className={linkClass}>
            <House
              size={18}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <span>صفحه اصلی</span>
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            <Phone
              size={18}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <span>تماس با ما</span>
          </NavLink>

          <NavLink to="/articles" className={linkClass}>
            <Newspaper
              size={18}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <span>مقالات</span>
          </NavLink>
        </nav>

        {/* دکمه همبرگر - فقط موبایل */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={26} strokeWidth={2} />
          ) : (
            <Menu size={26} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* منوی بازشو - فقط موبایل */}
      <nav
        aria-label="منوی موبایل"
        className={`md:hidden absolute top-full right-4 left-4 mt-2 bg-indigo-950/95 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          <NavLink
            to="/"
            end
            className={mobileLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            <House size={20} strokeWidth={2} />
            <span>صفحه اصلی</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={mobileLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={20} strokeWidth={2} />
            <span>تماس با ما</span>
          </NavLink>

          <NavLink
            to="/articles"
            className={mobileLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            <Newspaper size={20} strokeWidth={2} />
            <span>مقالات</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;