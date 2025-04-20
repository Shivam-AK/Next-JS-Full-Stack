"use client"; // <--- important to mark this as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // for checking current route

export default function Header() {
  const pathname = usePathname();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={
              pathname.startsWith("/blog") ? "nav-link active" : "nav-link"
            }
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
