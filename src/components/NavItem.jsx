import { NavLink } from "react-router-dom";
import { House, Phone, Newspaper } from "lucide-react";

const links = [
  { to: "/", label: "صفحه اصلی", icon: House, end: true },
  { to: "/contact", label: "تماس با ما", icon: Phone },
  { to: "/articles", label: "مقالات", icon: Newspaper },
];

const variants = {
  desktop: {
    ariaLabel: "منوی اصلی",
    nav: "hidden md:flex items-center gap-2",
    link: ({ isActive }) =>
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
      }`,
    iconSize: 18,
    icon: "transition-transform duration-300 group-hover:-translate-y-0.5",
  },
  mobile: {
    ariaLabel: "منوی موبایل",
    nav: "flex flex-col gap-2",
    link: ({ isActive }) =>
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
      }`,
    iconSize: 20,
    icon: "",
  },
};

function NavItem({ variant = "desktop", onItemClick }) {
  const style = variants[variant];

  return (
    <nav aria-label={style.ariaLabel} className={style.nav}>
      {links.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={style.link}
          onClick={onItemClick}
        >
          <Icon size={style.iconSize} strokeWidth={2} className={style.icon} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default NavItem;