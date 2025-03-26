import Link from "next/link";

export default function videos() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">All Videos Page</h1>

      <p>write any Video Name in URL.</p>

      <Link href="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
}
