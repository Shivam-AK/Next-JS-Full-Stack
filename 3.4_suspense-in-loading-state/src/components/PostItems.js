export default async function PostItems() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const data = await response.json();
  return (
    <div className="posts-container">
      {data.map(({ id, title, body }) => (
        <div className="post-card" key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}
