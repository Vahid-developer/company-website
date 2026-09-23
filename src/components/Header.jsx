import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-950 text-white px-8 py-4">
      {/* سکشن لوگو */}
      <Link to="/" className="text-xl font-bold">
        لوگو
      </Link>

      {/* سکشن منو */}
      <nav className="flex gap-6">
        <Link to="/">صفحه اصلی</Link>
        <Link to="/contact">تماس با ما</Link>
        <Link to="/articles">مقالات</Link>
      </nav>
    </header>
  )
}

export default Header