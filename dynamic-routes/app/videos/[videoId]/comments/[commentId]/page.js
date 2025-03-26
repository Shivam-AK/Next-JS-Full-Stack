import Link from "next/link";

export default async function video({ params }) {
  console.log(await params);
  const { videoId, commentId } = await params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">
        Comment Page <span className="text-cyan-400">{videoId}</span>
      </h1>
      <h2 className="text-2xl text-cyan-400">Video ID - {videoId}</h2>
      <h2 className="text-2xl text-cyan-400">Comment ID - {commentId}</h2>

      <p>write any video Name in URL.</p>
      <p>This is Nested Dynamic Routing</p>
      <Link href="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
}
