import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Dynamic Routing in Next.js</h1>

      <Link href="/blogs">
        <button>Blogs</button>
      </Link>
      <Link href="/videos">
        <button>Videos</button>
      </Link>
    </div>
  );
}
