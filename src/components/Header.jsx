import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Building2, Menu } from "lucide-react";
import useDrawer from "../hooks/useDrawer";
import Drawer from "./Drawer";
import NavItem from "./NavItem";

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

  return (
    <header
      className={`sticky top-0 z-30 backdrop-blur-md text-white transition-shadow duration-300 ${
        isScrolled ? "bg-indigo-950/90 shadow-xl" : "bg-indigo-950/80 shadow-lg"
      }`}
    >
      <div className="flex items-center justify-between gap-8 px-8 py-4 md:justify-start">
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
        <NavItem variant="desktop" />

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
        <NavItem variant="mobile" onItemClick={close} />
      </Drawer>
    </header>
  );
}

export default Header;