import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Building2,
  Menu,
  Moon,
  Sun,
} from "lucide-react";

import useDrawer from "../hooks/useDrawer";
import useTheme from "../hooks/useTheme";

import Drawer from "./Drawer";
import NavItem from "./NavItem";

function Header() {
  const { isOpen, open, close } = useDrawer();
  const { theme, toggleTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        text-white
        backdrop-blur-md
        transition-all
        duration-300

        ${
          isScrolled
            ? "bg-indigo-950/90 shadow-xl"
            : "bg-indigo-950/80 shadow-lg"
        }

        dark:bg-slate-950/90
      `}
    >
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          px-5
          py-4
          sm:px-6
          md:justify-start
          md:gap-8
          md:px-8
        "
      >
        {/* Logo */}

        <NavLink
          to="/"
          end
          aria-label="صفحه اصلی"
          className="
            flex
            shrink-0
            items-center
            gap-2
            transition-opacity
            duration-300
            hover:opacity-80
          "
        >
          <Building2
            size={28}
            strokeWidth={2}
            className="text-indigo-300"
          />

          <span
            className="
              bg-gradient-to-l
              from-indigo-300
              to-purple-300
              bg-clip-text
              text-2xl
              font-extrabold
              text-transparent
            "
          >
            نام شرکت
          </span>
        </NavLink>

        {/* Desktop navigation */}

        <NavItem variant="desktop" />

        {/* Actions */}

        <div
          className="
            mr-auto
            flex
            items-center
            gap-2
          "
        >
          {/* Theme toggle */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "فعال کردن حالت روشن"
                : "فعال کردن حالت تاریک"
            }
            title={
              theme === "dark"
                ? "حالت روشن"
                : "حالت تاریک"
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-indigo-100
              transition-all
              duration-300
              hover:bg-white/10
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-indigo-300
            "
          >
            {theme === "dark" ? (
              <Sun
                size={19}
                strokeWidth={2}
                aria-hidden="true"
              />
            ) : (
              <Moon
                size={19}
                strokeWidth={2}
                aria-hidden="true"
              />
            )}
          </button>

          {/* Mobile menu */}

          <button
            type="button"
            onClick={open}
            aria-label="باز کردن منو"
            aria-expanded={isOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              duration-300
              hover:bg-white/10
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-indigo-300
              md:hidden
            "
          >
            <Menu
              size={24}
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}

      <Drawer
        isOpen={isOpen}
        onClose={close}
        title="نام شرکت"
      >
        <NavItem
          variant="mobile"
          onItemClick={close}
        />
      </Drawer>
    </header>
  );
}

export default Header;