import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Nested Routing in Next.js</h1>

      <Link href="/service">Service Page</Link>
      <Link href="/dashboard">Dashboard Page</Link>

      <p className="text-red-400 text-2xl">Routes is case sensitives</p>
    </div>
  );
}
