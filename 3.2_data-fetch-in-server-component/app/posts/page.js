import Link from "next/link";

export default async function Posts() {
  // this is a not a normal javascript Fetch API
  // This is a Next.js extends the Web fetch() API to allow each request on the server to set its own persistent caching and revalidation semantics.
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${Math.ceil(
      Math.random() * 10
    )}`,
    {
      next: {
        revalidate: 5,
      },
    }
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
