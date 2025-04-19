export default async function Blog({ params }) {
  const { blogId } = await params;

  if (blogId % 2 === 0) {
    throw new Error("BlogId can only be an odd Number");
    // return <p>Error : BlogId can only be an odd Number</p>;
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
