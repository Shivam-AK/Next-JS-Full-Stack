import Link from "next/link";

export default async function Posts() {
  const sleepResponse = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const data = await response.json();

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
          {data.map(({ id, title, body }) => (
            <div className="post-card" key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
