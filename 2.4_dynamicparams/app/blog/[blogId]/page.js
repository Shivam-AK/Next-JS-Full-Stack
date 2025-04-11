import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data.map(({ id }) => ({ blogId: `${id}` }));
}

export default async function Blog({ params }) {
  const { blogId } = await params;
  console.log("blogId :", blogId);
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">
        Blogs Page <span className="text-cyan-400">{blogId}</span>
      </h1>

      <p>write any blog Name in URL.</p>
      <p>This is Static Site Generation Page</p>

      <Link href="/">
        <button className="nav-link active cursor-pointer">Home Page</button>
      </Link>
    </div>
  );
}
