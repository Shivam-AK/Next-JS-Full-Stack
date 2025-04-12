import Link from "next/link";

// Dynamic segments not included in generateStaticParams will return a 404.
// export const dynamicParams = false;

// ISR - ( Incremental Site Regeneration )
// export const revalidate = 5; // 5 Second

// SSG - ( Static Site Generation )
// export async function generateStaticParams() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   const newData = data.map(({ id }) => ({ blogId: `${id}` }));
//   console.log(newData);
//   return newData;
// }

export default async function Blog({ params }) {
  const { blogId } = await params;
  console.log("blogId :", blogId);
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">
        Blogs Page <span className="text-cyan-400">{blogId}</span>
      </h1>

      <h2>Date : {new Date().toLocaleString()}</h2>

      <p>write any blog Name in URL.</p>
      <p>This is Normal Dynamic Page</p>

      <Link href="/">
        <button className="nav-link active cursor-pointer">Home Page</button>
      </Link>
    </div>
  );
}
