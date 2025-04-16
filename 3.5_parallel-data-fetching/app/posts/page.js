import Link from "next/link";

async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts?_limit=3",
  "https://procodrr.vercel.app/?sleep=2000",
  "https://procodrr.vercel.app/?sleep=3000",
];

export default async function Posts() {
  // const [response, slowResponse1, slowResponse2] = await Promise.all([
  //   fetch("https://jsonplaceholder.typicode.com/posts?_limit=3"),
  //   fetch("https://procodrr.vercel.app/?sleep=2000"),
  //   fetch("https://procodrr.vercel.app/?sleep=3000"),
  // ]);

  // const [posts, slowData1, slowData2] = await Promise.all([
  //   response.json(),
  //   slowResponse1.json(),
  //   slowResponse2.json(),
  // ]);

  const [posts, slowData1, slowData2] = await Promise.all(
    urls.map((url) => fetchData(url))
  );

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
          {posts.map(({ id, title, body }) => (
            <div className="post-card" key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <div>{JSON.stringify(slowData1)}</div>
        <div>{JSON.stringify(slowData2)}</div>
      </div>
    </>
  );
}
