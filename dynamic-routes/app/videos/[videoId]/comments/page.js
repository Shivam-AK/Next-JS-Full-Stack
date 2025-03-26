import Link from "next/link";

export default async function comments({ params }) {
  console.log(await params);
  const { videoId } = await params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">
        All Comments Page <span className="text-cyan-400">( {videoId} )</span>
      </h1>

      <p>write any Comment Name in URL.</p>

      <Link href="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
}
