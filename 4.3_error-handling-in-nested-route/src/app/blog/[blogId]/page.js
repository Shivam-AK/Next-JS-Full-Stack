export default async function Blog({ params }) {
  const { blogId } = await params;

  const randomNum = Math.random();
  console.log(randomNum);

  if (randomNum > 0.5) {
    throw new Error("Blog Id Page Error.");
  }

  return (
    <div>
      <h1>
        Blogs Page <span className="text-cyan-400">{blogId}</span>
      </h1>

      <p>This is blog {blogId} page.</p>
    </div>
  );
}
