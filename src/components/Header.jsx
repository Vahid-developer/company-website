import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <p className="text-5xl text-indigo-900 font-bold">سلام</p>
      <p className="text-2xl">سلام، این یک متن آزمایشی است</p>
      <nav>
        <Link to="/">صفحه اصلی</Link>
        {' | '}
        <Link to="/about">درباره ما</Link>
      </nav>
    </div>
  )
}