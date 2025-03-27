import Link from "next/link";

export default async function File({ params }) {
  console.log(await params);
  const { filePath } = await params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>This is a Catch All Routes</h1>
      <h1>Multiple Dynamic Nested Routes</h1>

      <h2>File Path : / {filePath.join(" / ")}</h2>

      <p>write any multiple Routs Name in URL.</p>

      <Link href="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
}
