import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blog" className="nav-link active">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
