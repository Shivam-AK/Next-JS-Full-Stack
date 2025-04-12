import Link from "next/link";

export default function Blogs() {
  console.log("Blog Page");
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
      <div>
        <h1>Our Blog Page</h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <Link href="/blog/1">
            <button className="nav-link active cursor-pointer">Blog 1</button>
          </Link>
          <Link href="/blog/2">
            <button className="nav-link active cursor-pointer">Blog 2</button>
          </Link>
          <Link href="/blog/3">
            <button className="nav-link active cursor-pointer">Blog 3</button>
          </Link>
        </div>
      </div>
    </>
  );
}
