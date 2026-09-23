import { NavLink } from 'react-router-dom'

function Header() {
const linkClass = ({ isActive }) =>
  `relative py-1 transition-all duration-200 hover:scale-110 active:scale-95 inline-block ${
    isActive
      ? 'text-indigo-800 after:absolute after:bottom-0 after:right-0 after:left-0 after:h-0.5 after:bg-indigo-400'
      : 'hover:text-indigo-500'
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
      <nav className="text-lg flex gap-6 bg-white/25 rounded-full px-6 py-2">
        <NavLink to="/" end className={linkClass}>
          صفحه اصلی
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          تماس با ما
        </NavLink>
        <NavLink to="/articles" className={linkClass}>
          مقالات
        </NavLink>
      </nav>
    </header>
  )
}

export default Header