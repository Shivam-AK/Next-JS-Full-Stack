export default async function Blog({ params }) {
  const { blogId } = await params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">
        Blog Page is <span className="text-cyan-400">{blogId}</span>
      </h1>

      <p>write any Blog Name in URL.</p>
    </div>
  );
}
