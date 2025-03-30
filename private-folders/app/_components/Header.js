import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <span className="logo">Private Folders</span>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/_id">_ID</Link>
              <Link href="/_components">_Components</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
