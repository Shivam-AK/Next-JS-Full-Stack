import Link from "next/link";

export default function Loading() {
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
            <Link href="/posts" className="nav-link active">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Posts Page</h1>
        <div className="posts-container">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="post-card">
              <h2 className="shimmer-heading"></h2>
              <p className="shimmer-text"></p>
            </div>
          ))}
        </div>
        <div className="shimmer-heading"></div>
        <div className="shimmer-heading"></div>
      </div>
    </>
  );
}
