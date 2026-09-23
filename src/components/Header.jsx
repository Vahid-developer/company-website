import { NavLink } from "react-router-dom";
import { House, Phone, Newspaper } from "lucide-react";

function Header() {
const linkClass = ({ isActive }) =>
  `group relative inline-flex items-center gap-2 whitespace-nowrap
   px-3 py-2 rounded-full
   transition-all duration-300 ease-out
   hover:scale-105 hover:bg-white/10
   active:scale-95
   ${
     isActive
       ? 'font-bold text-indigo-800 bg-white/10'
       : 'text-white hover:text-indigo-300'
   }`

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-blue-950/62 backdrop-blur-md text-white px-8 py-4 shadow-lg">
      {/* سکشن لوگو */}
      <NavLink
        to="/"
        end
        className="text-3xl font-extrabold bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
      >
        لوگو
      </NavLink>

      {/* سکشن منو */}
      <nav className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-2 backdrop-blur-sm">
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
    </header>
  );
}

export default Header;
