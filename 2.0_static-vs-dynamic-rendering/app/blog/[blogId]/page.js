import Link from "next/link";

export default async function Blog({ params }) {
  const { blogId } = await params;
  console.log(blogId);
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">
        Blogs Page <span className="text-cyan-400">{blogId}</span>
      </h1>

      <p>write any blog Name in URL.</p>
      <p>This is Dynamic Routing</p>

      <Link href="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
}
