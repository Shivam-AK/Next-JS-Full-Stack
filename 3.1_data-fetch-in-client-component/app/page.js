import Link from "next/link";

export default function Home() {
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
            <Link href="/posts" className="nav-link">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Home Page</h1>
        <p className="text-center">Welcome to our website!</p>
      </div>
    </>
  );
}
