import Link from "next/link";

export default function Home() {
  console.log("Home Page");
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link active">
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
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to our website!</p>
      </div>
    </>
  );
}
