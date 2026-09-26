import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { House, Phone, Newspaper, Building2, Menu } from "lucide-react";
import useDrawer from "../hooks/useDrawer";
import Drawer from "./Drawer";

function Header() {
  const { isOpen, open, close } = useDrawer();
  const [isScrolled, setIsScrolled] = useState(false);

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
          ? "font-bold text-white bg-indigo-500"
          : "text-indigo-50 hover:text-indigo-200"
      }`;
const mobileLinkClass = ({ isActive }) =>
  `flex items-center gap-3
  min-h-12
  px-4
  rounded-xl
  text-base font-medium
  transition-colors duration-200
  ${
    isActive
      ? "bg-indigo-500 text-white font-bold"
      : "text-white/80 hover:bg-white/10 hover:text-white"
  }`;

  return (
    <header
      className={`sticky top-0 z-30 backdrop-blur-md text-white transition-shadow duration-300 ${
        isScrolled ? "bg-indigo-950/90 shadow-xl" : "bg-indigo-950/80 shadow-lg"
      }`}
    >
      <div className="flex items-center justify-start gap-8 px-8 py-4">
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
          className="hidden md:flex items-center gap-2"
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

        {/* فاصله‌انداز برای هل دادن دکمه همبرگر به لبه مقابل */}
        <div className="flex-1 md:hidden" />

        {/* دکمه باز کردن Drawer - فقط موبایل */}
        <button
          onClick={open}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          aria-label="باز کردن منو"
        >
          <Menu size={26} strokeWidth={2} />
        </button>
      </div>

      {/* Drawer موبایل */}
      <Drawer isOpen={isOpen} onClose={close} title="نام شرکت">
        <nav aria-label="منوی موبایل" className="flex flex-col gap-2">
          <NavLink to="/" end className={mobileLinkClass} onClick={close}>
            <House size={20} strokeWidth={2} />
            <span>صفحه اصلی</span>
          </NavLink>

          <NavLink to="/contact" className={mobileLinkClass} onClick={close}>
            <Phone size={20} strokeWidth={2} />
            <span>تماس با ما</span>
          </NavLink>

          <NavLink to="/articles" className={mobileLinkClass} onClick={close}>
            <Newspaper size={20} strokeWidth={2} />
            <span>مقالات</span>
          </NavLink>
        </nav>
      </Drawer>
    </header>
  );
}

export default Header;
